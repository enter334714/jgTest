var a = wx.$y;
function y_lc8() {}function ykn$2c(a5u1dm, l_sf, v6ry30, mwud1, ey0xr) {
  function o4th(s7_cl) {
    if (s7_cl > 0xffff) {
      s7_cl -= 0x10000;var ma53 = 0xd800 + (s7_cl >> 0xa),
          yzxre0 = 0xdc00 + (0x3ff & s7_cl);return String['fromCharCode'](ma53, yzxre0);
    }return String['fromCharCode'](s7_cl);
  }function l_78fs(yxze) {
    var utmdw = yxze['slice'](0x1, -0x1);return utmdw in v6ry30 ? v6ry30[utmdw] : '#' === utmdw['charAt'](0x0) ? o4th(parseInt(utmdw['substr'](0x1)['replace']('x', '0x'))) : (ey0xr['error']('entity not found:' + yxze), yxze);
  }function au6m35(f7_o8j) {
    if (f7_o8j > s7l_) {
      var k92n$g = a5u1dm['substring'](s7l_, f7_o8j)['replace'](/&#?\w+;/g, l_78fs);ck92n$ && l978cs(s7l_), mwud1['characters'](k92n$g, 0x0, f7_o8j - s7l_), s7l_ = f7_o8j;
    }
  }function l978cs(vam63, a36vy) {
    for (; vam63 >= y6av03 && (a36vy = dwjt4['exec'](a5u1dm));) jo_hf = a36vy['index'], y6av03 = jo_hf + a36vy[0x0]['length'], ck92n$['lineNumber']++;ck92n$['columnNumber'] = vam63 - jo_hf + 0x1;
  }for (var jo_hf = 0x0, y6av03 = 0x0, dwjt4 = /.*(?:\r\n?|\n)|.*$/g, ck92n$ = mwud1['locator'], sc_8l = [{ 'currentNSMap': l_sf }], qgpin = {}, s7l_ = 0x0;;) {
    try {
      var dtm15u = a5u1dm['indexOf']('<', s7l_);if (0x0 > dtm15u) {
        if (!a5u1dm['substr'](s7l_)['match'](/^\s*$/)) {
          var $qigpn = mwud1['doc'],
              jfo7h_ = $qigpn['createTextNode'](a5u1dm['substr'](s7l_));$qigpn['appendChild'](jfo7h_), mwud1['currentElement'] = jfo7h_;
        }return;
      }switch (dtm15u > s7l_ && au6m35(dtm15u), a5u1dm['charAt'](dtm15u + 0x1)) {case '/':
          var o87l = a5u1dm['indexOf']('>', dtm15u + 0x3),
              m5udt = a5u1dm['substring'](dtm15u + 0x2, o87l),
              hwtjd = sc_8l['pop']();0x0 > o87l ? (m5udt = a5u1dm['substring'](dtm15u + 0x2)['replace'](/[\s<].*/, ''), ey0xr['error']('end tag name: ' + m5udt + ' is not complete:' + hwtjd['tagName']), o87l = dtm15u + 0x1 + m5udt['length']) : m5udt['match'](/\s</) && (m5udt = m5udt['replace'](/[\s<].*/, ''), ey0xr['error']('end tag name: ' + m5udt + ' maybe not complete'), o87l = dtm15u + 0x1 + m5udt['length']);var vy6a53 = hwtjd['localNSMap'],
              r3v60 = hwtjd['tagName'] == m5udt,
              jdwth = r3v60 || hwtjd['tagName'] && hwtjd['tagName']['toLowerCase']() == m5udt['toLowerCase']();if (jdwth) {
            if (mwud1['endElement'](hwtjd['uri'], hwtjd['localName'], m5udt), vy6a53) {
              for (var rez0y in vy6a53) mwud1['endPrefixMapping'](rez0y);
            }r3v60 || ey0xr['fatalError']('end tag name: ' + m5udt + ' is not match the current start tagName:' + hwtjd['tagName']);
          } else sc_8l['push'](hwtjd);o87l++;break;case '?':
          ck92n$ && l978cs(dtm15u), o87l = yothj4w(a5u1dm, dtm15u, mwud1);break;case '!':
          ck92n$ && l978cs(dtm15u), o87l = ytm5ud1(a5u1dm, dtm15u, mwud1, ey0xr);break;default:
          ck92n$ && l978cs(dtm15u);var hf_oj7 = new yv0zy3(),
              h4owfj = sc_8l[sc_8l['length'] - 0x1]['currentNSMap'],
              o87l = yjh4dw(a5u1dm, dtm15u, hf_oj7, h4owfj, l_78fs, ey0xr),
              c87s9 = hf_oj7['length'];if (!hf_oj7['closed'] && yqping$(a5u1dm, o87l, hf_oj7['tagName'], qgpin) && (hf_oj7['closed'] = !0x0, v6ry30['nbsp'] || ey0xr['warning']('unclosed xml attribute')), ck92n$ && c87s9) {
            for (var wj4ohf = yi$gnq2(ck92n$, {}), $gnqi2 = 0x0; c87s9 > $gnqi2; $gnqi2++) {
              var tuwd14 = hf_oj7[$gnqi2];l978cs(tuwd14['offset']), tuwd14['locator'] = yi$gnq2(ck92n$, {});
            }mwud1['locator'] = wj4ohf, ymv53a6(hf_oj7, mwud1, h4owfj) && sc_8l['push'](hf_oj7), mwud1['locator'] = ck92n$;
          } else ymv53a6(hf_oj7, mwud1, h4owfj) && sc_8l['push'](hf_oj7);'http://www.w3.org/1999/xhtml' !== hf_oj7['uri'] || hf_oj7['closed'] ? o87l++ : o87l = ydutmw(a5u1dm, o87l, hf_oj7['tagName'], l_78fs, mwud1);}
    } catch (xrzye0) {
      ey0xr['error']('element parse error: ' + xrzye0), o87l = -0x1;
    }o87l > s7l_ ? s7l_ = o87l : au6m35(Math['max'](dtm15u, s7l_) + 0x1);
  }
}function yi$gnq2(woh4tj, h7_) {
  return h7_['lineNumber'] = woh4tj['lineNumber'], h7_['columnNumber'] = woh4tj['columnNumber'], h7_;
}function yjh4dw(t1wdmu, pngqi$, c92ls, a61mu, zr0vx, s9kn) {
  for (var v3ay65, f7_l8o, tu51md = ++pngqi$, whdt14 = yg2$ki;;) {
    var kn2i$g = t1wdmu['charAt'](tu51md);switch (kn2i$g) {case '=':
        if (whdt14 === yhoj4_f) v3ay65 = t1wdmu['slice'](pngqi$, tu51md), whdt14 = ys89kcl;else {
          if (whdt14 !== yo78j_) throw new Error('attribute equal must after attrName');whdt14 = ys89kcl;
        }break;case '\x27':case '\x22':
        if (whdt14 === ys89kcl || whdt14 === yhoj4_f) {
          if (whdt14 === yhoj4_f && (s9kn['warning']('attribute value must after "="'), v3ay65 = t1wdmu['slice'](pngqi$, tu51md)), pngqi$ = tu51md + 0x1, tu51md = t1wdmu['indexOf'](kn2i$g, pngqi$), !(tu51md > 0x0)) throw new Error('attribute value no end \'' + kn2i$g + '\' match');f7_l8o = t1wdmu['slice'](pngqi$, tu51md)['replace'](/&#?\w+;/g, zr0vx), c92ls['add'](v3ay65, f7_l8o, pngqi$ - 0x1), whdt14 = yrvyz0x;
        } else {
          if (whdt14 != y_s87c) throw new Error('attribute value must after "="');f7_l8o = t1wdmu['slice'](pngqi$, tu51md)['replace'](/&#?\w+;/g, zr0vx), c92ls['add'](v3ay65, f7_l8o, pngqi$), s9kn['warning']('attribute "' + v3ay65 + '" missed start quot(' + kn2i$g + ')!!'), pngqi$ = tu51md + 0x1, whdt14 = yrvyz0x;
        }break;case '/':
        switch (whdt14) {case yg2$ki:
            c92ls['setTagName'](t1wdmu['slice'](pngqi$, tu51md));case yrvyz0x:case yf_7j8:case yvyxz0:
            whdt14 = yvyxz0, c92ls['closed'] = !0x0;case y_s87c:case yhoj4_f:case yo78j_:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return s9kn['error']('unexpected end of input'), whdt14 == yg2$ki && c92ls['setTagName'](t1wdmu['slice'](pngqi$, tu51md)), tu51md;case '>':
        switch (whdt14) {case yg2$ki:
            c92ls['setTagName'](t1wdmu['slice'](pngqi$, tu51md));case yrvyz0x:case yf_7j8:case yvyxz0:
            break;case y_s87c:case yhoj4_f:
            f7_l8o = t1wdmu['slice'](pngqi$, tu51md), '/' === f7_l8o['slice'](-0x1) && (c92ls['closed'] = !0x0, f7_l8o = f7_l8o['slice'](0x0, -0x1));case yo78j_:
            whdt14 === yo78j_ && (f7_l8o = v3ay65), whdt14 == y_s87c ? (s9kn['warning']('attribute "' + f7_l8o + '" missed quot(")!!'), c92ls['add'](v3ay65, f7_l8o['replace'](/&#?\w+;/g, zr0vx), pngqi$)) : ('http://www.w3.org/1999/xhtml' === a61mu[''] && f7_l8o['match'](/^(?:disabled|checked|selected)$/i) || s9kn['warning']('attribute "' + f7_l8o + '" missed value!! "' + f7_l8o + '" instead!!'), c92ls['add'](f7_l8o, f7_l8o, pngqi$));break;case ys89kcl:
            throw new Error('attribute value missed!!');}return tu51md;case '\u0080':
        kn2i$g = '\x20';default:
        if ('\x20' >= kn2i$g) switch (whdt14) {case yg2$ki:
            c92ls['setTagName'](t1wdmu['slice'](pngqi$, tu51md)), whdt14 = yf_7j8;break;case yhoj4_f:
            v3ay65 = t1wdmu['slice'](pngqi$, tu51md), whdt14 = yo78j_;break;case y_s87c:
            var f7_l8o = t1wdmu['slice'](pngqi$, tu51md)['replace'](/&#?\w+;/g, zr0vx);s9kn['warning']('attribute "' + f7_l8o + '" missed quot(")!!'), c92ls['add'](v3ay65, f7_l8o, pngqi$);case yrvyz0x:
            whdt14 = yf_7j8;} else switch (whdt14) {case yo78j_:
            {
              c92ls['tagName'];
            }'http://www.w3.org/1999/xhtml' === a61mu[''] && v3ay65['match'](/^(?:disabled|checked|selected)$/i) || s9kn['warning']('attribute "' + v3ay65 + '" missed value!! "' + v3ay65 + '" instead2!!'), c92ls['add'](v3ay65, v3ay65, pngqi$), pngqi$ = tu51md, whdt14 = yhoj4_f;break;case yrvyz0x:
            s9kn['warning']('attribute space is required"' + v3ay65 + '\x22!!');case yf_7j8:
            whdt14 = yhoj4_f, pngqi$ = tu51md;break;case ys89kcl:
            whdt14 = y_s87c, pngqi$ = tu51md;break;case yvyxz0:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}tu51md++;
  }
}function ymv53a6(ry036, fo4hjw, j_o8) {
  for (var ofh4_ = ry036['tagName'], e0rxyz = null, sk8l = ry036['length']; sk8l--;) {
    var z30vyr = ry036[sk8l],
        dt14w = z30vyr['qName'],
        u51dmt = z30vyr['value'],
        uad15 = dt14w['indexOf'](':');if (uad15 > 0x0) var _87lsc = z30vyr['prefix'] = dt14w['slice'](0x0, uad15),
        c79l8s = dt14w['slice'](uad15 + 0x1),
        ma5du1 = 'xmlns' === _87lsc && c79l8s;else c79l8s = dt14w, _87lsc = null, ma5du1 = 'xmlns' === dt14w && '';z30vyr['localName'] = c79l8s, ma5du1 !== !0x1 && (null == e0rxyz && (e0rxyz = {}, yc_8sl(j_o8, j_o8 = {})), j_o8[ma5du1] = e0rxyz[ma5du1] = u51dmt, z30vyr['uri'] = 'http://www.w3.org/2000/xmlns/', fo4hjw['startPrefixMapping'](ma5du1, u51dmt));
  }for (var sk8l = ry036['length']; sk8l--;) {
    z30vyr = ry036[sk8l];var _87lsc = z30vyr['prefix'];_87lsc && ('xml' === _87lsc && (z30vyr['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _87lsc && (z30vyr['uri'] = j_o8[_87lsc || '']));
  }var uad15 = ofh4_['indexOf'](':');uad15 > 0x0 ? (_87lsc = ry036['prefix'] = ofh4_['slice'](0x0, uad15), c79l8s = ry036['localName'] = ofh4_['slice'](uad15 + 0x1)) : (_87lsc = null, c79l8s = ry036['localName'] = ofh4_);var vay06 = ry036['uri'] = j_o8[_87lsc || ''];if (fo4hjw['startElement'](vay06, c79l8s, ofh4_, ry036), !ry036['closed']) return ry036['currentNSMap'] = j_o8, ry036['localNSMap'] = e0rxyz, !0x0;if (fo4hjw['endElement'](vay06, c79l8s, ofh4_), e0rxyz) {
    for (_87lsc in e0rxyz) fo4hjw['endPrefixMapping'](_87lsc);
  }
}function ydutmw(fj_oh4, h4wt1d, t1u5md, jhf4wo, y0zvr3) {
  if (/^(?:script|textarea)$/i['test'](t1u5md)) {
    var t5mdu1 = fj_oh4['indexOf']('</' + t1u5md + '>', h4wt1d),
        lc8s = fj_oh4['substring'](h4wt1d + 0x1, t5mdu1);if (/[&<]/['test'](lc8s)) return (/^script$/i['test'](t1u5md) ? (y0zvr3['characters'](lc8s, 0x0, lc8s['length']), t5mdu1) : (lc8s = lc8s['replace'](/&#?\w+;/g, jhf4wo), y0zvr3['characters'](lc8s, 0x0, lc8s['length']), t5mdu1)
    );
  }return h4wt1d + 0x1;
}function yqping$(hdj, to4h, l8ck9s, fjo_h4) {
  var fs78_ = fjo_h4[l8ck9s];return null == fs78_ && (fs78_ = hdj['lastIndexOf']('</' + l8ck9s + '>'), to4h > fs78_ && (fs78_ = hdj['lastIndexOf']('</' + l8ck9s)), fjo_h4[l8ck9s] = fs78_), to4h > fs78_;
}function yc_8sl(wjfo, u63ma5) {
  for (var whf4oj in wjfo) u63ma5[whf4oj] = wjfo[whf4oj];
}function ytm5ud1(qi$gp, du51a, m1ud, v063a) {
  var cl7s_ = qi$gp['charAt'](du51a + 0x2);switch (cl7s_) {case '-':
      if ('-' === qi$gp['charAt'](du51a + 0x3)) {
        var j_oh7 = qi$gp['indexOf']('-->', du51a + 0x4);return j_oh7 > du51a ? (m1ud['comment'](qi$gp, du51a + 0x4, j_oh7 - du51a - 0x4), j_oh7 + 0x3) : (v063a['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qi$gp['substr'](du51a + 0x3, 0x6)) {
        var j_oh7 = qi$gp['indexOf'](']]>', du51a + 0x9);return m1ud['startCDATA'](), m1ud['characters'](qi$gp, du51a + 0x9, j_oh7 - du51a - 0x9), m1ud['endCDATA'](), j_oh7 + 0x3;
      }var md1tw = yadm1u5(qi$gp, du51a),
          s7lc89 = md1tw['length'];if (s7lc89 > 0x1 && /!doctype/i['test'](md1tw[0x0][0x0])) {
        var u3a6m5 = md1tw[0x1][0x0],
            l92csk = s7lc89 > 0x3 && /^public$/i['test'](md1tw[0x2][0x0]) && md1tw[0x3][0x0],
            hwfoj4 = s7lc89 > 0x4 && md1tw[0x4][0x0],
            d14tuw = md1tw[s7lc89 - 0x1];return m1ud['startDTD'](u3a6m5, l92csk && l92csk['replace'](/^(['"])(.*?)\1$/, '$2'), hwfoj4 && hwfoj4['replace'](/^(['"])(.*?)\1$/, '$2')), m1ud['endDTD'](), d14tuw['index'] + d14tuw[0x0]['length'];
      }}return -0x1;
}function yothj4w(h_jfo4, fo7_h, qp$ngi) {
  var ls7c8_ = h_jfo4['indexOf']('?>', fo7_h);if (ls7c8_) {
    var f_7oj = h_jfo4['substring'](fo7_h, ls7c8_)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (f_7oj) {
      {
        f_7oj[0x0]['length'];
      }return qp$ngi['processingInstruction'](f_7oj[0x1], f_7oj[0x2]), ls7c8_ + 0x2;
    }return -0x1;
  }return -0x1;
}function yv0zy3() {}function yf7_8oj(av603y, kni$g2) {
  return av603y['__proto__'] = kni$g2, av603y;
}function yadm1u5(a3v56m, adu1m) {
  var m1tdwu,
      vy30r = [],
      m51da = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (m51da['lastIndex'] = adu1m, m51da['exec'](a3v56m); m1tdwu = m51da['exec'](a3v56m);) if (vy30r['push'](m1tdwu), m1tdwu[0x1]) return vy30r;
}var yl8sc97 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    yd4jht = new RegExp('[\\-\\.0-9' + yl8sc97['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    yfl8_s7 = new RegExp('^' + yl8sc97['source'] + yd4jht['source'] + '*(?::' + yl8sc97['source'] + yd4jht['source'] + '*)?$'),
    yg2$ki = 0x0,
    yhoj4_f = 0x1,
    yo78j_ = 0x2,
    ys89kcl = 0x3,
    y_s87c = 0x4,
    yrvyz0x = 0x5,
    yf_7j8 = 0x6,
    yvyxz0 = 0x7;y_lc8['prototype'] = { 'parse': function (ng$ip, wudt, avy30) {
    var nk29c$ = this['domBuilder'];nk29c$['startDocument'](), yc_8sl(wudt, wudt = {}), ykn$2c(ng$ip, wudt, avy30, nk29c$, this['errorHandler']), nk29c$['endDocument']();
  } }, yv0zy3['prototype'] = { 'setTagName': function (mu1a5) {
    if (!yfl8_s7['test'](mu1a5)) throw new Error('invalid tagName:' + mu1a5);this['tagName'] = mu1a5;
  }, 'add': function (r3zy, yrz0ex, k2cls9) {
    if (!yfl8_s7['test'](r3zy)) throw new Error('invalid attribute:' + r3zy);this[this['length']++] = { 'qName': r3zy, 'value': yrz0ex, 'offset': k2cls9 };
  }, 'length': 0x0, 'getLocalName': function (a3um5) {
    return this[a3um5]['localName'];
  }, 'getLocator': function (j4wt) {
    return this[j4wt]['locator'];
  }, 'getQName': function (j_f87o) {
    return this[j_f87o]['qName'];
  }, 'getURI': function (v6y35a) {
    return this[v6y35a]['uri'];
  }, 'getValue': function (fjo4_) {
    return this[fjo4_]['value'];
  } }, yf7_8oj({}, yf7_8oj['prototype']) instanceof yf7_8oj || (yf7_8oj = function (_l7f8o, c2$nk9) {
  function a6u3m5() {}a6u3m5['prototype'] = c2$nk9, a6u3m5 = new a6u3m5();for (c2$nk9 in _l7f8o) a6u3m5[c2$nk9] = _l7f8o[c2$nk9];return a6u3m5;
}), exports['XMLReader'] = y_lc8;