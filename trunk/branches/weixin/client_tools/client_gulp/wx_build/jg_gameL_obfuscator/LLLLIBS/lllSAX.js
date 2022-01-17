var W = wx.$l;
function L9xr0n() {}function L9r3ny0x(v79f, tql9f, s8x_4n, l5zqth, e7vo9) {
  function ql9ft5(x4_yn) {
    if (x4_yn > 0xffff) {
      x4_yn -= 0x10000;var ue16p = 0xd800 + (x4_yn >> 0xa),
          cr03i = 0xdc00 + (0x3ff & x4_yn);return String['fromCharCode'](ue16p, cr03i);
    }return String['fromCharCode'](x4_yn);
  }function d8b$(zjhakq) {
    var nry = zjhakq['slice'](0x1, -0x1);return nry in s8x_4n ? s8x_4n[nry] : '#' === nry['charAt'](0x0) ? ql9ft5(parseInt(nry['substr'](0x1)['replace']('x', '0x'))) : (e7vo9['error']('entity not found:' + zjhakq), zjhakq);
  }function hkzqja(_4s$d8) {
    if (_4s$d8 > c3wrm) {
      var ny_4x0 = v79f['substring'](c3wrm, _4s$d8)['replace'](/&#?\w+;/g, d8b$);$82sd4 && bkj2d(c3wrm), l5zqth['characters'](ny_4x0, 0x0, _4s$d8 - c3wrm), c3wrm = _4s$d8;
    }
  }function bkj2d(vof917, $d2kab) {
    for (; vof917 >= yr03xn && ($d2kab = of579['exec'](v79f));) v1of7 = $d2kab['index'], yr03xn = v1of7 + $d2kab[0x0]['length'], $82sd4['lineNumber']++;$82sd4['columnNumber'] = vof917 - v1of7 + 0x1;
  }for (var v1of7 = 0x0, yr03xn = 0x0, of579 = /.*(?:\r\n?|\n)|.*$/g, $82sd4 = l5zqth['locator'], mr3y0 = [{ 'currentNSMap': tql9f }], s_$n4 = {}, c3wrm = 0x0;;) {
    try {
      var cxy3 = v79f['indexOf']('<', c3wrm);if (0x0 > cxy3) {
        if (!v79f['substr'](c3wrm)['match'](/^\s*$/)) {
          var kaqzh = l5zqth['doc'],
              d$kb2a = kaqzh['createTextNode'](v79f['substr'](c3wrm));kaqzh['appendChild'](d$kb2a), l5zqth['currentElement'] = d$kb2a;
        }return;
      }switch (cxy3 > c3wrm && hkzqja(cxy3), v79f['charAt'](cxy3 + 0x1)) {case '/':
          var t9lqf5 = v79f['indexOf']('>', cxy3 + 0x3),
              lqtz5h = v79f['substring'](cxy3 + 0x2, t9lqf5),
              n4x_y0 = mr3y0['pop']();0x0 > t9lqf5 ? (lqtz5h = v79f['substring'](cxy3 + 0x2)['replace'](/[\s<].*/, ''), e7vo9['error']('end tag name: ' + lqtz5h + ' is not complete:' + n4x_y0['tagName']), t9lqf5 = cxy3 + 0x1 + lqtz5h['length']) : lqtz5h['match'](/\s</) && (lqtz5h = lqtz5h['replace'](/[\s<].*/, ''), e7vo9['error']('end tag name: ' + lqtz5h + ' maybe not complete'), t9lqf5 = cxy3 + 0x1 + lqtz5h['length']);var zfqt5l = n4x_y0['localNSMap'],
              x0n_y4 = n4x_y0['tagName'] == lqtz5h,
              mic3 = x0n_y4 || n4x_y0['tagName'] && n4x_y0['tagName']['toLowerCase']() == lqtz5h['toLowerCase']();if (mic3) {
            if (l5zqth['endElement'](n4x_y0['uri'], n4x_y0['localName'], lqtz5h), zfqt5l) {
              for (var g7ove in zfqt5l) l5zqth['endPrefixMapping'](g7ove);
            }x0n_y4 || e7vo9['fatalError']('end tag name: ' + lqtz5h + ' is not match the current start tagName:' + n4x_y0['tagName']);
          } else mr3y0['push'](n4x_y0);t9lqf5++;break;case '?':
          $82sd4 && bkj2d(cxy3), t9lqf5 = L9zlqhkj(v79f, cxy3, l5zqth);break;case '!':
          $82sd4 && bkj2d(cxy3), t9lqf5 = L9db$s(v79f, cxy3, l5zqth, e7vo9);break;default:
          $82sd4 && bkj2d(cxy3);var zqtjhl = new L9_4$s(),
              xryc3 = mr3y0[mr3y0['length'] - 0x1]['currentNSMap'],
              t9lqf5 = L9ba$d2s(v79f, cxy3, zqtjhl, xryc3, d8b$, e7vo9),
              fv95o7 = zqtjhl['length'];if (!zqtjhl['closed'] && L9da$2b(v79f, t9lqf5, zqtjhl['tagName'], s_$n4) && (zqtjhl['closed'] = !0x0, s8x_4n['nbsp'] || e7vo9['warning']('unclosed xml attribute')), $82sd4 && fv95o7) {
            for (var s$_ = L9ynr03($82sd4, {}), o5t97 = 0x0; fv95o7 > o5t97; o5t97++) {
              var bhjkaz = zqtjhl[o5t97];bkj2d(bhjkaz['offset']), bhjkaz['locator'] = L9ynr03($82sd4, {});
            }l5zqth['locator'] = s$_, L9g6v(zqtjhl, l5zqth, xryc3) && mr3y0['push'](zqtjhl), l5zqth['locator'] = $82sd4;
          } else L9g6v(zqtjhl, l5zqth, xryc3) && mr3y0['push'](zqtjhl);'http://www.w3.org/1999/xhtml' !== zqtjhl['uri'] || zqtjhl['closed'] ? t9lqf5++ : t9lqf5 = L9up16(v79f, t9lqf5, zqtjhl['tagName'], d8b$, l5zqth);}
    } catch (s$n_48) {
      e7vo9['error']('element parse error: ' + s$n_48), t9lqf5 = -0x1;
    }t9lqf5 > c3wrm ? c3wrm = t9lqf5 : hkzqja(Math['max'](cxy3, c3wrm) + 0x1);
  }
}function L9ynr03(uv17ge, vuge17) {
  return vuge17['lineNumber'] = uv17ge['lineNumber'], vuge17['columnNumber'] = uv17ge['columnNumber'], vuge17;
}function L9ba$d2s(yr03cx, v79fo1, a2kjhb, t9ql5, euv1g7, d$24s8) {
  for (var qljtz, x_n04y, cimw3r = ++v79fo1, v71eog = L9t9o7f;;) {
    var ic03rm = yr03cx['charAt'](cimw3r);switch (ic03rm) {case '=':
        if (v71eog === L9rnyx3) qljtz = yr03cx['slice'](v79fo1, cimw3r), v71eog = L9ue1v7;else {
          if (v71eog !== L9jkh2b) throw new Error('attribute equal must after attrName');v71eog = L9ue1v7;
        }break;case '\x27':case '\x22':
        if (v71eog === L9ue1v7 || v71eog === L9rnyx3) {
          if (v71eog === L9rnyx3 && (d$24s8['warning']('attribute value must after "="'), qljtz = yr03cx['slice'](v79fo1, cimw3r)), v79fo1 = cimw3r + 0x1, cimw3r = yr03cx['indexOf'](ic03rm, v79fo1), !(cimw3r > 0x0)) throw new Error('attribute value no end \'' + ic03rm + '\' match');x_n04y = yr03cx['slice'](v79fo1, cimw3r)['replace'](/&#?\w+;/g, euv1g7), a2kjhb['add'](qljtz, x_n04y, v79fo1 - 0x1), v71eog = L9hbzka;
        } else {
          if (v71eog != L9egu61v) throw new Error('attribute value must after "="');x_n04y = yr03cx['slice'](v79fo1, cimw3r)['replace'](/&#?\w+;/g, euv1g7), a2kjhb['add'](qljtz, x_n04y, v79fo1), d$24s8['warning']('attribute "' + qljtz + '" missed start quot(' + ic03rm + ')!!'), v79fo1 = cimw3r + 0x1, v71eog = L9hbzka;
        }break;case '/':
        switch (v71eog) {case L9t9o7f:
            a2kjhb['setTagName'](yr03cx['slice'](v79fo1, cimw3r));case L9hbzka:case L9yx3r0c:case L9yr30m:
            v71eog = L9yr30m, a2kjhb['closed'] = !0x0;case L9egu61v:case L9rnyx3:case L9jkh2b:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return d$24s8['error']('unexpected end of input'), v71eog == L9t9o7f && a2kjhb['setTagName'](yr03cx['slice'](v79fo1, cimw3r)), cimw3r;case '>':
        switch (v71eog) {case L9t9o7f:
            a2kjhb['setTagName'](yr03cx['slice'](v79fo1, cimw3r));case L9hbzka:case L9yx3r0c:case L9yr30m:
            break;case L9egu61v:case L9rnyx3:
            x_n04y = yr03cx['slice'](v79fo1, cimw3r), '/' === x_n04y['slice'](-0x1) && (a2kjhb['closed'] = !0x0, x_n04y = x_n04y['slice'](0x0, -0x1));case L9jkh2b:
            v71eog === L9jkh2b && (x_n04y = qljtz), v71eog == L9egu61v ? (d$24s8['warning']('attribute "' + x_n04y + '" missed quot(")!!'), a2kjhb['add'](qljtz, x_n04y['replace'](/&#?\w+;/g, euv1g7), v79fo1)) : ('http://www.w3.org/1999/xhtml' === t9ql5[''] && x_n04y['match'](/^(?:disabled|checked|selected)$/i) || d$24s8['warning']('attribute "' + x_n04y + '" missed value!! "' + x_n04y + '" instead!!'), a2kjhb['add'](x_n04y, x_n04y, v79fo1));break;case L9ue1v7:
            throw new Error('attribute value missed!!');}return cimw3r;case '\u0080':
        ic03rm = '\x20';default:
        if ('\x20' >= ic03rm) switch (v71eog) {case L9t9o7f:
            a2kjhb['setTagName'](yr03cx['slice'](v79fo1, cimw3r)), v71eog = L9yx3r0c;break;case L9rnyx3:
            qljtz = yr03cx['slice'](v79fo1, cimw3r), v71eog = L9jkh2b;break;case L9egu61v:
            var x_n04y = yr03cx['slice'](v79fo1, cimw3r)['replace'](/&#?\w+;/g, euv1g7);d$24s8['warning']('attribute "' + x_n04y + '" missed quot(")!!'), a2kjhb['add'](qljtz, x_n04y, v79fo1);case L9hbzka:
            v71eog = L9yx3r0c;} else switch (v71eog) {case L9jkh2b:
            {
              a2kjhb['tagName'];
            }'http://www.w3.org/1999/xhtml' === t9ql5[''] && qljtz['match'](/^(?:disabled|checked|selected)$/i) || d$24s8['warning']('attribute "' + qljtz + '" missed value!! "' + qljtz + '" instead2!!'), a2kjhb['add'](qljtz, qljtz, v79fo1), v79fo1 = cimw3r, v71eog = L9rnyx3;break;case L9hbzka:
            d$24s8['warning']('attribute space is required"' + qljtz + '\x22!!');case L9yx3r0c:
            v71eog = L9rnyx3, v79fo1 = cimw3r;break;case L9ue1v7:
            v71eog = L9egu61v, v79fo1 = cimw3r;break;case L9yr30m:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}cimw3r++;
  }
}function L9g6v(mi03, e9o17, kqajh) {
  for (var ahjz = mi03['tagName'], s4_8n$ = null, _n$4s = mi03['length']; _n$4s--;) {
    var ka$2b = mi03[_n$4s],
        a2sd = ka$2b['qName'],
        b$d8s = ka$2b['value'],
        lt5of = a2sd['indexOf'](':');if (lt5of > 0x0) var veg1o7 = ka$2b['prefix'] = a2sd['slice'](0x0, lt5of),
        cr30i = a2sd['slice'](lt5of + 0x1),
        $s24 = 'xmlns' === veg1o7 && cr30i;else cr30i = a2sd, veg1o7 = null, $s24 = 'xmlns' === a2sd && '';ka$2b['localName'] = cr30i, $s24 !== !0x1 && (null == s4_8n$ && (s4_8n$ = {}, L9y0_4x(kqajh, kqajh = {})), kqajh[$s24] = s4_8n$[$s24] = b$d8s, ka$2b['uri'] = 'http://www.w3.org/2000/xmlns/', e9o17['startPrefixMapping']($s24, b$d8s));
  }for (var _n$4s = mi03['length']; _n$4s--;) {
    ka$2b = mi03[_n$4s];var veg1o7 = ka$2b['prefix'];veg1o7 && ('xml' === veg1o7 && (ka$2b['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== veg1o7 && (ka$2b['uri'] = kqajh[veg1o7 || '']));
  }var lt5of = ahjz['indexOf'](':');lt5of > 0x0 ? (veg1o7 = mi03['prefix'] = ahjz['slice'](0x0, lt5of), cr30i = mi03['localName'] = ahjz['slice'](lt5of + 0x1)) : (veg1o7 = null, cr30i = mi03['localName'] = ahjz);var hzjqk = mi03['uri'] = kqajh[veg1o7 || ''];if (e9o17['startElement'](hzjqk, cr30i, ahjz, mi03), !mi03['closed']) return mi03['currentNSMap'] = kqajh, mi03['localNSMap'] = s4_8n$, !0x0;if (e9o17['endElement'](hzjqk, cr30i, ahjz), s4_8n$) {
    for (veg1o7 in s4_8n$) e9o17['endPrefixMapping'](veg1o7);
  }
}function L9up16(zahjkq, cx03ry, b8s$2d, ljkqzh, lz5tf) {
  if (/^(?:script|textarea)$/i['test'](b8s$2d)) {
    var hjkaq = zahjkq['indexOf']('</' + b8s$2d + '>', cx03ry),
        e71gvu = zahjkq['substring'](cx03ry + 0x1, hjkaq);if (/[&<]/['test'](e71gvu)) return (/^script$/i['test'](b8s$2d) ? (lz5tf['characters'](e71gvu, 0x0, e71gvu['length']), hjkaq) : (e71gvu = e71gvu['replace'](/&#?\w+;/g, ljkqzh), lz5tf['characters'](e71gvu, 0x0, e71gvu['length']), hjkaq)
    );
  }return cx03ry + 0x1;
}function L9da$2b(lq5tf9, _8sxn4, s$2d8, n48_$) {
  var qtjhl = n48_$[s$2d8];return null == qtjhl && (qtjhl = lq5tf9['lastIndexOf']('</' + s$2d8 + '>'), _8sxn4 > qtjhl && (qtjhl = lq5tf9['lastIndexOf']('</' + s$2d8)), n48_$[s$2d8] = qtjhl), _8sxn4 > qtjhl;
}function L9y0_4x(lto, s8b2d$) {
  for (var zlqkjh in lto) s8b2d$[zlqkjh] = lto[zlqkjh];
}function L9db$s(qht5zl, f1o79v, ry30xn, y0c) {
  var qjthz = qht5zl['charAt'](f1o79v + 0x2);switch (qjthz) {case '-':
      if ('-' === qht5zl['charAt'](f1o79v + 0x3)) {
        var hjlzk = qht5zl['indexOf']('-->', f1o79v + 0x4);return hjlzk > f1o79v ? (ry30xn['comment'](qht5zl, f1o79v + 0x4, hjlzk - f1o79v - 0x4), hjlzk + 0x3) : (y0c['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qht5zl['substr'](f1o79v + 0x3, 0x6)) {
        var hjlzk = qht5zl['indexOf'](']]>', f1o79v + 0x9);return ry30xn['startCDATA'](), ry30xn['characters'](qht5zl, f1o79v + 0x9, hjlzk - f1o79v - 0x9), ry30xn['endCDATA'](), hjlzk + 0x3;
      }var x3cry = L9gpe16u(qht5zl, f1o79v),
          aj2bhk = x3cry['length'];if (aj2bhk > 0x1 && /!doctype/i['test'](x3cry[0x0][0x0])) {
        var v971of = x3cry[0x1][0x0],
            zhjlk = aj2bhk > 0x3 && /^public$/i['test'](x3cry[0x2][0x0]) && x3cry[0x3][0x0],
            rmi0c3 = aj2bhk > 0x4 && x3cry[0x4][0x0],
            abkjhz = x3cry[aj2bhk - 0x1];return ry30xn['startDTD'](v971of, zhjlk && zhjlk['replace'](/^(['"])(.*?)\1$/, '$2'), rmi0c3 && rmi0c3['replace'](/^(['"])(.*?)\1$/, '$2')), ry30xn['endDTD'](), abkjhz['index'] + abkjhz[0x0]['length'];
      }}return -0x1;
}function L9zlqhkj(c03xr, qlf9t, q5flt) {
  var n_8s4x = c03xr['indexOf']('?>', qlf9t);if (n_8s4x) {
    var jazhbk = c03xr['substring'](qlf9t, n_8s4x)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (jazhbk) {
      {
        jazhbk[0x0]['length'];
      }return q5flt['processingInstruction'](jazhbk[0x1], jazhbk[0x2]), n_8s4x + 0x2;
    }return -0x1;
  }return -0x1;
}function L9_4$s() {}function L9tqz5lf(yx0_n, a2kdbj) {
  return yx0_n['__proto__'] = a2kdbj, yx0_n;
}function L9gpe16u(mcwi3, zjkahb) {
  var s$db2,
      ricwm = [],
      bh2ja = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (bh2ja['lastIndex'] = zjkahb, bh2ja['exec'](mcwi3); s$db2 = bh2ja['exec'](mcwi3);) if (ricwm['push'](s$db2), s$db2[0x1]) return ricwm;
}var L9tqzl5f = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9lztjq = new RegExp('[\\-\\.0-9' + L9tqzl5f['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9_n4$8s = new RegExp('^' + L9tqzl5f['source'] + L9lztjq['source'] + '*(?::' + L9tqzl5f['source'] + L9lztjq['source'] + '*)?$'),
    L9t9o7f = 0x0,
    L9rnyx3 = 0x1,
    L9jkh2b = 0x2,
    L9ue1v7 = 0x3,
    L9egu61v = 0x4,
    L9hbzka = 0x5,
    L9yx3r0c = 0x6,
    L9yr30m = 0x7;L9xr0n['prototype'] = { 'parse': function (f5q9, vof957, bhkaz) {
    var sn84_x = this['domBuilder'];sn84_x['startDocument'](), L9y0_4x(vof957, vof957 = {}), L9r3ny0x(f5q9, vof957, bhkaz, sn84_x, this['errorHandler']), sn84_x['endDocument']();
  } }, L9_4$s['prototype'] = { 'setTagName': function (aj2bh) {
    if (!L9_n4$8s['test'](aj2bh)) throw new Error('invalid tagName:' + aj2bh);this['tagName'] = aj2bh;
  }, 'add': function (kjqhz, eugp61, olf95) {
    if (!L9_n4$8s['test'](kjqhz)) throw new Error('invalid attribute:' + kjqhz);this[this['length']++] = { 'qName': kjqhz, 'value': eugp61, 'offset': olf95 };
  }, 'length': 0x0, 'getLocalName': function (vf91o7) {
    return this[vf91o7]['localName'];
  }, 'getLocator': function (hjqka) {
    return this[hjqka]['locator'];
  }, 'getQName': function (s4_$8) {
    return this[s4_$8]['qName'];
  }, 'getURI': function (s$842) {
    return this[s$842]['uri'];
  }, 'getValue': function (zkjhqa) {
    return this[zkjhqa]['value'];
  } }, L9tqz5lf({}, L9tqz5lf['prototype']) instanceof L9tqz5lf || (L9tqz5lf = function (t5o7f, qjazkh) {
  function hqlztj() {}hqlztj['prototype'] = qjazkh, hqlztj = new hqlztj();for (qjazkh in t5o7f) hqlztj[qjazkh] = t5o7f[qjazkh];return hqlztj;
}), exports['XMLReader'] = L9xr0n;