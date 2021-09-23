var m = wx.$g;
function gam4lo() {}function gjwqs$z(qzw, amco4l, xi$fgk, t69a4l, $qxjzw) {
  function kix$fg(pb913) {
    var talmo4 = pb913['slice'](0x1, -0x1);return talmo4 in xi$fgk ? xi$fgk[talmo4] : '#' === talmo4['charAt'](0x0) ? 0xffff < (talmo4 = parseInt(talmo4['substr'](0x1)['replace']('x', '0x'))) ? (talmo4 -= 0x10000, String['fromCharCode'](0xd800 + (talmo4 >> 0xa), 0xdc00 + (0x3ff & talmo4))) : String['fromCharCode'](talmo4) : ($qxjzw['error']('entity not found:' + pb913), pb913);
  }function qxwjz$(q$swz) {
    var jxqi;ta964l < q$swz && (jxqi = qzw['substring'](ta964l, q$swz)['replace'](/&#?\w+;/g, kix$fg), cloa4 && ma4lto(ta964l), t69a4l['characters'](jxqi, 0x0, q$swz - ta964l), ta964l = q$swz);
  }function ma4lto($zwsqj, ig$kfx) {
    for (; tla946 <= $zwsqj && (ig$kfx = fqji$x['exec'](qzw));) hb16 = ig$kfx['index'], tla946 = hb16 + ig$kfx[0x0]['length'], cloa4['lineNumber']++;cloa4['columnNumber'] = $zwsqj - hb16 + 0x1;
  }for (var hb16 = 0x0, tla946 = 0x0, fqji$x = /.*(?:\r\n?|\n)|.*$/g, cloa4 = t69a4l['locator'], q$fjxi = [{ 'currentNSMap': amco4l }], $wqzs = {}, ta964l = 0x0;;) {
    try {
      var zq5jws = qzw['indexOf']('<', ta964l),
          p1e3b,
          y38e0;if (zq5jws < 0x0) return void (qzw['substr'](ta964l)['match'](/^\s*$/) || (y38e0 = (p1e3b = t69a4l['doc'])['createTextNode'](qzw['substr'](ta964l)), p1e3b['appendChild'](y38e0), t69a4l['currentElement'] = y38e0));switch (ta964l < zq5jws && qxwjz$(zq5jws), qzw['charAt'](zq5jws + 0x1)) {case '/':
          var gfxrki = qzw['indexOf']('>', zq5jws + 0x3),
              w$jqz = qzw['substring'](zq5jws + 0x2, gfxrki),
              s0y5 = q$fjxi['pop']();gfxrki < 0x0 ? (w$jqz = qzw['substring'](zq5jws + 0x2)['replace'](/[\s<].*/, ''), $qxjzw['error']('end tag name: ' + w$jqz + ' is not complete:' + s0y5['tagName']), gfxrki = zq5jws + 0x1 + w$jqz['length']) : w$jqz['match'](/\s</) && (w$jqz = w$jqz['replace'](/[\s<].*/, ''), $qxjzw['error']('end tag name: ' + w$jqz + ' maybe not complete'), gfxrki = zq5jws + 0x1 + w$jqz['length']);var kgrf7 = s0y5['localNSMap'],
              ijw$xq = s0y5['tagName'] == w$jqz;if (ijw$xq || s0y5['tagName'] && s0y5['tagName']['toLowerCase']() == w$jqz['toLowerCase']()) {
            if (t69a4l['endElement'](s0y5['uri'], s0y5['localName'], w$jqz), kgrf7) {
              for (var qxj$fi in kgrf7) t69a4l['endPrefixMapping'](qxj$fi);
            }ijw$xq || $qxjzw['fatalError']('end tag name: ' + w$jqz + ' is not match the current start tagName:' + s0y5['tagName']);
          } else q$fjxi['push'](s0y5);gfxrki++;break;case '?':
          cloa4 && ma4lto(zq5jws), gfxrki = gyd310(qzw, zq5jws, t69a4l);break;case '!':
          cloa4 && ma4lto(zq5jws), gfxrki = gh9t6pb(qzw, zq5jws, t69a4l, $qxjzw);break;default:
          cloa4 && ma4lto(zq5jws);var s058 = new gd8e0(),
              h0de = q$fjxi[q$fjxi['length'] - 0x1]['currentNSMap'],
              gfxrki = gjszq(qzw, zq5jws, s058, h0de, kix$fg, $qxjzw),
              th9p6 = s058['length'];if (!s058['closed'] && gxfrgik(qzw, gfxrki, s058['tagName'], $wqzs) && (s058['closed'] = !0x0, xi$fgk['nbsp'] || $qxjzw['warning']('unclosed xml attribute')), cloa4 && th9p6) {
            for (var e0h1d = gmvo4cl(cloa4, {}), y8e0d3 = 0x0; y8e0d3 < th9p6; y8e0d3++) {
              var kru_ = s058[y8e0d3];ma4lto(kru_['offset']), kru_['locator'] = gmvo4cl(cloa4, {});
            }t69a4l['locator'] = e0h1d, gqws25z(s058, t69a4l, h0de) && q$fjxi['push'](s058), t69a4l['locator'] = cloa4;
          } else gqws25z(s058, t69a4l, h0de) && q$fjxi['push'](s058);'http://www.w3.org/1999/xhtml' !== s058['uri'] || s058['closed'] ? gfxrki++ : gfxrki = gbh1e3(qzw, gfxrki, s058['tagName'], kix$fg, t69a4l);}
    } catch (alt4m) {
      $qxjzw['error']('element parse error: ' + alt4m), gfxrki = -0x1;
    }ta964l < gfxrki ? ta964l = gfxrki : qxwjz$(Math['max'](zq5jws, ta964l) + 0x1);
  }
}function gmvo4cl(wqjix, u7kr) {
  return u7kr['lineNumber'] = wqjix['lineNumber'], u7kr['columnNumber'] = wqjix['columnNumber'], u7kr;
}function gjszq($i, gukfr7, jq$zxw, szjw5, abt69, e0h1d3) {
  for (var xfq$ji, wjs$z = ++gukfr7, jxqi$w = gotl4a;;) {
    var q$ixjf = $i['charAt'](wjs$z);switch (q$ixjf) {case '=':
        if (jxqi$w === gzw5q) xfq$ji = $i['slice'](gukfr7, wjs$z), jxqi$w = gxjki$f;else {
          if (jxqi$w !== gu7rgk_) throw new Error('attribute equal must after attrName');jxqi$w = gxjki$f;
        }break;case '\x27':case '\x22':
        if (jxqi$w === gxjki$f || jxqi$w === gzw5q) {
          if (jxqi$w === gzw5q && (e0h1d3['warning']('attribute value must after "="'), xfq$ji = $i['slice'](gukfr7, wjs$z)), !(0x0 < (wjs$z = $i['indexOf'](q$ixjf, gukfr7 = wjs$z + 0x1)))) throw new Error('attribute value no end \'' + q$ixjf + '\' match');la4t = $i['slice'](gukfr7, wjs$z)['replace'](/&#?\w+;/g, abt69), jq$zxw['add'](xfq$ji, la4t, gukfr7 - 0x1), jxqi$w = glmocv;
        } else {
          if (jxqi$w != gkf$) throw new Error('attribute value must after "="');la4t = $i['slice'](gukfr7, wjs$z)['replace'](/&#?\w+;/g, abt69), jq$zxw['add'](xfq$ji, la4t, gukfr7), e0h1d3['warning']('attribute "' + xfq$ji + '" missed start quot(' + q$ixjf + ')!!'), gukfr7 = wjs$z + 0x1, jxqi$w = glmocv;
        }break;case '/':
        switch (jxqi$w) {case gotl4a:
            jq$zxw['setTagName']($i['slice'](gukfr7, wjs$z));case glmocv:case gaml4t:case gpb31he:
            jxqi$w = gpb31he, jq$zxw['closed'] = !0x0;case gkf$:case gzw5q:case gu7rgk_:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return e0h1d3['error']('unexpected end of input'), jxqi$w == gotl4a && jq$zxw['setTagName']($i['slice'](gukfr7, wjs$z)), wjs$z;case '>':
        switch (jxqi$w) {case gotl4a:
            jq$zxw['setTagName']($i['slice'](gukfr7, wjs$z));case glmocv:case gaml4t:case gpb31he:
            break;case gkf$:case gzw5q:
            '/' === (la4t = $i['slice'](gukfr7, wjs$z))['slice'](-0x1) && (jq$zxw['closed'] = !0x0, la4t = la4t['slice'](0x0, -0x1));case gu7rgk_:
            jxqi$w === gu7rgk_ && (la4t = xfq$ji), jxqi$w == gkf$ ? (e0h1d3['warning']('attribute "' + la4t + '" missed quot(")!!'), jq$zxw['add'](xfq$ji, la4t['replace'](/&#?\w+;/g, abt69), gukfr7)) : ('http://www.w3.org/1999/xhtml' === szjw5[''] && la4t['match'](/^(?:disabled|checked|selected)$/i) || e0h1d3['warning']('attribute "' + la4t + '" missed value!! "' + la4t + '" instead!!'), jq$zxw['add'](la4t, la4t, gukfr7));break;case gxjki$f:
            throw new Error('attribute value missed!!');}return wjs$z;case '\u0080':
        q$ixjf = '\x20';default:
        if (q$ixjf <= '\x20') switch (jxqi$w) {case gotl4a:
            jq$zxw['setTagName']($i['slice'](gukfr7, wjs$z)), jxqi$w = gaml4t;break;case gzw5q:
            xfq$ji = $i['slice'](gukfr7, wjs$z), jxqi$w = gu7rgk_;break;case gkf$:
            var la4t = $i['slice'](gukfr7, wjs$z)['replace'](/&#?\w+;/g, abt69);e0h1d3['warning']('attribute "' + la4t + '" missed quot(")!!'), jq$zxw['add'](xfq$ji, la4t, gukfr7);case glmocv:
            jxqi$w = gaml4t;} else switch (jxqi$w) {case gu7rgk_:
            jq$zxw['tagName'], 'http://www.w3.org/1999/xhtml' === szjw5[''] && xfq$ji['match'](/^(?:disabled|checked|selected)$/i) || e0h1d3['warning']('attribute "' + xfq$ji + '" missed value!! "' + xfq$ji + '" instead2!!'), jq$zxw['add'](xfq$ji, xfq$ji, gukfr7), gukfr7 = wjs$z, jxqi$w = gzw5q;break;case glmocv:
            e0h1d3['warning']('attribute space is required"' + xfq$ji + '\x22!!');case gaml4t:
            jxqi$w = gzw5q, gukfr7 = wjs$z;break;case gxjki$f:
            jxqi$w = gkf$, gukfr7 = wjs$z;break;case gpb31he:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}wjs$z++;
  }
}function gqws25z(g$fxki, h3eb, bhd1e) {
  for (var a6lt = g$fxki['tagName'], o4aclm = null, jx$zwq = g$fxki['length']; jx$zwq--;) {
    var r_uk7 = g$fxki[jx$zwq],
        mt4ao = r_uk7['qName'],
        e082dy = r_uk7['value'],
        ota4ml;mt4ao = 0x0 < (d2y085 = mt4ao['indexOf'](':')) ? (t4amol = r_uk7['prefix'] = mt4ao['slice'](0x0, d2y085), ota4ml = mt4ao['slice'](d2y085 + 0x1), 'xmlns' === t4amol && ota4ml) : (t4amol = null, 'xmlns' === (ota4ml = mt4ao) && ''), r_uk7['localName'] = ota4ml, !0x1 !== mt4ao && (null == o4aclm && (o4aclm = {}, gvlmo(bhd1e, bhd1e = {})), bhd1e[mt4ao] = o4aclm[mt4ao] = e082dy, r_uk7['uri'] = 'http://www.w3.org/2000/xmlns/', h3eb['startPrefixMapping'](mt4ao, e082dy));
  }for (jx$zwq = g$fxki['length']; jx$zwq--;) (t4amol = (r_uk7 = g$fxki[jx$zwq])['prefix']) && ('xml' === t4amol && (r_uk7['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== t4amol && (r_uk7['uri'] = bhd1e[t4amol || '']));var d2y085;ota4ml = 0x0 < (d2y085 = a6lt['indexOf'](':')) ? (t4amol = g$fxki['prefix'] = a6lt['slice'](0x0, d2y085), g$fxki['localName'] = a6lt['slice'](d2y085 + 0x1)) : (t4amol = null, g$fxki['localName'] = a6lt);var z5w8 = g$fxki['uri'] = bhd1e[t4amol || ''];if (h3eb['startElement'](z5w8, ota4ml, a6lt, g$fxki), !g$fxki['closed']) return g$fxki['currentNSMap'] = bhd1e, g$fxki['localNSMap'] = o4aclm, !0x0;if (h3eb['endElement'](z5w8, ota4ml, a6lt), o4aclm) {
    for (var t4amol in o4aclm) h3eb['endPrefixMapping'](t4amol);
  }
}function gbh1e3(m4lac, otma, _ku7rg, igkfru, x$ikf) {
  if (/^(?:script|textarea)$/i['test'](_ku7rg)) {
    var ukrg7f = m4lac['indexOf']('</' + _ku7rg + '>', otma),
        m4lac = m4lac['substring'](otma + 0x1, ukrg7f);if (/[&<]/['test'](m4lac)) return (/^script$/i['test'](_ku7rg) || (m4lac = m4lac['replace'](/&#?\w+;/g, igkfru)), x$ikf['characters'](m4lac, 0x0, m4lac['length']), ukrg7f
    );
  }return otma + 0x1;
}function gxfrgik(bp9h3, p64t9a, zs85w2, pbth96) {
  var a69lt4 = pbth96[zs85w2];return null == a69lt4 && ((a69lt4 = bp9h3['lastIndexOf']('</' + zs85w2 + '>')) < p64t9a && (a69lt4 = bp9h3['lastIndexOf']('</' + zs85w2)), pbth96[zs85w2] = a69lt4), a69lt4 < p64t9a;
}function gvlmo(x$wjiq, a9p46t) {
  for (var iufrg in x$wjiq) a9p46t[iufrg] = x$wjiq[iufrg];
}function gh9t6pb(h1b6, gfkix$, wsq5jz, qxwz$j) {
  var rfk7g = h1b6['charAt'](gfkix$ + 0x2);if ('-' === rfk7g) return '-' !== h1b6['charAt'](gfkix$ + 0x3) ? -0x1 : gfkix$ < (rfgx = h1b6['indexOf']('-->', gfkix$ + 0x4)) ? (wsq5jz['comment'](h1b6, gfkix$ + 0x4, rfgx - gfkix$ - 0x4), rfgx + 0x3) : (qxwz$j['error']('Unclosed comment'), -0x1);if ('CDATA[' == h1b6['substr'](gfkix$ + 0x3, 0x6)) {
    var rfgx = h1b6['indexOf'](']]>', gfkix$ + 0x9);return wsq5jz['startCDATA'](), wsq5jz['characters'](h1b6, gfkix$ + 0x9, rfgx - gfkix$ - 0x9), wsq5jz['endCDATA'](), rfgx + 0x3;
  }rfk7g = gey08d2(h1b6, gfkix$), qxwz$j = rfk7g['length'];if (0x1 < qxwz$j && /!doctype/i['test'](rfk7g[0x0][0x0])) return rfgx = rfk7g[0x1][0x0], h1b6 = 0x3 < qxwz$j && /^public$/i['test'](rfk7g[0x2][0x0]) && rfk7g[0x3][0x0], gfkix$ = 0x4 < qxwz$j && rfk7g[0x4][0x0], qxwz$j = rfk7g[qxwz$j - 0x1], (wsq5jz['startDTD'](rfgx, h1b6 && h1b6['replace'](/^(['"])(.*?)\1$/, '$2'), gfkix$ && gfkix$['replace'](/^(['"])(.*?)\1$/, '$2')), wsq5jz['endDTD'](), qxwz$j['index'] + qxwz$j[0x0]['length']);return -0x1;
}function gyd310(kg_ru7, oacml4, kfx$gi) {
  var y8de2 = kg_ru7['indexOf']('?>', oacml4);if (y8de2) return oacml4 = kg_ru7['substring'](oacml4, y8de2)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), oacml4 ? (oacml4[0x0]['length'], kfx$gi['processingInstruction'](oacml4[0x1], oacml4[0x2]), y8de2 + 0x2) : -0x1;return -0x1;
}function gd8e0() {}function ghp13eb(t6l4, s58zw) {
  return t6l4['__proto__'] = s58zw, t6l4;
}function gey08d2(x$wqi, gkr_u7) {
  var rkug_,
      kfix = [],
      bh31de = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (bh31de['lastIndex'] = gkr_u7, bh31de['exec'](x$wqi); rkug_ = bh31de['exec'](x$wqi);) if (kfix['push'](rkug_), rkug_[0x1]) return kfix;
}var ghtp9 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    grfkugi = new RegExp('[\\-\\.0-9' + ghtp9['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    grkugfi = new RegExp('^' + ghtp9['source'] + grfkugi['source'] + '*(?::' + ghtp9['source'] + grfkugi['source'] + '*)?$'),
    gotl4a = 0x0,
    gzw5q = 0x1,
    gu7rgk_ = 0x2,
    gxjki$f = 0x3,
    gkf$ = 0x4,
    glmocv = 0x5,
    gaml4t = 0x6,
    gpb31he = 0x7;gam4lo['prototype'] = { 'parse': function (rfgxi, hb619p, k7ug_r) {
    var t69abp = this['domBuilder'];t69abp['startDocument'](), gvlmo(hb619p, hb619p = {}), gjwqs$z(rfgxi, hb619p, k7ug_r, t69abp, this['errorHandler']), t69abp['endDocument']();
  } }, gd8e0['prototype'] = { 'setTagName': function (p9tab6) {
    if (!grkugfi['test'](p9tab6)) throw new Error('invalid tagName:' + p9tab6);this['tagName'] = p9tab6;
  }, 'add': function (xig$f, g$fki, b61p9h) {
    if (!grkugfi['test'](xig$f)) throw new Error('invalid attribute:' + xig$f);this[this['length']++] = { 'qName': xig$f, 'value': g$fki, 'offset': b61p9h };
  }, 'length': 0x0, 'getLocalName': function (ufrkg7) {
    return this[ufrkg7]['localName'];
  }, 'getLocator': function (d13beh) {
    return this[d13beh]['locator'];
  }, 'getQName': function (hpt) {
    return this[hpt]['qName'];
  }, 'getURI': function (iwj$q) {
    return this[iwj$q]['uri'];
  }, 'getValue': function (ltmo4a) {
    return this[ltmo4a]['value'];
  } }, ghp13eb({}, ghp13eb['prototype']) instanceof ghp13eb || (ghp13eb = function (w$qzx, omcvl4) {
  function $gxkif() {}for (omcvl4 in $gxkif['prototype'] = omcvl4, $gxkif = new $gxkif(), w$qzx) $gxkif[omcvl4] = w$qzx[omcvl4];return $gxkif;
}), exports['XMLReader'] = gam4lo;