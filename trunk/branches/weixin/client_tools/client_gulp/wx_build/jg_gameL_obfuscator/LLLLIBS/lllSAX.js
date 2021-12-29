var W = wx.$l;
function L9v719oe() {}function L9_xny8(hkjqlz, v71oge, g6e1v, b2$d, mc0r) {
  function bhkaj2(g61uv) {
    if (g61uv > 0xffff) {
      g61uv -= 0x10000;var $8d24s = 0xd800 + (g61uv >> 0xa),
          bds28$ = 0xdc00 + (0x3ff & g61uv);return String['fromCharCode']($8d24s, bds28$);
    }return String['fromCharCode'](g61uv);
  }function egv1u(n3xr0) {
    var q59fl = n3xr0['slice'](0x1, -0x1);return q59fl in g6e1v ? g6e1v[q59fl] : '#' === q59fl['charAt'](0x0) ? bhkaj2(parseInt(q59fl['substr'](0x1)['replace']('x', '0x'))) : (mc0r['error']('entity not found:' + n3xr0), n3xr0);
  }function dbk2$a(gpe61) {
    if (gpe61 > flo5t) {
      var khz = hkjqlz['substring'](flo5t, gpe61)['replace'](/&#?\w+;/g, egv1u);ftl9q5 && xsn8_4(flo5t), b2$d['characters'](khz, 0x0, gpe61 - flo5t), flo5t = gpe61;
    }
  }function xsn8_4(_yx03n, kajq) {
    for (; _yx03n >= qakjzh && (kajq = khzljq['exec'](hkjqlz));) l5zhqt = kajq['index'], qakjzh = l5zhqt + kajq[0x0]['length'], ftl9q5['lineNumber']++;ftl9q5['columnNumber'] = _yx03n - l5zhqt + 0x1;
  }for (var l5zhqt = 0x0, qakjzh = 0x0, khzljq = /.*(?:\r\n?|\n)|.*$/g, ftl9q5 = b2$d['locator'], htl5q = [{ 'currentNSMap': v71oge }], cri3m0 = {}, flo5t = 0x0;;) {
    try {
      var $abs2 = hkjqlz['indexOf']('<', flo5t);if (0x0 > $abs2) {
        if (!hkjqlz['substr'](flo5t)['match'](/^\s*$/)) {
          var bjzhak = b2$d['doc'],
              ba$d = bjzhak['createTextNode'](hkjqlz['substr'](flo5t));bjzhak['appendChild'](ba$d), b2$d['currentElement'] = ba$d;
        }return;
      }switch ($abs2 > flo5t && dbk2$a($abs2), hkjqlz['charAt']($abs2 + 0x1)) {case '/':
          var d_8s4 = hkjqlz['indexOf']('>', $abs2 + 0x3),
              zlqft5 = hkjqlz['substring']($abs2 + 0x2, d_8s4),
              _$d48 = htl5q['pop']();0x0 > d_8s4 ? (zlqft5 = hkjqlz['substring']($abs2 + 0x2)['replace'](/[\s<].*/, ''), mc0r['error']('end tag name: ' + zlqft5 + ' is not complete:' + _$d48['tagName']), d_8s4 = $abs2 + 0x1 + zlqft5['length']) : zlqft5['match'](/\s</) && (zlqft5 = zlqft5['replace'](/[\s<].*/, ''), mc0r['error']('end tag name: ' + zlqft5 + ' maybe not complete'), d_8s4 = $abs2 + 0x1 + zlqft5['length']);var vof597 = _$d48['localNSMap'],
              wc3mr = _$d48['tagName'] == zlqft5,
              f5q9 = wc3mr || _$d48['tagName'] && _$d48['tagName']['toLowerCase']() == zlqft5['toLowerCase']();if (f5q9) {
            if (b2$d['endElement'](_$d48['uri'], _$d48['localName'], zlqft5), vof597) {
              for (var ftl5zq in vof597) b2$d['endPrefixMapping'](ftl5zq);
            }wc3mr || mc0r['fatalError']('end tag name: ' + zlqft5 + ' is not match the current start tagName:' + _$d48['tagName']);
          } else htl5q['push'](_$d48);d_8s4++;break;case '?':
          ftl9q5 && xsn8_4($abs2), d_8s4 = L9lz5tq(hkjqlz, $abs2, b2$d);break;case '!':
          ftl9q5 && xsn8_4($abs2), d_8s4 = L9db2aj(hkjqlz, $abs2, b2$d, mc0r);break;default:
          ftl9q5 && xsn8_4($abs2);var $2sbd = new L9yrc3m(),
              d2$kab = htl5q[htl5q['length'] - 0x1]['currentNSMap'],
              d_8s4 = L9hzljk(hkjqlz, $abs2, $2sbd, d2$kab, egv1u, mc0r),
              crym = $2sbd['length'];if (!$2sbd['closed'] && L9eu17(hkjqlz, d_8s4, $2sbd['tagName'], cri3m0) && ($2sbd['closed'] = !0x0, g6e1v['nbsp'] || mc0r['warning']('unclosed xml attribute')), ftl9q5 && crym) {
            for (var jhzql = L9o75ft9(ftl9q5, {}), ry0xn3 = 0x0; crym > ry0xn3; ry0xn3++) {
              var yn4x_ = $2sbd[ry0xn3];xsn8_4(yn4x_['offset']), yn4x_['locator'] = L9o75ft9(ftl9q5, {});
            }b2$d['locator'] = jhzql, L9_sn$48($2sbd, b2$d, d2$kab) && htl5q['push']($2sbd), b2$d['locator'] = ftl9q5;
          } else L9_sn$48($2sbd, b2$d, d2$kab) && htl5q['push']($2sbd);'http://www.w3.org/1999/xhtml' !== $2sbd['uri'] || $2sbd['closed'] ? d_8s4++ : d_8s4 = L9_4x8sn(hkjqlz, d_8s4, $2sbd['tagName'], egv1u, b2$d);}
    } catch (kqzhj) {
      mc0r['error']('element parse error: ' + kqzhj), d_8s4 = -0x1;
    }d_8s4 > flo5t ? flo5t = d_8s4 : dbk2$a(Math['max']($abs2, flo5t) + 0x1);
  }
}function L9o75ft9(zjlkh, ztjlh) {
  return ztjlh['lineNumber'] = zjlkh['lineNumber'], ztjlh['columnNumber'] = zjlkh['columnNumber'], ztjlh;
}function L9hzljk(qt5l9f, bd2aj, y_n03, wcrim, e6guv1, gu71v) {
  for (var jkhb, fl9q, zqjht = ++bd2aj, v79e1 = L9zl5f;;) {
    var b$8d2s = qt5l9f['charAt'](zqjht);switch (b$8d2s) {case '=':
        if (v79e1 === L9s8$b2) jkhb = qt5l9f['slice'](bd2aj, zqjht), v79e1 = L9jb2kh;else {
          if (v79e1 !== L9l5hq) throw new Error('attribute equal must after attrName');v79e1 = L9jb2kh;
        }break;case '\x27':case '\x22':
        if (v79e1 === L9jb2kh || v79e1 === L9s8$b2) {
          if (v79e1 === L9s8$b2 && (gu71v['warning']('attribute value must after "="'), jkhb = qt5l9f['slice'](bd2aj, zqjht)), bd2aj = zqjht + 0x1, zqjht = qt5l9f['indexOf'](b$8d2s, bd2aj), !(zqjht > 0x0)) throw new Error('attribute value no end \'' + b$8d2s + '\' match');fl9q = qt5l9f['slice'](bd2aj, zqjht)['replace'](/&#?\w+;/g, e6guv1), y_n03['add'](jkhb, fl9q, bd2aj - 0x1), v79e1 = L9habz;
        } else {
          if (v79e1 != L9m30cy) throw new Error('attribute value must after "="');fl9q = qt5l9f['slice'](bd2aj, zqjht)['replace'](/&#?\w+;/g, e6guv1), y_n03['add'](jkhb, fl9q, bd2aj), gu71v['warning']('attribute "' + jkhb + '" missed start quot(' + b$8d2s + ')!!'), bd2aj = zqjht + 0x1, v79e1 = L9habz;
        }break;case '/':
        switch (v79e1) {case L9zl5f:
            y_n03['setTagName'](qt5l9f['slice'](bd2aj, zqjht));case L9habz:case L9jkhzqa:case L9mwir3c:
            v79e1 = L9mwir3c, y_n03['closed'] = !0x0;case L9m30cy:case L9s8$b2:case L9l5hq:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return gu71v['error']('unexpected end of input'), v79e1 == L9zl5f && y_n03['setTagName'](qt5l9f['slice'](bd2aj, zqjht)), zqjht;case '>':
        switch (v79e1) {case L9zl5f:
            y_n03['setTagName'](qt5l9f['slice'](bd2aj, zqjht));case L9habz:case L9jkhzqa:case L9mwir3c:
            break;case L9m30cy:case L9s8$b2:
            fl9q = qt5l9f['slice'](bd2aj, zqjht), '/' === fl9q['slice'](-0x1) && (y_n03['closed'] = !0x0, fl9q = fl9q['slice'](0x0, -0x1));case L9l5hq:
            v79e1 === L9l5hq && (fl9q = jkhb), v79e1 == L9m30cy ? (gu71v['warning']('attribute "' + fl9q + '" missed quot(")!!'), y_n03['add'](jkhb, fl9q['replace'](/&#?\w+;/g, e6guv1), bd2aj)) : ('http://www.w3.org/1999/xhtml' === wcrim[''] && fl9q['match'](/^(?:disabled|checked|selected)$/i) || gu71v['warning']('attribute "' + fl9q + '" missed value!! "' + fl9q + '" instead!!'), y_n03['add'](fl9q, fl9q, bd2aj));break;case L9jb2kh:
            throw new Error('attribute value missed!!');}return zqjht;case '\u0080':
        b$8d2s = '\x20';default:
        if ('\x20' >= b$8d2s) switch (v79e1) {case L9zl5f:
            y_n03['setTagName'](qt5l9f['slice'](bd2aj, zqjht)), v79e1 = L9jkhzqa;break;case L9s8$b2:
            jkhb = qt5l9f['slice'](bd2aj, zqjht), v79e1 = L9l5hq;break;case L9m30cy:
            var fl9q = qt5l9f['slice'](bd2aj, zqjht)['replace'](/&#?\w+;/g, e6guv1);gu71v['warning']('attribute "' + fl9q + '" missed quot(")!!'), y_n03['add'](jkhb, fl9q, bd2aj);case L9habz:
            v79e1 = L9jkhzqa;} else switch (v79e1) {case L9l5hq:
            {
              y_n03['tagName'];
            }'http://www.w3.org/1999/xhtml' === wcrim[''] && jkhb['match'](/^(?:disabled|checked|selected)$/i) || gu71v['warning']('attribute "' + jkhb + '" missed value!! "' + jkhb + '" instead2!!'), y_n03['add'](jkhb, jkhb, bd2aj), bd2aj = zqjht, v79e1 = L9s8$b2;break;case L9habz:
            gu71v['warning']('attribute space is required"' + jkhb + '\x22!!');case L9jkhzqa:
            v79e1 = L9s8$b2, bd2aj = zqjht;break;case L9jb2kh:
            v79e1 = L9m30cy, bd2aj = zqjht;break;case L9mwir3c:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}zqjht++;
  }
}function L9_sn$48(ah2bjk, azqhj, jahzkq) {
  for (var n0yx_3 = ah2bjk['tagName'], k$2db = null, zjqlth = ah2bjk['length']; zjqlth--;) {
    var c30myr = ah2bjk[zjqlth],
        t9q5fl = c30myr['qName'],
        hzkjq = c30myr['value'],
        i0rc3m = t9q5fl['indexOf'](':');if (i0rc3m > 0x0) var $4ns8_ = c30myr['prefix'] = t9q5fl['slice'](0x0, i0rc3m),
        xy0n4 = t9q5fl['slice'](i0rc3m + 0x1),
        vu6e = 'xmlns' === $4ns8_ && xy0n4;else xy0n4 = t9q5fl, $4ns8_ = null, vu6e = 'xmlns' === t9q5fl && '';c30myr['localName'] = xy0n4, vu6e !== !0x1 && (null == k$2db && (k$2db = {}, L9bkajzh(jahzkq, jahzkq = {})), jahzkq[vu6e] = k$2db[vu6e] = hzkjq, c30myr['uri'] = 'http://www.w3.org/2000/xmlns/', azqhj['startPrefixMapping'](vu6e, hzkjq));
  }for (var zjqlth = ah2bjk['length']; zjqlth--;) {
    c30myr = ah2bjk[zjqlth];var $4ns8_ = c30myr['prefix'];$4ns8_ && ('xml' === $4ns8_ && (c30myr['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $4ns8_ && (c30myr['uri'] = jahzkq[$4ns8_ || '']));
  }var i0rc3m = n0yx_3['indexOf'](':');i0rc3m > 0x0 ? ($4ns8_ = ah2bjk['prefix'] = n0yx_3['slice'](0x0, i0rc3m), xy0n4 = ah2bjk['localName'] = n0yx_3['slice'](i0rc3m + 0x1)) : ($4ns8_ = null, xy0n4 = ah2bjk['localName'] = n0yx_3);var x0c3ry = ah2bjk['uri'] = jahzkq[$4ns8_ || ''];if (azqhj['startElement'](x0c3ry, xy0n4, n0yx_3, ah2bjk), !ah2bjk['closed']) return ah2bjk['currentNSMap'] = jahzkq, ah2bjk['localNSMap'] = k$2db, !0x0;if (azqhj['endElement'](x0c3ry, xy0n4, n0yx_3), k$2db) {
    for ($4ns8_ in k$2db) azqhj['endPrefixMapping']($4ns8_);
  }
}function L9_4x8sn(c3y0rx, xn48s, c30ir, jhabz, gv) {
  if (/^(?:script|textarea)$/i['test'](c30ir)) {
    var ycm0 = c3y0rx['indexOf']('</' + c30ir + '>', xn48s),
        a$bdk = c3y0rx['substring'](xn48s + 0x1, ycm0);if (/[&<]/['test'](a$bdk)) return (/^script$/i['test'](c30ir) ? (gv['characters'](a$bdk, 0x0, a$bdk['length']), ycm0) : (a$bdk = a$bdk['replace'](/&#?\w+;/g, jhabz), gv['characters'](a$bdk, 0x0, a$bdk['length']), ycm0)
    );
  }return xn48s + 0x1;
}function L9eu17(yrcm, a$d2s, cmr3y0, s_n$48) {
  var gv7eu1 = s_n$48[cmr3y0];return null == gv7eu1 && (gv7eu1 = yrcm['lastIndexOf']('</' + cmr3y0 + '>'), a$d2s > gv7eu1 && (gv7eu1 = yrcm['lastIndexOf']('</' + cmr3y0)), s_n$48[cmr3y0] = gv7eu1), a$d2s > gv7eu1;
}function L9bkajzh(p16geu, $4d82s) {
  for (var vueg7 in p16geu) $4d82s[vueg7] = p16geu[vueg7];
}function L9db2aj(n_8y, guv71e, xrcy, xns_4) {
  var dasb2 = n_8y['charAt'](guv71e + 0x2);switch (dasb2) {case '-':
      if ('-' === n_8y['charAt'](guv71e + 0x3)) {
        var hbkjz = n_8y['indexOf']('-->', guv71e + 0x4);return hbkjz > guv71e ? (xrcy['comment'](n_8y, guv71e + 0x4, hbkjz - guv71e - 0x4), hbkjz + 0x3) : (xns_4['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == n_8y['substr'](guv71e + 0x3, 0x6)) {
        var hbkjz = n_8y['indexOf'](']]>', guv71e + 0x9);return xrcy['startCDATA'](), xrcy['characters'](n_8y, guv71e + 0x9, hbkjz - guv71e - 0x9), xrcy['endCDATA'](), hbkjz + 0x3;
      }var j2ahbk = L9zjha(n_8y, guv71e),
          cy0rm3 = j2ahbk['length'];if (cy0rm3 > 0x1 && /!doctype/i['test'](j2ahbk[0x0][0x0])) {
        var h2abkj = j2ahbk[0x1][0x0],
            eg1vu = cy0rm3 > 0x3 && /^public$/i['test'](j2ahbk[0x2][0x0]) && j2ahbk[0x3][0x0],
            y0_nx = cy0rm3 > 0x4 && j2ahbk[0x4][0x0],
            o9t57f = j2ahbk[cy0rm3 - 0x1];return xrcy['startDTD'](h2abkj, eg1vu && eg1vu['replace'](/^(['"])(.*?)\1$/, '$2'), y0_nx && y0_nx['replace'](/^(['"])(.*?)\1$/, '$2')), xrcy['endDTD'](), o9t57f['index'] + o9t57f[0x0]['length'];
      }}return -0x1;
}function L9lz5tq(tqlhz, x4_y8, tlqzjh) {
  var qtlzj = tqlhz['indexOf']('?>', x4_y8);if (qtlzj) {
    var azb = tqlhz['substring'](x4_y8, qtlzj)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (azb) {
      {
        azb[0x0]['length'];
      }return tlqzjh['processingInstruction'](azb[0x1], azb[0x2]), qtlzj + 0x2;
    }return -0x1;
  }return -0x1;
}function L9yrc3m() {}function L9ltzjhq(_d48s, qhkzlj) {
  return _d48s['__proto__'] = qhkzlj, _d48s;
}function L9zjha(sb$d28, hkjz) {
  var ftzql,
      qlh5 = [],
      qahkz = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (qahkz['lastIndex'] = hkjz, qahkz['exec'](sb$d28); ftzql = qahkz['exec'](sb$d28);) if (qlh5['push'](ftzql), ftzql[0x1]) return qlh5;
}var L9fot9 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9jbak2h = new RegExp('[\\-\\.0-9' + L9fot9['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9kdb$a = new RegExp('^' + L9fot9['source'] + L9jbak2h['source'] + '*(?::' + L9fot9['source'] + L9jbak2h['source'] + '*)?$'),
    L9zl5f = 0x0,
    L9s8$b2 = 0x1,
    L9l5hq = 0x2,
    L9jb2kh = 0x3,
    L9m30cy = 0x4,
    L9habz = 0x5,
    L9jkhzqa = 0x6,
    L9mwir3c = 0x7;L9v719oe['prototype'] = { 'parse': function (jkhqaz, yx4, n_4x) {
    var $2sdb8 = this['domBuilder'];$2sdb8['startDocument'](), L9bkajzh(yx4, yx4 = {}), L9_xny8(jkhqaz, yx4, n_4x, $2sdb8, this['errorHandler']), $2sdb8['endDocument']();
  } }, L9yrc3m['prototype'] = { 'setTagName': function (nx8s4_) {
    if (!L9kdb$a['test'](nx8s4_)) throw new Error('invalid tagName:' + nx8s4_);this['tagName'] = nx8s4_;
  }, 'add': function (d2s$ba, b$dak, jqlhzk) {
    if (!L9kdb$a['test'](d2s$ba)) throw new Error('invalid attribute:' + d2s$ba);this[this['length']++] = { 'qName': d2s$ba, 'value': b$dak, 'offset': jqlhzk };
  }, 'length': 0x0, 'getLocalName': function (icmw3r) {
    return this[icmw3r]['localName'];
  }, 'getLocator': function (u1e) {
    return this[u1e]['locator'];
  }, 'getQName': function (ds$84_) {
    return this[ds$84_]['qName'];
  }, 'getURI': function (vu16eg) {
    return this[vu16eg]['uri'];
  }, 'getValue': function (ev19o) {
    return this[ev19o]['value'];
  } }, L9ltzjhq({}, L9ltzjhq['prototype']) instanceof L9ltzjhq || (L9ltzjhq = function (hqt, t759o) {
  function $2dab() {}$2dab['prototype'] = t759o, $2dab = new $2dab();for (t759o in hqt) $2dab[t759o] = hqt[t759o];return $2dab;
}), exports['XMLReader'] = L9v719oe;