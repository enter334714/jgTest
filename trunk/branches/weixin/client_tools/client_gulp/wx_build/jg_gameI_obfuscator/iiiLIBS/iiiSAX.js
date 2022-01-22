var Q = wx.$I;
function i_ba3e6() {}function i_m9vtr1(bea3, q5nk2w, x4h5n, vfmp1c, t$zli) {
  function itrvm9(eqbsu) {
    if (eqbsu > 0xffff) {
      eqbsu -= 0x10000;var tmc = 0xd800 + (eqbsu >> 0xa),
          a63b7j = 0xdc00 + (0x3ff & eqbsu);return String['fromCharCode'](tmc, a63b7j);
    }return String['fromCharCode'](eqbsu);
  }function a3j67(seku) {
    var v19mtr = seku['slice'](0x1, -0x1);return v19mtr in x4h5n ? x4h5n[v19mtr] : '#' === v19mtr['charAt'](0x0) ? itrvm9(parseInt(v19mtr['substr'](0x1)['replace']('x', '0x'))) : (t$zli['error']('entity not found:' + seku), seku);
  }function tiv9rm(uqkse) {
    if (uqkse > baj63) {
      var nu5q2 = bea3['substring'](baj63, uqkse)['replace'](/&#?\w+;/g, a3j67);b7aj6 && mcp91v(baj63), vfmp1c['characters'](nu5q2, 0x0, uqkse - baj63), baj63 = uqkse;
    }
  }function mcp91v(trmi, cmp91) {
    for (; trmi >= j3876a && (cmp91 = jf68a_['exec'](bea3));) z$0irl = cmp91['index'], j3876a = z$0irl + cmp91[0x0]['length'], b7aj6['lineNumber']++;b7aj6['columnNumber'] = trmi - z$0irl + 0x1;
  }for (var z$0irl = 0x0, j3876a = 0x0, jf68a_ = /.*(?:\r\n?|\n)|.*$/g, b7aj6 = vfmp1c['locator'], qukesb = [{ 'currentNSMap': q5nk2w }], j638a_ = {}, baj63 = 0x0;;) {
    try {
      var tmi9v = bea3['indexOf']('<', baj63);if (0x0 > tmi9v) {
        if (!bea3['substr'](baj63)['match'](/^\s*$/)) {
          var z0ol$ = vfmp1c['doc'],
              g$zo0l = z0ol$['createTextNode'](bea3['substr'](baj63));z0ol$['appendChild'](g$zo0l), vfmp1c['currentElement'] = g$zo0l;
        }return;
      }switch (tmi9v > baj63 && tiv9rm(tmi9v), bea3['charAt'](tmi9v + 0x1)) {case '/':
          var cp8jf = bea3['indexOf']('>', tmi9v + 0x3),
              k5qun2 = bea3['substring'](tmi9v + 0x2, cp8jf),
              $0zlr = qukesb['pop']();0x0 > cp8jf ? (k5qun2 = bea3['substring'](tmi9v + 0x2)['replace'](/[\s<].*/, ''), t$zli['error']('end tag name: ' + k5qun2 + ' is not complete:' + $0zlr['tagName']), cp8jf = tmi9v + 0x1 + k5qun2['length']) : k5qun2['match'](/\s</) && (k5qun2 = k5qun2['replace'](/[\s<].*/, ''), t$zli['error']('end tag name: ' + k5qun2 + ' maybe not complete'), cp8jf = tmi9v + 0x1 + k5qun2['length']);var qw24n5 = $0zlr['localNSMap'],
              wn254q = $0zlr['tagName'] == k5qun2,
              tlriz = wn254q || $0zlr['tagName'] && $0zlr['tagName']['toLowerCase']() == k5qun2['toLowerCase']();if (tlriz) {
            if (vfmp1c['endElement']($0zlr['uri'], $0zlr['localName'], k5qun2), qw24n5) {
              for (var uskb7 in qw24n5) vfmp1c['endPrefixMapping'](uskb7);
            }wn254q || t$zli['fatalError']('end tag name: ' + k5qun2 + ' is not match the current start tagName:' + $0zlr['tagName']);
          } else qukesb['push']($0zlr);cp8jf++;break;case '?':
          b7aj6 && mcp91v(tmi9v), cp8jf = i_ilr9t(bea3, tmi9v, vfmp1c);break;case '!':
          b7aj6 && mcp91v(tmi9v), cp8jf = i_q2kues(bea3, tmi9v, vfmp1c, t$zli);break;default:
          b7aj6 && mcp91v(tmi9v);var gz$0 = new i_vcm1t9(),
              a3j_86 = qukesb[qukesb['length'] - 0x1]['currentNSMap'],
              cp8jf = i_qnw5k(bea3, tmi9v, gz$0, a3j_86, a3j67, t$zli),
              kw5q2n = gz$0['length'];if (!gz$0['closed'] && i_fm_c(bea3, cp8jf, gz$0['tagName'], j638a_) && (gz$0['closed'] = !0x0, x4h5n['nbsp'] || t$zli['warning']('unclosed xml attribute')), b7aj6 && kw5q2n) {
            for (var ozgyd = i_vcp9(b7aj6, {}), ig0lz = 0x0; kw5q2n > ig0lz; ig0lz++) {
              var vr91m = gz$0[ig0lz];mcp91v(vr91m['offset']), vr91m['locator'] = i_vcp9(b7aj6, {});
            }vfmp1c['locator'] = ozgyd, i_$zr(gz$0, vfmp1c, a3j_86) && qukesb['push'](gz$0), vfmp1c['locator'] = b7aj6;
          } else i_$zr(gz$0, vfmp1c, a3j_86) && qukesb['push'](gz$0);'http://www.w3.org/1999/xhtml' !== gz$0['uri'] || gz$0['closed'] ? cp8jf++ : cp8jf = i_l$zo0g(bea3, cp8jf, gz$0['tagName'], a3j67, vfmp1c);}
    } catch (w52nq) {
      t$zli['error']('element parse error: ' + w52nq), cp8jf = -0x1;
    }cp8jf > baj63 ? baj63 = cp8jf : tiv9rm(Math['max'](tmi9v, baj63) + 0x1);
  }
}function i_vcp9(_jfp8, se36) {
  return se36['lineNumber'] = _jfp8['lineNumber'], se36['columnNumber'] = _jfp8['columnNumber'], se36;
}function i_qnw5k(i0lzr$, qbseu, ozl0g, f8_j, o$gl, sq) {
  for (var tm1cv, j687a3, pjfc8 = ++qbseu, vrit9$ = i_se7b3;;) {
    var ol0gz = i0lzr$['charAt'](pjfc8);switch (ol0gz) {case '=':
        if (vrit9$ === i_cfv1mp) tm1cv = i0lzr$['slice'](qbseu, pjfc8), vrit9$ = i_s6eb73;else {
          if (vrit9$ !== i_abe376) throw new Error('attribute equal must after attrName');vrit9$ = i_s6eb73;
        }break;case '\x27':case '\x22':
        if (vrit9$ === i_s6eb73 || vrit9$ === i_cfv1mp) {
          if (vrit9$ === i_cfv1mp && (sq['warning']('attribute value must after "="'), tm1cv = i0lzr$['slice'](qbseu, pjfc8)), qbseu = pjfc8 + 0x1, pjfc8 = i0lzr$['indexOf'](ol0gz, qbseu), !(pjfc8 > 0x0)) throw new Error('attribute value no end \'' + ol0gz + '\' match');j687a3 = i0lzr$['slice'](qbseu, pjfc8)['replace'](/&#?\w+;/g, o$gl), ozl0g['add'](tm1cv, j687a3, qbseu - 0x1), vrit9$ = i_jfpc_;
        } else {
          if (vrit9$ != i_u3e7sb) throw new Error('attribute value must after "="');j687a3 = i0lzr$['slice'](qbseu, pjfc8)['replace'](/&#?\w+;/g, o$gl), ozl0g['add'](tm1cv, j687a3, qbseu), sq['warning']('attribute "' + tm1cv + '" missed start quot(' + ol0gz + ')!!'), qbseu = pjfc8 + 0x1, vrit9$ = i_jfpc_;
        }break;case '/':
        switch (vrit9$) {case i_se7b3:
            ozl0g['setTagName'](i0lzr$['slice'](qbseu, pjfc8));case i_jfpc_:case i_m1_pc:case i_l$irt:
            vrit9$ = i_l$irt, ozl0g['closed'] = !0x0;case i_u3e7sb:case i_cfv1mp:case i_abe376:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return sq['error']('unexpected end of input'), vrit9$ == i_se7b3 && ozl0g['setTagName'](i0lzr$['slice'](qbseu, pjfc8)), pjfc8;case '>':
        switch (vrit9$) {case i_se7b3:
            ozl0g['setTagName'](i0lzr$['slice'](qbseu, pjfc8));case i_jfpc_:case i_m1_pc:case i_l$irt:
            break;case i_u3e7sb:case i_cfv1mp:
            j687a3 = i0lzr$['slice'](qbseu, pjfc8), '/' === j687a3['slice'](-0x1) && (ozl0g['closed'] = !0x0, j687a3 = j687a3['slice'](0x0, -0x1));case i_abe376:
            vrit9$ === i_abe376 && (j687a3 = tm1cv), vrit9$ == i_u3e7sb ? (sq['warning']('attribute "' + j687a3 + '" missed quot(")!!'), ozl0g['add'](tm1cv, j687a3['replace'](/&#?\w+;/g, o$gl), qbseu)) : ('http://www.w3.org/1999/xhtml' === f8_j[''] && j687a3['match'](/^(?:disabled|checked|selected)$/i) || sq['warning']('attribute "' + j687a3 + '" missed value!! "' + j687a3 + '" instead!!'), ozl0g['add'](j687a3, j687a3, qbseu));break;case i_s6eb73:
            throw new Error('attribute value missed!!');}return pjfc8;case '\u0080':
        ol0gz = '\x20';default:
        if ('\x20' >= ol0gz) switch (vrit9$) {case i_se7b3:
            ozl0g['setTagName'](i0lzr$['slice'](qbseu, pjfc8)), vrit9$ = i_m1_pc;break;case i_cfv1mp:
            tm1cv = i0lzr$['slice'](qbseu, pjfc8), vrit9$ = i_abe376;break;case i_u3e7sb:
            var j687a3 = i0lzr$['slice'](qbseu, pjfc8)['replace'](/&#?\w+;/g, o$gl);sq['warning']('attribute "' + j687a3 + '" missed quot(")!!'), ozl0g['add'](tm1cv, j687a3, qbseu);case i_jfpc_:
            vrit9$ = i_m1_pc;} else switch (vrit9$) {case i_abe376:
            {
              ozl0g['tagName'];
            }'http://www.w3.org/1999/xhtml' === f8_j[''] && tm1cv['match'](/^(?:disabled|checked|selected)$/i) || sq['warning']('attribute "' + tm1cv + '" missed value!! "' + tm1cv + '" instead2!!'), ozl0g['add'](tm1cv, tm1cv, qbseu), qbseu = pjfc8, vrit9$ = i_cfv1mp;break;case i_jfpc_:
            sq['warning']('attribute space is required"' + tm1cv + '\x22!!');case i_m1_pc:
            vrit9$ = i_cfv1mp, qbseu = pjfc8;break;case i_s6eb73:
            vrit9$ = i_u3e7sb, qbseu = pjfc8;break;case i_l$irt:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}pjfc8++;
  }
}function i_$zr(sbe673, c9pmv, rm9vti) {
  for (var $l0g = sbe673['tagName'], go$0 = null, seu7kb = sbe673['length']; seu7kb--;) {
    var jaf6 = sbe673[seu7kb],
        _pfc18 = jaf6['qName'],
        u2nkqs = jaf6['value'],
        n2k5wq = _pfc18['indexOf'](':');if (n2k5wq > 0x0) var e376 = jaf6['prefix'] = _pfc18['slice'](0x0, n2k5wq),
        usbk7e = _pfc18['slice'](n2k5wq + 0x1),
        esbku = 'xmlns' === e376 && usbk7e;else usbk7e = _pfc18, e376 = null, esbku = 'xmlns' === _pfc18 && '';jaf6['localName'] = usbk7e, esbku !== !0x1 && (null == go$0 && (go$0 = {}, i_uqeksb(rm9vti, rm9vti = {})), rm9vti[esbku] = go$0[esbku] = u2nkqs, jaf6['uri'] = 'http://www.w3.org/2000/xmlns/', c9pmv['startPrefixMapping'](esbku, u2nkqs));
  }for (var seu7kb = sbe673['length']; seu7kb--;) {
    jaf6 = sbe673[seu7kb];var e376 = jaf6['prefix'];e376 && ('xml' === e376 && (jaf6['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== e376 && (jaf6['uri'] = rm9vti[e376 || '']));
  }var n2k5wq = $l0g['indexOf'](':');n2k5wq > 0x0 ? (e376 = sbe673['prefix'] = $l0g['slice'](0x0, n2k5wq), usbk7e = sbe673['localName'] = $l0g['slice'](n2k5wq + 0x1)) : (e376 = null, usbk7e = sbe673['localName'] = $l0g);var k5uq2n = sbe673['uri'] = rm9vti[e376 || ''];if (c9pmv['startElement'](k5uq2n, usbk7e, $l0g, sbe673), !sbe673['closed']) return sbe673['currentNSMap'] = rm9vti, sbe673['localNSMap'] = go$0, !0x0;if (c9pmv['endElement'](k5uq2n, usbk7e, $l0g), go$0) {
    for (e376 in go$0) c9pmv['endPrefixMapping'](e376);
  }
}function i_l$zo0g(wn45xh, a_863, mv9ri, q5w4, cmv9p) {
  if (/^(?:script|textarea)$/i['test'](mv9ri)) {
    var l$rit9 = wn45xh['indexOf']('</' + mv9ri + '>', a_863),
        pcm91 = wn45xh['substring'](a_863 + 0x1, l$rit9);if (/[&<]/['test'](pcm91)) return (/^script$/i['test'](mv9ri) ? (cmv9p['characters'](pcm91, 0x0, pcm91['length']), l$rit9) : (pcm91 = pcm91['replace'](/&#?\w+;/g, q5w4), cmv9p['characters'](pcm91, 0x0, pcm91['length']), l$rit9)
    );
  }return a_863 + 0x1;
}function i_fm_c(ozdg0, zo0$lg, mcp_f1, jfpa8) {
  var eb763a = jfpa8[mcp_f1];return null == eb763a && (eb763a = ozdg0['lastIndexOf']('</' + mcp_f1 + '>'), zo0$lg > eb763a && (eb763a = ozdg0['lastIndexOf']('</' + mcp_f1)), jfpa8[mcp_f1] = eb763a), zo0$lg > eb763a;
}function i_uqeksb(sb3e, p_fc81) {
  for (var _aj in sb3e) p_fc81[_aj] = sb3e[_aj];
}function i_q2kues(qeksu2, a_6fj8, oyg0lz, _68j3) {
  var p8afj_ = qeksu2['charAt'](a_6fj8 + 0x2);switch (p8afj_) {case '-':
      if ('-' === qeksu2['charAt'](a_6fj8 + 0x3)) {
        var qseku2 = qeksu2['indexOf']('-->', a_6fj8 + 0x4);return qseku2 > a_6fj8 ? (oyg0lz['comment'](qeksu2, a_6fj8 + 0x4, qseku2 - a_6fj8 - 0x4), qseku2 + 0x3) : (_68j3['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qeksu2['substr'](a_6fj8 + 0x3, 0x6)) {
        var qseku2 = qeksu2['indexOf'](']]>', a_6fj8 + 0x9);return oyg0lz['startCDATA'](), oyg0lz['characters'](qeksu2, a_6fj8 + 0x9, qseku2 - a_6fj8 - 0x9), oyg0lz['endCDATA'](), qseku2 + 0x3;
      }var fjp_c = i_us2ke(qeksu2, a_6fj8),
          jf8cp = fjp_c['length'];if (jf8cp > 0x1 && /!doctype/i['test'](fjp_c[0x0][0x0])) {
        var f8j_pa = fjp_c[0x1][0x0],
            b3eus7 = jf8cp > 0x3 && /^public$/i['test'](fjp_c[0x2][0x0]) && fjp_c[0x3][0x0],
            z$ = jf8cp > 0x4 && fjp_c[0x4][0x0],
            $rliz0 = fjp_c[jf8cp - 0x1];return oyg0lz['startDTD'](f8j_pa, b3eus7 && b3eus7['replace'](/^(['"])(.*?)\1$/, '$2'), z$ && z$['replace'](/^(['"])(.*?)\1$/, '$2')), oyg0lz['endDTD'](), $rliz0['index'] + $rliz0[0x0]['length'];
      }}return -0x1;
}function i_ilr9t(ogz0$, nwqk25, qkesub) {
  var a_68j = ogz0$['indexOf']('?>', nwqk25);if (a_68j) {
    var x4h5nw = ogz0$['substring'](nwqk25, a_68j)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (x4h5nw) {
      {
        x4h5nw[0x0]['length'];
      }return qkesub['processingInstruction'](x4h5nw[0x1], x4h5nw[0x2]), a_68j + 0x2;
    }return -0x1;
  }return -0x1;
}function i_vcm1t9() {}function i_lgi0z$(g0ylzo, a6_j83) {
  return g0ylzo['__proto__'] = a6_j83, g0ylzo;
}function i_us2ke(cf18p_, ydz0og) {
  var nuq2,
      sub37e = [],
      od0gyz = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (od0gyz['lastIndex'] = ydz0og, od0gyz['exec'](cf18p_); nuq2 = od0gyz['exec'](cf18p_);) if (sub37e['push'](nuq2), nuq2[0x1]) return sub37e;
}var i_t$l = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    i_trl$iz = new RegExp('[\\-\\.0-9' + i_t$l['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    i_sb7k = new RegExp('^' + i_t$l['source'] + i_trl$iz['source'] + '*(?::' + i_t$l['source'] + i_trl$iz['source'] + '*)?$'),
    i_se7b3 = 0x0,
    i_cfv1mp = 0x1,
    i_abe376 = 0x2,
    i_s6eb73 = 0x3,
    i_u3e7sb = 0x4,
    i_jfpc_ = 0x5,
    i_m1_pc = 0x6,
    i_l$irt = 0x7;i_ba3e6['prototype'] = { 'parse': function (pfv1m, _cj, ogydz) {
    var nhx4w = this['domBuilder'];nhx4w['startDocument'](), i_uqeksb(_cj, _cj = {}), i_m9vtr1(pfv1m, _cj, ogydz, nhx4w, this['errorHandler']), nhx4w['endDocument']();
  } }, i_vcm1t9['prototype'] = { 'setTagName': function (s3ube7) {
    if (!i_sb7k['test'](s3ube7)) throw new Error('invalid tagName:' + s3ube7);this['tagName'] = s3ube7;
  }, 'add': function (kq2esu, un25q, fmcp1_) {
    if (!i_sb7k['test'](kq2esu)) throw new Error('invalid attribute:' + kq2esu);this[this['length']++] = { 'qName': kq2esu, 'value': un25q, 'offset': fmcp1_ };
  }, 'length': 0x0, 'getLocalName': function (fc_81) {
    return this[fc_81]['localName'];
  }, 'getLocator': function (i9r$t) {
    return this[i9r$t]['locator'];
  }, 'getQName': function (v1mpf) {
    return this[v1mpf]['qName'];
  }, 'getURI': function (jfp8c) {
    return this[jfp8c]['uri'];
  }, 'getValue': function (nuk2qs) {
    return this[nuk2qs]['value'];
  } }, i_lgi0z$({}, i_lgi0z$['prototype']) instanceof i_lgi0z$ || (i_lgi0z$ = function (ozgl$0, mf1_pc) {
  function pvmcf1() {}pvmcf1['prototype'] = mf1_pc, pvmcf1 = new pvmcf1();for (mf1_pc in ozgl$0) pvmcf1[mf1_pc] = ozgl$0[mf1_pc];return pvmcf1;
}), exports['XMLReader'] = i_ba3e6;