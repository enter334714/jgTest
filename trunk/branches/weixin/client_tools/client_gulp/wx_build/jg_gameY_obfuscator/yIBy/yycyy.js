var a = wx.$y;
function ya5u3m() {}function yniq2$(gniq$, cs9, hw1d, jtwd4, jfo7h_) {
  function iqn$pg(fj7o8) {
    if (fj7o8 > 0xffff) {
      fj7o8 -= 0x10000;var um5 = 0xd800 + (fj7o8 >> 0xa),
          nig2$ = 0xdc00 + (0x3ff & fj7o8);return String['fromCharCode'](um5, nig2$);
    }return String['fromCharCode'](fj7o8);
  }function _ohj(nks29) {
    var ryv360 = nks29['slice'](0x1, -0x1);return ryv360 in hw1d ? hw1d[ryv360] : '#' === ryv360['charAt'](0x0) ? iqn$pg(parseInt(ryv360['substr'](0x1)['replace']('x', '0x'))) : (jfo7h_['error']('entity not found:' + nks29), nks29);
  }function vxz0r(z0xrye) {
    if (z0xrye > j7_fo8) {
      var tuwmd1 = gniq$['substring'](j7_fo8, z0xrye)['replace'](/&#?\w+;/g, _ohj);foj4_ && jhtw4(j7_fo8), jtwd4['characters'](tuwmd1, 0x0, z0xrye - j7_fo8), j7_fo8 = z0xrye;
    }
  }function jhtw4(gnpq$, c9$2k) {
    for (; gnpq$ >= a6v5 && (c9$2k = udtm1['exec'](gniq$));) r6v3 = c9$2k['index'], a6v5 = r6v3 + c9$2k[0x0]['length'], foj4_['lineNumber']++;foj4_['columnNumber'] = gnpq$ - r6v3 + 0x1;
  }for (var r6v3 = 0x0, a6v5 = 0x0, udtm1 = /.*(?:\r\n?|\n)|.*$/g, foj4_ = jtwd4['locator'], _8lf7s = [{ 'currentNSMap': cs9 }], wtdmu = {}, j7_fo8 = 0x0;;) {
    try {
      var z0rxe = gniq$['indexOf']('<', j7_fo8);if (0x0 > z0rxe) {
        if (!gniq$['substr'](j7_fo8)['match'](/^\s*$/)) {
          var qgpni = jtwd4['doc'],
              n9g$k2 = qgpni['createTextNode'](gniq$['substr'](j7_fo8));qgpni['appendChild'](n9g$k2), jtwd4['currentElement'] = n9g$k2;
        }return;
      }switch (z0rxe > j7_fo8 && vxz0r(z0rxe), gniq$['charAt'](z0rxe + 0x1)) {case '/':
          var jf7o_8 = gniq$['indexOf']('>', z0rxe + 0x3),
              u56m3 = gniq$['substring'](z0rxe + 0x2, jf7o_8),
              c_s8l = _8lf7s['pop']();0x0 > jf7o_8 ? (u56m3 = gniq$['substring'](z0rxe + 0x2)['replace'](/[\s<].*/, ''), jfo7h_['error']('end tag name: ' + u56m3 + ' is not complete:' + c_s8l['tagName']), jf7o_8 = z0rxe + 0x1 + u56m3['length']) : u56m3['match'](/\s</) && (u56m3 = u56m3['replace'](/[\s<].*/, ''), jfo7h_['error']('end tag name: ' + u56m3 + ' maybe not complete'), jf7o_8 = z0rxe + 0x1 + u56m3['length']);var g$2n = c_s8l['localNSMap'],
              s_lf8 = c_s8l['tagName'] == u56m3,
              $iq2ng = s_lf8 || c_s8l['tagName'] && c_s8l['tagName']['toLowerCase']() == u56m3['toLowerCase']();if ($iq2ng) {
            if (jtwd4['endElement'](c_s8l['uri'], c_s8l['localName'], u56m3), g$2n) {
              for (var t14dwu in g$2n) jtwd4['endPrefixMapping'](t14dwu);
            }s_lf8 || jfo7h_['fatalError']('end tag name: ' + u56m3 + ' is not match the current start tagName:' + c_s8l['tagName']);
          } else _8lf7s['push'](c_s8l);jf7o_8++;break;case '?':
          foj4_ && jhtw4(z0rxe), jf7o_8 = ys92kcn(gniq$, z0rxe, jtwd4);break;case '!':
          foj4_ && jhtw4(z0rxe), jf7o_8 = yqgi$n2(gniq$, z0rxe, jtwd4, jfo7h_);break;default:
          foj4_ && jhtw4(z0rxe);var htd1 = new yfhj(),
              gi$np = _8lf7s[_8lf7s['length'] - 0x1]['currentNSMap'],
              jf7o_8 = y_c7sl8(gniq$, z0rxe, htd1, gi$np, _ohj, jfo7h_),
              o_hf4j = htd1['length'];if (!htd1['closed'] && ymv63a(gniq$, jf7o_8, htd1['tagName'], wtdmu) && (htd1['closed'] = !0x0, hw1d['nbsp'] || jfo7h_['warning']('unclosed xml attribute')), foj4_ && o_hf4j) {
            for (var sl98c = yh_4(foj4_, {}), c8l9k = 0x0; o_hf4j > c8l9k; c8l9k++) {
              var $qgni2 = htd1[c8l9k];jhtw4($qgni2['offset']), $qgni2['locator'] = yh_4(foj4_, {});
            }jtwd4['locator'] = sl98c, y_l87fo(htd1, jtwd4, gi$np) && _8lf7s['push'](htd1), jtwd4['locator'] = foj4_;
          } else y_l87fo(htd1, jtwd4, gi$np) && _8lf7s['push'](htd1);'http://www.w3.org/1999/xhtml' !== htd1['uri'] || htd1['closed'] ? jf7o_8++ : jf7o_8 = yd5aum1(gniq$, jf7o_8, htd1['tagName'], _ohj, jtwd4);}
    } catch (v06ry3) {
      jfo7h_['error']('element parse error: ' + v06ry3), jf7o_8 = -0x1;
    }jf7o_8 > j7_fo8 ? j7_fo8 = jf7o_8 : vxz0r(Math['max'](z0rxe, j7_fo8) + 0x1);
  }
}function yh_4(rxvz0y, vy0a3) {
  return vy0a3['lineNumber'] = rxvz0y['lineNumber'], vy0a3['columnNumber'] = rxvz0y['columnNumber'], vy0a3;
}function y_c7sl8(tdu51, $9gk2, er0yx, inqg$, lc9k8s, gnpq) {
  for (var l9sc, yzxe, d5ma1 = ++$9gk2, lskc29 = ytm1;;) {
    var aum35 = tdu51['charAt'](d5ma1);switch (aum35) {case '=':
        if (lskc29 === yrzye0) l9sc = tdu51['slice']($9gk2, d5ma1), lskc29 = yau51dm;else {
          if (lskc29 !== yhtw14) throw new Error('attribute equal must after attrName');lskc29 = yau51dm;
        }break;case '\x27':case '\x22':
        if (lskc29 === yau51dm || lskc29 === yrzye0) {
          if (lskc29 === yrzye0 && (gnpq['warning']('attribute value must after "="'), l9sc = tdu51['slice']($9gk2, d5ma1)), $9gk2 = d5ma1 + 0x1, d5ma1 = tdu51['indexOf'](aum35, $9gk2), !(d5ma1 > 0x0)) throw new Error('attribute value no end \'' + aum35 + '\' match');yzxe = tdu51['slice']($9gk2, d5ma1)['replace'](/&#?\w+;/g, lc9k8s), er0yx['add'](l9sc, yzxe, $9gk2 - 0x1), lskc29 = ylsc_7;
        } else {
          if (lskc29 != ya3mv65) throw new Error('attribute value must after "="');yzxe = tdu51['slice']($9gk2, d5ma1)['replace'](/&#?\w+;/g, lc9k8s), er0yx['add'](l9sc, yzxe, $9gk2), gnpq['warning']('attribute "' + l9sc + '" missed start quot(' + aum35 + ')!!'), $9gk2 = d5ma1 + 0x1, lskc29 = ylsc_7;
        }break;case '/':
        switch (lskc29) {case ytm1:
            er0yx['setTagName'](tdu51['slice']($9gk2, d5ma1));case ylsc_7:case yn$gk29:case yo4hf_:
            lskc29 = yo4hf_, er0yx['closed'] = !0x0;case ya3mv65:case yrzye0:case yhtw14:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return gnpq['error']('unexpected end of input'), lskc29 == ytm1 && er0yx['setTagName'](tdu51['slice']($9gk2, d5ma1)), d5ma1;case '>':
        switch (lskc29) {case ytm1:
            er0yx['setTagName'](tdu51['slice']($9gk2, d5ma1));case ylsc_7:case yn$gk29:case yo4hf_:
            break;case ya3mv65:case yrzye0:
            yzxe = tdu51['slice']($9gk2, d5ma1), '/' === yzxe['slice'](-0x1) && (er0yx['closed'] = !0x0, yzxe = yzxe['slice'](0x0, -0x1));case yhtw14:
            lskc29 === yhtw14 && (yzxe = l9sc), lskc29 == ya3mv65 ? (gnpq['warning']('attribute "' + yzxe + '" missed quot(")!!'), er0yx['add'](l9sc, yzxe['replace'](/&#?\w+;/g, lc9k8s), $9gk2)) : ('http://www.w3.org/1999/xhtml' === inqg$[''] && yzxe['match'](/^(?:disabled|checked|selected)$/i) || gnpq['warning']('attribute "' + yzxe + '" missed value!! "' + yzxe + '" instead!!'), er0yx['add'](yzxe, yzxe, $9gk2));break;case yau51dm:
            throw new Error('attribute value missed!!');}return d5ma1;case '\u0080':
        aum35 = '\x20';default:
        if ('\x20' >= aum35) switch (lskc29) {case ytm1:
            er0yx['setTagName'](tdu51['slice']($9gk2, d5ma1)), lskc29 = yn$gk29;break;case yrzye0:
            l9sc = tdu51['slice']($9gk2, d5ma1), lskc29 = yhtw14;break;case ya3mv65:
            var yzxe = tdu51['slice']($9gk2, d5ma1)['replace'](/&#?\w+;/g, lc9k8s);gnpq['warning']('attribute "' + yzxe + '" missed quot(")!!'), er0yx['add'](l9sc, yzxe, $9gk2);case ylsc_7:
            lskc29 = yn$gk29;} else switch (lskc29) {case yhtw14:
            {
              er0yx['tagName'];
            }'http://www.w3.org/1999/xhtml' === inqg$[''] && l9sc['match'](/^(?:disabled|checked|selected)$/i) || gnpq['warning']('attribute "' + l9sc + '" missed value!! "' + l9sc + '" instead2!!'), er0yx['add'](l9sc, l9sc, $9gk2), $9gk2 = d5ma1, lskc29 = yrzye0;break;case ylsc_7:
            gnpq['warning']('attribute space is required"' + l9sc + '\x22!!');case yn$gk29:
            lskc29 = yrzye0, $9gk2 = d5ma1;break;case yau51dm:
            lskc29 = ya3mv65, $9gk2 = d5ma1;break;case yo4hf_:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}d5ma1++;
  }
}function y_l87fo(zy0r3v, king2, v0a6y3) {
  for (var vzy3r0 = zy0r3v['tagName'], fhow4j = null, dutw1 = zy0r3v['length']; dutw1--;) {
    var wtmu = zy0r3v[dutw1],
        gn$ipq = wtmu['qName'],
        cn9k2s = wtmu['value'],
        niqg$p = gn$ipq['indexOf'](':');if (niqg$p > 0x0) var kn2$g9 = wtmu['prefix'] = gn$ipq['slice'](0x0, niqg$p),
        n2$c9 = gn$ipq['slice'](niqg$p + 0x1),
        _7fjo = 'xmlns' === kn2$g9 && n2$c9;else n2$c9 = gn$ipq, kn2$g9 = null, _7fjo = 'xmlns' === gn$ipq && '';wtmu['localName'] = n2$c9, _7fjo !== !0x1 && (null == fhow4j && (fhow4j = {}, ya063(v0a6y3, v0a6y3 = {})), v0a6y3[_7fjo] = fhow4j[_7fjo] = cn9k2s, wtmu['uri'] = 'http://www.w3.org/2000/xmlns/', king2['startPrefixMapping'](_7fjo, cn9k2s));
  }for (var dutw1 = zy0r3v['length']; dutw1--;) {
    wtmu = zy0r3v[dutw1];var kn2$g9 = wtmu['prefix'];kn2$g9 && ('xml' === kn2$g9 && (wtmu['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== kn2$g9 && (wtmu['uri'] = v0a6y3[kn2$g9 || '']));
  }var niqg$p = vzy3r0['indexOf'](':');niqg$p > 0x0 ? (kn2$g9 = zy0r3v['prefix'] = vzy3r0['slice'](0x0, niqg$p), n2$c9 = zy0r3v['localName'] = vzy3r0['slice'](niqg$p + 0x1)) : (kn2$g9 = null, n2$c9 = zy0r3v['localName'] = vzy3r0);var s2kc = zy0r3v['uri'] = v0a6y3[kn2$g9 || ''];if (king2['startElement'](s2kc, n2$c9, vzy3r0, zy0r3v), !zy0r3v['closed']) return zy0r3v['currentNSMap'] = v0a6y3, zy0r3v['localNSMap'] = fhow4j, !0x0;if (king2['endElement'](s2kc, n2$c9, vzy3r0), fhow4j) {
    for (kn2$g9 in fhow4j) king2['endPrefixMapping'](kn2$g9);
  }
}function yd5aum1(a6m3u, gi2$, th4jd, nqigp$, $ngki) {
  if (/^(?:script|textarea)$/i['test'](th4jd)) {
    var d4jwth = a6m3u['indexOf']('</' + th4jd + '>', gi2$),
        ow4t = a6m3u['substring'](gi2$ + 0x1, d4jwth);if (/[&<]/['test'](ow4t)) return (/^script$/i['test'](th4jd) ? ($ngki['characters'](ow4t, 0x0, ow4t['length']), d4jwth) : (ow4t = ow4t['replace'](/&#?\w+;/g, nqigp$), $ngki['characters'](ow4t, 0x0, ow4t['length']), d4jwth)
    );
  }return gi2$ + 0x1;
}function ymv63a(wd4htj, f4oj, k$92gn, $in2q) {
  var utd14 = $in2q[k$92gn];return null == utd14 && (utd14 = wd4htj['lastIndexOf']('</' + k$92gn + '>'), f4oj > utd14 && (utd14 = wd4htj['lastIndexOf']('</' + k$92gn)), $in2q[k$92gn] = utd14), f4oj > utd14;
}function ya063(vy635, c78_s) {
  for (var ud51ma in vy635) c78_s[ud51ma] = vy635[ud51ma];
}function yqgi$n2(_sc7, xyzr0, fh_jo, yz03vr) {
  var n$k92 = _sc7['charAt'](xyzr0 + 0x2);switch (n$k92) {case '-':
      if ('-' === _sc7['charAt'](xyzr0 + 0x3)) {
        var yx0ez = _sc7['indexOf']('-->', xyzr0 + 0x4);return yx0ez > xyzr0 ? (fh_jo['comment'](_sc7, xyzr0 + 0x4, yx0ez - xyzr0 - 0x4), yx0ez + 0x3) : (yz03vr['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == _sc7['substr'](xyzr0 + 0x3, 0x6)) {
        var yx0ez = _sc7['indexOf'](']]>', xyzr0 + 0x9);return fh_jo['startCDATA'](), fh_jo['characters'](_sc7, xyzr0 + 0x9, yx0ez - xyzr0 - 0x9), fh_jo['endCDATA'](), yx0ez + 0x3;
      }var whdj4 = ywofj4h(_sc7, xyzr0),
          zry30 = whdj4['length'];if (zry30 > 0x1 && /!doctype/i['test'](whdj4[0x0][0x0])) {
        var giqn = whdj4[0x1][0x0],
            hj_7of = zry30 > 0x3 && /^public$/i['test'](whdj4[0x2][0x0]) && whdj4[0x3][0x0],
            tjhd4w = zry30 > 0x4 && whdj4[0x4][0x0],
            uma5d1 = whdj4[zry30 - 0x1];return fh_jo['startDTD'](giqn, hj_7of && hj_7of['replace'](/^(['"])(.*?)\1$/, '$2'), tjhd4w && tjhd4w['replace'](/^(['"])(.*?)\1$/, '$2')), fh_jo['endDTD'](), uma5d1['index'] + uma5d1[0x0]['length'];
      }}return -0x1;
}function ys92kcn(kc9sl, y036rv, qpign$) {
  var i2kgn$ = kc9sl['indexOf']('?>', y036rv);if (i2kgn$) {
    var da5mu = kc9sl['substring'](y036rv, i2kgn$)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (da5mu) {
      {
        da5mu[0x0]['length'];
      }return qpign$['processingInstruction'](da5mu[0x1], da5mu[0x2]), i2kgn$ + 0x2;
    }return -0x1;
  }return -0x1;
}function yfhj() {}function ywtoh(ryzx, _8c7sl) {
  return ryzx['__proto__'] = _8c7sl, ryzx;
}function ywofj4h(w1tdm, r0v3z) {
  var ls_f87,
      h4tow = [],
      fjh = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (fjh['lastIndex'] = r0v3z, fjh['exec'](w1tdm); ls_f87 = fjh['exec'](w1tdm);) if (h4tow['push'](ls_f87), ls_f87[0x1]) return h4tow;
}var yuwdm1t = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ywum = new RegExp('[\\-\\.0-9' + yuwdm1t['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ynk9$2c = new RegExp('^' + yuwdm1t['source'] + ywum['source'] + '*(?::' + yuwdm1t['source'] + ywum['source'] + '*)?$'),
    ytm1 = 0x0,
    yrzye0 = 0x1,
    yhtw14 = 0x2,
    yau51dm = 0x3,
    ya3mv65 = 0x4,
    ylsc_7 = 0x5,
    yn$gk29 = 0x6,
    yo4hf_ = 0x7;ya5u3m['prototype'] = { 'parse': function (a6u35, xezy, n29$c) {
    var uma635 = this['domBuilder'];uma635['startDocument'](), ya063(xezy, xezy = {}), yniq2$(a6u35, xezy, n29$c, uma635, this['errorHandler']), uma635['endDocument']();
  } }, yfhj['prototype'] = { 'setTagName': function (dam) {
    if (!ynk9$2c['test'](dam)) throw new Error('invalid tagName:' + dam);this['tagName'] = dam;
  }, 'add': function (fwh4jo, k8sl9, kc9n$2) {
    if (!ynk9$2c['test'](fwh4jo)) throw new Error('invalid attribute:' + fwh4jo);this[this['length']++] = { 'qName': fwh4jo, 'value': k8sl9, 'offset': kc9n$2 };
  }, 'length': 0x0, 'getLocalName': function (a5dmu1) {
    return this[a5dmu1]['localName'];
  }, 'getLocator': function ($inqpg) {
    return this[$inqpg]['locator'];
  }, 'getQName': function (n2$qig) {
    return this[n2$qig]['qName'];
  }, 'getURI': function (i2gnq$) {
    return this[i2gnq$]['uri'];
  }, 'getValue': function (fjho) {
    return this[fjho]['value'];
  } }, ywtoh({}, ywtoh['prototype']) instanceof ywtoh || (ywtoh = function (gn$92k, cn9s) {
  function uwdt() {}uwdt['prototype'] = cn9s, uwdt = new uwdt();for (cn9s in gn$92k) uwdt[cn9s] = gn$92k[cn9s];return uwdt;
}), exports['XMLReader'] = ya5u3m;