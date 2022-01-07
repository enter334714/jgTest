var M = wx.$T;
function thw615() {}function tx0yq_e(fpzdv$, kabrs, xeqyo0, dpi, xqy0e) {
  function d7zf(hw5y) {
    if (hw5y > 0xffff) {
      hw5y -= 0x10000;var z7qofe = 0xd800 + (hw5y >> 0xa),
          q07exo = 0xdc00 + (0x3ff & hw5y);return String['fromCharCode'](z7qofe, q07exo);
    }return String['fromCharCode'](hw5y);
  }function n681(df7pz) {
    var bjn3gr = df7pz['slice'](0x1, -0x1);return bjn3gr in xeqyo0 ? xeqyo0[bjn3gr] : '#' === bjn3gr['charAt'](0x0) ? d7zf(parseInt(bjn3gr['substr'](0x1)['replace']('x', '0x'))) : (xqy0e['error']('entity not found:' + df7pz), df7pz);
  }function ajk(v$di9c) {
    if (v$di9c > bkujsa) {
      var jr3n = fpzdv$['substring'](bkujsa, v$di9c)['replace'](/&#?\w+;/g, n681);skubaj && rg8j(bkujsa), dpi['characters'](jr3n, 0x0, v$di9c - bkujsa), bkujsa = v$di9c;
    }
  }function rg8j(m_w5hy, bgra) {
    for (; m_w5hy >= w56m1h && (bgra = fzvd['exec'](fpzdv$));) podzf = bgra['index'], w56m1h = podzf + bgra[0x0]['length'], skubaj['lineNumber']++;skubaj['columnNumber'] = m_w5hy - podzf + 0x1;
  }for (var podzf = 0x0, w56m1h = 0x0, fzvd = /.*(?:\r\n?|\n)|.*$/g, skubaj = dpi['locator'], vct92i = [{ 'currentNSMap': kabrs }], vdf$ = {}, bkujsa = 0x0;;) {
    try {
      var $icd = fpzdv$['indexOf']('<', bkujsa);if (0x0 > $icd) {
        if (!fpzdv$['substr'](bkujsa)['match'](/^\s*$/)) {
          var g1n = dpi['doc'],
              vit9c$ = g1n['createTextNode'](fpzdv$['substr'](bkujsa));g1n['appendChild'](vit9c$), dpi['currentElement'] = vit9c$;
        }return;
      }switch ($icd > bkujsa && ajk($icd), fpzdv$['charAt']($icd + 0x1)) {case '/':
          var uskj = fpzdv$['indexOf']('>', $icd + 0x3),
              kbagjr = fpzdv$['substring']($icd + 0x2, uskj),
              vdp9$ = vct92i['pop']();0x0 > uskj ? (kbagjr = fpzdv$['substring']($icd + 0x2)['replace'](/[\s<].*/, ''), xqy0e['error']('end tag name: ' + kbagjr + ' is not complete:' + vdp9$['tagName']), uskj = $icd + 0x1 + kbagjr['length']) : kbagjr['match'](/\s</) && (kbagjr = kbagjr['replace'](/[\s<].*/, ''), xqy0e['error']('end tag name: ' + kbagjr + ' maybe not complete'), uskj = $icd + 0x1 + kbagjr['length']);var grnb3 = vdp9$['localNSMap'],
              ng8613 = vdp9$['tagName'] == kbagjr,
              ujksb = ng8613 || vdp9$['tagName'] && vdp9$['tagName']['toLowerCase']() == kbagjr['toLowerCase']();if (ujksb) {
            if (dpi['endElement'](vdp9$['uri'], vdp9$['localName'], kbagjr), grnb3) {
              for (var v$cd9i in grnb3) dpi['endPrefixMapping'](v$cd9i);
            }ng8613 || xqy0e['fatalError']('end tag name: ' + kbagjr + ' is not match the current start tagName:' + vdp9$['tagName']);
          } else vct92i['push'](vdp9$);uskj++;break;case '?':
          skubaj && rg8j($icd), uskj = tb3nrg(fpzdv$, $icd, dpi);break;case '!':
          skubaj && rg8j($icd), uskj = tof7dp(fpzdv$, $icd, dpi, xqy0e);break;default:
          skubaj && rg8j($icd);var jrgbak = new tfz7od(),
              w86h51 = vct92i[vct92i['length'] - 0x1]['currentNSMap'],
              uskj = tbjgn3(fpzdv$, $icd, jrgbak, w86h51, n681, xqy0e),
              oy0 = jrgbak['length'];if (!jrgbak['closed'] && toz7fd(fpzdv$, uskj, jrgbak['tagName'], vdf$) && (jrgbak['closed'] = !0x0, xeqyo0['nbsp'] || xqy0e['warning']('unclosed xml attribute')), skubaj && oy0) {
            for (var arjbng = tngrabj(skubaj, {}), pd9fv = 0x0; oy0 > pd9fv; pd9fv++) {
              var w5816 = jrgbak[pd9fv];rg8j(w5816['offset']), w5816['locator'] = tngrabj(skubaj, {});
            }dpi['locator'] = arjbng, tqx70eo(jrgbak, dpi, w86h51) && vct92i['push'](jrgbak), dpi['locator'] = skubaj;
          } else tqx70eo(jrgbak, dpi, w86h51) && vct92i['push'](jrgbak);'http://www.w3.org/1999/xhtml' !== jrgbak['uri'] || jrgbak['closed'] ? uskj++ : uskj = tsjbuka(fpzdv$, uskj, jrgbak['tagName'], n681, dpi);}
    } catch (h68w5) {
      xqy0e['error']('element parse error: ' + h68w5), uskj = -0x1;
    }uskj > bkujsa ? bkujsa = uskj : ajk(Math['max']($icd, bkujsa) + 0x1);
  }
}function tngrabj(dzopf7, efq7z) {
  return efq7z['lineNumber'] = dzopf7['lineNumber'], efq7z['columnNumber'] = dzopf7['columnNumber'], efq7z;
}function tbjgn3(ng683, i294tc, m5_6wh, jkbuas, y_qex, opz) {
  for (var tvic9$, gbrn3j, rngb3j = ++i294tc, agnr = taubs;;) {
    var z$pd7f = ng683['charAt'](rngb3j);switch (z$pd7f) {case '=':
        if (agnr === tyhmx0) tvic9$ = ng683['slice'](i294tc, rngb3j), agnr = tzq07o;else {
          if (agnr !== tpdv$f9) throw new Error('attribute equal must after attrName');agnr = tzq07o;
        }break;case '\x27':case '\x22':
        if (agnr === tzq07o || agnr === tyhmx0) {
          if (agnr === tyhmx0 && (opz['warning']('attribute value must after "="'), tvic9$ = ng683['slice'](i294tc, rngb3j)), i294tc = rngb3j + 0x1, rngb3j = ng683['indexOf'](z$pd7f, i294tc), !(rngb3j > 0x0)) throw new Error('attribute value no end \'' + z$pd7f + '\' match');gbrn3j = ng683['slice'](i294tc, rngb3j)['replace'](/&#?\w+;/g, y_qex), m5_6wh['add'](tvic9$, gbrn3j, i294tc - 0x1), agnr = ttv9ic2;
        } else {
          if (agnr != tq0z7) throw new Error('attribute value must after "="');gbrn3j = ng683['slice'](i294tc, rngb3j)['replace'](/&#?\w+;/g, y_qex), m5_6wh['add'](tvic9$, gbrn3j, i294tc), opz['warning']('attribute "' + tvic9$ + '" missed start quot(' + z$pd7f + ')!!'), i294tc = rngb3j + 0x1, agnr = ttv9ic2;
        }break;case '/':
        switch (agnr) {case taubs:
            m5_6wh['setTagName'](ng683['slice'](i294tc, rngb3j));case ttv9ic2:case twh_my5:case tctvi:
            agnr = tctvi, m5_6wh['closed'] = !0x0;case tq0z7:case tyhmx0:case tpdv$f9:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return opz['error']('unexpected end of input'), agnr == taubs && m5_6wh['setTagName'](ng683['slice'](i294tc, rngb3j)), rngb3j;case '>':
        switch (agnr) {case taubs:
            m5_6wh['setTagName'](ng683['slice'](i294tc, rngb3j));case ttv9ic2:case twh_my5:case tctvi:
            break;case tq0z7:case tyhmx0:
            gbrn3j = ng683['slice'](i294tc, rngb3j), '/' === gbrn3j['slice'](-0x1) && (m5_6wh['closed'] = !0x0, gbrn3j = gbrn3j['slice'](0x0, -0x1));case tpdv$f9:
            agnr === tpdv$f9 && (gbrn3j = tvic9$), agnr == tq0z7 ? (opz['warning']('attribute "' + gbrn3j + '" missed quot(")!!'), m5_6wh['add'](tvic9$, gbrn3j['replace'](/&#?\w+;/g, y_qex), i294tc)) : ('http://www.w3.org/1999/xhtml' === jkbuas[''] && gbrn3j['match'](/^(?:disabled|checked|selected)$/i) || opz['warning']('attribute "' + gbrn3j + '" missed value!! "' + gbrn3j + '" instead!!'), m5_6wh['add'](gbrn3j, gbrn3j, i294tc));break;case tzq07o:
            throw new Error('attribute value missed!!');}return rngb3j;case '\u0080':
        z$pd7f = '\x20';default:
        if ('\x20' >= z$pd7f) switch (agnr) {case taubs:
            m5_6wh['setTagName'](ng683['slice'](i294tc, rngb3j)), agnr = twh_my5;break;case tyhmx0:
            tvic9$ = ng683['slice'](i294tc, rngb3j), agnr = tpdv$f9;break;case tq0z7:
            var gbrn3j = ng683['slice'](i294tc, rngb3j)['replace'](/&#?\w+;/g, y_qex);opz['warning']('attribute "' + gbrn3j + '" missed quot(")!!'), m5_6wh['add'](tvic9$, gbrn3j, i294tc);case ttv9ic2:
            agnr = twh_my5;} else switch (agnr) {case tpdv$f9:
            {
              m5_6wh['tagName'];
            }'http://www.w3.org/1999/xhtml' === jkbuas[''] && tvic9$['match'](/^(?:disabled|checked|selected)$/i) || opz['warning']('attribute "' + tvic9$ + '" missed value!! "' + tvic9$ + '" instead2!!'), m5_6wh['add'](tvic9$, tvic9$, i294tc), i294tc = rngb3j, agnr = tyhmx0;break;case ttv9ic2:
            opz['warning']('attribute space is required"' + tvic9$ + '\x22!!');case twh_my5:
            agnr = tyhmx0, i294tc = rngb3j;break;case tzq07o:
            agnr = tq0z7, i294tc = rngb3j;break;case tctvi:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}rngb3j++;
  }
}function tqx70eo(vdfp$, cvid$, z0eq7) {
  for (var bausj = vdfp$['tagName'], brkgj = null, di$ = vdfp$['length']; di$--;) {
    var t94 = vdfp$[di$],
        c9vti = t94['qName'],
        cvt9i$ = t94['value'],
        dpvfz$ = c9vti['indexOf'](':');if (dpvfz$ > 0x0) var xq0ym_ = t94['prefix'] = c9vti['slice'](0x0, dpvfz$),
        i9$vpd = c9vti['slice'](dpvfz$ + 0x1),
        gjarb = 'xmlns' === xq0ym_ && i9$vpd;else i9$vpd = c9vti, xq0ym_ = null, gjarb = 'xmlns' === c9vti && '';t94['localName'] = i9$vpd, gjarb !== !0x1 && (null == brkgj && (brkgj = {}, tgn8jr3(z0eq7, z0eq7 = {})), z0eq7[gjarb] = brkgj[gjarb] = cvt9i$, t94['uri'] = 'http://www.w3.org/2000/xmlns/', cvid$['startPrefixMapping'](gjarb, cvt9i$));
  }for (var di$ = vdfp$['length']; di$--;) {
    t94 = vdfp$[di$];var xq0ym_ = t94['prefix'];xq0ym_ && ('xml' === xq0ym_ && (t94['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== xq0ym_ && (t94['uri'] = z0eq7[xq0ym_ || '']));
  }var dpvfz$ = bausj['indexOf'](':');dpvfz$ > 0x0 ? (xq0ym_ = vdfp$['prefix'] = bausj['slice'](0x0, dpvfz$), i9$vpd = vdfp$['localName'] = bausj['slice'](dpvfz$ + 0x1)) : (xq0ym_ = null, i9$vpd = vdfp$['localName'] = bausj);var gbrkaj = vdfp$['uri'] = z0eq7[xq0ym_ || ''];if (cvid$['startElement'](gbrkaj, i9$vpd, bausj, vdfp$), !vdfp$['closed']) return vdfp$['currentNSMap'] = z0eq7, vdfp$['localNSMap'] = brkgj, !0x0;if (cvid$['endElement'](gbrkaj, i9$vpd, bausj), brkgj) {
    for (xq0ym_ in brkgj) cvid$['endPrefixMapping'](xq0ym_);
  }
}function tsjbuka(dzf7p$, ausbjk, g863, r3n18, gakj) {
  if (/^(?:script|textarea)$/i['test'](g863)) {
    var qxmy_0 = dzf7p$['indexOf']('</' + g863 + '>', ausbjk),
        pf7o = dzf7p$['substring'](ausbjk + 0x1, qxmy_0);if (/[&<]/['test'](pf7o)) return (/^script$/i['test'](g863) ? (gakj['characters'](pf7o, 0x0, pf7o['length']), qxmy_0) : (pf7o = pf7o['replace'](/&#?\w+;/g, r3n18), gakj['characters'](pf7o, 0x0, pf7o['length']), qxmy_0)
    );
  }return ausbjk + 0x1;
}function toz7fd(j38gnr, m5_yw, ex0q_, ox7q0) {
  var _yx0mq = ox7q0[ex0q_];return null == _yx0mq && (_yx0mq = j38gnr['lastIndexOf']('</' + ex0q_ + '>'), m5_yw > _yx0mq && (_yx0mq = j38gnr['lastIndexOf']('</' + ex0q_)), ox7q0[ex0q_] = _yx0mq), m5_yw > _yx0mq;
}function tgn8jr3(vd$c9i, opfdz7) {
  for (var gn8r in vd$c9i) opfdz7[gn8r] = vd$c9i[gn8r];
}function tof7dp(gn8r31, sbuak, w5816h, fdz$7) {
  var yxq_ = gn8r31['charAt'](sbuak + 0x2);switch (yxq_) {case '-':
      if ('-' === gn8r31['charAt'](sbuak + 0x3)) {
        var sjbar = gn8r31['indexOf']('-->', sbuak + 0x4);return sjbar > sbuak ? (w5816h['comment'](gn8r31, sbuak + 0x4, sjbar - sbuak - 0x4), sjbar + 0x3) : (fdz$7['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == gn8r31['substr'](sbuak + 0x3, 0x6)) {
        var sjbar = gn8r31['indexOf'](']]>', sbuak + 0x9);return w5816h['startCDATA'](), w5816h['characters'](gn8r31, sbuak + 0x9, sjbar - sbuak - 0x9), w5816h['endCDATA'](), sjbar + 0x3;
      }var zf7eo = tbrjng(gn8r31, sbuak),
          $vdi9p = zf7eo['length'];if ($vdi9p > 0x1 && /!doctype/i['test'](zf7eo[0x0][0x0])) {
        var q70zeo = zf7eo[0x1][0x0],
            icv92 = $vdi9p > 0x3 && /^public$/i['test'](zf7eo[0x2][0x0]) && zf7eo[0x3][0x0],
            zefoq = $vdi9p > 0x4 && zf7eo[0x4][0x0],
            g38n6 = zf7eo[$vdi9p - 0x1];return w5816h['startDTD'](q70zeo, icv92 && icv92['replace'](/^(['"])(.*?)\1$/, '$2'), zefoq && zefoq['replace'](/^(['"])(.*?)\1$/, '$2')), w5816h['endDTD'](), g38n6['index'] + g38n6[0x0]['length'];
      }}return -0x1;
}function tb3nrg(zeq0o, ujkba, ajrk) {
  var d$fvz = zeq0o['indexOf']('?>', ujkba);if (d$fvz) {
    var i9vdc$ = zeq0o['substring'](ujkba, d$fvz)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (i9vdc$) {
      {
        i9vdc$[0x0]['length'];
      }return ajrk['processingInstruction'](i9vdc$[0x1], i9vdc$[0x2]), d$fvz + 0x2;
    }return -0x1;
  }return -0x1;
}function tfz7od() {}function tbn3jrg(zqo7f, m6w5_) {
  return zqo7f['__proto__'] = m6w5_, zqo7f;
}function tbrjng(_0yqxm, mxhy_) {
  var x0hy,
      t2c49 = [],
      brjask = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (brjask['lastIndex'] = mxhy_, brjask['exec'](_0yqxm); x0hy = brjask['exec'](_0yqxm);) if (t2c49['push'](x0hy), x0hy[0x1]) return t2c49;
}var tpo7zf = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    tz$fdvp = new RegExp('[\\-\\.0-9' + tpo7zf['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    tfd9p$v = new RegExp('^' + tpo7zf['source'] + tz$fdvp['source'] + '*(?::' + tpo7zf['source'] + tz$fdvp['source'] + '*)?$'),
    taubs = 0x0,
    tyhmx0 = 0x1,
    tpdv$f9 = 0x2,
    tzq07o = 0x3,
    tq0z7 = 0x4,
    ttv9ic2 = 0x5,
    twh_my5 = 0x6,
    tctvi = 0x7;thw615['prototype'] = { 'parse': function (pzd$f, xwyhm_, zd7fpo) {
    var jr83g = this['domBuilder'];jr83g['startDocument'](), tgn8jr3(xwyhm_, xwyhm_ = {}), tx0yq_e(pzd$f, xwyhm_, zd7fpo, jr83g, this['errorHandler']), jr83g['endDocument']();
  } }, tfz7od['prototype'] = { 'setTagName': function (sabkju) {
    if (!tfd9p$v['test'](sabkju)) throw new Error('invalid tagName:' + sabkju);this['tagName'] = sabkju;
  }, 'add': function (feozq7, f$zv, xwym) {
    if (!tfd9p$v['test'](feozq7)) throw new Error('invalid attribute:' + feozq7);this[this['length']++] = { 'qName': feozq7, 'value': f$zv, 'offset': xwym };
  }, 'length': 0x0, 'getLocalName': function (q0ex7) {
    return this[q0ex7]['localName'];
  }, 'getLocator': function (exo7q) {
    return this[exo7q]['locator'];
  }, 'getQName': function (f$pvzd) {
    return this[f$pvzd]['qName'];
  }, 'getURI': function (vcdi$) {
    return this[vcdi$]['uri'];
  }, 'getValue': function (bjanrg) {
    return this[bjanrg]['value'];
  } }, tbn3jrg({}, tbn3jrg['prototype']) instanceof tbn3jrg || (tbn3jrg = function (cdvi$, bgarjk) {
  function jsbaku() {}jsbaku['prototype'] = bgarjk, jsbaku = new jsbaku();for (bgarjk in cdvi$) jsbaku[bgarjk] = cdvi$[bgarjk];return jsbaku;
}), exports['XMLReader'] = thw615;