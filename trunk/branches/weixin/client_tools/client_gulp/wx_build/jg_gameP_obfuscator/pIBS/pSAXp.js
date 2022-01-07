var E = wx.$p;
function p_hi4s() {}function p_zew3n(v6y$i1, hyij, y6jk, e5qn, $61ij) {
  function yhki$j(skj4p) {
    if (skj4p > 0xffff) {
      skj4p -= 0x10000;var sh = 0xd800 + (skj4p >> 0xa),
          tp4lxs = 0xdc00 + (0x3ff & skj4p);return String['fromCharCode'](sh, tp4lxs);
    }return String['fromCharCode'](skj4p);
  }function iyskjh(lxptu) {
    var xult_f = lxptu['slice'](0x1, -0x1);return xult_f in y6jk ? y6jk[xult_f] : '#' === xult_f['charAt'](0x0) ? yhki$j(parseInt(xult_f['substr'](0x1)['replace']('x', '0x'))) : ($61ij['error']('entity not found:' + lxptu), lxptu);
  }function i6jyk($v6y17) {
    if ($v6y17 > mf_uxo) {
      var mox_fu = v6y$i1['substring'](mf_uxo, $v6y17)['replace'](/&#?\w+;/g, iyskjh);ps4lt && y1v6$i(mf_uxo), e5qn['characters'](mox_fu, 0x0, $v6y17 - mf_uxo), mf_uxo = $v6y17;
    }
  }function y1v6$i(_xou, iy6j1$) {
    for (; _xou >= _xoumf && (iy6j1$ = ihk$jy['exec'](v6y$i1));) hskiyj = iy6j1$['index'], _xoumf = hskiyj + iy6j1$[0x0]['length'], ps4lt['lineNumber']++;ps4lt['columnNumber'] = _xou - hskiyj + 0x1;
  }for (var hskiyj = 0x0, _xoumf = 0x0, ihk$jy = /.*(?:\r\n?|\n)|.*$/g, ps4lt = e5qn['locator'], r71$6v = [{ 'currentNSMap': hyij }], klsph = {}, mf_uxo = 0x0;;) {
    try {
      var ebqa9 = v6y$i1['indexOf']('<', mf_uxo);if (0x0 > ebqa9) {
        if (!v6y$i1['substr'](mf_uxo)['match'](/^\s*$/)) {
          var _flx = e5qn['doc'],
              futlx_ = _flx['createTextNode'](v6y$i1['substr'](mf_uxo));_flx['appendChild'](futlx_), e5qn['currentElement'] = futlx_;
        }return;
      }switch (ebqa9 > mf_uxo && i6jyk(ebqa9), v6y$i1['charAt'](ebqa9 + 0x1)) {case '/':
          var ihyjk$ = v6y$i1['indexOf']('>', ebqa9 + 0x3),
              iy$v6 = v6y$i1['substring'](ebqa9 + 0x2, ihyjk$),
              lfpux = r71$6v['pop']();0x0 > ihyjk$ ? (iy$v6 = v6y$i1['substring'](ebqa9 + 0x2)['replace'](/[\s<].*/, ''), $61ij['error']('end tag name: ' + iy$v6 + ' is not complete:' + lfpux['tagName']), ihyjk$ = ebqa9 + 0x1 + iy$v6['length']) : iy$v6['match'](/\s</) && (iy$v6 = iy$v6['replace'](/[\s<].*/, ''), $61ij['error']('end tag name: ' + iy$v6 + ' maybe not complete'), ihyjk$ = ebqa9 + 0x1 + iy$v6['length']);var w52 = lfpux['localNSMap'],
              j4hiks = lfpux['tagName'] == iy$v6,
              v61 = j4hiks || lfpux['tagName'] && lfpux['tagName']['toLowerCase']() == iy$v6['toLowerCase']();if (v61) {
            if (e5qn['endElement'](lfpux['uri'], lfpux['localName'], iy$v6), w52) {
              for (var r2z in w52) e5qn['endPrefixMapping'](r2z);
            }j4hiks || $61ij['fatalError']('end tag name: ' + iy$v6 + ' is not match the current start tagName:' + lfpux['tagName']);
          } else r71$6v['push'](lfpux);ihyjk$++;break;case '?':
          ps4lt && y1v6$i(ebqa9), ihyjk$ = p_t4upxl(v6y$i1, ebqa9, e5qn);break;case '!':
          ps4lt && y1v6$i(ebqa9), ihyjk$ = p_adbgqc(v6y$i1, ebqa9, e5qn, $61ij);break;default:
          ps4lt && y1v6$i(ebqa9);var fx_tl = new p_ebqa98(),
              pk4hs = r71$6v[r71$6v['length'] - 0x1]['currentNSMap'],
              ihyjk$ = p_k4pjsh(v6y$i1, ebqa9, fx_tl, pk4hs, iyskjh, $61ij),
              j6kiy$ = fx_tl['length'];if (!fx_tl['closed'] && p_w8n(v6y$i1, ihyjk$, fx_tl['tagName'], klsph) && (fx_tl['closed'] = !0x0, y6jk['nbsp'] || $61ij['warning']('unclosed xml attribute')), ps4lt && j6kiy$) {
            for (var k6j = p_hsjki4(ps4lt, {}), nw8e95 = 0x0; j6kiy$ > nw8e95; nw8e95++) {
              var ofm_u = fx_tl[nw8e95];y1v6$i(ofm_u['offset']), ofm_u['locator'] = p_hsjki4(ps4lt, {});
            }e5qn['locator'] = k6j, p_pl4xut(fx_tl, e5qn, pk4hs) && r71$6v['push'](fx_tl), e5qn['locator'] = ps4lt;
          } else p_pl4xut(fx_tl, e5qn, pk4hs) && r71$6v['push'](fx_tl);'http://www.w3.org/1999/xhtml' !== fx_tl['uri'] || fx_tl['closed'] ? ihyjk$++ : ihyjk$ = p_tufm_(v6y$i1, ihyjk$, fx_tl['tagName'], iyskjh, e5qn);}
    } catch (mof) {
      $61ij['error']('element parse error: ' + mof), ihyjk$ = -0x1;
    }ihyjk$ > mf_uxo ? mf_uxo = ihyjk$ : i6jyk(Math['max'](ebqa9, mf_uxo) + 0x1);
  }
}function p_hsjki4(hykj, $1yv67) {
  return $1yv67['lineNumber'] = hykj['lineNumber'], $1yv67['columnNumber'] = hykj['columnNumber'], $1yv67;
}function p_k4pjsh(ikjyh$, xfumt, aqb8cg, hp4, zr20v, muxo_) {
  for (var i1y6, w05nz, tfm = ++xfumt, v76r21 = p_kshi4j;;) {
    var mux_fo = ikjyh$['charAt'](tfm);switch (mux_fo) {case '=':
        if (v76r21 === p_bqd) i1y6 = ikjyh$['slice'](xfumt, tfm), v76r21 = p_z0r72;else {
          if (v76r21 !== p_cga8qb) throw new Error('attribute equal must after attrName');v76r21 = p_z0r72;
        }break;case '\x27':case '\x22':
        if (v76r21 === p_z0r72 || v76r21 === p_bqd) {
          if (v76r21 === p_bqd && (muxo_['warning']('attribute value must after "="'), i1y6 = ikjyh$['slice'](xfumt, tfm)), xfumt = tfm + 0x1, tfm = ikjyh$['indexOf'](mux_fo, xfumt), !(tfm > 0x0)) throw new Error('attribute value no end \'' + mux_fo + '\' match');w05nz = ikjyh$['slice'](xfumt, tfm)['replace'](/&#?\w+;/g, zr20v), aqb8cg['add'](i1y6, w05nz, xfumt - 0x1), v76r21 = p_spk;
        } else {
          if (v76r21 != p_n539w) throw new Error('attribute value must after "="');w05nz = ikjyh$['slice'](xfumt, tfm)['replace'](/&#?\w+;/g, zr20v), aqb8cg['add'](i1y6, w05nz, xfumt), muxo_['warning']('attribute "' + i1y6 + '" missed start quot(' + mux_fo + ')!!'), xfumt = tfm + 0x1, v76r21 = p_spk;
        }break;case '/':
        switch (v76r21) {case p_kshi4j:
            aqb8cg['setTagName'](ikjyh$['slice'](xfumt, tfm));case p_spk:case p_tlxu_:case p_xfutpl:
            v76r21 = p_xfutpl, aqb8cg['closed'] = !0x0;case p_n539w:case p_bqd:case p_cga8qb:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return muxo_['error']('unexpected end of input'), v76r21 == p_kshi4j && aqb8cg['setTagName'](ikjyh$['slice'](xfumt, tfm)), tfm;case '>':
        switch (v76r21) {case p_kshi4j:
            aqb8cg['setTagName'](ikjyh$['slice'](xfumt, tfm));case p_spk:case p_tlxu_:case p_xfutpl:
            break;case p_n539w:case p_bqd:
            w05nz = ikjyh$['slice'](xfumt, tfm), '/' === w05nz['slice'](-0x1) && (aqb8cg['closed'] = !0x0, w05nz = w05nz['slice'](0x0, -0x1));case p_cga8qb:
            v76r21 === p_cga8qb && (w05nz = i1y6), v76r21 == p_n539w ? (muxo_['warning']('attribute "' + w05nz + '" missed quot(")!!'), aqb8cg['add'](i1y6, w05nz['replace'](/&#?\w+;/g, zr20v), xfumt)) : ('http://www.w3.org/1999/xhtml' === hp4[''] && w05nz['match'](/^(?:disabled|checked|selected)$/i) || muxo_['warning']('attribute "' + w05nz + '" missed value!! "' + w05nz + '" instead!!'), aqb8cg['add'](w05nz, w05nz, xfumt));break;case p_z0r72:
            throw new Error('attribute value missed!!');}return tfm;case '\u0080':
        mux_fo = '\x20';default:
        if ('\x20' >= mux_fo) switch (v76r21) {case p_kshi4j:
            aqb8cg['setTagName'](ikjyh$['slice'](xfumt, tfm)), v76r21 = p_tlxu_;break;case p_bqd:
            i1y6 = ikjyh$['slice'](xfumt, tfm), v76r21 = p_cga8qb;break;case p_n539w:
            var w05nz = ikjyh$['slice'](xfumt, tfm)['replace'](/&#?\w+;/g, zr20v);muxo_['warning']('attribute "' + w05nz + '" missed quot(")!!'), aqb8cg['add'](i1y6, w05nz, xfumt);case p_spk:
            v76r21 = p_tlxu_;} else switch (v76r21) {case p_cga8qb:
            {
              aqb8cg['tagName'];
            }'http://www.w3.org/1999/xhtml' === hp4[''] && i1y6['match'](/^(?:disabled|checked|selected)$/i) || muxo_['warning']('attribute "' + i1y6 + '" missed value!! "' + i1y6 + '" instead2!!'), aqb8cg['add'](i1y6, i1y6, xfumt), xfumt = tfm, v76r21 = p_bqd;break;case p_spk:
            muxo_['warning']('attribute space is required"' + i1y6 + '\x22!!');case p_tlxu_:
            v76r21 = p_bqd, xfumt = tfm;break;case p_z0r72:
            v76r21 = p_n539w, xfumt = tfm;break;case p_xfutpl:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}tfm++;
  }
}function p_pl4xut(e95n8, flux, tl_fu) {
  for (var umt_x = e95n8['tagName'], z23w5 = null, v761y$ = e95n8['length']; v761y$--;) {
    var kjh = e95n8[v761y$],
        lut_xf = kjh['qName'],
        ps4khl = kjh['value'],
        qcbag8 = lut_xf['indexOf'](':');if (qcbag8 > 0x0) var x4upt = kjh['prefix'] = lut_xf['slice'](0x0, qcbag8),
        fxtm = lut_xf['slice'](qcbag8 + 0x1),
        nwe859 = 'xmlns' === x4upt && fxtm;else fxtm = lut_xf, x4upt = null, nwe859 = 'xmlns' === lut_xf && '';kjh['localName'] = fxtm, nwe859 !== !0x1 && (null == z23w5 && (z23w5 = {}, p_y6$1ji(tl_fu, tl_fu = {})), tl_fu[nwe859] = z23w5[nwe859] = ps4khl, kjh['uri'] = 'http://www.w3.org/2000/xmlns/', flux['startPrefixMapping'](nwe859, ps4khl));
  }for (var v761y$ = e95n8['length']; v761y$--;) {
    kjh = e95n8[v761y$];var x4upt = kjh['prefix'];x4upt && ('xml' === x4upt && (kjh['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== x4upt && (kjh['uri'] = tl_fu[x4upt || '']));
  }var qcbag8 = umt_x['indexOf'](':');qcbag8 > 0x0 ? (x4upt = e95n8['prefix'] = umt_x['slice'](0x0, qcbag8), fxtm = e95n8['localName'] = umt_x['slice'](qcbag8 + 0x1)) : (x4upt = null, fxtm = e95n8['localName'] = umt_x);var lup = e95n8['uri'] = tl_fu[x4upt || ''];if (flux['startElement'](lup, fxtm, umt_x, e95n8), !e95n8['closed']) return e95n8['currentNSMap'] = tl_fu, e95n8['localNSMap'] = z23w5, !0x0;if (flux['endElement'](lup, fxtm, umt_x), z23w5) {
    for (x4upt in z23w5) flux['endPrefixMapping'](x4upt);
  }
}function p_tufm_(k$iyjh, ij$61y, w3z2r, put4xl, q859n) {
  if (/^(?:script|textarea)$/i['test'](w3z2r)) {
    var iyjshk = k$iyjh['indexOf']('</' + w3z2r + '>', ij$61y),
        b89qa = k$iyjh['substring'](ij$61y + 0x1, iyjshk);if (/[&<]/['test'](b89qa)) return (/^script$/i['test'](w3z2r) ? (q859n['characters'](b89qa, 0x0, b89qa['length']), iyjshk) : (b89qa = b89qa['replace'](/&#?\w+;/g, put4xl), q859n['characters'](b89qa, 0x0, b89qa['length']), iyjshk)
    );
  }return ij$61y + 0x1;
}function p_w8n(bagcqd, isj4, b89qen, hjsk4i) {
  var vr01 = hjsk4i[b89qen];return null == vr01 && (vr01 = bagcqd['lastIndexOf']('</' + b89qen + '>'), isj4 > vr01 && (vr01 = bagcqd['lastIndexOf']('</' + b89qen)), hjsk4i[b89qen] = vr01), isj4 > vr01;
}function p_y6$1ji(cba8g, lptu4) {
  for (var vy1i6 in cba8g) lptu4[vy1i6] = cba8g[vy1i6];
}function p_adbgqc(i$6v, z520w, ftulx, hijk$) {
  var y617v = i$6v['charAt'](z520w + 0x2);switch (y617v) {case '-':
      if ('-' === i$6v['charAt'](z520w + 0x3)) {
        var shpkj = i$6v['indexOf']('-->', z520w + 0x4);return shpkj > z520w ? (ftulx['comment'](i$6v, z520w + 0x4, shpkj - z520w - 0x4), shpkj + 0x3) : (hijk$['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == i$6v['substr'](z520w + 0x3, 0x6)) {
        var shpkj = i$6v['indexOf'](']]>', z520w + 0x9);return ftulx['startCDATA'](), ftulx['characters'](i$6v, z520w + 0x9, shpkj - z520w - 0x9), ftulx['endCDATA'](), shpkj + 0x3;
      }var _flu = p_$j1y6(i$6v, z520w),
          v2r10 = _flu['length'];if (v2r10 > 0x1 && /!doctype/i['test'](_flu[0x0][0x0])) {
        var kysijh = _flu[0x1][0x0],
            gqa8cb = v2r10 > 0x3 && /^public$/i['test'](_flu[0x2][0x0]) && _flu[0x3][0x0],
            r7210v = v2r10 > 0x4 && _flu[0x4][0x0],
            r27v6 = _flu[v2r10 - 0x1];return ftulx['startDTD'](kysijh, gqa8cb && gqa8cb['replace'](/^(['"])(.*?)\1$/, '$2'), r7210v && r7210v['replace'](/^(['"])(.*?)\1$/, '$2')), ftulx['endDTD'](), r27v6['index'] + r27v6[0x0]['length'];
      }}return -0x1;
}function p_t4upxl(xtfum, slp, ji1$y) {
  var ew8n59 = xtfum['indexOf']('?>', slp);if (ew8n59) {
    var r167$v = xtfum['substring'](slp, ew8n59)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (r167$v) {
      {
        r167$v[0x0]['length'];
      }return ji1$y['processingInstruction'](r167$v[0x1], r167$v[0x2]), ew8n59 + 0x2;
    }return -0x1;
  }return -0x1;
}function p_ebqa98() {}function p_v$61i(plt4x, lh4ksp) {
  return plt4x['__proto__'] = lh4ksp, plt4x;
}function p_$j1y6(xfplut, plxu4t) {
  var aqcbd,
      slpht4 = [],
      nez3 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (nez3['lastIndex'] = plxu4t, nez3['exec'](xfplut); aqcbd = nez3['exec'](xfplut);) if (slpht4['push'](aqcbd), aqcbd[0x1]) return slpht4;
}var p_hts4pl = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    p_yikj$6 = new RegExp('[\\-\\.0-9' + p_hts4pl['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    p_lt4pux = new RegExp('^' + p_hts4pl['source'] + p_yikj$6['source'] + '*(?::' + p_hts4pl['source'] + p_yikj$6['source'] + '*)?$'),
    p_kshi4j = 0x0,
    p_bqd = 0x1,
    p_cga8qb = 0x2,
    p_z0r72 = 0x3,
    p_n539w = 0x4,
    p_spk = 0x5,
    p_tlxu_ = 0x6,
    p_xfutpl = 0x7;p_hi4s['prototype'] = { 'parse': function (khi, dqabg, uxlt4p) {
    var oxmuf = this['domBuilder'];oxmuf['startDocument'](), p_y6$1ji(dqabg, dqabg = {}), p_zew3n(khi, dqabg, uxlt4p, oxmuf, this['errorHandler']), oxmuf['endDocument']();
  } }, p_ebqa98['prototype'] = { 'setTagName': function (zr73) {
    if (!p_lt4pux['test'](zr73)) throw new Error('invalid tagName:' + zr73);this['tagName'] = zr73;
  }, 'add': function (iksjh, ikjshy, cdab) {
    if (!p_lt4pux['test'](iksjh)) throw new Error('invalid attribute:' + iksjh);this[this['length']++] = { 'qName': iksjh, 'value': ikjshy, 'offset': cdab };
  }, 'length': 0x0, 'getLocalName': function (y6$iv1) {
    return this[y6$iv1]['localName'];
  }, 'getLocator': function (hik4sj) {
    return this[hik4sj]['locator'];
  }, 'getQName': function (_mxo) {
    return this[_mxo]['qName'];
  }, 'getURI': function (zw5) {
    return this[zw5]['uri'];
  }, 'getValue': function (lxp4ut) {
    return this[lxp4ut]['value'];
  } }, p_v$61i({}, p_v$61i['prototype']) instanceof p_v$61i || (p_v$61i = function (e9q8n, zw203r) {
  function i1vy6() {}i1vy6['prototype'] = zw203r, i1vy6 = new i1vy6();for (zw203r in e9q8n) i1vy6[zw203r] = e9q8n[zw203r];return i1vy6;
}), exports['XMLReader'] = p_hi4s;