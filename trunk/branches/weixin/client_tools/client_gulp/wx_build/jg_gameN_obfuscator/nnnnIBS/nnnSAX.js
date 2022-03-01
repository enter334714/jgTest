var A = wx.$N;
function n_lyz() {}function n_pv2kis(nh8m_, vcxsi, $9b4r, l3e0zo, elnm0) {
  function l3enj0(ezo4y) {
    if (ezo4y > 0xffff) {
      ezo4y -= 0x10000;var s1xkcv = 0xd800 + (ezo4y >> 0xa),
          m8_uhf = 0xdc00 + (0x3ff & ezo4y);return String['fromCharCode'](s1xkcv, m8_uhf);
    }return String['fromCharCode'](ezo4y);
  }function cgsx7(t1g57d) {
    var b$aw6q = t1g57d['slice'](0x1, -0x1);return b$aw6q in $9b4r ? $9b4r[b$aw6q] : '#' === b$aw6q['charAt'](0x0) ? l3enj0(parseInt(b$aw6q['substr'](0x1)['replace']('x', '0x'))) : (elnm0['error']('entity not found:' + t1g57d), t1g57d);
  }function j0u_nm(thdf7) {
    if (thdf7 > loj3) {
      var cixv = nh8m_['substring'](loj3, thdf7)['replace'](/&#?\w+;/g, cgsx7);g51tc7 && vicksx(loj3), l3e0zo['characters'](cixv, 0x0, thdf7 - loj3), loj3 = thdf7;
    }
  }function vicksx(o3ezly, x1vgs) {
    for (; o3ezly >= vs1cxk && (x1vgs = h8mnu_['exec'](nh8m_));) o9z4ry = x1vgs['index'], vs1cxk = o9z4ry + x1vgs[0x0]['length'], g51tc7['lineNumber']++;g51tc7['columnNumber'] = o3ezly - o9z4ry + 0x1;
  }for (var o9z4ry = 0x0, vs1cxk = 0x0, h8mnu_ = /.*(?:\r\n?|\n)|.*$/g, g51tc7 = l3e0zo['locator'], u8nm = [{ 'currentNSMap': vcxsi }], leo0 = {}, loj3 = 0x0;;) {
    try {
      var _nhm = nh8m_['indexOf']('<', loj3);if (0x0 > _nhm) {
        if (!nh8m_['substr'](loj3)['match'](/^\s*$/)) {
          var sx1kv = l3e0zo['doc'],
              vi2sx = sx1kv['createTextNode'](nh8m_['substr'](loj3));sx1kv['appendChild'](vi2sx), l3e0zo['currentElement'] = vi2sx;
        }return;
      }switch (_nhm > loj3 && j0u_nm(_nhm), nh8m_['charAt'](_nhm + 0x1)) {case '/':
          var t7g15 = nh8m_['indexOf']('>', _nhm + 0x3),
              m8u_jn = nh8m_['substring'](_nhm + 0x2, t7g15),
              _dfh8 = u8nm['pop']();0x0 > t7g15 ? (m8u_jn = nh8m_['substring'](_nhm + 0x2)['replace'](/[\s<].*/, ''), elnm0['error']('end tag name: ' + m8u_jn + ' is not complete:' + _dfh8['tagName']), t7g15 = _nhm + 0x1 + m8u_jn['length']) : m8u_jn['match'](/\s</) && (m8u_jn = m8u_jn['replace'](/[\s<].*/, ''), elnm0['error']('end tag name: ' + m8u_jn + ' maybe not complete'), t7g15 = _nhm + 0x1 + m8u_jn['length']);var xg7c51 = _dfh8['localNSMap'],
              k1s = _dfh8['tagName'] == m8u_jn,
              el03z = k1s || _dfh8['tagName'] && _dfh8['tagName']['toLowerCase']() == m8u_jn['toLowerCase']();if (el03z) {
            if (l3e0zo['endElement'](_dfh8['uri'], _dfh8['localName'], m8u_jn), xg7c51) {
              for (var ley3o in xg7c51) l3e0zo['endPrefixMapping'](ley3o);
            }k1s || elnm0['fatalError']('end tag name: ' + m8u_jn + ' is not match the current start tagName:' + _dfh8['tagName']);
          } else u8nm['push'](_dfh8);t7g15++;break;case '?':
          g51tc7 && vicksx(_nhm), t7g15 = n_fdh8t(nh8m_, _nhm, l3e0zo);break;case '!':
          g51tc7 && vicksx(_nhm), t7g15 = n_sxk2i(nh8m_, _nhm, l3e0zo, elnm0);break;default:
          g51tc7 && vicksx(_nhm);var ro34yz = new n_bqy(),
              r9qyz4 = u8nm[u8nm['length'] - 0x1]['currentNSMap'],
              t7g15 = n__h8t(nh8m_, _nhm, ro34yz, r9qyz4, cgsx7, elnm0),
              lmnje = ro34yz['length'];if (!ro34yz['closed'] && n_oe3y4(nh8m_, t7g15, ro34yz['tagName'], leo0) && (ro34yz['closed'] = !0x0, $9b4r['nbsp'] || elnm0['warning']('unclosed xml attribute')), g51tc7 && lmnje) {
            for (var yz9q4r = n_bw6$qa(g51tc7, {}), tdh_8f = 0x0; lmnje > tdh_8f; tdh_8f++) {
              var _f8dth = ro34yz[tdh_8f];vicksx(_f8dth['offset']), _f8dth['locator'] = n_bw6$qa(g51tc7, {});
            }l3e0zo['locator'] = yz9q4r, n_$a6wbq(ro34yz, l3e0zo, r9qyz4) && u8nm['push'](ro34yz), l3e0zo['locator'] = g51tc7;
          } else n_$a6wbq(ro34yz, l3e0zo, r9qyz4) && u8nm['push'](ro34yz);'http://www.w3.org/1999/xhtml' !== ro34yz['uri'] || ro34yz['closed'] ? t7g15++ : t7g15 = n_$w6q9(nh8m_, t7g15, ro34yz['tagName'], cgsx7, l3e0zo);}
    } catch (d8tfh5) {
      elnm0['error']('element parse error: ' + d8tfh5), t7g15 = -0x1;
    }t7g15 > loj3 ? loj3 = t7g15 : j0u_nm(Math['max'](_nhm, loj3) + 0x1);
  }
}function n_bw6$qa(zq4, yzole) {
  return yzole['lineNumber'] = zq4['lineNumber'], yzole['columnNumber'] = zq4['columnNumber'], yzole;
}function n__h8t(yrzo34, $4r9q, ln3, g7tf5d, sgx71c, j_0mu) {
  for (var o3zr, nmlju0, cg7s1x = ++$4r9q, d7fth = n_wqb$6;;) {
    var r94ybq = yrzo34['charAt'](cg7s1x);switch (r94ybq) {case '=':
        if (d7fth === n__un8mh) o3zr = yrzo34['slice']($4r9q, cg7s1x), d7fth = n_d1g5t;else {
          if (d7fth !== n_jeol) throw new Error('attribute equal must after attrName');d7fth = n_d1g5t;
        }break;case '\x27':case '\x22':
        if (d7fth === n_d1g5t || d7fth === n__un8mh) {
          if (d7fth === n__un8mh && (j_0mu['warning']('attribute value must after "="'), o3zr = yrzo34['slice']($4r9q, cg7s1x)), $4r9q = cg7s1x + 0x1, cg7s1x = yrzo34['indexOf'](r94ybq, $4r9q), !(cg7s1x > 0x0)) throw new Error('attribute value no end \'' + r94ybq + '\' match');nmlju0 = yrzo34['slice']($4r9q, cg7s1x)['replace'](/&#?\w+;/g, sgx71c), ln3['add'](o3zr, nmlju0, $4r9q - 0x1), d7fth = n_rbq9$w;
        } else {
          if (d7fth != n_nmuj) throw new Error('attribute value must after "="');nmlju0 = yrzo34['slice']($4r9q, cg7s1x)['replace'](/&#?\w+;/g, sgx71c), ln3['add'](o3zr, nmlju0, $4r9q), j_0mu['warning']('attribute "' + o3zr + '" missed start quot(' + r94ybq + ')!!'), $4r9q = cg7s1x + 0x1, d7fth = n_rbq9$w;
        }break;case '/':
        switch (d7fth) {case n_wqb$6:
            ln3['setTagName'](yrzo34['slice']($4r9q, cg7s1x));case n_rbq9$w:case n_xg75c:case n_g75dt1:
            d7fth = n_g75dt1, ln3['closed'] = !0x0;case n_nmuj:case n__un8mh:case n_jeol:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return j_0mu['error']('unexpected end of input'), d7fth == n_wqb$6 && ln3['setTagName'](yrzo34['slice']($4r9q, cg7s1x)), cg7s1x;case '>':
        switch (d7fth) {case n_wqb$6:
            ln3['setTagName'](yrzo34['slice']($4r9q, cg7s1x));case n_rbq9$w:case n_xg75c:case n_g75dt1:
            break;case n_nmuj:case n__un8mh:
            nmlju0 = yrzo34['slice']($4r9q, cg7s1x), '/' === nmlju0['slice'](-0x1) && (ln3['closed'] = !0x0, nmlju0 = nmlju0['slice'](0x0, -0x1));case n_jeol:
            d7fth === n_jeol && (nmlju0 = o3zr), d7fth == n_nmuj ? (j_0mu['warning']('attribute "' + nmlju0 + '" missed quot(")!!'), ln3['add'](o3zr, nmlju0['replace'](/&#?\w+;/g, sgx71c), $4r9q)) : ('http://www.w3.org/1999/xhtml' === g7tf5d[''] && nmlju0['match'](/^(?:disabled|checked|selected)$/i) || j_0mu['warning']('attribute "' + nmlju0 + '" missed value!! "' + nmlju0 + '" instead!!'), ln3['add'](nmlju0, nmlju0, $4r9q));break;case n_d1g5t:
            throw new Error('attribute value missed!!');}return cg7s1x;case '\u0080':
        r94ybq = '\x20';default:
        if ('\x20' >= r94ybq) switch (d7fth) {case n_wqb$6:
            ln3['setTagName'](yrzo34['slice']($4r9q, cg7s1x)), d7fth = n_xg75c;break;case n__un8mh:
            o3zr = yrzo34['slice']($4r9q, cg7s1x), d7fth = n_jeol;break;case n_nmuj:
            var nmlju0 = yrzo34['slice']($4r9q, cg7s1x)['replace'](/&#?\w+;/g, sgx71c);j_0mu['warning']('attribute "' + nmlju0 + '" missed quot(")!!'), ln3['add'](o3zr, nmlju0, $4r9q);case n_rbq9$w:
            d7fth = n_xg75c;} else switch (d7fth) {case n_jeol:
            {
              ln3['tagName'];
            }'http://www.w3.org/1999/xhtml' === g7tf5d[''] && o3zr['match'](/^(?:disabled|checked|selected)$/i) || j_0mu['warning']('attribute "' + o3zr + '" missed value!! "' + o3zr + '" instead2!!'), ln3['add'](o3zr, o3zr, $4r9q), $4r9q = cg7s1x, d7fth = n__un8mh;break;case n_rbq9$w:
            j_0mu['warning']('attribute space is required"' + o3zr + '\x22!!');case n_xg75c:
            d7fth = n__un8mh, $4r9q = cg7s1x;break;case n_d1g5t:
            d7fth = n_nmuj, $4r9q = cg7s1x;break;case n_g75dt1:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}cg7s1x++;
  }
}function n_$a6wbq(ftd_8, r3oz4, ozye3l) {
  for (var z3o4y = ftd_8['tagName'], gx1vc = null, kv1 = ftd_8['length']; kv1--;) {
    var hu8fm_ = ftd_8[kv1],
        fht85d = hu8fm_['qName'],
        d1tg57 = hu8fm_['value'],
        t5fd7 = fht85d['indexOf'](':');if (t5fd7 > 0x0) var z34ryo = hu8fm_['prefix'] = fht85d['slice'](0x0, t5fd7),
        awq$ = fht85d['slice'](t5fd7 + 0x1),
        thf85 = 'xmlns' === z34ryo && awq$;else awq$ = fht85d, z34ryo = null, thf85 = 'xmlns' === fht85d && '';hu8fm_['localName'] = awq$, thf85 !== !0x1 && (null == gx1vc && (gx1vc = {}, n_y49oz(ozye3l, ozye3l = {})), ozye3l[thf85] = gx1vc[thf85] = d1tg57, hu8fm_['uri'] = 'http://www.w3.org/2000/xmlns/', r3oz4['startPrefixMapping'](thf85, d1tg57));
  }for (var kv1 = ftd_8['length']; kv1--;) {
    hu8fm_ = ftd_8[kv1];var z34ryo = hu8fm_['prefix'];z34ryo && ('xml' === z34ryo && (hu8fm_['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== z34ryo && (hu8fm_['uri'] = ozye3l[z34ryo || '']));
  }var t5fd7 = z3o4y['indexOf'](':');t5fd7 > 0x0 ? (z34ryo = ftd_8['prefix'] = z3o4y['slice'](0x0, t5fd7), awq$ = ftd_8['localName'] = z3o4y['slice'](t5fd7 + 0x1)) : (z34ryo = null, awq$ = ftd_8['localName'] = z3o4y);var $wb9r = ftd_8['uri'] = ozye3l[z34ryo || ''];if (r3oz4['startElement']($wb9r, awq$, z3o4y, ftd_8), !ftd_8['closed']) return ftd_8['currentNSMap'] = ozye3l, ftd_8['localNSMap'] = gx1vc, !0x0;if (r3oz4['endElement']($wb9r, awq$, z3o4y), gx1vc) {
    for (z34ryo in gx1vc) r3oz4['endPrefixMapping'](z34ryo);
  }
}function n_$w6q9(f8h_um, q94rb$, fd75th, oze, zor3) {
  if (/^(?:script|textarea)$/i['test'](fd75th)) {
    var qw$9br = f8h_um['indexOf']('</' + fd75th + '>', q94rb$),
        mujl0 = f8h_um['substring'](q94rb$ + 0x1, qw$9br);if (/[&<]/['test'](mujl0)) return (/^script$/i['test'](fd75th) ? (zor3['characters'](mujl0, 0x0, mujl0['length']), qw$9br) : (mujl0 = mujl0['replace'](/&#?\w+;/g, oze), zor3['characters'](mujl0, 0x0, mujl0['length']), qw$9br)
    );
  }return q94rb$ + 0x1;
}function n_oe3y4(tf58d, vgsc1x, tdh, fmh8_) {
  var xcgs17 = fmh8_[tdh];return null == xcgs17 && (xcgs17 = tf58d['lastIndexOf']('</' + tdh + '>'), vgsc1x > xcgs17 && (xcgs17 = tf58d['lastIndexOf']('</' + tdh)), fmh8_[tdh] = xcgs17), vgsc1x > xcgs17;
}function n_y49oz(tdg157, mn_u) {
  for (var b$69w in tdg157) mn_u[b$69w] = tdg157[b$69w];
}function n_sxk2i(oj03l, g5d7t1, fmu8, z3oel) {
  var mj0lnu = oj03l['charAt'](g5d7t1 + 0x2);switch (mj0lnu) {case '-':
      if ('-' === oj03l['charAt'](g5d7t1 + 0x3)) {
        var g7cx15 = oj03l['indexOf']('-->', g5d7t1 + 0x4);return g7cx15 > g5d7t1 ? (fmu8['comment'](oj03l, g5d7t1 + 0x4, g7cx15 - g5d7t1 - 0x4), g7cx15 + 0x3) : (z3oel['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == oj03l['substr'](g5d7t1 + 0x3, 0x6)) {
        var g7cx15 = oj03l['indexOf'](']]>', g5d7t1 + 0x9);return fmu8['startCDATA'](), fmu8['characters'](oj03l, g5d7t1 + 0x9, g7cx15 - g5d7t1 - 0x9), fmu8['endCDATA'](), g7cx15 + 0x3;
      }var y9b4rq = n_vxgsc1(oj03l, g5d7t1),
          cg7xs1 = y9b4rq['length'];if (cg7xs1 > 0x1 && /!doctype/i['test'](y9b4rq[0x0][0x0])) {
        var q$9bw6 = y9b4rq[0x1][0x0],
            nle3j = cg7xs1 > 0x3 && /^public$/i['test'](y9b4rq[0x2][0x0]) && y9b4rq[0x3][0x0],
            x17g5c = cg7xs1 > 0x4 && y9b4rq[0x4][0x0],
            e3y = y9b4rq[cg7xs1 - 0x1];return fmu8['startDTD'](q$9bw6, nle3j && nle3j['replace'](/^(['"])(.*?)\1$/, '$2'), x17g5c && x17g5c['replace'](/^(['"])(.*?)\1$/, '$2')), fmu8['endDTD'](), e3y['index'] + e3y[0x0]['length'];
      }}return -0x1;
}function n_fdh8t(lyoez, dfu, g1sv) {
  var m_ju0 = lyoez['indexOf']('?>', dfu);if (m_ju0) {
    var _jum0 = lyoez['substring'](dfu, m_ju0)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (_jum0) {
      {
        _jum0[0x0]['length'];
      }return g1sv['processingInstruction'](_jum0[0x1], _jum0[0x2]), m_ju0 + 0x2;
    }return -0x1;
  }return -0x1;
}function n_bqy() {}function n_$b9rwq(hftd7, bq4r$9) {
  return hftd7['__proto__'] = bq4r$9, hftd7;
}function n_vxgsc1($wbaq6, ole03j) {
  var xck1sv,
      psik = [],
      _ft8dh = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (_ft8dh['lastIndex'] = ole03j, _ft8dh['exec']($wbaq6); xck1sv = _ft8dh['exec']($wbaq6);) if (psik['push'](xck1sv), xck1sv[0x1]) return psik;
}var n_zq94r = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    n_z3oey = new RegExp('[\\-\\.0-9' + n_zq94r['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    n_oyel = new RegExp('^' + n_zq94r['source'] + n_z3oey['source'] + '*(?::' + n_zq94r['source'] + n_z3oey['source'] + '*)?$'),
    n_wqb$6 = 0x0,
    n__un8mh = 0x1,
    n_jeol = 0x2,
    n_d1g5t = 0x3,
    n_nmuj = 0x4,
    n_rbq9$w = 0x5,
    n_xg75c = 0x6,
    n_g75dt1 = 0x7;n_lyz['prototype'] = { 'parse': function (_t8hd, o43, cs7g1) {
    var m8hu_n = this['domBuilder'];m8hu_n['startDocument'](), n_y49oz(o43, o43 = {}), n_pv2kis(_t8hd, o43, cs7g1, m8hu_n, this['errorHandler']), m8hu_n['endDocument']();
  } }, n_bqy['prototype'] = { 'setTagName': function (enljm0) {
    if (!n_oyel['test'](enljm0)) throw new Error('invalid tagName:' + enljm0);this['tagName'] = enljm0;
  }, 'add': function (bwaq$, g5t1c7, s71c) {
    if (!n_oyel['test'](bwaq$)) throw new Error('invalid attribute:' + bwaq$);this[this['length']++] = { 'qName': bwaq$, 'value': g5t1c7, 'offset': s71c };
  }, 'length': 0x0, 'getLocalName': function (ftd7g5) {
    return this[ftd7g5]['localName'];
  }, 'getLocator': function (q$6baw) {
    return this[q$6baw]['locator'];
  }, 'getQName': function ($rwqb) {
    return this[$rwqb]['qName'];
  }, 'getURI': function (em0jln) {
    return this[em0jln]['uri'];
  }, 'getValue': function (njm_u8) {
    return this[njm_u8]['value'];
  } }, n_$b9rwq({}, n_$b9rwq['prototype']) instanceof n_$b9rwq || (n_$b9rwq = function (x1sv, ejnm0) {
  function h8_mf() {}h8_mf['prototype'] = ejnm0, h8_mf = new h8_mf();for (ejnm0 in x1sv) h8_mf[ejnm0] = x1sv[ejnm0];return h8_mf;
}), exports['XMLReader'] = n_lyz;