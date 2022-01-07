var A = wx.$N;
function n_nldzmx() {}function n_ae68(lxzsn, wbta26, r8veo, j9p0q5, lxhkdm) {
  function oe283(_k4u1) {
    if (_k4u1 > 0xffff) {
      _k4u1 -= 0x10000;var mkh$ = 0xd800 + (_k4u1 >> 0xa),
          u1_k = 0xdc00 + (0x3ff & _k4u1);return String['fromCharCode'](mkh$, u1_k);
    }return String['fromCharCode'](_k4u1);
  }function z7scn(p9jiqy) {
    var jpq0 = p9jiqy['slice'](0x1, -0x1);return jpq0 in r8veo ? r8veo[jpq0] : '#' === jpq0['charAt'](0x0) ? oe283(parseInt(jpq0['substr'](0x1)['replace']('x', '0x'))) : (lxhkdm['error']('entity not found:' + p9jiqy), p9jiqy);
  }function jqp50(ns5zc7) {
    if (ns5zc7 > dxlhm) {
      var nsdzlx = lxzsn['substring'](dxlhm, ns5zc7)['replace'](/&#?\w+;/g, z7scn);m_$l && gr38v(dxlhm), j9p0q5['characters'](nsdzlx, 0x0, ns5zc7 - dxlhm), dxlhm = ns5zc7;
    }
  }function gr38v(zmxldn, a8e2o6) {
    for (; zmxldn >= h_4m$k && (a8e2o6 = vigfyr['exec'](lxzsn));) r8gv = a8e2o6['index'], h_4m$k = r8gv + a8e2o6[0x0]['length'], m_$l['lineNumber']++;m_$l['columnNumber'] = zmxldn - r8gv + 0x1;
  }for (var r8gv = 0x0, h_4m$k = 0x0, vigfyr = /.*(?:\r\n?|\n)|.*$/g, m_$l = j9p0q5['locator'], n0c7 = [{ 'currentNSMap': wbta26 }], oae38r = {}, dxlhm = 0x0;;) {
    try {
      var zldmh = lxzsn['indexOf']('<', dxlhm);if (0x0 > zldmh) {
        if (!lxzsn['substr'](dxlhm)['match'](/^\s*$/)) {
          var yjgvf = j9p0q5['doc'],
              zxncsd = yjgvf['createTextNode'](lxzsn['substr'](dxlhm));yjgvf['appendChild'](zxncsd), j9p0q5['currentElement'] = zxncsd;
        }return;
      }switch (zldmh > dxlhm && jqp50(zldmh), lxzsn['charAt'](zldmh + 0x1)) {case '/':
          var _$lmh = lxzsn['indexOf']('>', zldmh + 0x3),
              hkxdl = lxzsn['substring'](zldmh + 0x2, _$lmh),
              p0q957 = n0c7['pop']();0x0 > _$lmh ? (hkxdl = lxzsn['substring'](zldmh + 0x2)['replace'](/[\s<].*/, ''), lxhkdm['error']('end tag name: ' + hkxdl + ' is not complete:' + p0q957['tagName']), _$lmh = zldmh + 0x1 + hkxdl['length']) : hkxdl['match'](/\s</) && (hkxdl = hkxdl['replace'](/[\s<].*/, ''), lxhkdm['error']('end tag name: ' + hkxdl + ' maybe not complete'), _$lmh = zldmh + 0x1 + hkxdl['length']);var nszxdl = p0q957['localNSMap'],
              yivgfj = p0q957['tagName'] == hkxdl,
              pc9075 = yivgfj || p0q957['tagName'] && p0q957['tagName']['toLowerCase']() == hkxdl['toLowerCase']();if (pc9075) {
            if (j9p0q5['endElement'](p0q957['uri'], p0q957['localName'], hkxdl), nszxdl) {
              for (var a2wbo6 in nszxdl) j9p0q5['endPrefixMapping'](a2wbo6);
            }yivgfj || lxhkdm['fatalError']('end tag name: ' + hkxdl + ' is not match the current start tagName:' + p0q957['tagName']);
          } else n0c7['push'](p0q957);_$lmh++;break;case '?':
          m_$l && gr38v(zldmh), _$lmh = n_lxdhm(lxzsn, zldmh, j9p0q5);break;case '!':
          m_$l && gr38v(zldmh), _$lmh = n_dcs7nz(lxzsn, zldmh, j9p0q5, lxhkdm);break;default:
          m_$l && gr38v(zldmh);var p95j0 = new n_$_khl(),
              jq9fyi = n0c7[n0c7['length'] - 0x1]['currentNSMap'],
              _$lmh = n_z7cds(lxzsn, zldmh, p95j0, jq9fyi, z7scn, lxhkdm),
              ryv3gf = p95j0['length'];if (!p95j0['closed'] && n_ov83re(lxzsn, _$lmh, p95j0['tagName'], oae38r) && (p95j0['closed'] = !0x0, r8veo['nbsp'] || lxhkdm['warning']('unclosed xml attribute')), m_$l && ryv3gf) {
            for (var hdz = n_owa(m_$l, {}), gr3ev = 0x0; ryv3gf > gr3ev; gr3ev++) {
              var xndlz = p95j0[gr3ev];gr38v(xndlz['offset']), xndlz['locator'] = n_owa(m_$l, {});
            }j9p0q5['locator'] = hdz, n_q9jfi(p95j0, j9p0q5, jq9fyi) && n0c7['push'](p95j0), j9p0q5['locator'] = m_$l;
          } else n_q9jfi(p95j0, j9p0q5, jq9fyi) && n0c7['push'](p95j0);'http://www.w3.org/1999/xhtml' !== p95j0['uri'] || p95j0['closed'] ? _$lmh++ : _$lmh = n_iy9pj(lxzsn, _$lmh, p95j0['tagName'], z7scn, j9p0q5);}
    } catch (ijyqgf) {
      lxhkdm['error']('element parse error: ' + ijyqgf), _$lmh = -0x1;
    }_$lmh > dxlhm ? dxlhm = _$lmh : jqp50(Math['max'](zldmh, dxlhm) + 0x1);
  }
}function n_owa(p79c05, dzsc7n) {
  return dzsc7n['lineNumber'] = p79c05['lineNumber'], dzsc7n['columnNumber'] = p79c05['columnNumber'], dzsc7n;
}function n_z7cds(iyjgfq, wa6e2, c57p09, gfyqi, iq9j0, gfriyv) {
  for (var nxdl, ao832e, vgyjfi = ++wa6e2, b6w2oa = n_lhx_km;;) {
    var p095qj = iyjgfq['charAt'](vgyjfi);switch (p095qj) {case '=':
        if (b6w2oa === n_zdmlx) nxdl = iyjgfq['slice'](wa6e2, vgyjfi), b6w2oa = n_nc7sd;else {
          if (b6w2oa !== n_fv3y) throw new Error('attribute equal must after attrName');b6w2oa = n_nc7sd;
        }break;case '\x27':case '\x22':
        if (b6w2oa === n_nc7sd || b6w2oa === n_zdmlx) {
          if (b6w2oa === n_zdmlx && (gfriyv['warning']('attribute value must after "="'), nxdl = iyjgfq['slice'](wa6e2, vgyjfi)), wa6e2 = vgyjfi + 0x1, vgyjfi = iyjgfq['indexOf'](p095qj, wa6e2), !(vgyjfi > 0x0)) throw new Error('attribute value no end \'' + p095qj + '\' match');ao832e = iyjgfq['slice'](wa6e2, vgyjfi)['replace'](/&#?\w+;/g, iq9j0), c57p09['add'](nxdl, ao832e, wa6e2 - 0x1), b6w2oa = n_oer38a;
        } else {
          if (b6w2oa != n_c790p5) throw new Error('attribute value must after "="');ao832e = iyjgfq['slice'](wa6e2, vgyjfi)['replace'](/&#?\w+;/g, iq9j0), c57p09['add'](nxdl, ao832e, wa6e2), gfriyv['warning']('attribute "' + nxdl + '" missed start quot(' + p095qj + ')!!'), wa6e2 = vgyjfi + 0x1, b6w2oa = n_oer38a;
        }break;case '/':
        switch (b6w2oa) {case n_lhx_km:
            c57p09['setTagName'](iyjgfq['slice'](wa6e2, vgyjfi));case n_oer38a:case n_k_u1$4:case n_ku4h:
            b6w2oa = n_ku4h, c57p09['closed'] = !0x0;case n_c790p5:case n_zdmlx:case n_fv3y:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return gfriyv['error']('unexpected end of input'), b6w2oa == n_lhx_km && c57p09['setTagName'](iyjgfq['slice'](wa6e2, vgyjfi)), vgyjfi;case '>':
        switch (b6w2oa) {case n_lhx_km:
            c57p09['setTagName'](iyjgfq['slice'](wa6e2, vgyjfi));case n_oer38a:case n_k_u1$4:case n_ku4h:
            break;case n_c790p5:case n_zdmlx:
            ao832e = iyjgfq['slice'](wa6e2, vgyjfi), '/' === ao832e['slice'](-0x1) && (c57p09['closed'] = !0x0, ao832e = ao832e['slice'](0x0, -0x1));case n_fv3y:
            b6w2oa === n_fv3y && (ao832e = nxdl), b6w2oa == n_c790p5 ? (gfriyv['warning']('attribute "' + ao832e + '" missed quot(")!!'), c57p09['add'](nxdl, ao832e['replace'](/&#?\w+;/g, iq9j0), wa6e2)) : ('http://www.w3.org/1999/xhtml' === gfyqi[''] && ao832e['match'](/^(?:disabled|checked|selected)$/i) || gfriyv['warning']('attribute "' + ao832e + '" missed value!! "' + ao832e + '" instead!!'), c57p09['add'](ao832e, ao832e, wa6e2));break;case n_nc7sd:
            throw new Error('attribute value missed!!');}return vgyjfi;case '\u0080':
        p095qj = '\x20';default:
        if ('\x20' >= p095qj) switch (b6w2oa) {case n_lhx_km:
            c57p09['setTagName'](iyjgfq['slice'](wa6e2, vgyjfi)), b6w2oa = n_k_u1$4;break;case n_zdmlx:
            nxdl = iyjgfq['slice'](wa6e2, vgyjfi), b6w2oa = n_fv3y;break;case n_c790p5:
            var ao832e = iyjgfq['slice'](wa6e2, vgyjfi)['replace'](/&#?\w+;/g, iq9j0);gfriyv['warning']('attribute "' + ao832e + '" missed quot(")!!'), c57p09['add'](nxdl, ao832e, wa6e2);case n_oer38a:
            b6w2oa = n_k_u1$4;} else switch (b6w2oa) {case n_fv3y:
            {
              c57p09['tagName'];
            }'http://www.w3.org/1999/xhtml' === gfyqi[''] && nxdl['match'](/^(?:disabled|checked|selected)$/i) || gfriyv['warning']('attribute "' + nxdl + '" missed value!! "' + nxdl + '" instead2!!'), c57p09['add'](nxdl, nxdl, wa6e2), wa6e2 = vgyjfi, b6w2oa = n_zdmlx;break;case n_oer38a:
            gfriyv['warning']('attribute space is required"' + nxdl + '\x22!!');case n_k_u1$4:
            b6w2oa = n_zdmlx, wa6e2 = vgyjfi;break;case n_nc7sd:
            b6w2oa = n_c790p5, wa6e2 = vgyjfi;break;case n_ku4h:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}vgyjfi++;
  }
}function n_q9jfi(lm_kxh, q7509p, zldxmn) {
  for (var bwa62t = lm_kxh['tagName'], $hm = null, f9jqi = lm_kxh['length']; f9jqi--;) {
    var fiqgj = lm_kxh[f9jqi],
        a83o2e = fiqgj['qName'],
        hdmlkx = fiqgj['value'],
        _u$k = a83o2e['indexOf'](':');if (_u$k > 0x0) var yvifr = fiqgj['prefix'] = a83o2e['slice'](0x0, _u$k),
        mk_xlh = a83o2e['slice'](_u$k + 0x1),
        e3g8 = 'xmlns' === yvifr && mk_xlh;else mk_xlh = a83o2e, yvifr = null, e3g8 = 'xmlns' === a83o2e && '';fiqgj['localName'] = mk_xlh, e3g8 !== !0x1 && (null == $hm && ($hm = {}, n_dzcxns(zldxmn, zldxmn = {})), zldxmn[e3g8] = $hm[e3g8] = hdmlkx, fiqgj['uri'] = 'http://www.w3.org/2000/xmlns/', q7509p['startPrefixMapping'](e3g8, hdmlkx));
  }for (var f9jqi = lm_kxh['length']; f9jqi--;) {
    fiqgj = lm_kxh[f9jqi];var yvifr = fiqgj['prefix'];yvifr && ('xml' === yvifr && (fiqgj['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== yvifr && (fiqgj['uri'] = zldxmn[yvifr || '']));
  }var _u$k = bwa62t['indexOf'](':');_u$k > 0x0 ? (yvifr = lm_kxh['prefix'] = bwa62t['slice'](0x0, _u$k), mk_xlh = lm_kxh['localName'] = bwa62t['slice'](_u$k + 0x1)) : (yvifr = null, mk_xlh = lm_kxh['localName'] = bwa62t);var $u_4k1 = lm_kxh['uri'] = zldxmn[yvifr || ''];if (q7509p['startElement']($u_4k1, mk_xlh, bwa62t, lm_kxh), !lm_kxh['closed']) return lm_kxh['currentNSMap'] = zldxmn, lm_kxh['localNSMap'] = $hm, !0x0;if (q7509p['endElement']($u_4k1, mk_xlh, bwa62t), $hm) {
    for (yvifr in $hm) q7509p['endPrefixMapping'](yvifr);
  }
}function n_iy9pj(jqiyf9, gfv3r, lhm_, oeaw6, owae6) {
  if (/^(?:script|textarea)$/i['test'](lhm_)) {
    var c7p905 = jqiyf9['indexOf']('</' + lhm_ + '>', gfv3r),
        lnszd = jqiyf9['substring'](gfv3r + 0x1, c7p905);if (/[&<]/['test'](lnszd)) return (/^script$/i['test'](lhm_) ? (owae6['characters'](lnszd, 0x0, lnszd['length']), c7p905) : (lnszd = lnszd['replace'](/&#?\w+;/g, oeaw6), owae6['characters'](lnszd, 0x0, lnszd['length']), c7p905)
    );
  }return gfv3r + 0x1;
}function n_ov83re(yf9j, x_hkml, _klm, cnsxdz) {
  var mlxkh = cnsxdz[_klm];return null == mlxkh && (mlxkh = yf9j['lastIndexOf']('</' + _klm + '>'), x_hkml > mlxkh && (mlxkh = yf9j['lastIndexOf']('</' + _klm)), cnsxdz[_klm] = mlxkh), x_hkml > mlxkh;
}function n_dzcxns(k_h$ml, gfjyq) {
  for (var rv3yf in k_h$ml) gfjyq[rv3yf] = k_h$ml[rv3yf];
}function n_dcs7nz(h$k_, vo83e, dxkh, eo38ra) {
  var iqyjp = h$k_['charAt'](vo83e + 0x2);switch (iqyjp) {case '-':
      if ('-' === h$k_['charAt'](vo83e + 0x3)) {
        var oae8r = h$k_['indexOf']('-->', vo83e + 0x4);return oae8r > vo83e ? (dxkh['comment'](h$k_, vo83e + 0x4, oae8r - vo83e - 0x4), oae8r + 0x3) : (eo38ra['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == h$k_['substr'](vo83e + 0x3, 0x6)) {
        var oae8r = h$k_['indexOf'](']]>', vo83e + 0x9);return dxkh['startCDATA'](), dxkh['characters'](h$k_, vo83e + 0x9, oae8r - vo83e - 0x9), dxkh['endCDATA'](), oae8r + 0x3;
      }var l_x = n_mkhl(h$k_, vo83e),
          oa238 = l_x['length'];if (oa238 > 0x1 && /!doctype/i['test'](l_x[0x0][0x0])) {
        var ba2wt6 = l_x[0x1][0x0],
            a62bo = oa238 > 0x3 && /^public$/i['test'](l_x[0x2][0x0]) && l_x[0x3][0x0],
            i9py = oa238 > 0x4 && l_x[0x4][0x0],
            jyi9pq = l_x[oa238 - 0x1];return dxkh['startDTD'](ba2wt6, a62bo && a62bo['replace'](/^(['"])(.*?)\1$/, '$2'), i9py && i9py['replace'](/^(['"])(.*?)\1$/, '$2')), dxkh['endDTD'](), jyi9pq['index'] + jyi9pq[0x0]['length'];
      }}return -0x1;
}function n_lxdhm(xsnl, c57p, lzmhd) {
  var k$4m = xsnl['indexOf']('?>', c57p);if (k$4m) {
    var lnxmz = xsnl['substring'](c57p, k$4m)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (lnxmz) {
      {
        lnxmz[0x0]['length'];
      }return lzmhd['processingInstruction'](lnxmz[0x1], lnxmz[0x2]), k$4m + 0x2;
    }return -0x1;
  }return -0x1;
}function n_$_khl() {}function n_dnszc(fiyvg, pj50q9) {
  return fiyvg['__proto__'] = pj50q9, fiyvg;
}function n_mkhl(igfvry, _l$mkh) {
  var irfgyv,
      scdzxn = [],
      h_mlx = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (h_mlx['lastIndex'] = _l$mkh, h_mlx['exec'](igfvry); irfgyv = h_mlx['exec'](igfvry);) if (scdzxn['push'](irfgyv), irfgyv[0x1]) return scdzxn;
}var n_bw6a2 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    n_lmxdhk = new RegExp('[\\-\\.0-9' + n_bw6a2['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    n_snz7c5 = new RegExp('^' + n_bw6a2['source'] + n_lmxdhk['source'] + '*(?::' + n_bw6a2['source'] + n_lmxdhk['source'] + '*)?$'),
    n_lhx_km = 0x0,
    n_zdmlx = 0x1,
    n_fv3y = 0x2,
    n_nc7sd = 0x3,
    n_c790p5 = 0x4,
    n_oer38a = 0x5,
    n_k_u1$4 = 0x6,
    n_ku4h = 0x7;n_nldzmx['prototype'] = { 'parse': function (q9yjip, ku_4$1, yfrv3) {
    var $k_4uh = this['domBuilder'];$k_4uh['startDocument'](), n_dzcxns(ku_4$1, ku_4$1 = {}), n_ae68(q9yjip, ku_4$1, yfrv3, $k_4uh, this['errorHandler']), $k_4uh['endDocument']();
  } }, n_$_khl['prototype'] = { 'setTagName': function (hkmldx) {
    if (!n_snz7c5['test'](hkmldx)) throw new Error('invalid tagName:' + hkmldx);this['tagName'] = hkmldx;
  }, 'add': function (_mx, fyq9ij, b6o2aw) {
    if (!n_snz7c5['test'](_mx)) throw new Error('invalid attribute:' + _mx);this[this['length']++] = { 'qName': _mx, 'value': fyq9ij, 'offset': b6o2aw };
  }, 'length': 0x0, 'getLocalName': function (o2ea3) {
    return this[o2ea3]['localName'];
  }, 'getLocator': function (ij9qyf) {
    return this[ij9qyf]['locator'];
  }, 'getQName': function (e86ao) {
    return this[e86ao]['qName'];
  }, 'getURI': function (c7szn) {
    return this[c7szn]['uri'];
  }, 'getValue': function (p0j9iq) {
    return this[p0j9iq]['value'];
  } }, n_dnszc({}, n_dnszc['prototype']) instanceof n_dnszc || (n_dnszc = function (gyr3fv, zlxs) {
  function pqji9() {}pqji9['prototype'] = zlxs, pqji9 = new pqji9();for (zlxs in gyr3fv) pqji9[zlxs] = gyr3fv[zlxs];return pqji9;
}), exports['XMLReader'] = n_nldzmx;