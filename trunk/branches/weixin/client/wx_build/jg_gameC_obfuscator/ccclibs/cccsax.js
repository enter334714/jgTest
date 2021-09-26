var p = wx.$h;
function a_y8w0qs() {}function a_al1krh(yqs08, _a1h$k, mywosq, zq204, jyom) {
  function v9k$(swoy) {
    var $lk1h = swoy['slice'](0x1, -0x1);return $lk1h in mywosq ? mywosq[$lk1h] : '#' === $lk1h['charAt'](0x0) ? 0xffff < ($lk1h = parseInt($lk1h['substr'](0x1)['replace']('x', '0x'))) ? ($lk1h -= 0x10000, String['fromCharCode'](0xd800 + ($lk1h >> 0xa), 0xdc00 + (0x3ff & $lk1h))) : String['fromCharCode']($lk1h) : (jyom['error']('entity not found:' + swoy), swoy);
  }function lak16r(ymq8) {
    var bgtpvn;akl1$h < ymq8 && (bgtpvn = yqs08['substring'](akl1$h, ymq8)['replace'](/&#?\w+;/g, v9k$), ws8q0 && di5x7(akl1$h), zq204['characters'](bgtpvn, 0x0, ymq8 - akl1$h), akl1$h = ymq8);
  }function di5x7(k1rhal, p9g$_v) {
    for (; z48q02 <= k1rhal && (p9g$_v = png2t['exec'](yqs08));) l3ri67 = p9g$_v['index'], z48q02 = l3ri67 + p9g$_v[0x0]['length'], ws8q0['lineNumber']++;ws8q0['columnNumber'] = k1rhal - l3ri67 + 0x1;
  }for (var l3ri67 = 0x0, z48q02 = 0x0, png2t = /.*(?:\r\n?|\n)|.*$/g, ws8q0 = zq204['locator'], rd637i = [{ 'currentNSMap': _a1h$k }], _v = {}, akl1$h = 0x0;;) {
    try {
      var vpbng = yqs08['indexOf']('<', akl1$h),
          ys804q,
          tpn2g;if (vpbng < 0x0) return void (yqs08['substr'](akl1$h)['match'](/^\s*$/) || (tpn2g = (ys804q = zq204['doc'])['createTextNode'](yqs08['substr'](akl1$h)), ys804q['appendChild'](tpn2g), zq204['currentElement'] = tpn2g));switch (akl1$h < vpbng && lak16r(vpbng), yqs08['charAt'](vpbng + 0x1)) {case '/':
          var z2n04b = yqs08['indexOf']('>', vpbng + 0x3),
              tvn = yqs08['substring'](vpbng + 0x2, z2n04b),
              gbnz2 = rd637i['pop']();z2n04b < 0x0 ? (tvn = yqs08['substring'](vpbng + 0x2)['replace'](/[\s<].*/, ''), jyom['error']('end tag name: ' + tvn + ' is not complete:' + gbnz2['tagName']), z2n04b = vpbng + 0x1 + tvn['length']) : tvn['match'](/\s</) && (tvn = tvn['replace'](/[\s<].*/, ''), jyom['error']('end tag name: ' + tvn + ' maybe not complete'), z2n04b = vpbng + 0x1 + tvn['length']);var i7l6ar = gbnz2['localNSMap'],
              a1lk = gbnz2['tagName'] == tvn;if (a1lk || gbnz2['tagName'] && gbnz2['tagName']['toLowerCase']() == tvn['toLowerCase']()) {
            if (zq204['endElement'](gbnz2['uri'], gbnz2['localName'], tvn), i7l6ar) {
              for (var wmejoc in i7l6ar) zq204['endPrefixMapping'](wmejoc);
            }a1lk || jyom['fatalError']('end tag name: ' + tvn + ' is not match the current start tagName:' + gbnz2['tagName']);
          } else rd637i['push'](gbnz2);z2n04b++;break;case '?':
          ws8q0 && di5x7(vpbng), z2n04b = a_ntp2gb(yqs08, vpbng, zq204);break;case '!':
          ws8q0 && di5x7(vpbng), z2n04b = a_y0q48(yqs08, vpbng, zq204, jyom);break;default:
          ws8q0 && di5x7(vpbng);var lrak1h = new a_r16akl(),
              sq840 = rd637i[rd637i['length'] - 0x1]['currentNSMap'],
              z2n04b = a_lri(yqs08, vpbng, lrak1h, sq840, v9k$, jyom),
              nbtz4 = lrak1h['length'];if (!lrak1h['closed'] && a_q820(yqs08, z2n04b, lrak1h['tagName'], _v) && (lrak1h['closed'] = !0x0, mywosq['nbsp'] || jyom['warning']('unclosed xml attribute')), ws8q0 && nbtz4) {
            for (var woyjm = a_$_vk(ws8q0, {}), qy8ws = 0x0; qy8ws < nbtz4; qy8ws++) {
              var l7ir36 = lrak1h[qy8ws];di5x7(l7ir36['offset']), l7ir36['locator'] = a_$_vk(ws8q0, {});
            }zq204['locator'] = woyjm, a_$k9vh_(lrak1h, zq204, sq840) && rd637i['push'](lrak1h), zq204['locator'] = ws8q0;
          } else a_$k9vh_(lrak1h, zq204, sq840) && rd637i['push'](lrak1h);'http://www.w3.org/1999/xhtml' !== lrak1h['uri'] || lrak1h['closed'] ? z2n04b++ : z2n04b = a_swyq80(yqs08, z2n04b, lrak1h['tagName'], v9k$, zq204);}
    } catch (osmyw) {
      jyom['error']('element parse error: ' + osmyw), z2n04b = -0x1;
    }akl1$h < z2n04b ? akl1$h = z2n04b : lak16r(Math['max'](vpbng, akl1$h) + 0x1);
  }
}function a_$_vk(kh$a_1, s8mwy) {
  return s8mwy['lineNumber'] = kh$a_1['lineNumber'], s8mwy['columnNumber'] = kh$a_1['columnNumber'], s8mwy;
}function a_lri(ywmso, zgb2nt, pvn9g, jsyowm, sojmw, d736ix) {
  for (var dx37i6, krlah1 = ++zgb2nt, i3xf5 = a_yw08qs;;) {
    var hk_1$a = ywmso['charAt'](krlah1);switch (hk_1$a) {case '=':
        if (i3xf5 === a_r36l7) dx37i6 = ywmso['slice'](zgb2nt, krlah1), i3xf5 = a_mcejwo;else {
          if (i3xf5 !== a_aklh1) throw new Error('attribute equal must after attrName');i3xf5 = a_mcejwo;
        }break;case '\x27':case '\x22':
        if (i3xf5 === a_mcejwo || i3xf5 === a_r36l7) {
          if (i3xf5 === a_r36l7 && (d736ix['warning']('attribute value must after "="'), dx37i6 = ywmso['slice'](zgb2nt, krlah1)), !(0x0 < (krlah1 = ywmso['indexOf'](hk_1$a, zgb2nt = krlah1 + 0x1)))) throw new Error('attribute value no end \'' + hk_1$a + '\' match');x5idf3 = ywmso['slice'](zgb2nt, krlah1)['replace'](/&#?\w+;/g, sojmw), pvn9g['add'](dx37i6, x5idf3, zgb2nt - 0x1), i3xf5 = a_l16kr;
        } else {
          if (i3xf5 != a_k_h$1a) throw new Error('attribute value must after "="');x5idf3 = ywmso['slice'](zgb2nt, krlah1)['replace'](/&#?\w+;/g, sojmw), pvn9g['add'](dx37i6, x5idf3, zgb2nt), d736ix['warning']('attribute "' + dx37i6 + '" missed start quot(' + hk_1$a + ')!!'), zgb2nt = krlah1 + 0x1, i3xf5 = a_l16kr;
        }break;case '/':
        switch (i3xf5) {case a_yw08qs:
            pvn9g['setTagName'](ywmso['slice'](zgb2nt, krlah1));case a_l16kr:case a_v$_h9:case a_l6k1r:
            i3xf5 = a_l6k1r, pvn9g['closed'] = !0x0;case a_k_h$1a:case a_r36l7:case a_aklh1:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return d736ix['error']('unexpected end of input'), i3xf5 == a_yw08qs && pvn9g['setTagName'](ywmso['slice'](zgb2nt, krlah1)), krlah1;case '>':
        switch (i3xf5) {case a_yw08qs:
            pvn9g['setTagName'](ywmso['slice'](zgb2nt, krlah1));case a_l16kr:case a_v$_h9:case a_l6k1r:
            break;case a_k_h$1a:case a_r36l7:
            '/' === (x5idf3 = ywmso['slice'](zgb2nt, krlah1))['slice'](-0x1) && (pvn9g['closed'] = !0x0, x5idf3 = x5idf3['slice'](0x0, -0x1));case a_aklh1:
            i3xf5 === a_aklh1 && (x5idf3 = dx37i6), i3xf5 == a_k_h$1a ? (d736ix['warning']('attribute "' + x5idf3 + '" missed quot(")!!'), pvn9g['add'](dx37i6, x5idf3['replace'](/&#?\w+;/g, sojmw), zgb2nt)) : ('http://www.w3.org/1999/xhtml' === jsyowm[''] && x5idf3['match'](/^(?:disabled|checked|selected)$/i) || d736ix['warning']('attribute "' + x5idf3 + '" missed value!! "' + x5idf3 + '" instead!!'), pvn9g['add'](x5idf3, x5idf3, zgb2nt));break;case a_mcejwo:
            throw new Error('attribute value missed!!');}return krlah1;case '\u0080':
        hk_1$a = '\x20';default:
        if (hk_1$a <= '\x20') switch (i3xf5) {case a_yw08qs:
            pvn9g['setTagName'](ywmso['slice'](zgb2nt, krlah1)), i3xf5 = a_v$_h9;break;case a_r36l7:
            dx37i6 = ywmso['slice'](zgb2nt, krlah1), i3xf5 = a_aklh1;break;case a_k_h$1a:
            var x5idf3 = ywmso['slice'](zgb2nt, krlah1)['replace'](/&#?\w+;/g, sojmw);d736ix['warning']('attribute "' + x5idf3 + '" missed quot(")!!'), pvn9g['add'](dx37i6, x5idf3, zgb2nt);case a_l16kr:
            i3xf5 = a_v$_h9;} else switch (i3xf5) {case a_aklh1:
            pvn9g['tagName'], 'http://www.w3.org/1999/xhtml' === jsyowm[''] && dx37i6['match'](/^(?:disabled|checked|selected)$/i) || d736ix['warning']('attribute "' + dx37i6 + '" missed value!! "' + dx37i6 + '" instead2!!'), pvn9g['add'](dx37i6, dx37i6, zgb2nt), zgb2nt = krlah1, i3xf5 = a_r36l7;break;case a_l16kr:
            d736ix['warning']('attribute space is required"' + dx37i6 + '\x22!!');case a_v$_h9:
            i3xf5 = a_r36l7, zgb2nt = krlah1;break;case a_mcejwo:
            i3xf5 = a_k_h$1a, zgb2nt = krlah1;break;case a_l6k1r:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}krlah1++;
  }
}function a_$k9vh_(w80s, h_$9p, gt2pb) {
  for (var sqwm = w80s['tagName'], gnvtp = null, sy4q = w80s['length']; sy4q--;) {
    var h9k_$v = w80s[sy4q],
        ahkl = h9k_$v['qName'],
        rl67ai = h9k_$v['value'],
        z4b280;ahkl = 0x0 < (n2zt = ahkl['indexOf'](':')) ? (weojc = h9k_$v['prefix'] = ahkl['slice'](0x0, n2zt), z4b280 = ahkl['slice'](n2zt + 0x1), 'xmlns' === weojc && z4b280) : (weojc = null, 'xmlns' === (z4b280 = ahkl) && ''), h9k_$v['localName'] = z4b280, !0x1 !== ahkl && (null == gnvtp && (gnvtp = {}, a_d5fi(gt2pb, gt2pb = {})), gt2pb[ahkl] = gnvtp[ahkl] = rl67ai, h9k_$v['uri'] = 'http://www.w3.org/2000/xmlns/', h_$9p['startPrefixMapping'](ahkl, rl67ai));
  }for (sy4q = w80s['length']; sy4q--;) (weojc = (h9k_$v = w80s[sy4q])['prefix']) && ('xml' === weojc && (h9k_$v['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== weojc && (h9k_$v['uri'] = gt2pb[weojc || '']));var n2zt;z4b280 = 0x0 < (n2zt = sqwm['indexOf'](':')) ? (weojc = w80s['prefix'] = sqwm['slice'](0x0, n2zt), w80s['localName'] = sqwm['slice'](n2zt + 0x1)) : (weojc = null, w80s['localName'] = sqwm);var _1h$9k = w80s['uri'] = gt2pb[weojc || ''];if (h_$9p['startElement'](_1h$9k, z4b280, sqwm, w80s), !w80s['closed']) return w80s['currentNSMap'] = gt2pb, w80s['localNSMap'] = gnvtp, !0x0;if (h_$9p['endElement'](_1h$9k, z4b280, sqwm), gnvtp) {
    for (var weojc in gnvtp) h_$9p['endPrefixMapping'](weojc);
  }
}function a_swyq80(pv9n, i67rla, g2btzn, q4820, w8y0) {
  if (/^(?:script|textarea)$/i['test'](g2btzn)) {
    var khl$a = pv9n['indexOf']('</' + g2btzn + '>', i67rla),
        pv9n = pv9n['substring'](i67rla + 0x1, khl$a);if (/[&<]/['test'](pv9n)) return (/^script$/i['test'](g2btzn) || (pv9n = pv9n['replace'](/&#?\w+;/g, q4820)), w8y0['characters'](pv9n, 0x0, pv9n['length']), khl$a
    );
  }return i67rla + 0x1;
}function a_q820(mwqsy8, r6i7l3, x53, i76dx) {
  var rlhka = i76dx[x53];return null == rlhka && ((rlhka = mwqsy8['lastIndexOf']('</' + x53 + '>')) < r6i7l3 && (rlhka = mwqsy8['lastIndexOf']('</' + x53)), i76dx[x53] = rlhka), rlhka < r6i7l3;
}function a_d5fi(n420b, ph9) {
  for (var i76lar in n420b) ph9[i76lar] = n420b[i76lar];
}function a_y0q48(bnp, ntgpb2, sjoem, $9_hv) {
  var _p9hv = bnp['charAt'](ntgpb2 + 0x2);if ('-' === _p9hv) return '-' !== bnp['charAt'](ntgpb2 + 0x3) ? -0x1 : ntgpb2 < (mocjw = bnp['indexOf']('-->', ntgpb2 + 0x4)) ? (sjoem['comment'](bnp, ntgpb2 + 0x4, mocjw - ntgpb2 - 0x4), mocjw + 0x3) : ($9_hv['error']('Unclosed comment'), -0x1);if ('CDATA[' == bnp['substr'](ntgpb2 + 0x3, 0x6)) {
    var mocjw = bnp['indexOf'](']]>', ntgpb2 + 0x9);return sjoem['startCDATA'](), sjoem['characters'](bnp, ntgpb2 + 0x9, mocjw - ntgpb2 - 0x9), sjoem['endCDATA'](), mocjw + 0x3;
  }_p9hv = a_i7rl6a(bnp, ntgpb2), $9_hv = _p9hv['length'];if (0x1 < $9_hv && /!doctype/i['test'](_p9hv[0x0][0x0])) return mocjw = _p9hv[0x1][0x0], bnp = 0x3 < $9_hv && /^public$/i['test'](_p9hv[0x2][0x0]) && _p9hv[0x3][0x0], ntgpb2 = 0x4 < $9_hv && _p9hv[0x4][0x0], $9_hv = _p9hv[$9_hv - 0x1], (sjoem['startDTD'](mocjw, bnp && bnp['replace'](/^(['"])(.*?)\1$/, '$2'), ntgpb2 && ntgpb2['replace'](/^(['"])(.*?)\1$/, '$2')), sjoem['endDTD'](), $9_hv['index'] + $9_hv[0x0]['length']);return -0x1;
}function a_ntp2gb(wmys8q, weocjm, v$9_g) {
  var p9hv_$ = wmys8q['indexOf']('?>', weocjm);if (p9hv_$) return weocjm = wmys8q['substring'](weocjm, p9hv_$)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), weocjm ? (weocjm[0x0]['length'], v$9_g['processingInstruction'](weocjm[0x1], weocjm[0x2]), p9hv_$ + 0x2) : -0x1;return -0x1;
}function a_r16akl() {}function a__1$a(qy8ws0, hv) {
  return qy8ws0['__proto__'] = hv, qy8ws0;
}function a_i7rl6a(jowes, v9h_k) {
  var np2g,
      h9vp$_ = [],
      a6li7r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (a6li7r['lastIndex'] = v9h_k, a6li7r['exec'](jowes); np2g = a6li7r['exec'](jowes);) if (h9vp$_['push'](np2g), np2g[0x1]) return h9vp$_;
}var a_qyswo = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_di637 = new RegExp('[\\-\\.0-9' + a_qyswo['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_ntbgvp = new RegExp('^' + a_qyswo['source'] + a_di637['source'] + '*(?::' + a_qyswo['source'] + a_di637['source'] + '*)?$'),
    a_yw08qs = 0x0,
    a_r36l7 = 0x1,
    a_aklh1 = 0x2,
    a_mcejwo = 0x3,
    a_k_h$1a = 0x4,
    a_l16kr = 0x5,
    a_v$_h9 = 0x6,
    a_l6k1r = 0x7;a_y8w0qs['prototype'] = { 'parse': function (f35d, xd3i5f, f3dx5i) {
    var g2bnp = this['domBuilder'];g2bnp['startDocument'](), a_d5fi(xd3i5f, xd3i5f = {}), a_al1krh(f35d, xd3i5f, f3dx5i, g2bnp, this['errorHandler']), g2bnp['endDocument']();
  } }, a_r16akl['prototype'] = { 'setTagName': function (ntz2gb) {
    if (!a_ntbgvp['test'](ntz2gb)) throw new Error('invalid tagName:' + ntz2gb);this['tagName'] = ntz2gb;
  }, 'add': function (tvg, q04zy, bg2ztn) {
    if (!a_ntbgvp['test'](tvg)) throw new Error('invalid attribute:' + tvg);this[this['length']++] = { 'qName': tvg, 'value': q04zy, 'offset': bg2ztn };
  }, 'length': 0x0, 'getLocalName': function (ri67al) {
    return this[ri67al]['localName'];
  }, 'getLocator': function (_p9v$) {
    return this[_p9v$]['locator'];
  }, 'getQName': function (g9ntv) {
    return this[g9ntv]['qName'];
  }, 'getURI': function (z2gnb) {
    return this[z2gnb]['uri'];
  }, 'getValue': function (nbgp2) {
    return this[nbgp2]['value'];
  } }, a__1$a({}, a__1$a['prototype']) instanceof a__1$a || (a__1$a = function (lk1a, ra16k) {
  function $9_vkh() {}for (ra16k in $9_vkh['prototype'] = ra16k, $9_vkh = new $9_vkh(), lk1a) $9_vkh[ra16k] = lk1a[ra16k];return $9_vkh;
}), exports['XMLReader'] = a_y8w0qs;