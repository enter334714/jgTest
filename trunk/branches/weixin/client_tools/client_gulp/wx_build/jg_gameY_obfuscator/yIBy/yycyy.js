var a = wx.$y;
function yl_87o() {}function yv6ry(_78fj, h_4f, md5ua1, jwt4ho, um5a1d) {
  function $iqpn(u1mda5) {
    if (u1mda5 > 0xffff) {
      u1mda5 -= 0x10000;var nip$qg = 0xd800 + (u1mda5 >> 0xa),
          dhjtw4 = 0xdc00 + (0x3ff & u1mda5);return String['fromCharCode'](nip$qg, dhjtw4);
    }return String['fromCharCode'](u1mda5);
  }function _8lcs7(fs7_8) {
    var m6a3v = fs7_8['slice'](0x1, -0x1);return m6a3v in md5ua1 ? md5ua1[m6a3v] : '#' === m6a3v['charAt'](0x0) ? $iqpn(parseInt(m6a3v['substr'](0x1)['replace']('x', '0x'))) : (um5a1d['error']('entity not found:' + fs7_8), fs7_8);
  }function wjfho4(sl_f87) {
    if (sl_f87 > va30) {
      var jh7_fo = _78fj['substring'](va30, sl_f87)['replace'](/&#?\w+;/g, _8lcs7);w1mtud && c$92nk(va30), jwt4ho['characters'](jh7_fo, 0x0, sl_f87 - va30), va30 = sl_f87;
    }
  }function c$92nk(o7f_j8, j_o4f) {
    for (; o7f_j8 >= gn$pqi && (j_o4f = q2gi$['exec'](_78fj));) _f87lo = j_o4f['index'], gn$pqi = _f87lo + j_o4f[0x0]['length'], w1mtud['lineNumber']++;w1mtud['columnNumber'] = o7f_j8 - _f87lo + 0x1;
  }for (var _f87lo = 0x0, gn$pqi = 0x0, q2gi$ = /.*(?:\r\n?|\n)|.*$/g, w1mtud = jwt4ho['locator'], f_s8l7 = [{ 'currentNSMap': h_4f }], c978s = {}, va30 = 0x0;;) {
    try {
      var sn9c2 = _78fj['indexOf']('<', va30);if (0x0 > sn9c2) {
        if (!_78fj['substr'](va30)['match'](/^\s*$/)) {
          var ay365v = jwt4ho['doc'],
              xeyz0r = ay365v['createTextNode'](_78fj['substr'](va30));ay365v['appendChild'](xeyz0r), jwt4ho['currentElement'] = xeyz0r;
        }return;
      }switch (sn9c2 > va30 && wjfho4(sn9c2), _78fj['charAt'](sn9c2 + 0x1)) {case '/':
          var maud5 = _78fj['indexOf']('>', sn9c2 + 0x3),
              i$g2k = _78fj['substring'](sn9c2 + 0x2, maud5),
              of7_8 = f_s8l7['pop']();0x0 > maud5 ? (i$g2k = _78fj['substring'](sn9c2 + 0x2)['replace'](/[\s<].*/, ''), um5a1d['error']('end tag name: ' + i$g2k + ' is not complete:' + of7_8['tagName']), maud5 = sn9c2 + 0x1 + i$g2k['length']) : i$g2k['match'](/\s</) && (i$g2k = i$g2k['replace'](/[\s<].*/, ''), um5a1d['error']('end tag name: ' + i$g2k + ' maybe not complete'), maud5 = sn9c2 + 0x1 + i$g2k['length']);var w1dmtu = of7_8['localNSMap'],
              d1ma5 = of7_8['tagName'] == i$g2k,
              c9n$ = d1ma5 || of7_8['tagName'] && of7_8['tagName']['toLowerCase']() == i$g2k['toLowerCase']();if (c9n$) {
            if (jwt4ho['endElement'](of7_8['uri'], of7_8['localName'], i$g2k), w1dmtu) {
              for (var m6u35 in w1dmtu) jwt4ho['endPrefixMapping'](m6u35);
            }d1ma5 || um5a1d['fatalError']('end tag name: ' + i$g2k + ' is not match the current start tagName:' + of7_8['tagName']);
          } else f_s8l7['push'](of7_8);maud5++;break;case '?':
          w1mtud && c$92nk(sn9c2), maud5 = yoj4_hf(_78fj, sn9c2, jwt4ho);break;case '!':
          w1mtud && c$92nk(sn9c2), maud5 = ykn$2i(_78fj, sn9c2, jwt4ho, um5a1d);break;default:
          w1mtud && c$92nk(sn9c2);var ink$2g = new ydwum1t(),
              ho4fw = f_s8l7[f_s8l7['length'] - 0x1]['currentNSMap'],
              maud5 = ys7_(_78fj, sn9c2, ink$2g, ho4fw, _8lcs7, um5a1d),
              c9s8k = ink$2g['length'];if (!ink$2g['closed'] && yls(_78fj, maud5, ink$2g['tagName'], c978s) && (ink$2g['closed'] = !0x0, md5ua1['nbsp'] || um5a1d['warning']('unclosed xml attribute')), w1mtud && c9s8k) {
            for (var jo7_ = ygin2q$(w1mtud, {}), zxyr = 0x0; c9s8k > zxyr; zxyr++) {
              var fowh4j = ink$2g[zxyr];c$92nk(fowh4j['offset']), fowh4j['locator'] = ygin2q$(w1mtud, {});
            }jwt4ho['locator'] = jo7_, ylf7s8(ink$2g, jwt4ho, ho4fw) && f_s8l7['push'](ink$2g), jwt4ho['locator'] = w1mtud;
          } else ylf7s8(ink$2g, jwt4ho, ho4fw) && f_s8l7['push'](ink$2g);'http://www.w3.org/1999/xhtml' !== ink$2g['uri'] || ink$2g['closed'] ? maud5++ : maud5 = yyz03rv(_78fj, maud5, ink$2g['tagName'], _8lcs7, jwt4ho);}
    } catch (y0) {
      um5a1d['error']('element parse error: ' + y0), maud5 = -0x1;
    }maud5 > va30 ? va30 = maud5 : wjfho4(Math['max'](sn9c2, va30) + 0x1);
  }
}function ygin2q$(lc798, wd14ht) {
  return wd14ht['lineNumber'] = lc798['lineNumber'], wd14ht['columnNumber'] = lc798['columnNumber'], wd14ht;
}function ys7_(qg$n2, htjwo, m51ud, sl_, jfo7_8, v365am) {
  for (var _sc7l8, wu1d, t4uw1 = ++htjwo, f4_o = yqngi$p;;) {
    var jhdwt4 = qg$n2['charAt'](t4uw1);switch (jhdwt4) {case '=':
        if (f4_o === yr3yv60) _sc7l8 = qg$n2['slice'](htjwo, t4uw1), f4_o = yng29k$;else {
          if (f4_o !== yxvzy) throw new Error('attribute equal must after attrName');f4_o = yng29k$;
        }break;case '\x27':case '\x22':
        if (f4_o === yng29k$ || f4_o === yr3yv60) {
          if (f4_o === yr3yv60 && (v365am['warning']('attribute value must after "="'), _sc7l8 = qg$n2['slice'](htjwo, t4uw1)), htjwo = t4uw1 + 0x1, t4uw1 = qg$n2['indexOf'](jhdwt4, htjwo), !(t4uw1 > 0x0)) throw new Error('attribute value no end \'' + jhdwt4 + '\' match');wu1d = qg$n2['slice'](htjwo, t4uw1)['replace'](/&#?\w+;/g, jfo7_8), m51ud['add'](_sc7l8, wu1d, htjwo - 0x1), f4_o = y_hoj;
        } else {
          if (f4_o != yxyv0zr) throw new Error('attribute value must after "="');wu1d = qg$n2['slice'](htjwo, t4uw1)['replace'](/&#?\w+;/g, jfo7_8), m51ud['add'](_sc7l8, wu1d, htjwo), v365am['warning']('attribute "' + _sc7l8 + '" missed start quot(' + jhdwt4 + ')!!'), htjwo = t4uw1 + 0x1, f4_o = y_hoj;
        }break;case '/':
        switch (f4_o) {case yqngi$p:
            m51ud['setTagName'](qg$n2['slice'](htjwo, t4uw1));case y_hoj:case ygq$i2n:case yvma563:
            f4_o = yvma563, m51ud['closed'] = !0x0;case yxyv0zr:case yr3yv60:case yxvzy:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return v365am['error']('unexpected end of input'), f4_o == yqngi$p && m51ud['setTagName'](qg$n2['slice'](htjwo, t4uw1)), t4uw1;case '>':
        switch (f4_o) {case yqngi$p:
            m51ud['setTagName'](qg$n2['slice'](htjwo, t4uw1));case y_hoj:case ygq$i2n:case yvma563:
            break;case yxyv0zr:case yr3yv60:
            wu1d = qg$n2['slice'](htjwo, t4uw1), '/' === wu1d['slice'](-0x1) && (m51ud['closed'] = !0x0, wu1d = wu1d['slice'](0x0, -0x1));case yxvzy:
            f4_o === yxvzy && (wu1d = _sc7l8), f4_o == yxyv0zr ? (v365am['warning']('attribute "' + wu1d + '" missed quot(")!!'), m51ud['add'](_sc7l8, wu1d['replace'](/&#?\w+;/g, jfo7_8), htjwo)) : ('http://www.w3.org/1999/xhtml' === sl_[''] && wu1d['match'](/^(?:disabled|checked|selected)$/i) || v365am['warning']('attribute "' + wu1d + '" missed value!! "' + wu1d + '" instead!!'), m51ud['add'](wu1d, wu1d, htjwo));break;case yng29k$:
            throw new Error('attribute value missed!!');}return t4uw1;case '\u0080':
        jhdwt4 = '\x20';default:
        if ('\x20' >= jhdwt4) switch (f4_o) {case yqngi$p:
            m51ud['setTagName'](qg$n2['slice'](htjwo, t4uw1)), f4_o = ygq$i2n;break;case yr3yv60:
            _sc7l8 = qg$n2['slice'](htjwo, t4uw1), f4_o = yxvzy;break;case yxyv0zr:
            var wu1d = qg$n2['slice'](htjwo, t4uw1)['replace'](/&#?\w+;/g, jfo7_8);v365am['warning']('attribute "' + wu1d + '" missed quot(")!!'), m51ud['add'](_sc7l8, wu1d, htjwo);case y_hoj:
            f4_o = ygq$i2n;} else switch (f4_o) {case yxvzy:
            {
              m51ud['tagName'];
            }'http://www.w3.org/1999/xhtml' === sl_[''] && _sc7l8['match'](/^(?:disabled|checked|selected)$/i) || v365am['warning']('attribute "' + _sc7l8 + '" missed value!! "' + _sc7l8 + '" instead2!!'), m51ud['add'](_sc7l8, _sc7l8, htjwo), htjwo = t4uw1, f4_o = yr3yv60;break;case y_hoj:
            v365am['warning']('attribute space is required"' + _sc7l8 + '\x22!!');case ygq$i2n:
            f4_o = yr3yv60, htjwo = t4uw1;break;case yng29k$:
            f4_o = yxyv0zr, htjwo = t4uw1;break;case yvma563:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}t4uw1++;
  }
}function ylf7s8(yx0e, woht4j, $iqpgn) {
  for (var yv30z = yx0e['tagName'], l_78o = null, jo7fh = yx0e['length']; jo7fh--;) {
    var erzx0 = yx0e[jo7fh],
        c9$nk2 = erzx0['qName'],
        vzy = erzx0['value'],
        da51u = c9$nk2['indexOf'](':');if (da51u > 0x0) var $nikg2 = erzx0['prefix'] = c9$nk2['slice'](0x0, da51u),
        utmwd1 = c9$nk2['slice'](da51u + 0x1),
        j4hwf = 'xmlns' === $nikg2 && utmwd1;else utmwd1 = c9$nk2, $nikg2 = null, j4hwf = 'xmlns' === c9$nk2 && '';erzx0['localName'] = utmwd1, j4hwf !== !0x1 && (null == l_78o && (l_78o = {}, yngqpi($iqpgn, $iqpgn = {})), $iqpgn[j4hwf] = l_78o[j4hwf] = vzy, erzx0['uri'] = 'http://www.w3.org/2000/xmlns/', woht4j['startPrefixMapping'](j4hwf, vzy));
  }for (var jo7fh = yx0e['length']; jo7fh--;) {
    erzx0 = yx0e[jo7fh];var $nikg2 = erzx0['prefix'];$nikg2 && ('xml' === $nikg2 && (erzx0['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $nikg2 && (erzx0['uri'] = $iqpgn[$nikg2 || '']));
  }var da51u = yv30z['indexOf'](':');da51u > 0x0 ? ($nikg2 = yx0e['prefix'] = yv30z['slice'](0x0, da51u), utmwd1 = yx0e['localName'] = yv30z['slice'](da51u + 0x1)) : ($nikg2 = null, utmwd1 = yx0e['localName'] = yv30z);var yzer0 = yx0e['uri'] = $iqpgn[$nikg2 || ''];if (woht4j['startElement'](yzer0, utmwd1, yv30z, yx0e), !yx0e['closed']) return yx0e['currentNSMap'] = $iqpgn, yx0e['localNSMap'] = l_78o, !0x0;if (woht4j['endElement'](yzer0, utmwd1, yv30z), l_78o) {
    for ($nikg2 in l_78o) woht4j['endPrefixMapping']($nikg2);
  }
}function yyz03rv(jfo8_, l_o78, kcl89, $n9kg2, hj4otw) {
  if (/^(?:script|textarea)$/i['test'](kcl89)) {
    var kngi2$ = jfo8_['indexOf']('</' + kcl89 + '>', l_o78),
        sl8c7_ = jfo8_['substring'](l_o78 + 0x1, kngi2$);if (/[&<]/['test'](sl8c7_)) return (/^script$/i['test'](kcl89) ? (hj4otw['characters'](sl8c7_, 0x0, sl8c7_['length']), kngi2$) : (sl8c7_ = sl8c7_['replace'](/&#?\w+;/g, $n9kg2), hj4otw['characters'](sl8c7_, 0x0, sl8c7_['length']), kngi2$)
    );
  }return l_o78 + 0x1;
}function yls(sn, cls9, m1wdt, erz0xy) {
  var cl98k = erz0xy[m1wdt];return null == cl98k && (cl98k = sn['lastIndexOf']('</' + m1wdt + '>'), cls9 > cl98k && (cl98k = sn['lastIndexOf']('</' + m1wdt)), erz0xy[m1wdt] = cl98k), cls9 > cl98k;
}function yngqpi(c29sk, v30rz) {
  for (var aud in c29sk) v30rz[aud] = c29sk[aud];
}function ykn$2i(d1aum5, kg$2n, m51aud, fol_) {
  var jf7o_ = d1aum5['charAt'](kg$2n + 0x2);switch (jf7o_) {case '-':
      if ('-' === d1aum5['charAt'](kg$2n + 0x3)) {
        var jhwto = d1aum5['indexOf']('-->', kg$2n + 0x4);return jhwto > kg$2n ? (m51aud['comment'](d1aum5, kg$2n + 0x4, jhwto - kg$2n - 0x4), jhwto + 0x3) : (fol_['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == d1aum5['substr'](kg$2n + 0x3, 0x6)) {
        var jhwto = d1aum5['indexOf'](']]>', kg$2n + 0x9);return m51aud['startCDATA'](), m51aud['characters'](d1aum5, kg$2n + 0x9, jhwto - kg$2n - 0x9), m51aud['endCDATA'](), jhwto + 0x3;
      }var ryz0e = ynk9(d1aum5, kg$2n),
          hj4o_ = ryz0e['length'];if (hj4o_ > 0x1 && /!doctype/i['test'](ryz0e[0x0][0x0])) {
        var cs2k9n = ryz0e[0x1][0x0],
            mva65 = hj4o_ > 0x3 && /^public$/i['test'](ryz0e[0x2][0x0]) && ryz0e[0x3][0x0],
            r0zy3 = hj4o_ > 0x4 && ryz0e[0x4][0x0],
            wu1t4d = ryz0e[hj4o_ - 0x1];return m51aud['startDTD'](cs2k9n, mva65 && mva65['replace'](/^(['"])(.*?)\1$/, '$2'), r0zy3 && r0zy3['replace'](/^(['"])(.*?)\1$/, '$2')), m51aud['endDTD'](), wu1t4d['index'] + wu1t4d[0x0]['length'];
      }}return -0x1;
}function yoj4_hf(gqp$n, fj_h4o, yv5) {
  var o7hf = gqp$n['indexOf']('?>', fj_h4o);if (o7hf) {
    var jhw4of = gqp$n['substring'](fj_h4o, o7hf)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (jhw4of) {
      {
        jhw4of[0x0]['length'];
      }return yv5['processingInstruction'](jhw4of[0x1], jhw4of[0x2]), o7hf + 0x2;
    }return -0x1;
  }return -0x1;
}function ydwum1t() {}function ysnk2c(j7ho, _hjof) {
  return j7ho['__proto__'] = _hjof, j7ho;
}function ynk9(oj8f, s9nkc2) {
  var y630r,
      skl89c = [],
      cks2l = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (cks2l['lastIndex'] = s9nkc2, cks2l['exec'](oj8f); y630r = cks2l['exec'](oj8f);) if (skl89c['push'](y630r), y630r[0x1]) return skl89c;
}var yy0vz3r = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    yj_8o = new RegExp('[\\-\\.0-9' + yy0vz3r['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    yc9nks2 = new RegExp('^' + yy0vz3r['source'] + yj_8o['source'] + '*(?::' + yy0vz3r['source'] + yj_8o['source'] + '*)?$'),
    yqngi$p = 0x0,
    yr3yv60 = 0x1,
    yxvzy = 0x2,
    yng29k$ = 0x3,
    yxyv0zr = 0x4,
    y_hoj = 0x5,
    ygq$i2n = 0x6,
    yvma563 = 0x7;yl_87o['prototype'] = { 'parse': function (d51um, t4dwu1, ks9cn) {
    var h4td = this['domBuilder'];h4td['startDocument'](), yngqpi(t4dwu1, t4dwu1 = {}), yv6ry(d51um, t4dwu1, ks9cn, h4td, this['errorHandler']), h4td['endDocument']();
  } }, ydwum1t['prototype'] = { 'setTagName': function (a35y6) {
    if (!yc9nks2['test'](a35y6)) throw new Error('invalid tagName:' + a35y6);this['tagName'] = a35y6;
  }, 'add': function (cs89k, avy63, h4tjw) {
    if (!yc9nks2['test'](cs89k)) throw new Error('invalid attribute:' + cs89k);this[this['length']++] = { 'qName': cs89k, 'value': avy63, 'offset': h4tjw };
  }, 'length': 0x0, 'getLocalName': function (u5tm1d) {
    return this[u5tm1d]['localName'];
  }, 'getLocator': function (n$2q) {
    return this[n$2q]['locator'];
  }, 'getQName': function (lc_s78) {
    return this[lc_s78]['qName'];
  }, 'getURI': function (u365m) {
    return this[u365m]['uri'];
  }, 'getValue': function (p$qing) {
    return this[p$qing]['value'];
  } }, ysnk2c({}, ysnk2c['prototype']) instanceof ysnk2c || (ysnk2c = function (s7l98c, v0r3) {
  function ofj_78() {}ofj_78['prototype'] = v0r3, ofj_78 = new ofj_78();for (v0r3 in s7l98c) ofj_78[v0r3] = s7l98c[v0r3];return ofj_78;
}), exports['XMLReader'] = yl_87o;