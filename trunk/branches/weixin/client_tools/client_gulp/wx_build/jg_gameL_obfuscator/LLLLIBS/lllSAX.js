var W = wx.$l;
function L9h2ab() {}function L9bsd$a2(_n0x4, tflzq5, x0ycr, z5, ot9l5) {
  function f5l($dsb8) {
    if ($dsb8 > 0xffff) {
      $dsb8 -= 0x10000;var qztl = 0xd800 + ($dsb8 >> 0xa),
          n_$4 = 0xdc00 + (0x3ff & $dsb8);return String['fromCharCode'](qztl, n_$4);
    }return String['fromCharCode']($dsb8);
  }function _8n4xs(_xy30) {
    var f759vo = _xy30['slice'](0x1, -0x1);return f759vo in x0ycr ? x0ycr[f759vo] : '#' === f759vo['charAt'](0x0) ? f5l(parseInt(f759vo['substr'](0x1)['replace']('x', '0x'))) : (ot9l5['error']('entity not found:' + _xy30), _xy30);
  }function _s4d8(n_$8s4) {
    if (n_$8s4 > ot95l) {
      var thjqzl = _n0x4['substring'](ot95l, n_$8s4)['replace'](/&#?\w+;/g, _8n4xs);jqlkz && ba2s$(ot95l), z5['characters'](thjqzl, 0x0, n_$8s4 - ot95l), ot95l = n_$8s4;
    }
  }function ba2s$(lhjzk, ftzl5q) {
    for (; lhjzk >= sx4_n && (ftzl5q = vgeu7['exec'](_n0x4));) d$sab2 = ftzl5q['index'], sx4_n = d$sab2 + ftzl5q[0x0]['length'], jqlkz['lineNumber']++;jqlkz['columnNumber'] = lhjzk - d$sab2 + 0x1;
  }for (var d$sab2 = 0x0, sx4_n = 0x0, vgeu7 = /.*(?:\r\n?|\n)|.*$/g, jqlkz = z5['locator'], rym03c = [{ 'currentNSMap': tflzq5 }], o5t7f9 = {}, ot95l = 0x0;;) {
    try {
      var cy03rm = _n0x4['indexOf']('<', ot95l);if (0x0 > cy03rm) {
        if (!_n0x4['substr'](ot95l)['match'](/^\s*$/)) {
          var azbjhk = z5['doc'],
              lo5f9 = azbjhk['createTextNode'](_n0x4['substr'](ot95l));azbjhk['appendChild'](lo5f9), z5['currentElement'] = lo5f9;
        }return;
      }switch (cy03rm > ot95l && _s4d8(cy03rm), _n0x4['charAt'](cy03rm + 0x1)) {case '/':
          var $28s4d = _n0x4['indexOf']('>', cy03rm + 0x3),
              kjqhaz = _n0x4['substring'](cy03rm + 0x2, $28s4d),
              e7ugv1 = rym03c['pop']();0x0 > $28s4d ? (kjqhaz = _n0x4['substring'](cy03rm + 0x2)['replace'](/[\s<].*/, ''), ot9l5['error']('end tag name: ' + kjqhaz + ' is not complete:' + e7ugv1['tagName']), $28s4d = cy03rm + 0x1 + kjqhaz['length']) : kjqhaz['match'](/\s</) && (kjqhaz = kjqhaz['replace'](/[\s<].*/, ''), ot9l5['error']('end tag name: ' + kjqhaz + ' maybe not complete'), $28s4d = cy03rm + 0x1 + kjqhaz['length']);var ov1f7 = e7ugv1['localNSMap'],
              riwm3c = e7ugv1['tagName'] == kjqhaz,
              r0xyc3 = riwm3c || e7ugv1['tagName'] && e7ugv1['tagName']['toLowerCase']() == kjqhaz['toLowerCase']();if (r0xyc3) {
            if (z5['endElement'](e7ugv1['uri'], e7ugv1['localName'], kjqhaz), ov1f7) {
              for (var a$dsb in ov1f7) z5['endPrefixMapping'](a$dsb);
            }riwm3c || ot9l5['fatalError']('end tag name: ' + kjqhaz + ' is not match the current start tagName:' + e7ugv1['tagName']);
          } else rym03c['push'](e7ugv1);$28s4d++;break;case '?':
          jqlkz && ba2s$(cy03rm), $28s4d = L9s_4n8(_n0x4, cy03rm, z5);break;case '!':
          jqlkz && ba2s$(cy03rm), $28s4d = L9kb2jad(_n0x4, cy03rm, z5, ot9l5);break;default:
          jqlkz && ba2s$(cy03rm);var to5f7 = new L9d8s24(),
              ep61g = rym03c[rym03c['length'] - 0x1]['currentNSMap'],
              $28s4d = L9q5tlzf(_n0x4, cy03rm, to5f7, ep61g, _8n4xs, ot9l5),
              y03nx_ = to5f7['length'];if (!to5f7['closed'] && L9jlz(_n0x4, $28s4d, to5f7['tagName'], o5t7f9) && (to5f7['closed'] = !0x0, x0ycr['nbsp'] || ot9l5['warning']('unclosed xml attribute')), jqlkz && y03nx_) {
            for (var djk = L9x_n(jqlkz, {}), rwimc = 0x0; y03nx_ > rwimc; rwimc++) {
              var _s4$d = to5f7[rwimc];ba2s$(_s4$d['offset']), _s4$d['locator'] = L9x_n(jqlkz, {});
            }z5['locator'] = djk, L9n4$s_8(to5f7, z5, ep61g) && rym03c['push'](to5f7), z5['locator'] = jqlkz;
          } else L9n4$s_8(to5f7, z5, ep61g) && rym03c['push'](to5f7);'http://www.w3.org/1999/xhtml' !== to5f7['uri'] || to5f7['closed'] ? $28s4d++ : $28s4d = L9zbahkj(_n0x4, $28s4d, to5f7['tagName'], _8n4xs, z5);}
    } catch (ztqh5) {
      ot9l5['error']('element parse error: ' + ztqh5), $28s4d = -0x1;
    }$28s4d > ot95l ? ot95l = $28s4d : _s4d8(Math['max'](cy03rm, ot95l) + 0x1);
  }
}function L9x_n(zqft5l, vegu71) {
  return vegu71['lineNumber'] = zqft5l['lineNumber'], vegu71['columnNumber'] = zqft5l['columnNumber'], vegu71;
}function L9q5tlzf(d$s42, a2dk$, _sd8$4, $4n_8, $dab2, qlz) {
  for (var gu16p, s84$d, o7t9 = ++a2dk$, _4sx8 = L9gue1v;;) {
    var vegu1 = d$s42['charAt'](o7t9);switch (vegu1) {case '=':
        if (_4sx8 === L9vu7ge1) gu16p = d$s42['slice'](a2dk$, o7t9), _4sx8 = L9x_yn3;else {
          if (_4sx8 !== L9x4y) throw new Error('attribute equal must after attrName');_4sx8 = L9x_yn3;
        }break;case '\x27':case '\x22':
        if (_4sx8 === L9x_yn3 || _4sx8 === L9vu7ge1) {
          if (_4sx8 === L9vu7ge1 && (qlz['warning']('attribute value must after "="'), gu16p = d$s42['slice'](a2dk$, o7t9)), a2dk$ = o7t9 + 0x1, o7t9 = d$s42['indexOf'](vegu1, a2dk$), !(o7t9 > 0x0)) throw new Error('attribute value no end \'' + vegu1 + '\' match');s84$d = d$s42['slice'](a2dk$, o7t9)['replace'](/&#?\w+;/g, $dab2), _sd8$4['add'](gu16p, s84$d, a2dk$ - 0x1), _4sx8 = L9r03xyc;
        } else {
          if (_4sx8 != L9zf5qlt) throw new Error('attribute value must after "="');s84$d = d$s42['slice'](a2dk$, o7t9)['replace'](/&#?\w+;/g, $dab2), _sd8$4['add'](gu16p, s84$d, a2dk$), qlz['warning']('attribute "' + gu16p + '" missed start quot(' + vegu1 + ')!!'), a2dk$ = o7t9 + 0x1, _4sx8 = L9r03xyc;
        }break;case '/':
        switch (_4sx8) {case L9gue1v:
            _sd8$4['setTagName'](d$s42['slice'](a2dk$, o7t9));case L9r03xyc:case L9k$:case L9t9:
            _4sx8 = L9t9, _sd8$4['closed'] = !0x0;case L9zf5qlt:case L9vu7ge1:case L9x4y:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return qlz['error']('unexpected end of input'), _4sx8 == L9gue1v && _sd8$4['setTagName'](d$s42['slice'](a2dk$, o7t9)), o7t9;case '>':
        switch (_4sx8) {case L9gue1v:
            _sd8$4['setTagName'](d$s42['slice'](a2dk$, o7t9));case L9r03xyc:case L9k$:case L9t9:
            break;case L9zf5qlt:case L9vu7ge1:
            s84$d = d$s42['slice'](a2dk$, o7t9), '/' === s84$d['slice'](-0x1) && (_sd8$4['closed'] = !0x0, s84$d = s84$d['slice'](0x0, -0x1));case L9x4y:
            _4sx8 === L9x4y && (s84$d = gu16p), _4sx8 == L9zf5qlt ? (qlz['warning']('attribute "' + s84$d + '" missed quot(")!!'), _sd8$4['add'](gu16p, s84$d['replace'](/&#?\w+;/g, $dab2), a2dk$)) : ('http://www.w3.org/1999/xhtml' === $4n_8[''] && s84$d['match'](/^(?:disabled|checked|selected)$/i) || qlz['warning']('attribute "' + s84$d + '" missed value!! "' + s84$d + '" instead!!'), _sd8$4['add'](s84$d, s84$d, a2dk$));break;case L9x_yn3:
            throw new Error('attribute value missed!!');}return o7t9;case '\u0080':
        vegu1 = '\x20';default:
        if ('\x20' >= vegu1) switch (_4sx8) {case L9gue1v:
            _sd8$4['setTagName'](d$s42['slice'](a2dk$, o7t9)), _4sx8 = L9k$;break;case L9vu7ge1:
            gu16p = d$s42['slice'](a2dk$, o7t9), _4sx8 = L9x4y;break;case L9zf5qlt:
            var s84$d = d$s42['slice'](a2dk$, o7t9)['replace'](/&#?\w+;/g, $dab2);qlz['warning']('attribute "' + s84$d + '" missed quot(")!!'), _sd8$4['add'](gu16p, s84$d, a2dk$);case L9r03xyc:
            _4sx8 = L9k$;} else switch (_4sx8) {case L9x4y:
            {
              _sd8$4['tagName'];
            }'http://www.w3.org/1999/xhtml' === $4n_8[''] && gu16p['match'](/^(?:disabled|checked|selected)$/i) || qlz['warning']('attribute "' + gu16p + '" missed value!! "' + gu16p + '" instead2!!'), _sd8$4['add'](gu16p, gu16p, a2dk$), a2dk$ = o7t9, _4sx8 = L9vu7ge1;break;case L9r03xyc:
            qlz['warning']('attribute space is required"' + gu16p + '\x22!!');case L9k$:
            _4sx8 = L9vu7ge1, a2dk$ = o7t9;break;case L9x_yn3:
            _4sx8 = L9zf5qlt, a2dk$ = o7t9;break;case L9t9:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}o7t9++;
  }
}function L9n4$s_8(n4$8s, kajqhz, euv6) {
  for (var gvu71e = n4$8s['tagName'], ftqzl = null, _x4ny = n4$8s['length']; _x4ny--;) {
    var habk2 = n4$8s[_x4ny],
        p1g6eu = habk2['qName'],
        akj2d = habk2['value'],
        hbja2 = p1g6eu['indexOf'](':');if (hbja2 > 0x0) var og7ev = habk2['prefix'] = p1g6eu['slice'](0x0, hbja2),
        d48$2 = p1g6eu['slice'](hbja2 + 0x1),
        tqzj = 'xmlns' === og7ev && d48$2;else d48$2 = p1g6eu, og7ev = null, tqzj = 'xmlns' === p1g6eu && '';habk2['localName'] = d48$2, tqzj !== !0x1 && (null == ftqzl && (ftqzl = {}, L9kqjzh(euv6, euv6 = {})), euv6[tqzj] = ftqzl[tqzj] = akj2d, habk2['uri'] = 'http://www.w3.org/2000/xmlns/', kajqhz['startPrefixMapping'](tqzj, akj2d));
  }for (var _x4ny = n4$8s['length']; _x4ny--;) {
    habk2 = n4$8s[_x4ny];var og7ev = habk2['prefix'];og7ev && ('xml' === og7ev && (habk2['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== og7ev && (habk2['uri'] = euv6[og7ev || '']));
  }var hbja2 = gvu71e['indexOf'](':');hbja2 > 0x0 ? (og7ev = n4$8s['prefix'] = gvu71e['slice'](0x0, hbja2), d48$2 = n4$8s['localName'] = gvu71e['slice'](hbja2 + 0x1)) : (og7ev = null, d48$2 = n4$8s['localName'] = gvu71e);var kb2aj = n4$8s['uri'] = euv6[og7ev || ''];if (kajqhz['startElement'](kb2aj, d48$2, gvu71e, n4$8s), !n4$8s['closed']) return n4$8s['currentNSMap'] = euv6, n4$8s['localNSMap'] = ftqzl, !0x0;if (kajqhz['endElement'](kb2aj, d48$2, gvu71e), ftqzl) {
    for (og7ev in ftqzl) kajqhz['endPrefixMapping'](og7ev);
  }
}function L9zbahkj(o9t5f7, s8$d4, abj2, bk$a, ql5htz) {
  if (/^(?:script|textarea)$/i['test'](abj2)) {
    var wrmic = o9t5f7['indexOf']('</' + abj2 + '>', s8$d4),
        v71eug = o9t5f7['substring'](s8$d4 + 0x1, wrmic);if (/[&<]/['test'](v71eug)) return (/^script$/i['test'](abj2) ? (ql5htz['characters'](v71eug, 0x0, v71eug['length']), wrmic) : (v71eug = v71eug['replace'](/&#?\w+;/g, bk$a), ql5htz['characters'](v71eug, 0x0, v71eug['length']), wrmic)
    );
  }return s8$d4 + 0x1;
}function L9jlz(v975fo, _x4ny8, _04xyn, x_0y4) {
  var x0rc = x_0y4[_04xyn];return null == x0rc && (x0rc = v975fo['lastIndexOf']('</' + _04xyn + '>'), _x4ny8 > x0rc && (x0rc = v975fo['lastIndexOf']('</' + _04xyn)), x_0y4[_04xyn] = x0rc), _x4ny8 > x0rc;
}function L9kqjzh(ry0c, cr3wm) {
  for (var zkja in ry0c) cr3wm[zkja] = ry0c[zkja];
}function L9kb2jad(rc3y0m, pg61u, n_y04, yxrc03) {
  var ahjz = rc3y0m['charAt'](pg61u + 0x2);switch (ahjz) {case '-':
      if ('-' === rc3y0m['charAt'](pg61u + 0x3)) {
        var e1ov79 = rc3y0m['indexOf']('-->', pg61u + 0x4);return e1ov79 > pg61u ? (n_y04['comment'](rc3y0m, pg61u + 0x4, e1ov79 - pg61u - 0x4), e1ov79 + 0x3) : (yxrc03['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == rc3y0m['substr'](pg61u + 0x3, 0x6)) {
        var e1ov79 = rc3y0m['indexOf'](']]>', pg61u + 0x9);return n_y04['startCDATA'](), n_y04['characters'](rc3y0m, pg61u + 0x9, e1ov79 - pg61u - 0x9), n_y04['endCDATA'](), e1ov79 + 0x3;
      }var qlt5hz = L9irw(rc3y0m, pg61u),
          w3rim = qlt5hz['length'];if (w3rim > 0x1 && /!doctype/i['test'](qlt5hz[0x0][0x0])) {
        var t5qfz = qlt5hz[0x1][0x0],
            ftz5 = w3rim > 0x3 && /^public$/i['test'](qlt5hz[0x2][0x0]) && qlt5hz[0x3][0x0],
            imcw3 = w3rim > 0x4 && qlt5hz[0x4][0x0],
            asdb$ = qlt5hz[w3rim - 0x1];return n_y04['startDTD'](t5qfz, ftz5 && ftz5['replace'](/^(['"])(.*?)\1$/, '$2'), imcw3 && imcw3['replace'](/^(['"])(.*?)\1$/, '$2')), n_y04['endDTD'](), asdb$['index'] + asdb$[0x0]['length'];
      }}return -0x1;
}function L9s_4n8(bhk2a, d2$a, yr03xn) {
  var jk2bd = bhk2a['indexOf']('?>', d2$a);if (jk2bd) {
    var fol95t = bhk2a['substring'](d2$a, jk2bd)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (fol95t) {
      {
        fol95t[0x0]['length'];
      }return yr03xn['processingInstruction'](fol95t[0x1], fol95t[0x2]), jk2bd + 0x2;
    }return -0x1;
  }return -0x1;
}function L9d8s24() {}function L9s48d$2(nx_8s, jhqza) {
  return nx_8s['__proto__'] = jhqza, nx_8s;
}function L9irw(_xn, s48d_$) {
  var v19e7o,
      $8_4n = [],
      hkqzj = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (hkqzj['lastIndex'] = s48d_$, hkqzj['exec'](_xn); v19e7o = hkqzj['exec'](_xn);) if ($8_4n['push'](v19e7o), v19e7o[0x1]) return $8_4n;
}var L9b$2kad = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9ev6 = new RegExp('[\\-\\.0-9' + L9b$2kad['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9jazkh = new RegExp('^' + L9b$2kad['source'] + L9ev6['source'] + '*(?::' + L9b$2kad['source'] + L9ev6['source'] + '*)?$'),
    L9gue1v = 0x0,
    L9vu7ge1 = 0x1,
    L9x4y = 0x2,
    L9x_yn3 = 0x3,
    L9zf5qlt = 0x4,
    L9r03xyc = 0x5,
    L9k$ = 0x6,
    L9t9 = 0x7;L9h2ab['prototype'] = { 'parse': function (rx0cy, jhkzq, m3rwc) {
    var ve6u1g = this['domBuilder'];ve6u1g['startDocument'](), L9kqjzh(jhkzq, jhkzq = {}), L9bsd$a2(rx0cy, jhkzq, m3rwc, ve6u1g, this['errorHandler']), ve6u1g['endDocument']();
  } }, L9d8s24['prototype'] = { 'setTagName': function (c0ri) {
    if (!L9jazkh['test'](c0ri)) throw new Error('invalid tagName:' + c0ri);this['tagName'] = c0ri;
  }, 'add': function (n48$_, a2bkh, o7gev) {
    if (!L9jazkh['test'](n48$_)) throw new Error('invalid attribute:' + n48$_);this[this['length']++] = { 'qName': n48$_, 'value': a2bkh, 'offset': o7gev };
  }, 'length': 0x0, 'getLocalName': function (i3rmc) {
    return this[i3rmc]['localName'];
  }, 'getLocator': function (kazjbh) {
    return this[kazjbh]['locator'];
  }, 'getQName': function (xy03c) {
    return this[xy03c]['qName'];
  }, 'getURI': function (ft9q5l) {
    return this[ft9q5l]['uri'];
  }, 'getValue': function (tf) {
    return this[tf]['value'];
  } }, L9s48d$2({}, L9s48d$2['prototype']) instanceof L9s48d$2 || (L9s48d$2 = function (k2jbah, sn8x_) {
  function icrw() {}icrw['prototype'] = sn8x_, icrw = new icrw();for (sn8x_ in k2jbah) icrw[sn8x_] = k2jbah[sn8x_];return icrw;
}), exports['XMLReader'] = L9h2ab;