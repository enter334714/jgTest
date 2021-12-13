var E = wx.$p;
function p_x_ufo() {}function p_yj$1i(u4pxtl, r1702, plfu, z3r072, umxf_t) {
  function nqe589(qa8cgb) {
    if (qa8cgb > 0xffff) {
      qa8cgb -= 0x10000;var ysijhk = 0xd800 + (qa8cgb >> 0xa),
          k4hpls = 0xdc00 + (0x3ff & qa8cgb);return String['fromCharCode'](ysijhk, k4hpls);
    }return String['fromCharCode'](qa8cgb);
  }function v2r10($716yv) {
    var r3 = $716yv['slice'](0x1, -0x1);return r3 in plfu ? plfu[r3] : '#' === r3['charAt'](0x0) ? nqe589(parseInt(r3['substr'](0x1)['replace']('x', '0x'))) : (umxf_t['error']('entity not found:' + $716yv), $716yv);
  }function b8gac(nb89eq) {
    if (nb89eq > n05w) {
      var xomf_u = u4pxtl['substring'](n05w, nb89eq)['replace'](/&#?\w+;/g, v2r10);j61y$ && xulfp(n05w), z3r072['characters'](xomf_u, 0x0, nb89eq - n05w), n05w = nb89eq;
    }
  }function xulfp($ivy6, mf_oxu) {
    for (; $ivy6 >= uxpl4t && (mf_oxu = uf_t['exec'](u4pxtl));) yj6$1i = mf_oxu['index'], uxpl4t = yj6$1i + mf_oxu[0x0]['length'], j61y$['lineNumber']++;j61y$['columnNumber'] = $ivy6 - yj6$1i + 0x1;
  }for (var yj6$1i = 0x0, uxpl4t = 0x0, uf_t = /.*(?:\r\n?|\n)|.*$/g, j61y$ = z3r072['locator'], si4kh = [{ 'currentNSMap': r1702 }], bdaqgc = {}, n05w = 0x0;;) {
    try {
      var n953ew = u4pxtl['indexOf']('<', n05w);if (0x0 > n953ew) {
        if (!u4pxtl['substr'](n05w)['match'](/^\s*$/)) {
          var jhisky = z3r072['doc'],
              uftxl_ = jhisky['createTextNode'](u4pxtl['substr'](n05w));jhisky['appendChild'](uftxl_), z3r072['currentElement'] = uftxl_;
        }return;
      }switch (n953ew > n05w && b8gac(n953ew), u4pxtl['charAt'](n953ew + 0x1)) {case '/':
          var m_oxf = u4pxtl['indexOf']('>', n953ew + 0x3),
              tf_mu = u4pxtl['substring'](n953ew + 0x2, m_oxf),
              w0z3r2 = si4kh['pop']();0x0 > m_oxf ? (tf_mu = u4pxtl['substring'](n953ew + 0x2)['replace'](/[\s<].*/, ''), umxf_t['error']('end tag name: ' + tf_mu + ' is not complete:' + w0z3r2['tagName']), m_oxf = n953ew + 0x1 + tf_mu['length']) : tf_mu['match'](/\s</) && (tf_mu = tf_mu['replace'](/[\s<].*/, ''), umxf_t['error']('end tag name: ' + tf_mu + ' maybe not complete'), m_oxf = n953ew + 0x1 + tf_mu['length']);var p4hks = w0z3r2['localNSMap'],
              t4ph = w0z3r2['tagName'] == tf_mu,
              iyjhsk = t4ph || w0z3r2['tagName'] && w0z3r2['tagName']['toLowerCase']() == tf_mu['toLowerCase']();if (iyjhsk) {
            if (z3r072['endElement'](w0z3r2['uri'], w0z3r2['localName'], tf_mu), p4hks) {
              for (var nbe9q in p4hks) z3r072['endPrefixMapping'](nbe9q);
            }t4ph || umxf_t['fatalError']('end tag name: ' + tf_mu + ' is not match the current start tagName:' + w0z3r2['tagName']);
          } else si4kh['push'](w0z3r2);m_oxf++;break;case '?':
          j61y$ && xulfp(n953ew), m_oxf = p_bea9q8(u4pxtl, n953ew, z3r072);break;case '!':
          j61y$ && xulfp(n953ew), m_oxf = p_a8gb9q(u4pxtl, n953ew, z3r072, umxf_t);break;default:
          j61y$ && xulfp(n953ew);var z3205w = new p_xtm_fu(),
              v721r = si4kh[si4kh['length'] - 0x1]['currentNSMap'],
              m_oxf = p_jyi1(u4pxtl, n953ew, z3205w, v721r, v2r10, umxf_t),
              k6y$ij = z3205w['length'];if (!z3205w['closed'] && p_j6$y1(u4pxtl, m_oxf, z3205w['tagName'], bdaqgc) && (z3205w['closed'] = !0x0, plfu['nbsp'] || umxf_t['warning']('unclosed xml attribute')), j61y$ && k6y$ij) {
            for (var _xufmt = p_o_fu(j61y$, {}), v21r0 = 0x0; k6y$ij > v21r0; v21r0++) {
              var we395 = z3205w[v21r0];xulfp(we395['offset']), we395['locator'] = p_o_fu(j61y$, {});
            }z3r072['locator'] = _xufmt, p_a9bq8e(z3205w, z3r072, v721r) && si4kh['push'](z3205w), z3r072['locator'] = j61y$;
          } else p_a9bq8e(z3205w, z3r072, v721r) && si4kh['push'](z3205w);'http://www.w3.org/1999/xhtml' !== z3205w['uri'] || z3205w['closed'] ? m_oxf++ : m_oxf = p__oumfx(u4pxtl, m_oxf, z3205w['tagName'], v2r10, z3r072);}
    } catch (a9bgq) {
      umxf_t['error']('element parse error: ' + a9bgq), m_oxf = -0x1;
    }m_oxf > n05w ? n05w = m_oxf : b8gac(Math['max'](n953ew, n05w) + 0x1);
  }
}function p_o_fu(hk4jsi, we5n) {
  return we5n['lineNumber'] = hk4jsi['lineNumber'], we5n['columnNumber'] = hk4jsi['columnNumber'], we5n;
}function p_jyi1(kj$y6i, mxf_ou, hi$yk, e35n, r2z3w0, z230) {
  for (var $iyj, b9qn8e, ptlxf = ++mxf_ou, qg8acb = p_hjy$ik;;) {
    var n5wz03 = kj$y6i['charAt'](ptlxf);switch (n5wz03) {case '=':
        if (qg8acb === p_u_fmxo) $iyj = kj$y6i['slice'](mxf_ou, ptlxf), qg8acb = p_zew3;else {
          if (qg8acb !== p_sptlh4) throw new Error('attribute equal must after attrName');qg8acb = p_zew3;
        }break;case '\x27':case '\x22':
        if (qg8acb === p_zew3 || qg8acb === p_u_fmxo) {
          if (qg8acb === p_u_fmxo && (z230['warning']('attribute value must after "="'), $iyj = kj$y6i['slice'](mxf_ou, ptlxf)), mxf_ou = ptlxf + 0x1, ptlxf = kj$y6i['indexOf'](n5wz03, mxf_ou), !(ptlxf > 0x0)) throw new Error('attribute value no end \'' + n5wz03 + '\' match');b9qn8e = kj$y6i['slice'](mxf_ou, ptlxf)['replace'](/&#?\w+;/g, r2z3w0), hi$yk['add']($iyj, b9qn8e, mxf_ou - 0x1), qg8acb = p_r261v7;
        } else {
          if (qg8acb != p_zr372) throw new Error('attribute value must after "="');b9qn8e = kj$y6i['slice'](mxf_ou, ptlxf)['replace'](/&#?\w+;/g, r2z3w0), hi$yk['add']($iyj, b9qn8e, mxf_ou), z230['warning']('attribute "' + $iyj + '" missed start quot(' + n5wz03 + ')!!'), mxf_ou = ptlxf + 0x1, qg8acb = p_r261v7;
        }break;case '/':
        switch (qg8acb) {case p_hjy$ik:
            hi$yk['setTagName'](kj$y6i['slice'](mxf_ou, ptlxf));case p_r261v7:case p_ltxp4s:case p_w5zn30:
            qg8acb = p_w5zn30, hi$yk['closed'] = !0x0;case p_zr372:case p_u_fmxo:case p_sptlh4:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return z230['error']('unexpected end of input'), qg8acb == p_hjy$ik && hi$yk['setTagName'](kj$y6i['slice'](mxf_ou, ptlxf)), ptlxf;case '>':
        switch (qg8acb) {case p_hjy$ik:
            hi$yk['setTagName'](kj$y6i['slice'](mxf_ou, ptlxf));case p_r261v7:case p_ltxp4s:case p_w5zn30:
            break;case p_zr372:case p_u_fmxo:
            b9qn8e = kj$y6i['slice'](mxf_ou, ptlxf), '/' === b9qn8e['slice'](-0x1) && (hi$yk['closed'] = !0x0, b9qn8e = b9qn8e['slice'](0x0, -0x1));case p_sptlh4:
            qg8acb === p_sptlh4 && (b9qn8e = $iyj), qg8acb == p_zr372 ? (z230['warning']('attribute "' + b9qn8e + '" missed quot(")!!'), hi$yk['add']($iyj, b9qn8e['replace'](/&#?\w+;/g, r2z3w0), mxf_ou)) : ('http://www.w3.org/1999/xhtml' === e35n[''] && b9qn8e['match'](/^(?:disabled|checked|selected)$/i) || z230['warning']('attribute "' + b9qn8e + '" missed value!! "' + b9qn8e + '" instead!!'), hi$yk['add'](b9qn8e, b9qn8e, mxf_ou));break;case p_zew3:
            throw new Error('attribute value missed!!');}return ptlxf;case '\u0080':
        n5wz03 = '\x20';default:
        if ('\x20' >= n5wz03) switch (qg8acb) {case p_hjy$ik:
            hi$yk['setTagName'](kj$y6i['slice'](mxf_ou, ptlxf)), qg8acb = p_ltxp4s;break;case p_u_fmxo:
            $iyj = kj$y6i['slice'](mxf_ou, ptlxf), qg8acb = p_sptlh4;break;case p_zr372:
            var b9qn8e = kj$y6i['slice'](mxf_ou, ptlxf)['replace'](/&#?\w+;/g, r2z3w0);z230['warning']('attribute "' + b9qn8e + '" missed quot(")!!'), hi$yk['add']($iyj, b9qn8e, mxf_ou);case p_r261v7:
            qg8acb = p_ltxp4s;} else switch (qg8acb) {case p_sptlh4:
            {
              hi$yk['tagName'];
            }'http://www.w3.org/1999/xhtml' === e35n[''] && $iyj['match'](/^(?:disabled|checked|selected)$/i) || z230['warning']('attribute "' + $iyj + '" missed value!! "' + $iyj + '" instead2!!'), hi$yk['add']($iyj, $iyj, mxf_ou), mxf_ou = ptlxf, qg8acb = p_u_fmxo;break;case p_r261v7:
            z230['warning']('attribute space is required"' + $iyj + '\x22!!');case p_ltxp4s:
            qg8acb = p_u_fmxo, mxf_ou = ptlxf;break;case p_zew3:
            qg8acb = p_zr372, mxf_ou = ptlxf;break;case p_w5zn30:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ptlxf++;
  }
}function p_a9bq8e(sp4lh, aebq89, rw03z) {
  for (var gdbcq = sp4lh['tagName'], j4kh = null, ptlu4x = sp4lh['length']; ptlu4x--;) {
    var wz3e5n = sp4lh[ptlu4x],
        zewn3 = wz3e5n['qName'],
        u4plx = wz3e5n['value'],
        ph4sl = zewn3['indexOf'](':');if (ph4sl > 0x0) var xfptu = wz3e5n['prefix'] = zewn3['slice'](0x0, ph4sl),
        adgqb = zewn3['slice'](ph4sl + 0x1),
        r2v7z = 'xmlns' === xfptu && adgqb;else adgqb = zewn3, xfptu = null, r2v7z = 'xmlns' === zewn3 && '';wz3e5n['localName'] = adgqb, r2v7z !== !0x1 && (null == j4kh && (j4kh = {}, p_lsk4h(rw03z, rw03z = {})), rw03z[r2v7z] = j4kh[r2v7z] = u4plx, wz3e5n['uri'] = 'http://www.w3.org/2000/xmlns/', aebq89['startPrefixMapping'](r2v7z, u4plx));
  }for (var ptlu4x = sp4lh['length']; ptlu4x--;) {
    wz3e5n = sp4lh[ptlu4x];var xfptu = wz3e5n['prefix'];xfptu && ('xml' === xfptu && (wz3e5n['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== xfptu && (wz3e5n['uri'] = rw03z[xfptu || '']));
  }var ph4sl = gdbcq['indexOf'](':');ph4sl > 0x0 ? (xfptu = sp4lh['prefix'] = gdbcq['slice'](0x0, ph4sl), adgqb = sp4lh['localName'] = gdbcq['slice'](ph4sl + 0x1)) : (xfptu = null, adgqb = sp4lh['localName'] = gdbcq);var r27v1 = sp4lh['uri'] = rw03z[xfptu || ''];if (aebq89['startElement'](r27v1, adgqb, gdbcq, sp4lh), !sp4lh['closed']) return sp4lh['currentNSMap'] = rw03z, sp4lh['localNSMap'] = j4kh, !0x0;if (aebq89['endElement'](r27v1, adgqb, gdbcq), j4kh) {
    for (xfptu in j4kh) aebq89['endPrefixMapping'](xfptu);
  }
}function p__oumfx(gaq9b8, e35w9n, lph4t, rv671$, r37z02) {
  if (/^(?:script|textarea)$/i['test'](lph4t)) {
    var slkh4p = gaq9b8['indexOf']('</' + lph4t + '>', e35w9n),
        r07v1 = gaq9b8['substring'](e35w9n + 0x1, slkh4p);if (/[&<]/['test'](r07v1)) return (/^script$/i['test'](lph4t) ? (r37z02['characters'](r07v1, 0x0, r07v1['length']), slkh4p) : (r07v1 = r07v1['replace'](/&#?\w+;/g, rv671$), r37z02['characters'](r07v1, 0x0, r07v1['length']), slkh4p)
    );
  }return e35w9n + 0x1;
}function p_j6$y1(tf_xum, z2r7v, _xmt, kjpsh4) {
  var r032wz = kjpsh4[_xmt];return null == r032wz && (r032wz = tf_xum['lastIndexOf']('</' + _xmt + '>'), z2r7v > r032wz && (r032wz = tf_xum['lastIndexOf']('</' + _xmt)), kjpsh4[_xmt] = r032wz), z2r7v > r032wz;
}function p_lsk4h(pt4xlu, nwe53z) {
  for (var fxl_ut in pt4xlu) nwe53z[fxl_ut] = pt4xlu[fxl_ut];
}function p_a8gb9q(l_tx, $iyv6, zn50w3, r7162) {
  var ut_xl = l_tx['charAt']($iyv6 + 0x2);switch (ut_xl) {case '-':
      if ('-' === l_tx['charAt']($iyv6 + 0x3)) {
        var r2v07z = l_tx['indexOf']('-->', $iyv6 + 0x4);return r2v07z > $iyv6 ? (zn50w3['comment'](l_tx, $iyv6 + 0x4, r2v07z - $iyv6 - 0x4), r2v07z + 0x3) : (r7162['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == l_tx['substr']($iyv6 + 0x3, 0x6)) {
        var r2v07z = l_tx['indexOf'](']]>', $iyv6 + 0x9);return zn50w3['startCDATA'](), zn50w3['characters'](l_tx, $iyv6 + 0x9, r2v07z - $iyv6 - 0x9), zn50w3['endCDATA'](), r2v07z + 0x3;
      }var qg8a9 = p_qgb8ca(l_tx, $iyv6),
          x4ptl = qg8a9['length'];if (x4ptl > 0x1 && /!doctype/i['test'](qg8a9[0x0][0x0])) {
        var n9w5e3 = qg8a9[0x1][0x0],
            hiyjs = x4ptl > 0x3 && /^public$/i['test'](qg8a9[0x2][0x0]) && qg8a9[0x3][0x0],
            ksj4 = x4ptl > 0x4 && qg8a9[0x4][0x0],
            t4pxs = qg8a9[x4ptl - 0x1];return zn50w3['startDTD'](n9w5e3, hiyjs && hiyjs['replace'](/^(['"])(.*?)\1$/, '$2'), ksj4 && ksj4['replace'](/^(['"])(.*?)\1$/, '$2')), zn50w3['endDTD'](), t4pxs['index'] + t4pxs[0x0]['length'];
      }}return -0x1;
}function p_bea9q8(n8eb, pk4sl, jsiy) {
  var tlps4x = n8eb['indexOf']('?>', pk4sl);if (tlps4x) {
    var dcqabg = n8eb['substring'](pk4sl, tlps4x)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (dcqabg) {
      {
        dcqabg[0x0]['length'];
      }return jsiy['processingInstruction'](dcqabg[0x1], dcqabg[0x2]), tlps4x + 0x2;
    }return -0x1;
  }return -0x1;
}function p_xtm_fu() {}function p_neq98b(kph4, lxspt4) {
  return kph4['__proto__'] = lxspt4, kph4;
}function p_qgb8ca(ihyj$k, ltu_f) {
  var uf,
      r1v20 = [],
      jp4s = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (jp4s['lastIndex'] = ltu_f, jp4s['exec'](ihyj$k); uf = jp4s['exec'](ihyj$k);) if (r1v20['push'](uf), uf[0x1]) return r1v20;
}var p_hsjik4 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    p_r0vz27 = new RegExp('[\\-\\.0-9' + p_hsjik4['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    p_zwn305 = new RegExp('^' + p_hsjik4['source'] + p_r0vz27['source'] + '*(?::' + p_hsjik4['source'] + p_r0vz27['source'] + '*)?$'),
    p_hjy$ik = 0x0,
    p_u_fmxo = 0x1,
    p_sptlh4 = 0x2,
    p_zew3 = 0x3,
    p_zr372 = 0x4,
    p_r261v7 = 0x5,
    p_ltxp4s = 0x6,
    p_w5zn30 = 0x7;p_x_ufo['prototype'] = { 'parse': function (kjhsiy, txu_mf, slpt4x) {
    var k$jhy = this['domBuilder'];k$jhy['startDocument'](), p_lsk4h(txu_mf, txu_mf = {}), p_yj$1i(kjhsiy, txu_mf, slpt4x, k$jhy, this['errorHandler']), k$jhy['endDocument']();
  } }, p_xtm_fu['prototype'] = { 'setTagName': function (tu_lx) {
    if (!p_zwn305['test'](tu_lx)) throw new Error('invalid tagName:' + tu_lx);this['tagName'] = tu_lx;
  }, 'add': function (r07vz, f_ulx, i6ky) {
    if (!p_zwn305['test'](r07vz)) throw new Error('invalid attribute:' + r07vz);this[this['length']++] = { 'qName': r07vz, 'value': f_ulx, 'offset': i6ky };
  }, 'length': 0x0, 'getLocalName': function (kijyh) {
    return this[kijyh]['localName'];
  }, 'getLocator': function (n3z0) {
    return this[n3z0]['locator'];
  }, 'getQName': function ($r67v1) {
    return this[$r67v1]['qName'];
  }, 'getURI': function (gbaqc8) {
    return this[gbaqc8]['uri'];
  }, 'getValue': function (ne98) {
    return this[ne98]['value'];
  } }, p_neq98b({}, p_neq98b['prototype']) instanceof p_neq98b || (p_neq98b = function (pftlxu, b89qen) {
  function kp4lhs() {}kp4lhs['prototype'] = b89qen, kp4lhs = new kp4lhs();for (b89qen in pftlxu) kp4lhs[b89qen] = pftlxu[b89qen];return kp4lhs;
}), exports['XMLReader'] = p_x_ufo;