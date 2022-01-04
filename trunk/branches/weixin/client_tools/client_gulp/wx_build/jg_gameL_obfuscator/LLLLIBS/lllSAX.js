var W = wx.$l;
function L9tfl59o() {}function L9_84nxy(g6u1ve, bad2s, s24$, x03yn_, bsd8$2) {
  function bajkd2(d428s$) {
    if (d428s$ > 0xffff) {
      d428s$ -= 0x10000;var $_8s4d = 0xd800 + (d428s$ >> 0xa),
          cmy3 = 0xdc00 + (0x3ff & d428s$);return String['fromCharCode']($_8s4d, cmy3);
    }return String['fromCharCode'](d428s$);
  }function r0mic3(kzh) {
    var rimc3 = kzh['slice'](0x1, -0x1);return rimc3 in s24$ ? s24$[rimc3] : '#' === rimc3['charAt'](0x0) ? bajkd2(parseInt(rimc3['substr'](0x1)['replace']('x', '0x'))) : (bsd8$2['error']('entity not found:' + kzh), kzh);
  }function f9q5lt(c0i3rm) {
    if (c0i3rm > x4n_8s) {
      var q5t9l = g6u1ve['substring'](x4n_8s, c0i3rm)['replace'](/&#?\w+;/g, r0mic3);thz && _ynx3(x4n_8s), x03yn_['characters'](q5t9l, 0x0, c0i3rm - x4n_8s), x4n_8s = c0i3rm;
    }
  }function _ynx3($28sb, uge17v) {
    for (; $28sb >= o9t7f && (uge17v = ltqh5['exec'](g6u1ve));) n03_x = uge17v['index'], o9t7f = n03_x + uge17v[0x0]['length'], thz['lineNumber']++;thz['columnNumber'] = $28sb - n03_x + 0x1;
  }for (var n03_x = 0x0, o9t7f = 0x0, ltqh5 = /.*(?:\r\n?|\n)|.*$/g, thz = x03yn_['locator'], tf597o = [{ 'currentNSMap': bad2s }], $2bsda = {}, x4n_8s = 0x0;;) {
    try {
      var db$k2a = g6u1ve['indexOf']('<', x4n_8s);if (0x0 > db$k2a) {
        if (!g6u1ve['substr'](x4n_8s)['match'](/^\s*$/)) {
          var yxr0 = x03yn_['doc'],
              vog7e = yxr0['createTextNode'](g6u1ve['substr'](x4n_8s));yxr0['appendChild'](vog7e), x03yn_['currentElement'] = vog7e;
        }return;
      }switch (db$k2a > x4n_8s && f9q5lt(db$k2a), g6u1ve['charAt'](db$k2a + 0x1)) {case '/':
          var v1geu7 = g6u1ve['indexOf']('>', db$k2a + 0x3),
              x3ryc = g6u1ve['substring'](db$k2a + 0x2, v1geu7),
              sad$b = tf597o['pop']();0x0 > v1geu7 ? (x3ryc = g6u1ve['substring'](db$k2a + 0x2)['replace'](/[\s<].*/, ''), bsd8$2['error']('end tag name: ' + x3ryc + ' is not complete:' + sad$b['tagName']), v1geu7 = db$k2a + 0x1 + x3ryc['length']) : x3ryc['match'](/\s</) && (x3ryc = x3ryc['replace'](/[\s<].*/, ''), bsd8$2['error']('end tag name: ' + x3ryc + ' maybe not complete'), v1geu7 = db$k2a + 0x1 + x3ryc['length']);var y_n3x = sad$b['localNSMap'],
              y3x_n = sad$b['tagName'] == x3ryc,
              y0r3m = y3x_n || sad$b['tagName'] && sad$b['tagName']['toLowerCase']() == x3ryc['toLowerCase']();if (y0r3m) {
            if (x03yn_['endElement'](sad$b['uri'], sad$b['localName'], x3ryc), y_n3x) {
              for (var u1gp6e in y_n3x) x03yn_['endPrefixMapping'](u1gp6e);
            }y3x_n || bsd8$2['fatalError']('end tag name: ' + x3ryc + ' is not match the current start tagName:' + sad$b['tagName']);
          } else tf597o['push'](sad$b);v1geu7++;break;case '?':
          thz && _ynx3(db$k2a), v1geu7 = L9y4n8x(g6u1ve, db$k2a, x03yn_);break;case '!':
          thz && _ynx3(db$k2a), v1geu7 = L9gv1eu7(g6u1ve, db$k2a, x03yn_, bsd8$2);break;default:
          thz && _ynx3(db$k2a);var e7vu1 = new L9$2b8d(),
              $ak2db = tf597o[tf597o['length'] - 0x1]['currentNSMap'],
              v1geu7 = L9mry0c(g6u1ve, db$k2a, e7vu1, $ak2db, r0mic3, bsd8$2),
              w3mrc = e7vu1['length'];if (!e7vu1['closed'] && L9xn0(g6u1ve, v1geu7, e7vu1['tagName'], $2bsda) && (e7vu1['closed'] = !0x0, s24$['nbsp'] || bsd8$2['warning']('unclosed xml attribute')), thz && w3mrc) {
            for (var aqhjzk = L9cmyr3(thz, {}), ir3cw = 0x0; w3mrc > ir3cw; ir3cw++) {
              var $8_4d = e7vu1[ir3cw];_ynx3($8_4d['offset']), $8_4d['locator'] = L9cmyr3(thz, {});
            }x03yn_['locator'] = aqhjzk, L9up61ge(e7vu1, x03yn_, $ak2db) && tf597o['push'](e7vu1), x03yn_['locator'] = thz;
          } else L9up61ge(e7vu1, x03yn_, $ak2db) && tf597o['push'](e7vu1);'http://www.w3.org/1999/xhtml' !== e7vu1['uri'] || e7vu1['closed'] ? v1geu7++ : v1geu7 = L9qtflz5(g6u1ve, v1geu7, e7vu1['tagName'], r0mic3, x03yn_);}
    } catch (lqthz) {
      bsd8$2['error']('element parse error: ' + lqthz), v1geu7 = -0x1;
    }v1geu7 > x4n_8s ? x4n_8s = v1geu7 : f9q5lt(Math['max'](db$k2a, x4n_8s) + 0x1);
  }
}function L9cmyr3(o7t, eg1o7v) {
  return eg1o7v['lineNumber'] = o7t['lineNumber'], eg1o7v['columnNumber'] = o7t['columnNumber'], eg1o7v;
}function L9mry0c(eu7vg, k2jahb, fl59ot, sb82$, ab$kd, ba2$d) {
  for (var ov75f9, y_n0, ge61p = ++k2jahb, o9ft5l = L9hljztq;;) {
    var oflt9 = eu7vg['charAt'](ge61p);switch (oflt9) {case '=':
        if (o9ft5l === L9cr0yx) ov75f9 = eu7vg['slice'](k2jahb, ge61p), o9ft5l = L9j2kdb;else {
          if (o9ft5l !== L9_0x4y) throw new Error('attribute equal must after attrName');o9ft5l = L9j2kdb;
        }break;case '\x27':case '\x22':
        if (o9ft5l === L9j2kdb || o9ft5l === L9cr0yx) {
          if (o9ft5l === L9cr0yx && (ba2$d['warning']('attribute value must after "="'), ov75f9 = eu7vg['slice'](k2jahb, ge61p)), k2jahb = ge61p + 0x1, ge61p = eu7vg['indexOf'](oflt9, k2jahb), !(ge61p > 0x0)) throw new Error('attribute value no end \'' + oflt9 + '\' match');y_n0 = eu7vg['slice'](k2jahb, ge61p)['replace'](/&#?\w+;/g, ab$kd), fl59ot['add'](ov75f9, y_n0, k2jahb - 0x1), o9ft5l = L9qz5lth;
        } else {
          if (o9ft5l != L9cim30) throw new Error('attribute value must after "="');y_n0 = eu7vg['slice'](k2jahb, ge61p)['replace'](/&#?\w+;/g, ab$kd), fl59ot['add'](ov75f9, y_n0, k2jahb), ba2$d['warning']('attribute "' + ov75f9 + '" missed start quot(' + oflt9 + ')!!'), k2jahb = ge61p + 0x1, o9ft5l = L9qz5lth;
        }break;case '/':
        switch (o9ft5l) {case L9hljztq:
            fl59ot['setTagName'](eu7vg['slice'](k2jahb, ge61p));case L9qz5lth:case L9hbkja:case L9xy8_4n:
            o9ft5l = L9xy8_4n, fl59ot['closed'] = !0x0;case L9cim30:case L9cr0yx:case L9_0x4y:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ba2$d['error']('unexpected end of input'), o9ft5l == L9hljztq && fl59ot['setTagName'](eu7vg['slice'](k2jahb, ge61p)), ge61p;case '>':
        switch (o9ft5l) {case L9hljztq:
            fl59ot['setTagName'](eu7vg['slice'](k2jahb, ge61p));case L9qz5lth:case L9hbkja:case L9xy8_4n:
            break;case L9cim30:case L9cr0yx:
            y_n0 = eu7vg['slice'](k2jahb, ge61p), '/' === y_n0['slice'](-0x1) && (fl59ot['closed'] = !0x0, y_n0 = y_n0['slice'](0x0, -0x1));case L9_0x4y:
            o9ft5l === L9_0x4y && (y_n0 = ov75f9), o9ft5l == L9cim30 ? (ba2$d['warning']('attribute "' + y_n0 + '" missed quot(")!!'), fl59ot['add'](ov75f9, y_n0['replace'](/&#?\w+;/g, ab$kd), k2jahb)) : ('http://www.w3.org/1999/xhtml' === sb82$[''] && y_n0['match'](/^(?:disabled|checked|selected)$/i) || ba2$d['warning']('attribute "' + y_n0 + '" missed value!! "' + y_n0 + '" instead!!'), fl59ot['add'](y_n0, y_n0, k2jahb));break;case L9j2kdb:
            throw new Error('attribute value missed!!');}return ge61p;case '\u0080':
        oflt9 = '\x20';default:
        if ('\x20' >= oflt9) switch (o9ft5l) {case L9hljztq:
            fl59ot['setTagName'](eu7vg['slice'](k2jahb, ge61p)), o9ft5l = L9hbkja;break;case L9cr0yx:
            ov75f9 = eu7vg['slice'](k2jahb, ge61p), o9ft5l = L9_0x4y;break;case L9cim30:
            var y_n0 = eu7vg['slice'](k2jahb, ge61p)['replace'](/&#?\w+;/g, ab$kd);ba2$d['warning']('attribute "' + y_n0 + '" missed quot(")!!'), fl59ot['add'](ov75f9, y_n0, k2jahb);case L9qz5lth:
            o9ft5l = L9hbkja;} else switch (o9ft5l) {case L9_0x4y:
            {
              fl59ot['tagName'];
            }'http://www.w3.org/1999/xhtml' === sb82$[''] && ov75f9['match'](/^(?:disabled|checked|selected)$/i) || ba2$d['warning']('attribute "' + ov75f9 + '" missed value!! "' + ov75f9 + '" instead2!!'), fl59ot['add'](ov75f9, ov75f9, k2jahb), k2jahb = ge61p, o9ft5l = L9cr0yx;break;case L9qz5lth:
            ba2$d['warning']('attribute space is required"' + ov75f9 + '\x22!!');case L9hbkja:
            o9ft5l = L9cr0yx, k2jahb = ge61p;break;case L9j2kdb:
            o9ft5l = L9cim30, k2jahb = ge61p;break;case L9xy8_4n:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ge61p++;
  }
}function L9up61ge(f5tzlq, t9of7, lztj) {
  for (var $k2ba = f5tzlq['tagName'], s2d$ba = null, rmc3i = f5tzlq['length']; rmc3i--;) {
    var bs$d82 = f5tzlq[rmc3i],
        c0ymr = bs$d82['qName'],
        ka2bjh = bs$d82['value'],
        _0xy4 = c0ymr['indexOf'](':');if (_0xy4 > 0x0) var ad2jk = bs$d82['prefix'] = c0ymr['slice'](0x0, _0xy4),
        s84d2$ = c0ymr['slice'](_0xy4 + 0x1),
        uep6 = 'xmlns' === ad2jk && s84d2$;else s84d2$ = c0ymr, ad2jk = null, uep6 = 'xmlns' === c0ymr && '';bs$d82['localName'] = s84d2$, uep6 !== !0x1 && (null == s2d$ba && (s2d$ba = {}, L9egv1u6(lztj, lztj = {})), lztj[uep6] = s2d$ba[uep6] = ka2bjh, bs$d82['uri'] = 'http://www.w3.org/2000/xmlns/', t9of7['startPrefixMapping'](uep6, ka2bjh));
  }for (var rmc3i = f5tzlq['length']; rmc3i--;) {
    bs$d82 = f5tzlq[rmc3i];var ad2jk = bs$d82['prefix'];ad2jk && ('xml' === ad2jk && (bs$d82['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ad2jk && (bs$d82['uri'] = lztj[ad2jk || '']));
  }var _0xy4 = $k2ba['indexOf'](':');_0xy4 > 0x0 ? (ad2jk = f5tzlq['prefix'] = $k2ba['slice'](0x0, _0xy4), s84d2$ = f5tzlq['localName'] = $k2ba['slice'](_0xy4 + 0x1)) : (ad2jk = null, s84d2$ = f5tzlq['localName'] = $k2ba);var kdjb2 = f5tzlq['uri'] = lztj[ad2jk || ''];if (t9of7['startElement'](kdjb2, s84d2$, $k2ba, f5tzlq), !f5tzlq['closed']) return f5tzlq['currentNSMap'] = lztj, f5tzlq['localNSMap'] = s2d$ba, !0x0;if (t9of7['endElement'](kdjb2, s84d2$, $k2ba), s2d$ba) {
    for (ad2jk in s2d$ba) t9of7['endPrefixMapping'](ad2jk);
  }
}function L9qtflz5(evg7u, ahkjqz, k2a$d, $s_48n, x8s_4) {
  if (/^(?:script|textarea)$/i['test'](k2a$d)) {
    var a2bdjk = evg7u['indexOf']('</' + k2a$d + '>', ahkjqz),
        azbj = evg7u['substring'](ahkjqz + 0x1, a2bdjk);if (/[&<]/['test'](azbj)) return (/^script$/i['test'](k2a$d) ? (x8s_4['characters'](azbj, 0x0, azbj['length']), a2bdjk) : (azbj = azbj['replace'](/&#?\w+;/g, $s_48n), x8s_4['characters'](azbj, 0x0, azbj['length']), a2bdjk)
    );
  }return ahkjqz + 0x1;
}function L9xn0(o7ft95, $ad2k, abj2k, yx8n4) {
  var jhazbk = yx8n4[abj2k];return null == jhazbk && (jhazbk = o7ft95['lastIndexOf']('</' + abj2k + '>'), $ad2k > jhazbk && (jhazbk = o7ft95['lastIndexOf']('</' + abj2k)), yx8n4[abj2k] = jhazbk), $ad2k > jhazbk;
}function L9egv1u6(qhza, a2sb) {
  for (var bdak2 in qhza) a2sb[bdak2] = qhza[bdak2];
}function L9gv1eu7(qhzt5, up6g1, lqtjh, ny_0) {
  var $_84n = qhzt5['charAt'](up6g1 + 0x2);switch ($_84n) {case '-':
      if ('-' === qhzt5['charAt'](up6g1 + 0x3)) {
        var dba2kj = qhzt5['indexOf']('-->', up6g1 + 0x4);return dba2kj > up6g1 ? (lqtjh['comment'](qhzt5, up6g1 + 0x4, dba2kj - up6g1 - 0x4), dba2kj + 0x3) : (ny_0['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qhzt5['substr'](up6g1 + 0x3, 0x6)) {
        var dba2kj = qhzt5['indexOf'](']]>', up6g1 + 0x9);return lqtjh['startCDATA'](), lqtjh['characters'](qhzt5, up6g1 + 0x9, dba2kj - up6g1 - 0x9), lqtjh['endCDATA'](), dba2kj + 0x3;
      }var hjbk = L9ue1p6(qhzt5, up6g1),
          o975fv = hjbk['length'];if (o975fv > 0x1 && /!doctype/i['test'](hjbk[0x0][0x0])) {
        var kdja2 = hjbk[0x1][0x0],
            mr03 = o975fv > 0x3 && /^public$/i['test'](hjbk[0x2][0x0]) && hjbk[0x3][0x0],
            fq59l = o975fv > 0x4 && hjbk[0x4][0x0],
            c0i3mr = hjbk[o975fv - 0x1];return lqtjh['startDTD'](kdja2, mr03 && mr03['replace'](/^(['"])(.*?)\1$/, '$2'), fq59l && fq59l['replace'](/^(['"])(.*?)\1$/, '$2')), lqtjh['endDTD'](), c0i3mr['index'] + c0i3mr[0x0]['length'];
      }}return -0x1;
}function L9y4n8x(flqtz5, tq5fl, u6egp1) {
  var abkzj = flqtz5['indexOf']('?>', tq5fl);if (abkzj) {
    var sx_84 = flqtz5['substring'](tq5fl, abkzj)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (sx_84) {
      {
        sx_84[0x0]['length'];
      }return u6egp1['processingInstruction'](sx_84[0x1], sx_84[0x2]), abkzj + 0x2;
    }return -0x1;
  }return -0x1;
}function L9$2b8d() {}function L9zt5hql(fo9v71, cyx3) {
  return fo9v71['__proto__'] = cyx3, fo9v71;
}function L9ue1p6(sba$d, e6guv1) {
  var s4_$8d,
      gue1v6 = [],
      ds4$28 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ds4$28['lastIndex'] = e6guv1, ds4$28['exec'](sba$d); s4_$8d = ds4$28['exec'](sba$d);) if (gue1v6['push'](s4_$8d), s4_$8d[0x1]) return gue1v6;
}var L9$as2db = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9d2$sa = new RegExp('[\\-\\.0-9' + L9$as2db['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9g7e = new RegExp('^' + L9$as2db['source'] + L9d2$sa['source'] + '*(?::' + L9$as2db['source'] + L9d2$sa['source'] + '*)?$'),
    L9hljztq = 0x0,
    L9cr0yx = 0x1,
    L9_0x4y = 0x2,
    L9j2kdb = 0x3,
    L9cim30 = 0x4,
    L9qz5lth = 0x5,
    L9hbkja = 0x6,
    L9xy8_4n = 0x7;L9tfl59o['prototype'] = { 'parse': function (ep61, ajbkhz, ljt) {
    var x0_ = this['domBuilder'];x0_['startDocument'](), L9egv1u6(ajbkhz, ajbkhz = {}), L9_84nxy(ep61, ajbkhz, ljt, x0_, this['errorHandler']), x0_['endDocument']();
  } }, L9$2b8d['prototype'] = { 'setTagName': function (ns_48) {
    if (!L9g7e['test'](ns_48)) throw new Error('invalid tagName:' + ns_48);this['tagName'] = ns_48;
  }, 'add': function (gve1u, bka2j, ov91f) {
    if (!L9g7e['test'](gve1u)) throw new Error('invalid attribute:' + gve1u);this[this['length']++] = { 'qName': gve1u, 'value': bka2j, 'offset': ov91f };
  }, 'length': 0x0, 'getLocalName': function (qf5lz) {
    return this[qf5lz]['localName'];
  }, 'getLocator': function (ve1o79) {
    return this[ve1o79]['locator'];
  }, 'getQName': function (c3wi) {
    return this[c3wi]['qName'];
  }, 'getURI': function (otf759) {
    return this[otf759]['uri'];
  }, 'getValue': function (f9o5) {
    return this[f9o5]['value'];
  } }, L9zt5hql({}, L9zt5hql['prototype']) instanceof L9zt5hql || (L9zt5hql = function (ajzhk, fq5t) {
  function d84$_s() {}d84$_s['prototype'] = fq5t, d84$_s = new d84$_s();for (fq5t in ajzhk) d84$_s[fq5t] = ajzhk[fq5t];return d84$_s;
}), exports['XMLReader'] = L9tfl59o;