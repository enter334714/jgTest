var B = wx.$z;
function zbr() {}function zytk(k_b8yr, _2w0, hpg914, g1p9h, sxz9e) {
  function ozetyd(i$q3m7) {
    var kb8od = i$q3m7['slice'](0x1, -0x1);return kb8od in hpg914 ? hpg914[kb8od] : '#' === kb8od['charAt'](0x0) ? 0xffff < (kb8od = parseInt(kb8od['substr'](0x1)['replace']('x', '0x'))) ? (kb8od -= 0x10000, String['fromCharCode'](0xd800 + (kb8od >> 0xa), 0xdc00 + (0x3ff & kb8od))) : String['fromCharCode'](kb8od) : (sxz9e['error']('entity not found:' + i$q3m7), i$q3m7);
  }function qj3im$(odkzt) {
    var szxate;h19gp4 < odkzt && (szxate = k_b8yr['substring'](h19gp4, odkzt)['replace'](/&#?\w+;/g, ozetyd), kodytb && i73qmn(h19gp4), g1p9h['characters'](szxate, 0x0, odkzt - h19gp4), h19gp4 = odkzt);
  }function i73qmn(as1x, p6v4) {
    for (; kbyotd <= as1x && (p6v4 = wu25_0['exec'](k_b8yr));) p14gh9 = p6v4['index'], kbyotd = p14gh9 + p6v4[0x0]['length'], kodytb['lineNumber']++;kodytb['columnNumber'] = as1x - p14gh9 + 0x1;
  }for (var p14gh9 = 0x0, kbyotd = 0x0, wu25_0 = /.*(?:\r\n?|\n)|.*$/g, kodytb = g1p9h['locator'], dzao = [{ 'currentNSMap': _2w0 }], u8r_52 = {}, h19gp4 = 0x0;;) {
    try {
      var g4p91 = k_b8yr['indexOf']('<', h19gp4),
          zdt,
          tos;if (g4p91 < 0x0) return void (k_b8yr['substr'](h19gp4)['match'](/^\s*$/) || (tos = (zdt = g1p9h['doc'])['createTextNode'](k_b8yr['substr'](h19gp4)), zdt['appendChild'](tos), g1p9h['currentElement'] = tos));switch (h19gp4 < g4p91 && qj3im$(g4p91), k_b8yr['charAt'](g4p91 + 0x1)) {case '/':
          var oetyzd = k_b8yr['indexOf']('>', g4p91 + 0x3),
              otaedz = k_b8yr['substring'](g4p91 + 0x2, oetyzd),
              v6l7 = dzao['pop']();oetyzd < 0x0 ? (otaedz = k_b8yr['substring'](g4p91 + 0x2)['replace'](/[\s<].*/, ''), sxz9e['error']('end tag name: ' + otaedz + ' is not complete:' + v6l7['tagName']), oetyzd = g4p91 + 0x1 + otaedz['length']) : otaedz['match'](/\s</) && (otaedz = otaedz['replace'](/[\s<].*/, ''), sxz9e['error']('end tag name: ' + otaedz + ' maybe not complete'), oetyzd = g4p91 + 0x1 + otaedz['length']);var r5_28b = v6l7['localNSMap'],
              l7vmi = v6l7['tagName'] == otaedz;if (l7vmi || v6l7['tagName'] && v6l7['tagName']['toLowerCase']() == otaedz['toLowerCase']()) {
            if (g1p9h['endElement'](v6l7['uri'], v6l7['localName'], otaedz), r5_28b) {
              for (var tozda in r5_28b) g1p9h['endPrefixMapping'](tozda);
            }l7vmi || sxz9e['fatalError']('end tag name: ' + otaedz + ' is not match the current start tagName:' + v6l7['tagName']);
          } else dzao['push'](v6l7);oetyzd++;break;case '?':
          kodytb && i73qmn(g4p91), oetyzd = zdaz(k_b8yr, g4p91, g1p9h);break;case '!':
          kodytb && i73qmn(g4p91), oetyzd = zm37(k_b8yr, g4p91, g1p9h, sxz9e);break;default:
          kodytb && i73qmn(g4p91);var sxez9a = new zsxp9h(),
              q$im73 = dzao[dzao['length'] - 0x1]['currentNSMap'],
              oetyzd = zoatzse(k_b8yr, g4p91, sxez9a, q$im73, ozetyd, sxz9e),
              b5k_ = sxez9a['length'];if (!sxez9a['closed'] && zs9p1xh(k_b8yr, oetyzd, sxez9a['tagName'], u8r_52) && (sxez9a['closed'] = !0x0, hpg914['nbsp'] || sxz9e['warning']('unclosed xml attribute')), kodytb && b5k_) {
            for (var es9xza = zfl6vn7(kodytb, {}), mivln7 = 0x0; mivln7 < b5k_; mivln7++) {
              var dtaez = sxez9a[mivln7];i73qmn(dtaez['offset']), dtaez['locator'] = zfl6vn7(kodytb, {});
            }g1p9h['locator'] = es9xza, zu_52r8(sxez9a, g1p9h, q$im73) && dzao['push'](sxez9a), g1p9h['locator'] = kodytb;
          } else zu_52r8(sxez9a, g1p9h, q$im73) && dzao['push'](sxez9a);'http://www.w3.org/1999/xhtml' !== sxez9a['uri'] || sxez9a['closed'] ? oetyzd++ : oetyzd = zfgv46p(k_b8yr, oetyzd, sxez9a['tagName'], ozetyd, g1p9h);}
    } catch (x9as1h) {
      sxz9e['error']('element parse error: ' + x9as1h), oetyzd = -0x1;
    }h19gp4 < oetyzd ? h19gp4 = oetyzd : qj3im$(Math['max'](g4p91, h19gp4) + 0x1);
  }
}function zfl6vn7(dyob, vim7l) {
  return vim7l['lineNumber'] = dyob['lineNumber'], vim7l['columnNumber'] = dyob['columnNumber'], vim7l;
}function zoatzse(mj3q$, p4hgf, lv6f7n, r_ky8b, k8rb, xe9a) {
  for (var azext, gh61p = ++p4hgf, oated = z_52w0;;) {
    var u_85 = mj3q$['charAt'](gh61p);switch (u_85) {case '=':
        if (oated === zeszatx) azext = mj3q$['slice'](p4hgf, gh61p), oated = z$7mq3;else {
          if (oated !== zvfg46l) throw new Error('attribute equal must after attrName');oated = z$7mq3;
        }break;case '\x27':case '\x22':
        if (oated === z$7mq3 || oated === zeszatx) {
          if (oated === zeszatx && (xe9a['warning']('attribute value must after "="'), azext = mj3q$['slice'](p4hgf, gh61p)), !(0x0 < (gh61p = mj3q$['indexOf'](u_85, p4hgf = gh61p + 0x1)))) throw new Error('attribute value no end \'' + u_85 + '\' match');x1h9ps = mj3q$['slice'](p4hgf, gh61p)['replace'](/&#?\w+;/g, k8rb), lv6f7n['add'](azext, x1h9ps, p4hgf - 0x1), oated = zr2_w5;
        } else {
          if (oated != zzaxe9s) throw new Error('attribute value must after "="');x1h9ps = mj3q$['slice'](p4hgf, gh61p)['replace'](/&#?\w+;/g, k8rb), lv6f7n['add'](azext, x1h9ps, p4hgf), xe9a['warning']('attribute "' + azext + '" missed start quot(' + u_85 + ')!!'), p4hgf = gh61p + 0x1, oated = zr2_w5;
        }break;case '/':
        switch (oated) {case z_52w0:
            lv6f7n['setTagName'](mj3q$['slice'](p4hgf, gh61p));case zr2_w5:case zkbo:case zv7lnmi:
            oated = zv7lnmi, lv6f7n['closed'] = !0x0;case zzaxe9s:case zeszatx:case zvfg46l:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return xe9a['error']('unexpected end of input'), oated == z_52w0 && lv6f7n['setTagName'](mj3q$['slice'](p4hgf, gh61p)), gh61p;case '>':
        switch (oated) {case z_52w0:
            lv6f7n['setTagName'](mj3q$['slice'](p4hgf, gh61p));case zr2_w5:case zkbo:case zv7lnmi:
            break;case zzaxe9s:case zeszatx:
            '/' === (x1h9ps = mj3q$['slice'](p4hgf, gh61p))['slice'](-0x1) && (lv6f7n['closed'] = !0x0, x1h9ps = x1h9ps['slice'](0x0, -0x1));case zvfg46l:
            oated === zvfg46l && (x1h9ps = azext), oated == zzaxe9s ? (xe9a['warning']('attribute "' + x1h9ps + '" missed quot(")!!'), lv6f7n['add'](azext, x1h9ps['replace'](/&#?\w+;/g, k8rb), p4hgf)) : ('http://www.w3.org/1999/xhtml' === r_ky8b[''] && x1h9ps['match'](/^(?:disabled|checked|selected)$/i) || xe9a['warning']('attribute "' + x1h9ps + '" missed value!! "' + x1h9ps + '" instead!!'), lv6f7n['add'](x1h9ps, x1h9ps, p4hgf));break;case z$7mq3:
            throw new Error('attribute value missed!!');}return gh61p;case '\u0080':
        u_85 = '\x20';default:
        if (u_85 <= '\x20') switch (oated) {case z_52w0:
            lv6f7n['setTagName'](mj3q$['slice'](p4hgf, gh61p)), oated = zkbo;break;case zeszatx:
            azext = mj3q$['slice'](p4hgf, gh61p), oated = zvfg46l;break;case zzaxe9s:
            var x1h9ps = mj3q$['slice'](p4hgf, gh61p)['replace'](/&#?\w+;/g, k8rb);xe9a['warning']('attribute "' + x1h9ps + '" missed quot(")!!'), lv6f7n['add'](azext, x1h9ps, p4hgf);case zr2_w5:
            oated = zkbo;} else switch (oated) {case zvfg46l:
            lv6f7n['tagName'], 'http://www.w3.org/1999/xhtml' === r_ky8b[''] && azext['match'](/^(?:disabled|checked|selected)$/i) || xe9a['warning']('attribute "' + azext + '" missed value!! "' + azext + '" instead2!!'), lv6f7n['add'](azext, azext, p4hgf), p4hgf = gh61p, oated = zeszatx;break;case zr2_w5:
            xe9a['warning']('attribute space is required"' + azext + '\x22!!');case zkbo:
            oated = zeszatx, p4hgf = gh61p;break;case z$7mq3:
            oated = zzaxe9s, p4hgf = gh61p;break;case zv7lnmi:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}gh61p++;
  }
}function zu_52r8(niv7lf, hgxp91, zxsta) {
  for (var jqm$3 = niv7lf['tagName'], xseat = null, seato = niv7lf['length']; seato--;) {
    var bk_8yr = niv7lf[seato],
        o8ydbk = bk_8yr['qName'],
        lv7n6f = bk_8yr['value'],
        ifln7;o8ydbk = 0x0 < (v4fgp = o8ydbk['indexOf'](':')) ? (ztsoae = bk_8yr['prefix'] = o8ydbk['slice'](0x0, v4fgp), ifln7 = o8ydbk['slice'](v4fgp + 0x1), 'xmlns' === ztsoae && ifln7) : (ztsoae = null, 'xmlns' === (ifln7 = o8ydbk) && ''), bk_8yr['localName'] = ifln7, !0x1 !== o8ydbk && (null == xseat && (xseat = {}, zqn7(zxsta, zxsta = {})), zxsta[o8ydbk] = xseat[o8ydbk] = lv7n6f, bk_8yr['uri'] = 'http://www.w3.org/2000/xmlns/', hgxp91['startPrefixMapping'](o8ydbk, lv7n6f));
  }for (seato = niv7lf['length']; seato--;) (ztsoae = (bk_8yr = niv7lf[seato])['prefix']) && ('xml' === ztsoae && (bk_8yr['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ztsoae && (bk_8yr['uri'] = zxsta[ztsoae || '']));var v4fgp;ifln7 = 0x0 < (v4fgp = jqm$3['indexOf'](':')) ? (ztsoae = niv7lf['prefix'] = jqm$3['slice'](0x0, v4fgp), niv7lf['localName'] = jqm$3['slice'](v4fgp + 0x1)) : (ztsoae = null, niv7lf['localName'] = jqm$3);var v7lfin = niv7lf['uri'] = zxsta[ztsoae || ''];if (hgxp91['startElement'](v7lfin, ifln7, jqm$3, niv7lf), !niv7lf['closed']) return niv7lf['currentNSMap'] = zxsta, niv7lf['localNSMap'] = xseat, !0x0;if (hgxp91['endElement'](v7lfin, ifln7, jqm$3), xseat) {
    for (var ztsoae in xseat) hgxp91['endPrefixMapping'](ztsoae);
  }
}function zfgv46p(_rybk8, yzetdo, $m3, ax19s, g146hp) {
  if (/^(?:script|textarea)$/i['test']($m3)) {
    var ykzdot = _rybk8['indexOf']('</' + $m3 + '>', yzetdo),
        _rybk8 = _rybk8['substring'](yzetdo + 0x1, ykzdot);if (/[&<]/['test'](_rybk8)) return (/^script$/i['test']($m3) || (_rybk8 = _rybk8['replace'](/&#?\w+;/g, ax19s)), g146hp['characters'](_rybk8, 0x0, _rybk8['length']), ykzdot
    );
  }return yzetdo + 0x1;
}function zs9p1xh(kr_58b, xh1p9, hpg91x, xhps) {
  var _8u2 = xhps[hpg91x];return null == _8u2 && ((_8u2 = kr_58b['lastIndexOf']('</' + hpg91x + '>')) < xh1p9 && (_8u2 = kr_58b['lastIndexOf']('</' + hpg91x)), xhps[hpg91x] = _8u2), _8u2 < xh1p9;
}function zqn7(fvg64p, $im3q) {
  for (var exast in fvg64p) $im3q[exast] = fvg64p[exast];
}function zm37(oybktd, dykbr8, m3l7, dok8by) {
  var ydokbt = oybktd['charAt'](dykbr8 + 0x2);if ('-' === ydokbt) return '-' !== oybktd['charAt'](dykbr8 + 0x3) ? -0x1 : dykbr8 < (ln67fv = oybktd['indexOf']('-->', dykbr8 + 0x4)) ? (m3l7['comment'](oybktd, dykbr8 + 0x4, ln67fv - dykbr8 - 0x4), ln67fv + 0x3) : (dok8by['error']('Unclosed comment'), -0x1);if ('CDATA[' == oybktd['substr'](dykbr8 + 0x3, 0x6)) return ln67fv = oybktd['indexOf'](']]>', dykbr8 + 0x9), m3l7['startCDATA'](), m3l7['characters'](oybktd, dykbr8 + 0x9, ln67fv - dykbr8 - 0x9), m3l7['endCDATA'](), ln67fv + 0x3;ydokbt = zphg19x(oybktd, dykbr8), dok8by = ydokbt['length'];var ln67fv;return 0x1 < dok8by && /!doctype/i['test'](ydokbt[0x0][0x0]) ? (ln67fv = ydokbt[0x1][0x0], oybktd = 0x3 < dok8by && /^public$/i['test'](ydokbt[0x2][0x0]) && ydokbt[0x3][0x0], dykbr8 = 0x4 < dok8by && ydokbt[0x4][0x0], ydokbt = ydokbt[dok8by - 0x1], m3l7['startDTD'](ln67fv, oybktd && oybktd['replace'](/^(['"])(.*?)\1$/, '$2'), dykbr8 && dykbr8['replace'](/^(['"])(.*?)\1$/, '$2')), m3l7['endDTD'](), ydokbt['index'] + ydokbt[0x0]['length']) : -0x1;
}function zdaz(dkbt, nlfv64, h146p) {
  var boytkd = dkbt['indexOf']('?>', nlfv64);return boytkd && (dkbt = dkbt['substring'](nlfv64, boytkd)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/)) ? (dkbt[0x0]['length'], h146p['processingInstruction'](dkbt[0x1], dkbt[0x2]), boytkd + 0x2) : -0x1;
}function zsxp9h() {}function zx19ea(e1x9a, _u05w2) {
  return e1x9a['__proto__'] = _u05w2, e1x9a;
}function zphg19x(fl46v, q$j3m) {
  var xsha1,
      nvlmi = [],
      bk_58 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (bk_58['lastIndex'] = q$j3m, bk_58['exec'](fl46v); xsha1 = bk_58['exec'](fl46v);) if (nvlmi['push'](xsha1), xsha1[0x1]) return nvlmi;
}var zkodyb = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zvg46fp = new RegExp('[\\-\\.0-9' + zkodyb['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zaxtesz = new RegExp('^' + zkodyb['source'] + zvg46fp['source'] + '*(?::' + zkodyb['source'] + zvg46fp['source'] + '*)?$'),
    z_52w0 = 0x0,
    zeszatx = 0x1,
    zvfg46l = 0x2,
    z$7mq3 = 0x3,
    zzaxe9s = 0x4,
    zr2_w5 = 0x5,
    zkbo = 0x6,
    zv7lnmi = 0x7;zbr['prototype'] = { 'parse': function (zxaes9, w2u_05, yb8k_r) {
    var gf64h = this['domBuilder'];gf64h['startDocument'](), zqn7(w2u_05, w2u_05 = {}), zytk(zxaes9, w2u_05, yb8k_r, gf64h, this['errorHandler']), gf64h['endDocument']();
  } }, zsxp9h['prototype'] = { 'setTagName': function (h1p4) {
    if (!zaxtesz['test'](h1p4)) throw new Error('invalid tagName:' + h1p4);this['tagName'] = h1p4;
  }, 'add': function (g6f4h, h9sxp1, kb8r_y) {
    if (!zaxtesz['test'](g6f4h)) throw new Error('invalid attribute:' + g6f4h);this[this['length']++] = { 'qName': g6f4h, 'value': h9sxp1, 'offset': kb8r_y };
  }, 'length': 0x0, 'getLocalName': function (b_8ky) {
    return this[b_8ky]['localName'];
  }, 'getLocator': function (k8odby) {
    return this[k8odby]['locator'];
  }, 'getQName': function (p4fh6g) {
    return this[p4fh6g]['qName'];
  }, 'getURI': function (qmi73n) {
    return this[qmi73n]['uri'];
  }, 'getValue': function (b8k_5) {
    return this[b8k_5]['value'];
  } }, zx19ea({}, zx19ea['prototype']) instanceof zx19ea || (zx19ea = function (n7li, zodey) {
  function lm7inv() {}for (zodey in lm7inv['prototype'] = zodey, lm7inv = new lm7inv(), n7li) lm7inv[zodey] = n7li[zodey];return lm7inv;
}), exports['XMLReader'] = zbr;