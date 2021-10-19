var W = wx.$l;
function L9d78ks() {}function L9o4l3(ajt$i, kmw6sd, vqoc1, g98be, $hix5) {
  function j$ntia(e87kps) {
    var ntgajb = e87kps['slice'](0x1, -0x1);return ntgajb in vqoc1 ? vqoc1[ntgajb] : '#' === ntgajb['charAt'](0x0) ? 0xffff < (ntgajb = parseInt(ntgajb['substr'](0x1)['replace']('x', '0x'))) ? (ntgajb -= 0x10000, String['fromCharCode'](0xd800 + (ntgajb >> 0xa), 0xdc00 + (0x3ff & ntgajb))) : String['fromCharCode'](ntgajb) : ($hix5['error']('entity not found:' + e87kps), e87kps);
  }function c41q3(n5$0h) {
    var c1q3o;eg8f9b < n5$0h && (c1q3o = ajt$i['substring'](eg8f9b, n5$0h)['replace'](/&#?\w+;/g, j$ntia), o_34l && xhyu5(eg8f9b), g98be['characters'](c1q3o, 0x0, n5$0h - eg8f9b), eg8f9b = n5$0h);
  }function xhyu5($jitn, teg) {
    for (; p87s9 <= $jitn && (teg = oc31vq['exec'](ajt$i));) w1cov = teg['index'], p87s9 = w1cov + teg[0x0]['length'], o_34l['lineNumber']++;o_34l['columnNumber'] = $jitn - w1cov + 0x1;
  }for (var w1cov = 0x0, p87s9 = 0x0, oc31vq = /.*(?:\r\n?|\n)|.*$/g, o_34l = g98be['locator'], wcoq1v = [{ 'currentNSMap': kmw6sd }], p8ke7s = {}, eg8f9b = 0x0;;) {
    try {
      var kvmw6d = ajt$i['indexOf']('<', eg8f9b),
          p7e89f,
          l_z4o3;if (kvmw6d < 0x0) return void (ajt$i['substr'](eg8f9b)['match'](/^\s*$/) || (l_z4o3 = (p7e89f = g98be['doc'])['createTextNode'](ajt$i['substr'](eg8f9b)), p7e89f['appendChild'](l_z4o3), g98be['currentElement'] = l_z4o3));switch (eg8f9b < kvmw6d && c41q3(kvmw6d), ajt$i['charAt'](kvmw6d + 0x1)) {case '/':
          var jtbng = ajt$i['indexOf']('>', kvmw6d + 0x3),
              ryh2ux = ajt$i['substring'](kvmw6d + 0x2, jtbng),
              kws6 = wcoq1v['pop']();jtbng < 0x0 ? (ryh2ux = ajt$i['substring'](kvmw6d + 0x2)['replace'](/[\s<].*/, ''), $hix5['error']('end tag name: ' + ryh2ux + ' is not complete:' + kws6['tagName']), jtbng = kvmw6d + 0x1 + ryh2ux['length']) : ryh2ux['match'](/\s</) && (ryh2ux = ryh2ux['replace'](/[\s<].*/, ''), $hix5['error']('end tag name: ' + ryh2ux + ' maybe not complete'), jtbng = kvmw6d + 0x1 + ryh2ux['length']);var h0x5i = kws6['localNSMap'],
              oq1cvw = kws6['tagName'] == ryh2ux;if (oq1cvw || kws6['tagName'] && kws6['tagName']['toLowerCase']() == ryh2ux['toLowerCase']()) {
            if (g98be['endElement'](kws6['uri'], kws6['localName'], ryh2ux), h0x5i) {
              for (var nitaj$ in h0x5i) g98be['endPrefixMapping'](nitaj$);
            }oq1cvw || $hix5['fatalError']('end tag name: ' + ryh2ux + ' is not match the current start tagName:' + kws6['tagName']);
          } else wcoq1v['push'](kws6);jtbng++;break;case '?':
          o_34l && xhyu5(kvmw6d), jtbng = L9ij$an(ajt$i, kvmw6d, g98be);break;case '!':
          o_34l && xhyu5(kvmw6d), jtbng = L9cwq6(ajt$i, kvmw6d, g98be, $hix5);break;default:
          o_34l && xhyu5(kvmw6d);var fgb9jt = new L9beg89f(),
              tgbj = wcoq1v[wcoq1v['length'] - 0x1]['currentNSMap'],
              jtbng = L9oq43(ajt$i, kvmw6d, fgb9jt, tgbj, j$ntia, $hix5),
              h2ury = fgb9jt['length'];if (!fgb9jt['closed'] && L9xhi50y(ajt$i, jtbng, fgb9jt['tagName'], p8ke7s) && (fgb9jt['closed'] = !0x0, vqoc1['nbsp'] || $hix5['warning']('unclosed xml attribute')), o_34l && h2ury) {
            for (var gftjab = L9_z3l(o_34l, {}), tbef9 = 0x0; tbef9 < h2ury; tbef9++) {
              var egft9 = fgb9jt[tbef9];xhyu5(egft9['offset']), egft9['locator'] = L9_z3l(o_34l, {});
            }g98be['locator'] = gftjab, L9njai(fgb9jt, g98be, tgbj) && wcoq1v['push'](fgb9jt), g98be['locator'] = o_34l;
          } else L9njai(fgb9jt, g98be, tgbj) && wcoq1v['push'](fgb9jt);'http://www.w3.org/1999/xhtml' !== fgb9jt['uri'] || fgb9jt['closed'] ? jtbng++ : jtbng = L9n$50h(ajt$i, jtbng, fgb9jt['tagName'], j$ntia, g98be);}
    } catch (dkmp7s) {
      $hix5['error']('element parse error: ' + dkmp7s), jtbng = -0x1;
    }eg8f9b < jtbng ? eg8f9b = jtbng : c41q3(Math['max'](kvmw6d, eg8f9b) + 0x1);
  }
}function L9_z3l(agtjn, yh5xu) {
  return yh5xu['lineNumber'] = agtjn['lineNumber'], yh5xu['columnNumber'] = agtjn['columnNumber'], yh5xu;
}function L9oq43(y0uh5, c4o1, hi0y, b89fge, gfbet9, t9fjb) {
  for (var wmk6dv, dk6sm7 = ++c4o1, jani$5 = L9xyu5h;;) {
    var gfe9t = y0uh5['charAt'](dk6sm7);switch (gfe9t) {case '=':
        if (jani$5 === L9gbt9fe) wmk6dv = y0uh5['slice'](c4o1, dk6sm7), jani$5 = L9d1wv6m;else {
          if (jani$5 !== L9wcvq61) throw new Error('attribute equal must after attrName');jani$5 = L9d1wv6m;
        }break;case '\x27':case '\x22':
        if (jani$5 === L9d1wv6m || jani$5 === L9gbt9fe) {
          if (jani$5 === L9gbt9fe && (t9fjb['warning']('attribute value must after "="'), wmk6dv = y0uh5['slice'](c4o1, dk6sm7)), !(0x0 < (dk6sm7 = y0uh5['indexOf'](gfe9t, c4o1 = dk6sm7 + 0x1)))) throw new Error('attribute value no end \'' + gfe9t + '\' match');k78sep = y0uh5['slice'](c4o1, dk6sm7)['replace'](/&#?\w+;/g, gfbet9), hi0y['add'](wmk6dv, k78sep, c4o1 - 0x1), jani$5 = L9dsm76k;
        } else {
          if (jani$5 != L9vo13cq) throw new Error('attribute value must after "="');k78sep = y0uh5['slice'](c4o1, dk6sm7)['replace'](/&#?\w+;/g, gfbet9), hi0y['add'](wmk6dv, k78sep, c4o1), t9fjb['warning']('attribute "' + wmk6dv + '" missed start quot(' + gfe9t + ')!!'), c4o1 = dk6sm7 + 0x1, jani$5 = L9dsm76k;
        }break;case '/':
        switch (jani$5) {case L9xyu5h:
            hi0y['setTagName'](y0uh5['slice'](c4o1, dk6sm7));case L9dsm76k:case L9pksd7m:case L9hi0$5x:
            jani$5 = L9hi0$5x, hi0y['closed'] = !0x0;case L9vo13cq:case L9gbt9fe:case L9wcvq61:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return t9fjb['error']('unexpected end of input'), jani$5 == L9xyu5h && hi0y['setTagName'](y0uh5['slice'](c4o1, dk6sm7)), dk6sm7;case '>':
        switch (jani$5) {case L9xyu5h:
            hi0y['setTagName'](y0uh5['slice'](c4o1, dk6sm7));case L9dsm76k:case L9pksd7m:case L9hi0$5x:
            break;case L9vo13cq:case L9gbt9fe:
            '/' === (k78sep = y0uh5['slice'](c4o1, dk6sm7))['slice'](-0x1) && (hi0y['closed'] = !0x0, k78sep = k78sep['slice'](0x0, -0x1));case L9wcvq61:
            jani$5 === L9wcvq61 && (k78sep = wmk6dv), jani$5 == L9vo13cq ? (t9fjb['warning']('attribute "' + k78sep + '" missed quot(")!!'), hi0y['add'](wmk6dv, k78sep['replace'](/&#?\w+;/g, gfbet9), c4o1)) : ('http://www.w3.org/1999/xhtml' === b89fge[''] && k78sep['match'](/^(?:disabled|checked|selected)$/i) || t9fjb['warning']('attribute "' + k78sep + '" missed value!! "' + k78sep + '" instead!!'), hi0y['add'](k78sep, k78sep, c4o1));break;case L9d1wv6m:
            throw new Error('attribute value missed!!');}return dk6sm7;case '\u0080':
        gfe9t = '\x20';default:
        if (gfe9t <= '\x20') switch (jani$5) {case L9xyu5h:
            hi0y['setTagName'](y0uh5['slice'](c4o1, dk6sm7)), jani$5 = L9pksd7m;break;case L9gbt9fe:
            wmk6dv = y0uh5['slice'](c4o1, dk6sm7), jani$5 = L9wcvq61;break;case L9vo13cq:
            var k78sep = y0uh5['slice'](c4o1, dk6sm7)['replace'](/&#?\w+;/g, gfbet9);t9fjb['warning']('attribute "' + k78sep + '" missed quot(")!!'), hi0y['add'](wmk6dv, k78sep, c4o1);case L9dsm76k:
            jani$5 = L9pksd7m;} else switch (jani$5) {case L9wcvq61:
            hi0y['tagName'], 'http://www.w3.org/1999/xhtml' === b89fge[''] && wmk6dv['match'](/^(?:disabled|checked|selected)$/i) || t9fjb['warning']('attribute "' + wmk6dv + '" missed value!! "' + wmk6dv + '" instead2!!'), hi0y['add'](wmk6dv, wmk6dv, c4o1), c4o1 = dk6sm7, jani$5 = L9gbt9fe;break;case L9dsm76k:
            t9fjb['warning']('attribute space is required"' + wmk6dv + '\x22!!');case L9pksd7m:
            jani$5 = L9gbt9fe, c4o1 = dk6sm7;break;case L9d1wv6m:
            jani$5 = L9vo13cq, c4o1 = dk6sm7;break;case L9hi0$5x:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}dk6sm7++;
  }
}function L9njai(iy5h, ef98g, y0u5h) {
  for (var m67dks = iy5h['tagName'], a5nij$ = null, btjafg = iy5h['length']; btjafg--;) {
    var tnabg = iy5h[btjafg],
        tgf = tnabg['qName'],
        gbat = tnabg['value'],
        f987ep;tgf = 0x0 < (bf9get = tgf['indexOf'](':')) ? (eftb = tnabg['prefix'] = tgf['slice'](0x0, bf9get), f987ep = tgf['slice'](bf9get + 0x1), 'xmlns' === eftb && f987ep) : (eftb = null, 'xmlns' === (f987ep = tgf) && ''), tnabg['localName'] = f987ep, !0x1 !== tgf && (null == a5nij$ && (a5nij$ = {}, L9p8e9fb(y0u5h, y0u5h = {})), y0u5h[tgf] = a5nij$[tgf] = gbat, tnabg['uri'] = 'http://www.w3.org/2000/xmlns/', ef98g['startPrefixMapping'](tgf, gbat));
  }for (btjafg = iy5h['length']; btjafg--;) (eftb = (tnabg = iy5h[btjafg])['prefix']) && ('xml' === eftb && (tnabg['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== eftb && (tnabg['uri'] = y0u5h[eftb || '']));var bf9get;f987ep = 0x0 < (bf9get = m67dks['indexOf'](':')) ? (eftb = iy5h['prefix'] = m67dks['slice'](0x0, bf9get), iy5h['localName'] = m67dks['slice'](bf9get + 0x1)) : (eftb = null, iy5h['localName'] = m67dks);var tangj = iy5h['uri'] = y0u5h[eftb || ''];if (ef98g['startElement'](tangj, f987ep, m67dks, iy5h), !iy5h['closed']) return iy5h['currentNSMap'] = y0u5h, iy5h['localNSMap'] = a5nij$, !0x0;if (ef98g['endElement'](tangj, f987ep, m67dks), a5nij$) {
    for (var eftb in a5nij$) ef98g['endPrefixMapping'](eftb);
  }
}function L9n$50h(q43co1, se8kp, e9bgf8, i50yx, mdvw16) {
  if (/^(?:script|textarea)$/i['test'](e9bgf8)) {
    var sk7d6m = q43co1['indexOf']('</' + e9bgf8 + '>', se8kp),
        q43co1 = q43co1['substring'](se8kp + 0x1, sk7d6m);if (/[&<]/['test'](q43co1)) return (/^script$/i['test'](e9bgf8) || (q43co1 = q43co1['replace'](/&#?\w+;/g, i50yx)), mdvw16['characters'](q43co1, 0x0, q43co1['length']), sk7d6m
    );
  }return se8kp + 0x1;
}function L9xhi50y(ftjgba, ag$tjn, n5$ja, bfetg) {
  var vqc13 = bfetg[n5$ja];return null == vqc13 && ((vqc13 = ftjgba['lastIndexOf']('</' + n5$ja + '>')) < ag$tjn && (vqc13 = ftjgba['lastIndexOf']('</' + n5$ja)), bfetg[n5$ja] = vqc13), vqc13 < ag$tjn;
}function L9p8e9fb(ian50, mv1wd6) {
  for (var y2h0xu in ian50) mv1wd6[y2h0xu] = ian50[y2h0xu];
}function L9cwq6(njt$ag, gtfjab, skwd6m, h5xiy0) {
  var km6vwd = njt$ag['charAt'](gtfjab + 0x2);if ('-' === km6vwd) return '-' !== njt$ag['charAt'](gtfjab + 0x3) ? -0x1 : gtfjab < (vqo = njt$ag['indexOf']('-->', gtfjab + 0x4)) ? (skwd6m['comment'](njt$ag, gtfjab + 0x4, vqo - gtfjab - 0x4), vqo + 0x3) : (h5xiy0['error']('Unclosed comment'), -0x1);if ('CDATA[' == njt$ag['substr'](gtfjab + 0x3, 0x6)) {
    var vqo = njt$ag['indexOf'](']]>', gtfjab + 0x9);return skwd6m['startCDATA'](), skwd6m['characters'](njt$ag, gtfjab + 0x9, vqo - gtfjab - 0x9), skwd6m['endCDATA'](), vqo + 0x3;
  }km6vwd = L9gfjt9b(njt$ag, gtfjab), h5xiy0 = km6vwd['length'];if (0x1 < h5xiy0 && /!doctype/i['test'](km6vwd[0x0][0x0])) return vqo = km6vwd[0x1][0x0], njt$ag = 0x3 < h5xiy0 && /^public$/i['test'](km6vwd[0x2][0x0]) && km6vwd[0x3][0x0], gtfjab = 0x4 < h5xiy0 && km6vwd[0x4][0x0], h5xiy0 = km6vwd[h5xiy0 - 0x1], (skwd6m['startDTD'](vqo, njt$ag && njt$ag['replace'](/^(['"])(.*?)\1$/, '$2'), gtfjab && gtfjab['replace'](/^(['"])(.*?)\1$/, '$2')), skwd6m['endDTD'](), h5xiy0['index'] + h5xiy0[0x0]['length']);return -0x1;
}function L9ij$an(h0x$5, n$5aji, aj5n) {
  var yux50h = h0x$5['indexOf']('?>', n$5aji);if (yux50h) return n$5aji = h0x$5['substring'](n$5aji, yux50h)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), n$5aji ? (n$5aji[0x0]['length'], aj5n['processingInstruction'](n$5aji[0x1], n$5aji[0x2]), yux50h + 0x2) : -0x1;return -0x1;
}function L9beg89f() {}function L9x05i(b9g8f, msd7k) {
  return b9g8f['__proto__'] = msd7k, b9g8f;
}function L9gfjt9b(ija$nt, yxi) {
  var rxu2yh,
      ntba = [],
      ngt$ja = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ngt$ja['lastIndex'] = yxi, ngt$ja['exec'](ija$nt); rxu2yh = ngt$ja['exec'](ija$nt);) if (ntba['push'](rxu2yh), rxu2yh[0x1]) return ntba;
}var L9a0$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9pf798 = new RegExp('[\\-\\.0-9' + L9a0$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9mkdw6v = new RegExp('^' + L9a0$['source'] + L9pf798['source'] + '*(?::' + L9a0$['source'] + L9pf798['source'] + '*)?$'),
    L9xyu5h = 0x0,
    L9gbt9fe = 0x1,
    L9wcvq61 = 0x2,
    L9d1wv6m = 0x3,
    L9vo13cq = 0x4,
    L9dsm76k = 0x5,
    L9pksd7m = 0x6,
    L9hi0$5x = 0x7;L9d78ks['prototype'] = { 'parse': function (u2xy, abntjg, an$tgj) {
    var dwv1 = this['domBuilder'];dwv1['startDocument'](), L9p8e9fb(abntjg, abntjg = {}), L9o4l3(u2xy, abntjg, an$tgj, dwv1, this['errorHandler']), dwv1['endDocument']();
  } }, L9beg89f['prototype'] = { 'setTagName': function (n$iaj5) {
    if (!L9mkdw6v['test'](n$iaj5)) throw new Error('invalid tagName:' + n$iaj5);this['tagName'] = n$iaj5;
  }, 'add': function ($na05, gf8b9, jtbaf) {
    if (!L9mkdw6v['test']($na05)) throw new Error('invalid attribute:' + $na05);this[this['length']++] = { 'qName': $na05, 'value': gf8b9, 'offset': jtbaf };
  }, 'length': 0x0, 'getLocalName': function (coq3v1) {
    return this[coq3v1]['localName'];
  }, 'getLocator': function (gj$na) {
    return this[gj$na]['locator'];
  }, 'getQName': function (jfagt) {
    return this[jfagt]['qName'];
  }, 'getURI': function (_z43lo) {
    return this[_z43lo]['uri'];
  }, 'getValue': function (qwvco) {
    return this[qwvco]['value'];
  } }, L9x05i({}, L9x05i['prototype']) instanceof L9x05i || (L9x05i = function (_z4ol, $n5ai) {
  function ksdp7() {}for ($n5ai in ksdp7['prototype'] = $n5ai, ksdp7 = new ksdp7(), _z4ol) ksdp7[$n5ai] = _z4ol[$n5ai];return ksdp7;
}), exports['XMLReader'] = L9d78ks;