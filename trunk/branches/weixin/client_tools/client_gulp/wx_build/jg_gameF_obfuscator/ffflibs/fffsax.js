var k = wx.$f;
function fqhf0t() {}function fj2c4(o64cj2, _k2546, vmi1b, wcnj, yap73) {
  function o4k_62(xsewzn) {
    if (xsewzn > 0xffff) {
      xsewzn -= 0x10000;var o4_2k = 0xd800 + (xsewzn >> 0xa),
          sjcdwo = 0xdc00 + (0x3ff & xsewzn);return String['fromCharCode'](o4_2k, sjcdwo);
    }return String['fromCharCode'](xsewzn);
  }function $r8y37(nwjsxd) {
    var _50qkh = nwjsxd['slice'](0x1, -0x1);return _50qkh in vmi1b ? vmi1b[_50qkh] : '#' === _50qkh['charAt'](0x0) ? o4k_62(parseInt(_50qkh['substr'](0x1)['replace']('x', '0x'))) : (yap73['error']('entity not found:' + nwjsxd), nwjsxd);
  }function xwden(ubimv1) {
    if (ubimv1 > u1bvim) {
      var a$3y7p = o64cj2['substring'](u1bvim, ubimv1)['replace'](/&#?\w+;/g, $r8y37);_kqh5 && c_62(u1bvim), wcnj['characters'](a$3y7p, 0x0, ubimv1 - u1bvim), u1bvim = ubimv1;
    }
  }function c_62(swedx, tih0m) {
    for (; swedx >= _2k64 && (tih0m = bmfv['exec'](o64cj2));) buvi91 = tih0m['index'], _2k64 = buvi91 + tih0m[0x0]['length'], _kqh5['lineNumber']++;_kqh5['columnNumber'] = swedx - buvi91 + 0x1;
  }for (var buvi91 = 0x0, _2k64 = 0x0, bmfv = /.*(?:\r\n?|\n)|.*$/g, _kqh5 = wcnj['locator'], kq04_ = [{ 'currentNSMap': _k2546 }], wsnzxe = {}, u1bvim = 0x0;;) {
    try {
      var ne8xzw = o64cj2['indexOf']('<', u1bvim);if (0x0 > ne8xzw) {
        if (!o64cj2['substr'](u1bvim)['match'](/^\s*$/)) {
          var njxsw = wcnj['doc'],
              ibhm = njxsw['createTextNode'](o64cj2['substr'](u1bvim));njxsw['appendChild'](ibhm), wcnj['currentElement'] = ibhm;
        }return;
      }switch (ne8xzw > u1bvim && xwden(ne8xzw), o64cj2['charAt'](ne8xzw + 0x1)) {case '/':
          var xnrz8 = o64cj2['indexOf']('>', ne8xzw + 0x3),
              cjo624 = o64cj2['substring'](ne8xzw + 0x2, xnrz8),
              nszxew = kq04_['pop']();0x0 > xnrz8 ? (cjo624 = o64cj2['substring'](ne8xzw + 0x2)['replace'](/[\s<].*/, ''), yap73['error']('end tag name: ' + cjo624 + ' is not complete:' + nszxew['tagName']), xnrz8 = ne8xzw + 0x1 + cjo624['length']) : cjo624['match'](/\s</) && (cjo624 = cjo624['replace'](/[\s<].*/, ''), yap73['error']('end tag name: ' + cjo624 + ' maybe not complete'), xnrz8 = ne8xzw + 0x1 + cjo624['length']);var re7z8 = nszxew['localNSMap'],
              qft5 = nszxew['tagName'] == cjo624,
              dc6 = qft5 || nszxew['tagName'] && nszxew['tagName']['toLowerCase']() == cjo624['toLowerCase']();if (dc6) {
            if (wcnj['endElement'](nszxew['uri'], nszxew['localName'], cjo624), re7z8) {
              for (var codjws in re7z8) wcnj['endPrefixMapping'](codjws);
            }qft5 || yap73['fatalError']('end tag name: ' + cjo624 + ' is not match the current start tagName:' + nszxew['tagName']);
          } else kq04_['push'](nszxew);xnrz8++;break;case '?':
          _kqh5 && c_62(ne8xzw), xnrz8 = fihbmt(o64cj2, ne8xzw, wcnj);break;case '!':
          _kqh5 && c_62(ne8xzw), xnrz8 = fwjncds(o64cj2, ne8xzw, wcnj, yap73);break;default:
          _kqh5 && c_62(ne8xzw);var ftimh = new fk5thq0(),
              dsowc = kq04_[kq04_['length'] - 0x1]['currentNSMap'],
              xnrz8 = fp7y$3(o64cj2, ne8xzw, ftimh, dsowc, $r8y37, yap73),
              wndcjs = ftimh['length'];if (!ftimh['closed'] && fjwcod(o64cj2, xnrz8, ftimh['tagName'], wsnzxe) && (ftimh['closed'] = !0x0, vmi1b['nbsp'] || yap73['warning']('unclosed xml attribute')), _kqh5 && wndcjs) {
            for (var wjdsc = fiumv1b(_kqh5, {}), m0thq = 0x0; wndcjs > m0thq; m0thq++) {
              var wzenx8 = ftimh[m0thq];c_62(wzenx8['offset']), wzenx8['locator'] = fiumv1b(_kqh5, {});
            }wcnj['locator'] = wjdsc, fr8znxe(ftimh, wcnj, dsowc) && kq04_['push'](ftimh), wcnj['locator'] = _kqh5;
          } else fr8znxe(ftimh, wcnj, dsowc) && kq04_['push'](ftimh);'http://www.w3.org/1999/xhtml' !== ftimh['uri'] || ftimh['closed'] ? xnrz8++ : xnrz8 = fsjcod(o64cj2, xnrz8, ftimh['tagName'], $r8y37, wcnj);}
    } catch (thmi0) {
      yap73['error']('element parse error: ' + thmi0), xnrz8 = -0x1;
    }xnrz8 > u1bvim ? u1bvim = xnrz8 : xwden(Math['max'](ne8xzw, u1bvim) + 0x1);
  }
}function fiumv1b(bufmv, n8zrex) {
  return n8zrex['lineNumber'] = bufmv['lineNumber'], n8zrex['columnNumber'] = bufmv['columnNumber'], n8zrex;
}function fp7y$3($r3z78, tfmvb, dwcjos, cnjwd, mbtf, qhk_50) {
  for (var dsco6j, ojswcd, nz8xwe = ++tfmvb, uibv1 = fi9bvu1;;) {
    var r$z8e7 = $r3z78['charAt'](nz8xwe);switch (r$z8e7) {case '=':
        if (uibv1 === fo_c42) dsco6j = $r3z78['slice'](tfmvb, nz8xwe), uibv1 = fsewnxd;else {
          if (uibv1 !== fa$73py) throw new Error('attribute equal must after attrName');uibv1 = fsewnxd;
        }break;case '\x27':case '\x22':
        if (uibv1 === fsewnxd || uibv1 === fo_c42) {
          if (uibv1 === fo_c42 && (qhk_50['warning']('attribute value must after "="'), dsco6j = $r3z78['slice'](tfmvb, nz8xwe)), tfmvb = nz8xwe + 0x1, nz8xwe = $r3z78['indexOf'](r$z8e7, tfmvb), !(nz8xwe > 0x0)) throw new Error('attribute value no end \'' + r$z8e7 + '\' match');ojswcd = $r3z78['slice'](tfmvb, nz8xwe)['replace'](/&#?\w+;/g, mbtf), dwcjos['add'](dsco6j, ojswcd, tfmvb - 0x1), uibv1 = fbuv1i;
        } else {
          if (uibv1 != fht5q0) throw new Error('attribute value must after "="');ojswcd = $r3z78['slice'](tfmvb, nz8xwe)['replace'](/&#?\w+;/g, mbtf), dwcjos['add'](dsco6j, ojswcd, tfmvb), qhk_50['warning']('attribute "' + dsco6j + '" missed start quot(' + r$z8e7 + ')!!'), tfmvb = nz8xwe + 0x1, uibv1 = fbuv1i;
        }break;case '/':
        switch (uibv1) {case fi9bvu1:
            dwcjos['setTagName']($r3z78['slice'](tfmvb, nz8xwe));case fbuv1i:case fen8:case fmvibu:
            uibv1 = fmvibu, dwcjos['closed'] = !0x0;case fht5q0:case fo_c42:case fa$73py:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return qhk_50['error']('unexpected end of input'), uibv1 == fi9bvu1 && dwcjos['setTagName']($r3z78['slice'](tfmvb, nz8xwe)), nz8xwe;case '>':
        switch (uibv1) {case fi9bvu1:
            dwcjos['setTagName']($r3z78['slice'](tfmvb, nz8xwe));case fbuv1i:case fen8:case fmvibu:
            break;case fht5q0:case fo_c42:
            ojswcd = $r3z78['slice'](tfmvb, nz8xwe), '/' === ojswcd['slice'](-0x1) && (dwcjos['closed'] = !0x0, ojswcd = ojswcd['slice'](0x0, -0x1));case fa$73py:
            uibv1 === fa$73py && (ojswcd = dsco6j), uibv1 == fht5q0 ? (qhk_50['warning']('attribute "' + ojswcd + '" missed quot(")!!'), dwcjos['add'](dsco6j, ojswcd['replace'](/&#?\w+;/g, mbtf), tfmvb)) : ('http://www.w3.org/1999/xhtml' === cnjwd[''] && ojswcd['match'](/^(?:disabled|checked|selected)$/i) || qhk_50['warning']('attribute "' + ojswcd + '" missed value!! "' + ojswcd + '" instead!!'), dwcjos['add'](ojswcd, ojswcd, tfmvb));break;case fsewnxd:
            throw new Error('attribute value missed!!');}return nz8xwe;case '\u0080':
        r$z8e7 = '\x20';default:
        if ('\x20' >= r$z8e7) switch (uibv1) {case fi9bvu1:
            dwcjos['setTagName']($r3z78['slice'](tfmvb, nz8xwe)), uibv1 = fen8;break;case fo_c42:
            dsco6j = $r3z78['slice'](tfmvb, nz8xwe), uibv1 = fa$73py;break;case fht5q0:
            var ojswcd = $r3z78['slice'](tfmvb, nz8xwe)['replace'](/&#?\w+;/g, mbtf);qhk_50['warning']('attribute "' + ojswcd + '" missed quot(")!!'), dwcjos['add'](dsco6j, ojswcd, tfmvb);case fbuv1i:
            uibv1 = fen8;} else switch (uibv1) {case fa$73py:
            {
              dwcjos['tagName'];
            }'http://www.w3.org/1999/xhtml' === cnjwd[''] && dsco6j['match'](/^(?:disabled|checked|selected)$/i) || qhk_50['warning']('attribute "' + dsco6j + '" missed value!! "' + dsco6j + '" instead2!!'), dwcjos['add'](dsco6j, dsco6j, tfmvb), tfmvb = nz8xwe, uibv1 = fo_c42;break;case fbuv1i:
            qhk_50['warning']('attribute space is required"' + dsco6j + '\x22!!');case fen8:
            uibv1 = fo_c42, tfmvb = nz8xwe;break;case fsewnxd:
            uibv1 = fht5q0, tfmvb = nz8xwe;break;case fmvibu:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}nz8xwe++;
  }
}function fr8znxe($83z, buv9g, xnewd) {
  for (var r8ne = $83z['tagName'], u1vgb9 = null, _hq50k = $83z['length']; _hq50k--;) {
    var jco4 = $83z[_hq50k],
        hmbif = jco4['qName'],
        qth0f = jco4['value'],
        $p3ya7 = hmbif['indexOf'](':');if ($p3ya7 > 0x0) var we8xnz = jco4['prefix'] = hmbif['slice'](0x0, $p3ya7),
        o6_2 = hmbif['slice']($p3ya7 + 0x1),
        xz87e = 'xmlns' === we8xnz && o6_2;else o6_2 = hmbif, we8xnz = null, xz87e = 'xmlns' === hmbif && '';jco4['localName'] = o6_2, xz87e !== !0x1 && (null == u1vgb9 && (u1vgb9 = {}, fnwdc(xnewd, xnewd = {})), xnewd[xz87e] = u1vgb9[xz87e] = qth0f, jco4['uri'] = 'http://www.w3.org/2000/xmlns/', buv9g['startPrefixMapping'](xz87e, qth0f));
  }for (var _hq50k = $83z['length']; _hq50k--;) {
    jco4 = $83z[_hq50k];var we8xnz = jco4['prefix'];we8xnz && ('xml' === we8xnz && (jco4['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== we8xnz && (jco4['uri'] = xnewd[we8xnz || '']));
  }var $p3ya7 = r8ne['indexOf'](':');$p3ya7 > 0x0 ? (we8xnz = $83z['prefix'] = r8ne['slice'](0x0, $p3ya7), o6_2 = $83z['localName'] = r8ne['slice']($p3ya7 + 0x1)) : (we8xnz = null, o6_2 = $83z['localName'] = r8ne);var wedxn = $83z['uri'] = xnewd[we8xnz || ''];if (buv9g['startElement'](wedxn, o6_2, r8ne, $83z), !$83z['closed']) return $83z['currentNSMap'] = xnewd, $83z['localNSMap'] = u1vgb9, !0x0;if (buv9g['endElement'](wedxn, o6_2, r8ne), u1vgb9) {
    for (we8xnz in u1vgb9) buv9g['endPrefixMapping'](we8xnz);
  }
}function fsjcod(co6j2, kq_54, r3$y87, zew8xn, ftbm) {
  if (/^(?:script|textarea)$/i['test'](r3$y87)) {
    var o2jd6 = co6j2['indexOf']('</' + r3$y87 + '>', kq_54),
        bgvu19 = co6j2['substring'](kq_54 + 0x1, o2jd6);if (/[&<]/['test'](bgvu19)) return (/^script$/i['test'](r3$y87) ? (ftbm['characters'](bgvu19, 0x0, bgvu19['length']), o2jd6) : (bgvu19 = bgvu19['replace'](/&#?\w+;/g, zew8xn), ftbm['characters'](bgvu19, 0x0, bgvu19['length']), o2jd6)
    );
  }return kq_54 + 0x1;
}function fjwcod($87, ufb, wsznx, qh05) {
  var c2jo64 = qh05[wsznx];return null == c2jo64 && (c2jo64 = $87['lastIndexOf']('</' + wsznx + '>'), ufb > c2jo64 && (c2jo64 = $87['lastIndexOf']('</' + wsznx)), qh05[wsznx] = c2jo64), ufb > c2jo64;
}function fnwdc($7ary3, h5tf) {
  for (var wcsj in $7ary3) h5tf[wcsj] = $7ary3[wcsj];
}function fwjncds(pya3$, _o62k, djoscw, mbfvu) {
  var r8ze$7 = pya3$['charAt'](_o62k + 0x2);switch (r8ze$7) {case '-':
      if ('-' === pya3$['charAt'](_o62k + 0x3)) {
        var jndcw = pya3$['indexOf']('-->', _o62k + 0x4);return jndcw > _o62k ? (djoscw['comment'](pya3$, _o62k + 0x4, jndcw - _o62k - 0x4), jndcw + 0x3) : (mbfvu['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == pya3$['substr'](_o62k + 0x3, 0x6)) {
        var jndcw = pya3$['indexOf'](']]>', _o62k + 0x9);return djoscw['startCDATA'](), djoscw['characters'](pya3$, _o62k + 0x9, jndcw - _o62k - 0x9), djoscw['endCDATA'](), jndcw + 0x3;
      }var mbt = fgvb91(pya3$, _o62k),
          x8wez = mbt['length'];if (x8wez > 0x1 && /!doctype/i['test'](mbt[0x0][0x0])) {
        var k0q45 = mbt[0x1][0x0],
            tbifm = x8wez > 0x3 && /^public$/i['test'](mbt[0x2][0x0]) && mbt[0x3][0x0],
            j4co62 = x8wez > 0x4 && mbt[0x4][0x0],
            scoj6 = mbt[x8wez - 0x1];return djoscw['startDTD'](k0q45, tbifm && tbifm['replace'](/^(['"])(.*?)\1$/, '$2'), j4co62 && j4co62['replace'](/^(['"])(.*?)\1$/, '$2')), djoscw['endDTD'](), scoj6['index'] + scoj6[0x0]['length'];
      }}return -0x1;
}function fihbmt(uv1m, ok46_, ray37$) {
  var hq0tf5 = uv1m['indexOf']('?>', ok46_);if (hq0tf5) {
    var hfqtm0 = uv1m['substring'](ok46_, hq0tf5)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (hfqtm0) {
      {
        hfqtm0[0x0]['length'];
      }return ray37$['processingInstruction'](hfqtm0[0x1], hfqtm0[0x2]), hq0tf5 + 0x2;
    }return -0x1;
  }return -0x1;
}function fk5thq0() {}function fsewdn(qf5, kq05th) {
  return qf5['__proto__'] = kq05th, qf5;
}function fgvb91(a3py7$, eswn) {
  var tivfmb,
      ug9b1v = [],
      k_0h5q = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (k_0h5q['lastIndex'] = eswn, k_0h5q['exec'](a3py7$); tivfmb = k_0h5q['exec'](a3py7$);) if (ug9b1v['push'](tivfmb), tivfmb[0x1]) return ug9b1v;
}var fcdw = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fuf = new RegExp('[\\-\\.0-9' + fcdw['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fxe8nw = new RegExp('^' + fcdw['source'] + fuf['source'] + '*(?::' + fcdw['source'] + fuf['source'] + '*)?$'),
    fi9bvu1 = 0x0,
    fo_c42 = 0x1,
    fa$73py = 0x2,
    fsewnxd = 0x3,
    fht5q0 = 0x4,
    fbuv1i = 0x5,
    fen8 = 0x6,
    fmvibu = 0x7;fqhf0t['prototype'] = { 'parse': function (r8$e7z, xe8z7r, zens) {
    var $38zr7 = this['domBuilder'];$38zr7['startDocument'](), fnwdc(xe8z7r, xe8z7r = {}), fj2c4(r8$e7z, xe8z7r, zens, $38zr7, this['errorHandler']), $38zr7['endDocument']();
  } }, fk5thq0['prototype'] = { 'setTagName': function (mib1u) {
    if (!fxe8nw['test'](mib1u)) throw new Error('invalid tagName:' + mib1u);this['tagName'] = mib1u;
  }, 'add': function (jswdnx, nz, oc_624) {
    if (!fxe8nw['test'](jswdnx)) throw new Error('invalid attribute:' + jswdnx);this[this['length']++] = { 'qName': jswdnx, 'value': nz, 'offset': oc_624 };
  }, 'length': 0x0, 'getLocalName': function (vbui) {
    return this[vbui]['localName'];
  }, 'getLocator': function (ivubf) {
    return this[ivubf]['locator'];
  }, 'getQName': function ($ze78r) {
    return this[$ze78r]['qName'];
  }, 'getURI': function (cwsj) {
    return this[cwsj]['uri'];
  }, 'getValue': function (nwsjc) {
    return this[nwsjc]['value'];
  } }, fsewdn({}, fsewdn['prototype']) instanceof fsewdn || (fsewdn = function (mibf, jwcds) {
  function mqtf() {}mqtf['prototype'] = jwcds, mqtf = new mqtf();for (jwcds in mibf) mqtf[jwcds] = mibf[jwcds];return mqtf;
}), exports['XMLReader'] = fqhf0t;