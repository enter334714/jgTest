var a = wx.$y;
function y$ng2q() {}function ykn29g(ni$2gq, ma6v5, fo_h7, _87jo, f8_7jo) {
  function $kc2n(fwj4) {
    if (fwj4 > 0xffff) {
      fwj4 -= 0x10000;var uma1 = 0xd800 + (fwj4 >> 0xa),
          wjhof = 0xdc00 + (0x3ff & fwj4);return String['fromCharCode'](uma1, wjhof);
    }return String['fromCharCode'](fwj4);
  }function y3(va356) {
    var o7f8_ = va356['slice'](0x1, -0x1);return o7f8_ in fo_h7 ? fo_h7[o7f8_] : '#' === o7f8_['charAt'](0x0) ? $kc2n(parseInt(o7f8_['substr'](0x1)['replace']('x', '0x'))) : (f8_7jo['error']('entity not found:' + va356), va356);
  }function e0xzry(pqni$g) {
    if (pqni$g > cl87s9) {
      var _4oh = ni$2gq['substring'](cl87s9, pqni$g)['replace'](/&#?\w+;/g, y3);uwdm && zv0rx(cl87s9), _87jo['characters'](_4oh, 0x0, pqni$g - cl87s9), cl87s9 = pqni$g;
    }
  }function zv0rx($qgi2n, h7o_jf) {
    for (; $qgi2n >= vx0zy && (h7o_jf = jhf4_['exec'](ni$2gq));) a35v6m = h7o_jf['index'], vx0zy = a35v6m + h7o_jf[0x0]['length'], uwdm['lineNumber']++;uwdm['columnNumber'] = $qgi2n - a35v6m + 0x1;
  }for (var a35v6m = 0x0, vx0zy = 0x0, jhf4_ = /.*(?:\r\n?|\n)|.*$/g, uwdm = _87jo['locator'], sc9nk2 = [{ 'currentNSMap': ma6v5 }], gpq$ = {}, cl87s9 = 0x0;;) {
    try {
      var yv3r0z = ni$2gq['indexOf']('<', cl87s9);if (0x0 > yv3r0z) {
        if (!ni$2gq['substr'](cl87s9)['match'](/^\s*$/)) {
          var foh_j4 = _87jo['doc'],
              u5d1mt = foh_j4['createTextNode'](ni$2gq['substr'](cl87s9));foh_j4['appendChild'](u5d1mt), _87jo['currentElement'] = u5d1mt;
        }return;
      }switch (yv3r0z > cl87s9 && e0xzry(yv3r0z), ni$2gq['charAt'](yv3r0z + 0x1)) {case '/':
          var fs78l = ni$2gq['indexOf']('>', yv3r0z + 0x3),
              fo7 = ni$2gq['substring'](yv3r0z + 0x2, fs78l),
              of7l = sc9nk2['pop']();0x0 > fs78l ? (fo7 = ni$2gq['substring'](yv3r0z + 0x2)['replace'](/[\s<].*/, ''), f8_7jo['error']('end tag name: ' + fo7 + ' is not complete:' + of7l['tagName']), fs78l = yv3r0z + 0x1 + fo7['length']) : fo7['match'](/\s</) && (fo7 = fo7['replace'](/[\s<].*/, ''), f8_7jo['error']('end tag name: ' + fo7 + ' maybe not complete'), fs78l = yv3r0z + 0x1 + fo7['length']);var ezxr0 = of7l['localNSMap'],
              n$qgip = of7l['tagName'] == fo7,
              ks2 = n$qgip || of7l['tagName'] && of7l['tagName']['toLowerCase']() == fo7['toLowerCase']();if (ks2) {
            if (_87jo['endElement'](of7l['uri'], of7l['localName'], fo7), ezxr0) {
              for (var ryxz0e in ezxr0) _87jo['endPrefixMapping'](ryxz0e);
            }n$qgip || f8_7jo['fatalError']('end tag name: ' + fo7 + ' is not match the current start tagName:' + of7l['tagName']);
          } else sc9nk2['push'](of7l);fs78l++;break;case '?':
          uwdm && zv0rx(yv3r0z), fs78l = ysn29kc(ni$2gq, yv3r0z, _87jo);break;case '!':
          uwdm && zv0rx(yv3r0z), fs78l = ywm1ut(ni$2gq, yv3r0z, _87jo, f8_7jo);break;default:
          uwdm && zv0rx(yv3r0z);var sl7c_8 = new ys78c9(),
              k92$n = sc9nk2[sc9nk2['length'] - 0x1]['currentNSMap'],
              fs78l = yojf78_(ni$2gq, yv3r0z, sl7c_8, k92$n, y3, f8_7jo),
              ck9l = sl7c_8['length'];if (!sl7c_8['closed'] && yo7f_j8(ni$2gq, fs78l, sl7c_8['tagName'], gpq$) && (sl7c_8['closed'] = !0x0, fo_h7['nbsp'] || f8_7jo['warning']('unclosed xml attribute')), uwdm && ck9l) {
            for (var zy0xr = yrxz0e(uwdm, {}), hfo4jw = 0x0; ck9l > hfo4jw; hfo4jw++) {
              var _7l8 = sl7c_8[hfo4jw];zv0rx(_7l8['offset']), _7l8['locator'] = yrxz0e(uwdm, {});
            }_87jo['locator'] = zy0xr, yfjhwo4(sl7c_8, _87jo, k92$n) && sc9nk2['push'](sl7c_8), _87jo['locator'] = uwdm;
          } else yfjhwo4(sl7c_8, _87jo, k92$n) && sc9nk2['push'](sl7c_8);'http://www.w3.org/1999/xhtml' !== sl7c_8['uri'] || sl7c_8['closed'] ? fs78l++ : fs78l = yvryz30(ni$2gq, fs78l, sl7c_8['tagName'], y3, _87jo);}
    } catch (wd1h4) {
      f8_7jo['error']('element parse error: ' + wd1h4), fs78l = -0x1;
    }fs78l > cl87s9 ? cl87s9 = fs78l : e0xzry(Math['max'](yv3r0z, cl87s9) + 0x1);
  }
}function yrxz0e(mu156a, l87cs9) {
  return l87cs9['lineNumber'] = mu156a['lineNumber'], l87cs9['columnNumber'] = mu156a['columnNumber'], l87cs9;
}function yojf78_(ohj4f_, u1mtdw, g2$qni, wutdm1, sk2c, a3um5) {
  for (var m5u1ad, ck9$n, r0vxyz = ++u1mtdw, dtwh4 = yi$2gnk;;) {
    var o8f_j7 = ohj4f_['charAt'](r0vxyz);switch (o8f_j7) {case '=':
        if (dtwh4 === yf_7h) m5u1ad = ohj4f_['slice'](u1mtdw, r0vxyz), dtwh4 = yy536av;else {
          if (dtwh4 !== ycs9nk) throw new Error('attribute equal must after attrName');dtwh4 = yy536av;
        }break;case '\x27':case '\x22':
        if (dtwh4 === yy536av || dtwh4 === yf_7h) {
          if (dtwh4 === yf_7h && (a3um5['warning']('attribute value must after "="'), m5u1ad = ohj4f_['slice'](u1mtdw, r0vxyz)), u1mtdw = r0vxyz + 0x1, r0vxyz = ohj4f_['indexOf'](o8f_j7, u1mtdw), !(r0vxyz > 0x0)) throw new Error('attribute value no end \'' + o8f_j7 + '\' match');ck9$n = ohj4f_['slice'](u1mtdw, r0vxyz)['replace'](/&#?\w+;/g, sk2c), g2$qni['add'](m5u1ad, ck9$n, u1mtdw - 0x1), dtwh4 = ytjwd;
        } else {
          if (dtwh4 != yw4th) throw new Error('attribute value must after "="');ck9$n = ohj4f_['slice'](u1mtdw, r0vxyz)['replace'](/&#?\w+;/g, sk2c), g2$qni['add'](m5u1ad, ck9$n, u1mtdw), a3um5['warning']('attribute "' + m5u1ad + '" missed start quot(' + o8f_j7 + ')!!'), u1mtdw = r0vxyz + 0x1, dtwh4 = ytjwd;
        }break;case '/':
        switch (dtwh4) {case yi$2gnk:
            g2$qni['setTagName'](ohj4f_['slice'](u1mtdw, r0vxyz));case ytjwd:case ymd1ua5:case yu15td:
            dtwh4 = yu15td, g2$qni['closed'] = !0x0;case yw4th:case yf_7h:case ycs9nk:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return a3um5['error']('unexpected end of input'), dtwh4 == yi$2gnk && g2$qni['setTagName'](ohj4f_['slice'](u1mtdw, r0vxyz)), r0vxyz;case '>':
        switch (dtwh4) {case yi$2gnk:
            g2$qni['setTagName'](ohj4f_['slice'](u1mtdw, r0vxyz));case ytjwd:case ymd1ua5:case yu15td:
            break;case yw4th:case yf_7h:
            ck9$n = ohj4f_['slice'](u1mtdw, r0vxyz), '/' === ck9$n['slice'](-0x1) && (g2$qni['closed'] = !0x0, ck9$n = ck9$n['slice'](0x0, -0x1));case ycs9nk:
            dtwh4 === ycs9nk && (ck9$n = m5u1ad), dtwh4 == yw4th ? (a3um5['warning']('attribute "' + ck9$n + '" missed quot(")!!'), g2$qni['add'](m5u1ad, ck9$n['replace'](/&#?\w+;/g, sk2c), u1mtdw)) : ('http://www.w3.org/1999/xhtml' === wutdm1[''] && ck9$n['match'](/^(?:disabled|checked|selected)$/i) || a3um5['warning']('attribute "' + ck9$n + '" missed value!! "' + ck9$n + '" instead!!'), g2$qni['add'](ck9$n, ck9$n, u1mtdw));break;case yy536av:
            throw new Error('attribute value missed!!');}return r0vxyz;case '\u0080':
        o8f_j7 = '\x20';default:
        if ('\x20' >= o8f_j7) switch (dtwh4) {case yi$2gnk:
            g2$qni['setTagName'](ohj4f_['slice'](u1mtdw, r0vxyz)), dtwh4 = ymd1ua5;break;case yf_7h:
            m5u1ad = ohj4f_['slice'](u1mtdw, r0vxyz), dtwh4 = ycs9nk;break;case yw4th:
            var ck9$n = ohj4f_['slice'](u1mtdw, r0vxyz)['replace'](/&#?\w+;/g, sk2c);a3um5['warning']('attribute "' + ck9$n + '" missed quot(")!!'), g2$qni['add'](m5u1ad, ck9$n, u1mtdw);case ytjwd:
            dtwh4 = ymd1ua5;} else switch (dtwh4) {case ycs9nk:
            {
              g2$qni['tagName'];
            }'http://www.w3.org/1999/xhtml' === wutdm1[''] && m5u1ad['match'](/^(?:disabled|checked|selected)$/i) || a3um5['warning']('attribute "' + m5u1ad + '" missed value!! "' + m5u1ad + '" instead2!!'), g2$qni['add'](m5u1ad, m5u1ad, u1mtdw), u1mtdw = r0vxyz, dtwh4 = yf_7h;break;case ytjwd:
            a3um5['warning']('attribute space is required"' + m5u1ad + '\x22!!');case ymd1ua5:
            dtwh4 = yf_7h, u1mtdw = r0vxyz;break;case yy536av:
            dtwh4 = yw4th, u1mtdw = r0vxyz;break;case yu15td:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}r0vxyz++;
  }
}function yfjhwo4(vyzxr, foh_j7, ls7f8_) {
  for (var kn2s = vyzxr['tagName'], h1twd4 = null, yv03zr = vyzxr['length']; yv03zr--;) {
    var ofl8_7 = vyzxr[yv03zr],
        mt51 = ofl8_7['qName'],
        y30r6 = ofl8_7['value'],
        c$9n2k = mt51['indexOf'](':');if (c$9n2k > 0x0) var ho4twj = ofl8_7['prefix'] = mt51['slice'](0x0, c$9n2k),
        oh_f4 = mt51['slice'](c$9n2k + 0x1),
        jfo8_7 = 'xmlns' === ho4twj && oh_f4;else oh_f4 = mt51, ho4twj = null, jfo8_7 = 'xmlns' === mt51 && '';ofl8_7['localName'] = oh_f4, jfo8_7 !== !0x1 && (null == h1twd4 && (h1twd4 = {}, yl7cs8_(ls7f8_, ls7f8_ = {})), ls7f8_[jfo8_7] = h1twd4[jfo8_7] = y30r6, ofl8_7['uri'] = 'http://www.w3.org/2000/xmlns/', foh_j7['startPrefixMapping'](jfo8_7, y30r6));
  }for (var yv03zr = vyzxr['length']; yv03zr--;) {
    ofl8_7 = vyzxr[yv03zr];var ho4twj = ofl8_7['prefix'];ho4twj && ('xml' === ho4twj && (ofl8_7['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ho4twj && (ofl8_7['uri'] = ls7f8_[ho4twj || '']));
  }var c$9n2k = kn2s['indexOf'](':');c$9n2k > 0x0 ? (ho4twj = vyzxr['prefix'] = kn2s['slice'](0x0, c$9n2k), oh_f4 = vyzxr['localName'] = kn2s['slice'](c$9n2k + 0x1)) : (ho4twj = null, oh_f4 = vyzxr['localName'] = kn2s);var q$gp = vyzxr['uri'] = ls7f8_[ho4twj || ''];if (foh_j7['startElement'](q$gp, oh_f4, kn2s, vyzxr), !vyzxr['closed']) return vyzxr['currentNSMap'] = ls7f8_, vyzxr['localNSMap'] = h1twd4, !0x0;if (foh_j7['endElement'](q$gp, oh_f4, kn2s), h1twd4) {
    for (ho4twj in h1twd4) foh_j7['endPrefixMapping'](ho4twj);
  }
}function yvryz30(s7l9, wdtjh4, s9k8l, xyv0z, o_fhj) {
  if (/^(?:script|textarea)$/i['test'](s9k8l)) {
    var d1tmw = s7l9['indexOf']('</' + s9k8l + '>', wdtjh4),
        jo87 = s7l9['substring'](wdtjh4 + 0x1, d1tmw);if (/[&<]/['test'](jo87)) return (/^script$/i['test'](s9k8l) ? (o_fhj['characters'](jo87, 0x0, jo87['length']), d1tmw) : (jo87 = jo87['replace'](/&#?\w+;/g, xyv0z), o_fhj['characters'](jo87, 0x0, jo87['length']), d1tmw)
    );
  }return wdtjh4 + 0x1;
}function yo7f_j8(erz0y, n$9gk, d1tu4, g2nik) {
  var _cls8 = g2nik[d1tu4];return null == _cls8 && (_cls8 = erz0y['lastIndexOf']('</' + d1tu4 + '>'), n$9gk > _cls8 && (_cls8 = erz0y['lastIndexOf']('</' + d1tu4)), g2nik[d1tu4] = _cls8), n$9gk > _cls8;
}function yl7cs8_(ng2$k9, jthw4) {
  for (var vrzxy0 in ng2$k9) jthw4[vrzxy0] = ng2$k9[vrzxy0];
}function ywm1ut(c_8ls7, wj4f, q2ing, l92csk) {
  var m5dau1 = c_8ls7['charAt'](wj4f + 0x2);switch (m5dau1) {case '-':
      if ('-' === c_8ls7['charAt'](wj4f + 0x3)) {
        var $9kcn = c_8ls7['indexOf']('-->', wj4f + 0x4);return $9kcn > wj4f ? (q2ing['comment'](c_8ls7, wj4f + 0x4, $9kcn - wj4f - 0x4), $9kcn + 0x3) : (l92csk['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == c_8ls7['substr'](wj4f + 0x3, 0x6)) {
        var $9kcn = c_8ls7['indexOf'](']]>', wj4f + 0x9);return q2ing['startCDATA'](), q2ing['characters'](c_8ls7, wj4f + 0x9, $9kcn - wj4f - 0x9), q2ing['endCDATA'](), $9kcn + 0x3;
      }var gq2$ = yjh4wt(c_8ls7, wj4f),
          ing2k$ = gq2$['length'];if (ing2k$ > 0x1 && /!doctype/i['test'](gq2$[0x0][0x0])) {
        var t4hdjw = gq2$[0x1][0x0],
            zrxvy0 = ing2k$ > 0x3 && /^public$/i['test'](gq2$[0x2][0x0]) && gq2$[0x3][0x0],
            _o78j = ing2k$ > 0x4 && gq2$[0x4][0x0],
            y306r = gq2$[ing2k$ - 0x1];return q2ing['startDTD'](t4hdjw, zrxvy0 && zrxvy0['replace'](/^(['"])(.*?)\1$/, '$2'), _o78j && _o78j['replace'](/^(['"])(.*?)\1$/, '$2')), q2ing['endDTD'](), y306r['index'] + y306r[0x0]['length'];
      }}return -0x1;
}function ysn29kc(ncks2, tm1u5, $k2c9) {
  var vxzr0y = ncks2['indexOf']('?>', tm1u5);if (vxzr0y) {
    var ni2$q = ncks2['substring'](tm1u5, vxzr0y)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ni2$q) {
      {
        ni2$q[0x0]['length'];
      }return $k2c9['processingInstruction'](ni2$q[0x1], ni2$q[0x2]), vxzr0y + 0x2;
    }return -0x1;
  }return -0x1;
}function ys78c9() {}function yt4dwu(fo7jh, g$k9n2) {
  return fo7jh['__proto__'] = g$k9n2, fo7jh;
}function yjh4wt(zexy, wjtho4) {
  var h4wtj,
      udm = [],
      qi$2gn = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (qi$2gn['lastIndex'] = wjtho4, qi$2gn['exec'](zexy); h4wtj = qi$2gn['exec'](zexy);) if (udm['push'](h4wtj), h4wtj[0x1]) return udm;
}var y_hfo7 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    yhtdw1 = new RegExp('[\\-\\.0-9' + y_hfo7['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    yohj4f = new RegExp('^' + y_hfo7['source'] + yhtdw1['source'] + '*(?::' + y_hfo7['source'] + yhtdw1['source'] + '*)?$'),
    yi$2gnk = 0x0,
    yf_7h = 0x1,
    ycs9nk = 0x2,
    yy536av = 0x3,
    yw4th = 0x4,
    ytjwd = 0x5,
    ymd1ua5 = 0x6,
    yu15td = 0x7;y$ng2q['prototype'] = { 'parse': function (du5tm1, wd1umt, o_fl78) {
    var d1tu4w = this['domBuilder'];d1tu4w['startDocument'](), yl7cs8_(wd1umt, wd1umt = {}), ykn29g(du5tm1, wd1umt, o_fl78, d1tu4w, this['errorHandler']), d1tu4w['endDocument']();
  } }, ys78c9['prototype'] = { 'setTagName': function (n2iq) {
    if (!yohj4f['test'](n2iq)) throw new Error('invalid tagName:' + n2iq);this['tagName'] = n2iq;
  }, 'add': function (yzrvx, ow4hjf, _7sfl8) {
    if (!yohj4f['test'](yzrvx)) throw new Error('invalid attribute:' + yzrvx);this[this['length']++] = { 'qName': yzrvx, 'value': ow4hjf, 'offset': _7sfl8 };
  }, 'length': 0x0, 'getLocalName': function (hfj7_o) {
    return this[hfj7_o]['localName'];
  }, 'getLocator': function (d5au1) {
    return this[d5au1]['locator'];
  }, 'getQName': function (wojhf4) {
    return this[wojhf4]['qName'];
  }, 'getURI': function (htwd41) {
    return this[htwd41]['uri'];
  }, 'getValue': function (xr0vy) {
    return this[xr0vy]['value'];
  } }, yt4dwu({}, yt4dwu['prototype']) instanceof yt4dwu || (yt4dwu = function (yrxz0v, n9k2$g) {
  function i$gqnp() {}i$gqnp['prototype'] = n9k2$g, i$gqnp = new i$gqnp();for (n9k2$g in yrxz0v) i$gqnp[n9k2$g] = yrxz0v[n9k2$g];return i$gqnp;
}), exports['XMLReader'] = y$ng2q;