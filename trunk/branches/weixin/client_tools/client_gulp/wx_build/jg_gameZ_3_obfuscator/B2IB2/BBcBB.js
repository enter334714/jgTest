var D = wx.$b;
function bol2etj() {}function bz8$3nu(r6vg, _f470, dw47y_, $wzauy, sm1c0f) {
  function smf1(t1c2h) {
    if (t1c2h > 0xffff) {
      t1c2h -= 0x10000;var ejlqto = 0xd800 + (t1c2h >> 0xa),
          au$z83 = 0xdc00 + (0x3ff & t1c2h);return String['fromCharCode'](ejlqto, au$z83);
    }return String['fromCharCode'](t1c2h);
  }function z$uyaw(msc1h) {
    var _s4fm = msc1h['slice'](0x1, -0x1);return _s4fm in dw47y_ ? dw47y_[_s4fm] : '#' === _s4fm['charAt'](0x0) ? smf1(parseInt(_s4fm['substr'](0x1)['replace']('x', '0x'))) : (sm1c0f['error']('entity not found:' + msc1h), msc1h);
  }function imsh1c(lj2teo) {
    if (lj2teo > lj5q96) {
      var ljqo59 = r6vg['substring'](lj5q96, lj2teo)['replace'](/&#?\w+;/g, z$uyaw);s1f0mc && t2ehio(lj5q96), $wzauy['characters'](ljqo59, 0x0, lj2teo - lj5q96), lj5q96 = lj2teo;
    }
  }function t2ehio(_fd07, t2ehlo) {
    for (; _fd07 >= rkp6v && (t2ehlo = h2iot['exec'](r6vg));) _0m4 = t2ehlo['index'], rkp6v = _0m4 + t2ehlo[0x0]['length'], s1f0mc['lineNumber']++;s1f0mc['columnNumber'] = _fd07 - _0m4 + 0x1;
  }for (var _0m4 = 0x0, rkp6v = 0x0, h2iot = /.*(?:\r\n?|\n)|.*$/g, s1f0mc = $wzauy['locator'], yuwz$ = [{ 'currentNSMap': _f470 }], zwu$ay = {}, lj5q96 = 0x0;;) {
    try {
      var ht12ic = r6vg['indexOf']('<', lj5q96);if (0x0 > ht12ic) {
        if (!r6vg['substr'](lj5q96)['match'](/^\s*$/)) {
          var rvpk6 = $wzauy['doc'],
              m10f = rvpk6['createTextNode'](r6vg['substr'](lj5q96));rvpk6['appendChild'](m10f), $wzauy['currentElement'] = m10f;
        }return;
      }switch (ht12ic > lj5q96 && imsh1c(ht12ic), r6vg['charAt'](ht12ic + 0x1)) {case '/':
          var i21tch = r6vg['indexOf']('>', ht12ic + 0x3),
              r6gkv5 = r6vg['substring'](ht12ic + 0x2, i21tch),
              toei2 = yuwz$['pop']();0x0 > i21tch ? (r6gkv5 = r6vg['substring'](ht12ic + 0x2)['replace'](/[\s<].*/, ''), sm1c0f['error']('end tag name: ' + r6gkv5 + ' is not complete:' + toei2['tagName']), i21tch = ht12ic + 0x1 + r6gkv5['length']) : r6gkv5['match'](/\s</) && (r6gkv5 = r6gkv5['replace'](/[\s<].*/, ''), sm1c0f['error']('end tag name: ' + r6gkv5 + ' maybe not complete'), i21tch = ht12ic + 0x1 + r6gkv5['length']);var grkv5 = toei2['localNSMap'],
              vkg65r = toei2['tagName'] == r6gkv5,
              imc1f = vkg65r || toei2['tagName'] && toei2['tagName']['toLowerCase']() == r6gkv5['toLowerCase']();if (imc1f) {
            if ($wzauy['endElement'](toei2['uri'], toei2['localName'], r6gkv5), grkv5) {
              for (var i2ech in grkv5) $wzauy['endPrefixMapping'](i2ech);
            }vkg65r || sm1c0f['fatalError']('end tag name: ' + r6gkv5 + ' is not match the current start tagName:' + toei2['tagName']);
          } else yuwz$['push'](toei2);i21tch++;break;case '?':
          s1f0mc && t2ehio(ht12ic), i21tch = b_7d04f(r6vg, ht12ic, $wzauy);break;case '!':
          s1f0mc && t2ehio(ht12ic), i21tch = bpxvkr(r6vg, ht12ic, $wzauy, sm1c0f);break;default:
          s1f0mc && t2ehio(ht12ic);var oqejtl = new bu$yw7(),
              oqlj59 = yuwz$[yuwz$['length'] - 0x1]['currentNSMap'],
              i21tch = b_47df(r6vg, ht12ic, oqejtl, oqlj59, z$uyaw, sm1c0f),
              pgkrv6 = oqejtl['length'];if (!oqejtl['closed'] && beojq9(r6vg, i21tch, oqejtl['tagName'], zwu$ay) && (oqejtl['closed'] = !0x0, dw47y_['nbsp'] || sm1c0f['warning']('unclosed xml attribute')), s1f0mc && pgkrv6) {
            for (var lj5o9 = bm4s0_(s1f0mc, {}), j9o5l = 0x0; pgkrv6 > j9o5l; j9o5l++) {
              var jleqt = oqejtl[j9o5l];t2ehio(jleqt['offset']), jleqt['locator'] = bm4s0_(s1f0mc, {});
            }$wzauy['locator'] = lj5o9, bl9jqeo(oqejtl, $wzauy, oqlj59) && yuwz$['push'](oqejtl), $wzauy['locator'] = s1f0mc;
          } else bl9jqeo(oqejtl, $wzauy, oqlj59) && yuwz$['push'](oqejtl);'http://www.w3.org/1999/xhtml' !== oqejtl['uri'] || oqejtl['closed'] ? i21tch++ : i21tch = bf1is(r6vg, i21tch, oqejtl['tagName'], z$uyaw, $wzauy);}
    } catch (sci12) {
      sm1c0f['error']('element parse error: ' + sci12), i21tch = -0x1;
    }i21tch > lj5q96 ? lj5q96 = i21tch : imsh1c(Math['max'](ht12ic, lj5q96) + 0x1);
  }
}function bm4s0_(u$n83z, udya) {
  return udya['lineNumber'] = u$n83z['lineNumber'], udya['columnNumber'] = u$n83z['columnNumber'], udya;
}function b_47df(rq56g, q5l69j, vpgrk6, s_fm40, ayu$zw, f0d74) {
  for (var uyaw$, h1tci2, way7$u = ++q5l69j, jt2leo = btoe2hi;;) {
    var u3$8a = rq56g['charAt'](way7$u);switch (u3$8a) {case '=':
        if (jt2leo === bauy7w) uyaw$ = rq56g['slice'](q5l69j, way7$u), jt2leo = bg9k5;else {
          if (jt2leo !== bzuyaw) throw new Error('attribute equal must after attrName');jt2leo = bg9k5;
        }break;case '\x27':case '\x22':
        if (jt2leo === bg9k5 || jt2leo === bauy7w) {
          if (jt2leo === bauy7w && (f0d74['warning']('attribute value must after "="'), uyaw$ = rq56g['slice'](q5l69j, way7$u)), q5l69j = way7$u + 0x1, way7$u = rq56g['indexOf'](u3$8a, q5l69j), !(way7$u > 0x0)) throw new Error('attribute value no end \'' + u3$8a + '\' match');h1tci2 = rq56g['slice'](q5l69j, way7$u)['replace'](/&#?\w+;/g, ayu$zw), vpgrk6['add'](uyaw$, h1tci2, q5l69j - 0x1), jt2leo = bu38az$;
        } else {
          if (jt2leo != bf_0ms1) throw new Error('attribute value must after "="');h1tci2 = rq56g['slice'](q5l69j, way7$u)['replace'](/&#?\w+;/g, ayu$zw), vpgrk6['add'](uyaw$, h1tci2, q5l69j), f0d74['warning']('attribute "' + uyaw$ + '" missed start quot(' + u3$8a + ')!!'), q5l69j = way7$u + 0x1, jt2leo = bu38az$;
        }break;case '/':
        switch (jt2leo) {case btoe2hi:
            vpgrk6['setTagName'](rq56g['slice'](q5l69j, way7$u));case bu38az$:case bd4m0:case ba7u$w:
            jt2leo = ba7u$w, vpgrk6['closed'] = !0x0;case bf_0ms1:case bauy7w:case bzuyaw:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return f0d74['error']('unexpected end of input'), jt2leo == btoe2hi && vpgrk6['setTagName'](rq56g['slice'](q5l69j, way7$u)), way7$u;case '>':
        switch (jt2leo) {case btoe2hi:
            vpgrk6['setTagName'](rq56g['slice'](q5l69j, way7$u));case bu38az$:case bd4m0:case ba7u$w:
            break;case bf_0ms1:case bauy7w:
            h1tci2 = rq56g['slice'](q5l69j, way7$u), '/' === h1tci2['slice'](-0x1) && (vpgrk6['closed'] = !0x0, h1tci2 = h1tci2['slice'](0x0, -0x1));case bzuyaw:
            jt2leo === bzuyaw && (h1tci2 = uyaw$), jt2leo == bf_0ms1 ? (f0d74['warning']('attribute "' + h1tci2 + '" missed quot(")!!'), vpgrk6['add'](uyaw$, h1tci2['replace'](/&#?\w+;/g, ayu$zw), q5l69j)) : ('http://www.w3.org/1999/xhtml' === s_fm40[''] && h1tci2['match'](/^(?:disabled|checked|selected)$/i) || f0d74['warning']('attribute "' + h1tci2 + '" missed value!! "' + h1tci2 + '" instead!!'), vpgrk6['add'](h1tci2, h1tci2, q5l69j));break;case bg9k5:
            throw new Error('attribute value missed!!');}return way7$u;case '\u0080':
        u3$8a = '\x20';default:
        if ('\x20' >= u3$8a) switch (jt2leo) {case btoe2hi:
            vpgrk6['setTagName'](rq56g['slice'](q5l69j, way7$u)), jt2leo = bd4m0;break;case bauy7w:
            uyaw$ = rq56g['slice'](q5l69j, way7$u), jt2leo = bzuyaw;break;case bf_0ms1:
            var h1tci2 = rq56g['slice'](q5l69j, way7$u)['replace'](/&#?\w+;/g, ayu$zw);f0d74['warning']('attribute "' + h1tci2 + '" missed quot(")!!'), vpgrk6['add'](uyaw$, h1tci2, q5l69j);case bu38az$:
            jt2leo = bd4m0;} else switch (jt2leo) {case bzuyaw:
            {
              vpgrk6['tagName'];
            }'http://www.w3.org/1999/xhtml' === s_fm40[''] && uyaw$['match'](/^(?:disabled|checked|selected)$/i) || f0d74['warning']('attribute "' + uyaw$ + '" missed value!! "' + uyaw$ + '" instead2!!'), vpgrk6['add'](uyaw$, uyaw$, q5l69j), q5l69j = way7$u, jt2leo = bauy7w;break;case bu38az$:
            f0d74['warning']('attribute space is required"' + uyaw$ + '\x22!!');case bd4m0:
            jt2leo = bauy7w, q5l69j = way7$u;break;case bg9k5:
            jt2leo = bf_0ms1, q5l69j = way7$u;break;case ba7u$w:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}way7$u++;
  }
}function bl9jqeo(olj2et, _dm4f, zyua8) {
  for (var m4fs_ = olj2et['tagName'], g56krv = null, w0_47d = olj2et['length']; w0_47d--;) {
    var au$y8z = olj2et[w0_47d],
        dyw_47 = au$y8z['qName'],
        thei2 = au$y8z['value'],
        c2ihs = dyw_47['indexOf'](':');if (c2ihs > 0x0) var $ayzuw = au$y8z['prefix'] = dyw_47['slice'](0x0, c2ihs),
        kgrv6 = dyw_47['slice'](c2ihs + 0x1),
        q695r = 'xmlns' === $ayzuw && kgrv6;else kgrv6 = dyw_47, $ayzuw = null, q695r = 'xmlns' === dyw_47 && '';au$y8z['localName'] = kgrv6, q695r !== !0x1 && (null == g56krv && (g56krv = {}, bl5q69j(zyua8, zyua8 = {})), zyua8[q695r] = g56krv[q695r] = thei2, au$y8z['uri'] = 'http://www.w3.org/2000/xmlns/', _dm4f['startPrefixMapping'](q695r, thei2));
  }for (var w0_47d = olj2et['length']; w0_47d--;) {
    au$y8z = olj2et[w0_47d];var $ayzuw = au$y8z['prefix'];$ayzuw && ('xml' === $ayzuw && (au$y8z['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $ayzuw && (au$y8z['uri'] = zyua8[$ayzuw || '']));
  }var c2ihs = m4fs_['indexOf'](':');c2ihs > 0x0 ? ($ayzuw = olj2et['prefix'] = m4fs_['slice'](0x0, c2ihs), kgrv6 = olj2et['localName'] = m4fs_['slice'](c2ihs + 0x1)) : ($ayzuw = null, kgrv6 = olj2et['localName'] = m4fs_);var iot2e = olj2et['uri'] = zyua8[$ayzuw || ''];if (_dm4f['startElement'](iot2e, kgrv6, m4fs_, olj2et), !olj2et['closed']) return olj2et['currentNSMap'] = zyua8, olj2et['localNSMap'] = g56krv, !0x0;if (_dm4f['endElement'](iot2e, kgrv6, m4fs_), g56krv) {
    for ($ayzuw in g56krv) _dm4f['endPrefixMapping']($ayzuw);
  }
}function bf1is(hs21i, ej2lto, _sm4f0, d7_f40, way7d) {
  if (/^(?:script|textarea)$/i['test'](_sm4f0)) {
    var lojq = hs21i['indexOf']('</' + _sm4f0 + '>', ej2lto),
        ehic2 = hs21i['substring'](ej2lto + 0x1, lojq);if (/[&<]/['test'](ehic2)) return (/^script$/i['test'](_sm4f0) ? (way7d['characters'](ehic2, 0x0, ehic2['length']), lojq) : (ehic2 = ehic2['replace'](/&#?\w+;/g, d7_f40), way7d['characters'](ehic2, 0x0, ehic2['length']), lojq)
    );
  }return ej2lto + 0x1;
}function beojq9(j5q9, w7ayu$, _w4yd, fs0m4_) {
  var eh2t = fs0m4_[_w4yd];return null == eh2t && (eh2t = j5q9['lastIndexOf']('</' + _w4yd + '>'), w7ayu$ > eh2t && (eh2t = j5q9['lastIndexOf']('</' + _w4yd)), fs0m4_[_w4yd] = eh2t), w7ayu$ > eh2t;
}function bl5q69j(eith, kprv6g) {
  for (var gk65v in eith) kprv6g[gk65v] = eith[gk65v];
}function bpxvkr(oelj2t, leo2t, m0sf1, j95qg) {
  var $zayuw = oelj2t['charAt'](leo2t + 0x2);switch ($zayuw) {case '-':
      if ('-' === oelj2t['charAt'](leo2t + 0x3)) {
        var y7_dw = oelj2t['indexOf']('-->', leo2t + 0x4);return y7_dw > leo2t ? (m0sf1['comment'](oelj2t, leo2t + 0x4, y7_dw - leo2t - 0x4), y7_dw + 0x3) : (j95qg['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == oelj2t['substr'](leo2t + 0x3, 0x6)) {
        var y7_dw = oelj2t['indexOf'](']]>', leo2t + 0x9);return m0sf1['startCDATA'](), m0sf1['characters'](oelj2t, leo2t + 0x9, y7_dw - leo2t - 0x9), m0sf1['endCDATA'](), y7_dw + 0x3;
      }var yda4w7 = bejo9l(oelj2t, leo2t),
          d74w_ = yda4w7['length'];if (d74w_ > 0x1 && /!doctype/i['test'](yda4w7[0x0][0x0])) {
        var _4wy = yda4w7[0x1][0x0],
            l6q95j = d74w_ > 0x3 && /^public$/i['test'](yda4w7[0x2][0x0]) && yda4w7[0x3][0x0],
            thoie2 = d74w_ > 0x4 && yda4w7[0x4][0x0],
            un3z$ = yda4w7[d74w_ - 0x1];return m0sf1['startDTD'](_4wy, l6q95j && l6q95j['replace'](/^(['"])(.*?)\1$/, '$2'), thoie2 && thoie2['replace'](/^(['"])(.*?)\1$/, '$2')), m0sf1['endDTD'](), un3z$['index'] + un3z$[0x0]['length'];
      }}return -0x1;
}function b_7d04f(w4_, h1cis, m0df) {
  var udayw = w4_['indexOf']('?>', h1cis);if (udayw) {
    var h2el = w4_['substring'](h1cis, udayw)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (h2el) {
      {
        h2el[0x0]['length'];
      }return m0df['processingInstruction'](h2el[0x1], h2el[0x2]), udayw + 0x2;
    }return -0x1;
  }return -0x1;
}function bu$yw7() {}function bzwu$ya(kv65r, ti2ohe) {
  return kv65r['__proto__'] = ti2ohe, kv65r;
}function bejo9l(md4, cie2ht) {
  var hict1,
      $zy8 = [],
      uz$3n = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (uz$3n['lastIndex'] = cie2ht, uz$3n['exec'](md4); hict1 = uz$3n['exec'](md4);) if ($zy8['push'](hict1), hict1[0x1]) return $zy8;
}var b_s1fm = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    bh2tie = new RegExp('[\\-\\.0-9' + b_s1fm['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    b$8ayz = new RegExp('^' + b_s1fm['source'] + bh2tie['source'] + '*(?::' + b_s1fm['source'] + bh2tie['source'] + '*)?$'),
    btoe2hi = 0x0,
    bauy7w = 0x1,
    bzuyaw = 0x2,
    bg9k5 = 0x3,
    bf_0ms1 = 0x4,
    bu38az$ = 0x5,
    bd4m0 = 0x6,
    ba7u$w = 0x7;bol2etj['prototype'] = { 'parse': function (q96jg, $zay, d47_wy) {
    var $8yzu = this['domBuilder'];$8yzu['startDocument'](), bl5q69j($zay, $zay = {}), bz8$3nu(q96jg, $zay, d47_wy, $8yzu, this['errorHandler']), $8yzu['endDocument']();
  } }, bu$yw7['prototype'] = { 'setTagName': function (y7duw) {
    if (!b$8ayz['test'](y7duw)) throw new Error('invalid tagName:' + y7duw);this['tagName'] = y7duw;
  }, 'add': function (kvpgr, r6kg5, rk5g) {
    if (!b$8ayz['test'](kvpgr)) throw new Error('invalid attribute:' + kvpgr);this[this['length']++] = { 'qName': kvpgr, 'value': r6kg5, 'offset': rk5g };
  }, 'length': 0x0, 'getLocalName': function (ieoht) {
    return this[ieoht]['localName'];
  }, 'getLocator': function (csf1im) {
    return this[csf1im]['locator'];
  }, 'getQName': function ($83zau) {
    return this[$83zau]['qName'];
  }, 'getURI': function (ua8y) {
    return this[ua8y]['uri'];
  }, 'getValue': function (gpxr) {
    return this[gpxr]['value'];
  } }, bzwu$ya({}, bzwu$ya['prototype']) instanceof bzwu$ya || (bzwu$ya = function (h1c2i, _04wd7) {
  function lt2joe() {}lt2joe['prototype'] = _04wd7, lt2joe = new lt2joe();for (_04wd7 in h1c2i) lt2joe[_04wd7] = h1c2i[_04wd7];return lt2joe;
}), exports['XMLReader'] = bol2etj;