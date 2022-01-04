var Q = wx.$I;
function i_cp1f_() {}function i_v19mcp(a873, nwh245, _18fcp, gy0ol, v1rtm) {
  function _fpa8(o$0gz) {
    if (o$0gz > 0xffff) {
      o$0gz -= 0x10000;var $rlzi = 0xd800 + (o$0gz >> 0xa),
          nw254q = 0xdc00 + (0x3ff & o$0gz);return String['fromCharCode']($rlzi, nw254q);
    }return String['fromCharCode'](o$0gz);
  }function nuk5(jf_8p) {
    var $ir0lz = jf_8p['slice'](0x1, -0x1);return $ir0lz in _18fcp ? _18fcp[$ir0lz] : '#' === $ir0lz['charAt'](0x0) ? _fpa8(parseInt($ir0lz['substr'](0x1)['replace']('x', '0x'))) : (v1rtm['error']('entity not found:' + jf_8p), jf_8p);
  }function j36b(x5nwh) {
    if (x5nwh > _8j63a) {
      var w24qn5 = a873['substring'](_8j63a, x5nwh)['replace'](/&#?\w+;/g, nuk5);mvt1 && j6_f8(_8j63a), gy0ol['characters'](w24qn5, 0x0, x5nwh - _8j63a), _8j63a = x5nwh;
    }
  }function j6_f8(sukeqb, vmirt) {
    for (; sukeqb >= b3eu7s && (vmirt = pf_jc['exec'](a873));) b37ja = vmirt['index'], b3eu7s = b37ja + vmirt[0x0]['length'], mvt1['lineNumber']++;mvt1['columnNumber'] = sukeqb - b37ja + 0x1;
  }for (var b37ja = 0x0, b3eu7s = 0x0, pf_jc = /.*(?:\r\n?|\n)|.*$/g, mvt1 = gy0ol['locator'], bqukse = [{ 'currentNSMap': nwh245 }], m1t9v = {}, _8j63a = 0x0;;) {
    try {
      var c8jpf = a873['indexOf']('<', _8j63a);if (0x0 > c8jpf) {
        if (!a873['substr'](_8j63a)['match'](/^\s*$/)) {
          var lgi0 = gy0ol['doc'],
              pcvm91 = lgi0['createTextNode'](a873['substr'](_8j63a));lgi0['appendChild'](pcvm91), gy0ol['currentElement'] = pcvm91;
        }return;
      }switch (c8jpf > _8j63a && j36b(c8jpf), a873['charAt'](c8jpf + 0x1)) {case '/':
          var ukqse2 = a873['indexOf']('>', c8jpf + 0x3),
              $trvi = a873['substring'](c8jpf + 0x2, ukqse2),
              ubqkes = bqukse['pop']();0x0 > ukqse2 ? ($trvi = a873['substring'](c8jpf + 0x2)['replace'](/[\s<].*/, ''), v1rtm['error']('end tag name: ' + $trvi + ' is not complete:' + ubqkes['tagName']), ukqse2 = c8jpf + 0x1 + $trvi['length']) : $trvi['match'](/\s</) && ($trvi = $trvi['replace'](/[\s<].*/, ''), v1rtm['error']('end tag name: ' + $trvi + ' maybe not complete'), ukqse2 = c8jpf + 0x1 + $trvi['length']);var sekbuq = ubqkes['localNSMap'],
              t9$ = ubqkes['tagName'] == $trvi,
              rvm19t = t9$ || ubqkes['tagName'] && ubqkes['tagName']['toLowerCase']() == $trvi['toLowerCase']();if (rvm19t) {
            if (gy0ol['endElement'](ubqkes['uri'], ubqkes['localName'], $trvi), sekbuq) {
              for (var zoy0g in sekbuq) gy0ol['endPrefixMapping'](zoy0g);
            }t9$ || v1rtm['fatalError']('end tag name: ' + $trvi + ' is not match the current start tagName:' + ubqkes['tagName']);
          } else bqukse['push'](ubqkes);ukqse2++;break;case '?':
          mvt1 && j6_f8(c8jpf), ukqse2 = i_wh425n(a873, c8jpf, gy0ol);break;case '!':
          mvt1 && j6_f8(c8jpf), ukqse2 = i_s3b7u(a873, c8jpf, gy0ol, v1rtm);break;default:
          mvt1 && j6_f8(c8jpf);var h4nw2 = new i_fpcv(),
              abj3 = bqukse[bqukse['length'] - 0x1]['currentNSMap'],
              ukqse2 = i_f_aj68(a873, c8jpf, h4nw2, abj3, nuk5, v1rtm),
              goy0lz = h4nw2['length'];if (!h4nw2['closed'] && i_fpc_m1(a873, ukqse2, h4nw2['tagName'], m1t9v) && (h4nw2['closed'] = !0x0, _18fcp['nbsp'] || v1rtm['warning']('unclosed xml attribute')), mvt1 && goy0lz) {
            for (var iv9t = i_nkqus2(mvt1, {}), m1vrt = 0x0; goy0lz > m1vrt; m1vrt++) {
              var v19tr = h4nw2[m1vrt];j6_f8(v19tr['offset']), v19tr['locator'] = i_nkqus2(mvt1, {});
            }gy0ol['locator'] = iv9t, i_ke7s(h4nw2, gy0ol, abj3) && bqukse['push'](h4nw2), gy0ol['locator'] = mvt1;
          } else i_ke7s(h4nw2, gy0ol, abj3) && bqukse['push'](h4nw2);'http://www.w3.org/1999/xhtml' !== h4nw2['uri'] || h4nw2['closed'] ? ukqse2++ : ukqse2 = i_gil$z0(a873, ukqse2, h4nw2['tagName'], nuk5, gy0ol);}
    } catch (sbue) {
      v1rtm['error']('element parse error: ' + sbue), ukqse2 = -0x1;
    }ukqse2 > _8j63a ? _8j63a = ukqse2 : j36b(Math['max'](c8jpf, _8j63a) + 0x1);
  }
}function i_nkqus2(j38a_6, j637a) {
  return j637a['lineNumber'] = j38a_6['lineNumber'], j637a['columnNumber'] = j38a_6['columnNumber'], j637a;
}function i_f_aj68(afj86, u5nq, bks, ba637, i$9r, zdoyg0) {
  for (var cm_1, vfc1mp, k7sebu = ++u5nq, un25kq = i_s7ub3e;;) {
    var a7j863 = afj86['charAt'](k7sebu);switch (a7j863) {case '=':
        if (un25kq === i_iz0l$) cm_1 = afj86['slice'](u5nq, k7sebu), un25kq = i_mc1tv;else {
          if (un25kq !== i_tmr9iv) throw new Error('attribute equal must after attrName');un25kq = i_mc1tv;
        }break;case '\x27':case '\x22':
        if (un25kq === i_mc1tv || un25kq === i_iz0l$) {
          if (un25kq === i_iz0l$ && (zdoyg0['warning']('attribute value must after "="'), cm_1 = afj86['slice'](u5nq, k7sebu)), u5nq = k7sebu + 0x1, k7sebu = afj86['indexOf'](a7j863, u5nq), !(k7sebu > 0x0)) throw new Error('attribute value no end \'' + a7j863 + '\' match');vfc1mp = afj86['slice'](u5nq, k7sebu)['replace'](/&#?\w+;/g, i$9r), bks['add'](cm_1, vfc1mp, u5nq - 0x1), un25kq = i_fjp8_;
        } else {
          if (un25kq != i_tvcm91) throw new Error('attribute value must after "="');vfc1mp = afj86['slice'](u5nq, k7sebu)['replace'](/&#?\w+;/g, i$9r), bks['add'](cm_1, vfc1mp, u5nq), zdoyg0['warning']('attribute "' + cm_1 + '" missed start quot(' + a7j863 + ')!!'), u5nq = k7sebu + 0x1, un25kq = i_fjp8_;
        }break;case '/':
        switch (un25kq) {case i_s7ub3e:
            bks['setTagName'](afj86['slice'](u5nq, k7sebu));case i_fjp8_:case i_yz0odg:case i_l0$ig:
            un25kq = i_l0$ig, bks['closed'] = !0x0;case i_tvcm91:case i_iz0l$:case i_tmr9iv:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return zdoyg0['error']('unexpected end of input'), un25kq == i_s7ub3e && bks['setTagName'](afj86['slice'](u5nq, k7sebu)), k7sebu;case '>':
        switch (un25kq) {case i_s7ub3e:
            bks['setTagName'](afj86['slice'](u5nq, k7sebu));case i_fjp8_:case i_yz0odg:case i_l0$ig:
            break;case i_tvcm91:case i_iz0l$:
            vfc1mp = afj86['slice'](u5nq, k7sebu), '/' === vfc1mp['slice'](-0x1) && (bks['closed'] = !0x0, vfc1mp = vfc1mp['slice'](0x0, -0x1));case i_tmr9iv:
            un25kq === i_tmr9iv && (vfc1mp = cm_1), un25kq == i_tvcm91 ? (zdoyg0['warning']('attribute "' + vfc1mp + '" missed quot(")!!'), bks['add'](cm_1, vfc1mp['replace'](/&#?\w+;/g, i$9r), u5nq)) : ('http://www.w3.org/1999/xhtml' === ba637[''] && vfc1mp['match'](/^(?:disabled|checked|selected)$/i) || zdoyg0['warning']('attribute "' + vfc1mp + '" missed value!! "' + vfc1mp + '" instead!!'), bks['add'](vfc1mp, vfc1mp, u5nq));break;case i_mc1tv:
            throw new Error('attribute value missed!!');}return k7sebu;case '\u0080':
        a7j863 = '\x20';default:
        if ('\x20' >= a7j863) switch (un25kq) {case i_s7ub3e:
            bks['setTagName'](afj86['slice'](u5nq, k7sebu)), un25kq = i_yz0odg;break;case i_iz0l$:
            cm_1 = afj86['slice'](u5nq, k7sebu), un25kq = i_tmr9iv;break;case i_tvcm91:
            var vfc1mp = afj86['slice'](u5nq, k7sebu)['replace'](/&#?\w+;/g, i$9r);zdoyg0['warning']('attribute "' + vfc1mp + '" missed quot(")!!'), bks['add'](cm_1, vfc1mp, u5nq);case i_fjp8_:
            un25kq = i_yz0odg;} else switch (un25kq) {case i_tmr9iv:
            {
              bks['tagName'];
            }'http://www.w3.org/1999/xhtml' === ba637[''] && cm_1['match'](/^(?:disabled|checked|selected)$/i) || zdoyg0['warning']('attribute "' + cm_1 + '" missed value!! "' + cm_1 + '" instead2!!'), bks['add'](cm_1, cm_1, u5nq), u5nq = k7sebu, un25kq = i_iz0l$;break;case i_fjp8_:
            zdoyg0['warning']('attribute space is required"' + cm_1 + '\x22!!');case i_yz0odg:
            un25kq = i_iz0l$, u5nq = k7sebu;break;case i_mc1tv:
            un25kq = i_tvcm91, u5nq = k7sebu;break;case i_l0$ig:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}k7sebu++;
  }
}function i_ke7s(sn2qk, pf8j_c, zl$0og) {
  for (var us2kn = sn2qk['tagName'], il0$zg = null, ukbqs = sn2qk['length']; ukbqs--;) {
    var c91v = sn2qk[ukbqs],
        fa6 = c91v['qName'],
        k5qu2n = c91v['value'],
        c_18fp = fa6['indexOf'](':');if (c_18fp > 0x0) var lig0$ = c91v['prefix'] = fa6['slice'](0x0, c_18fp),
        eqbus = fa6['slice'](c_18fp + 0x1),
        e36s7 = 'xmlns' === lig0$ && eqbus;else eqbus = fa6, lig0$ = null, e36s7 = 'xmlns' === fa6 && '';c91v['localName'] = eqbus, e36s7 !== !0x1 && (null == il0$zg && (il0$zg = {}, i_mcv91(zl$0og, zl$0og = {})), zl$0og[e36s7] = il0$zg[e36s7] = k5qu2n, c91v['uri'] = 'http://www.w3.org/2000/xmlns/', pf8j_c['startPrefixMapping'](e36s7, k5qu2n));
  }for (var ukbqs = sn2qk['length']; ukbqs--;) {
    c91v = sn2qk[ukbqs];var lig0$ = c91v['prefix'];lig0$ && ('xml' === lig0$ && (c91v['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== lig0$ && (c91v['uri'] = zl$0og[lig0$ || '']));
  }var c_18fp = us2kn['indexOf'](':');c_18fp > 0x0 ? (lig0$ = sn2qk['prefix'] = us2kn['slice'](0x0, c_18fp), eqbus = sn2qk['localName'] = us2kn['slice'](c_18fp + 0x1)) : (lig0$ = null, eqbus = sn2qk['localName'] = us2kn);var t9rmv1 = sn2qk['uri'] = zl$0og[lig0$ || ''];if (pf8j_c['startElement'](t9rmv1, eqbus, us2kn, sn2qk), !sn2qk['closed']) return sn2qk['currentNSMap'] = zl$0og, sn2qk['localNSMap'] = il0$zg, !0x0;if (pf8j_c['endElement'](t9rmv1, eqbus, us2kn), il0$zg) {
    for (lig0$ in il0$zg) pf8j_c['endPrefixMapping'](lig0$);
  }
}function i_gil$z0(eus73b, b36e7a, j6_a8f, nsku2q, _f8ap) {
  if (/^(?:script|textarea)$/i['test'](j6_a8f)) {
    var p8c1 = eus73b['indexOf']('</' + j6_a8f + '>', b36e7a),
        il9 = eus73b['substring'](b36e7a + 0x1, p8c1);if (/[&<]/['test'](il9)) return (/^script$/i['test'](j6_a8f) ? (_f8ap['characters'](il9, 0x0, il9['length']), p8c1) : (il9 = il9['replace'](/&#?\w+;/g, nsku2q), _f8ap['characters'](il9, 0x0, il9['length']), p8c1)
    );
  }return b36e7a + 0x1;
}function i_fpc_m1(wq45n, ab67e, nq2s, b736) {
  var $9iltr = b736[nq2s];return null == $9iltr && ($9iltr = wq45n['lastIndexOf']('</' + nq2s + '>'), ab67e > $9iltr && ($9iltr = wq45n['lastIndexOf']('</' + nq2s)), b736[nq2s] = $9iltr), ab67e > $9iltr;
}function i_mcv91(pfcj8_, f8p1c) {
  for (var cp8_j in pfcj8_) f8p1c[cp8_j] = pfcj8_[cp8_j];
}function i_s3b7u(qsnk2, _fp8j, j_pa8f, ja7b3) {
  var ozylg0 = qsnk2['charAt'](_fp8j + 0x2);switch (ozylg0) {case '-':
      if ('-' === qsnk2['charAt'](_fp8j + 0x3)) {
        var i9trl = qsnk2['indexOf']('-->', _fp8j + 0x4);return i9trl > _fp8j ? (j_pa8f['comment'](qsnk2, _fp8j + 0x4, i9trl - _fp8j - 0x4), i9trl + 0x3) : (ja7b3['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qsnk2['substr'](_fp8j + 0x3, 0x6)) {
        var i9trl = qsnk2['indexOf'](']]>', _fp8j + 0x9);return j_pa8f['startCDATA'](), j_pa8f['characters'](qsnk2, _fp8j + 0x9, i9trl - _fp8j - 0x9), j_pa8f['endCDATA'](), i9trl + 0x3;
      }var f1pmv = i_vpcmf1(qsnk2, _fp8j),
          pc_j = f1pmv['length'];if (pc_j > 0x1 && /!doctype/i['test'](f1pmv[0x0][0x0])) {
        var qskn = f1pmv[0x1][0x0],
            zgyod0 = pc_j > 0x3 && /^public$/i['test'](f1pmv[0x2][0x0]) && f1pmv[0x3][0x0],
            $tlzr = pc_j > 0x4 && f1pmv[0x4][0x0],
            uq5n2 = f1pmv[pc_j - 0x1];return j_pa8f['startDTD'](qskn, zgyod0 && zgyod0['replace'](/^(['"])(.*?)\1$/, '$2'), $tlzr && $tlzr['replace'](/^(['"])(.*?)\1$/, '$2')), j_pa8f['endDTD'](), uq5n2['index'] + uq5n2[0x0]['length'];
      }}return -0x1;
}function i_wh425n(us2nq, nq, eksqub) {
  var p_81fc = us2nq['indexOf']('?>', nq);if (p_81fc) {
    var f1pm = us2nq['substring'](nq, p_81fc)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (f1pm) {
      {
        f1pm[0x0]['length'];
      }return eksqub['processingInstruction'](f1pm[0x1], f1pm[0x2]), p_81fc + 0x2;
    }return -0x1;
  }return -0x1;
}function i_fpcv() {}function i_n52kqw(n52kq, nq425w) {
  return n52kq['__proto__'] = nq425w, n52kq;
}function i_vpcmf1(p8cjf, k7esu) {
  var f1vpm,
      m19cvp = [],
      vmcfp1 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (vmcfp1['lastIndex'] = k7esu, vmcfp1['exec'](p8cjf); f1vpm = vmcfp1['exec'](p8cjf);) if (m19cvp['push'](f1vpm), f1vpm[0x1]) return m19cvp;
}var i_nk5uq = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    i_r$zitl = new RegExp('[\\-\\.0-9' + i_nk5uq['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    i_mcpf = new RegExp('^' + i_nk5uq['source'] + i_r$zitl['source'] + '*(?::' + i_nk5uq['source'] + i_r$zitl['source'] + '*)?$'),
    i_s7ub3e = 0x0,
    i_iz0l$ = 0x1,
    i_tmr9iv = 0x2,
    i_mc1tv = 0x3,
    i_tvcm91 = 0x4,
    i_fjp8_ = 0x5,
    i_yz0odg = 0x6,
    i_l0$ig = 0x7;i_cp1f_['prototype'] = { 'parse': function (_fpmc1, f1mcp_, x5n4w) {
    var vcmt91 = this['domBuilder'];vcmt91['startDocument'](), i_mcv91(f1mcp_, f1mcp_ = {}), i_v19mcp(_fpmc1, f1mcp_, x5n4w, vcmt91, this['errorHandler']), vcmt91['endDocument']();
  } }, i_fpcv['prototype'] = { 'setTagName': function (tiv9$r) {
    if (!i_mcpf['test'](tiv9$r)) throw new Error('invalid tagName:' + tiv9$r);this['tagName'] = tiv9$r;
  }, 'add': function (b673aj, l$9it, wnqk52) {
    if (!i_mcpf['test'](b673aj)) throw new Error('invalid attribute:' + b673aj);this[this['length']++] = { 'qName': b673aj, 'value': l$9it, 'offset': wnqk52 };
  }, 'length': 0x0, 'getLocalName': function (kqsn) {
    return this[kqsn]['localName'];
  }, 'getLocator': function (kuesb) {
    return this[kuesb]['locator'];
  }, 'getQName': function (ku7) {
    return this[ku7]['qName'];
  }, 'getURI': function (sueqk) {
    return this[sueqk]['uri'];
  }, 'getValue': function (qknw5) {
    return this[qknw5]['value'];
  } }, i_n52kqw({}, i_n52kqw['prototype']) instanceof i_n52kqw || (i_n52kqw = function (c1pf_m, kbsuq) {
  function ub7eks() {}ub7eks['prototype'] = kbsuq, ub7eks = new ub7eks();for (kbsuq in c1pf_m) ub7eks[kbsuq] = c1pf_m[kbsuq];return ub7eks;
}), exports['XMLReader'] = i_cp1f_;