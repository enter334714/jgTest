var A = wx.$N;
function n_hkdm() {}function n_a6e2o(b2o6aw, mhdl, vy3gf, hdzlxm, i9j0) {
  function w6o2ba(p057sc) {
    var q509 = p057sc['slice'](0x1, -0x1);return q509 in vy3gf ? vy3gf[q509] : '#' === q509['charAt'](0x0) ? 0xffff < (q509 = parseInt(q509['substr'](0x1)['replace']('x', '0x'))) ? (q509 -= 0x10000, String['fromCharCode'](0xd800 + (q509 >> 0xa), 0xdc00 + (0x3ff & q509))) : String['fromCharCode'](q509) : (i9j0['error']('entity not found:' + p057sc), p057sc);
  }function q957(a8) {
    var h_xmk;m4_h < a8 && (h_xmk = b2o6aw['substring'](m4_h, a8)['replace'](/&#?\w+;/g, w6o2ba), khu_4 && _$hkm4(m4_h), hdzlxm['characters'](h_xmk, 0x0, a8 - m4_h), m4_h = a8);
  }function _$hkm4(zdslxn, jpiq90) {
    for (; gqyf <= zdslxn && (jpiq90 = jyp9qi['exec'](b2o6aw));) wob6a = jpiq90['index'], gqyf = wob6a + jpiq90[0x0]['length'], khu_4['lineNumber']++;khu_4['columnNumber'] = zdslxn - wob6a + 0x1;
  }for (var wob6a = 0x0, gqyf = 0x0, jyp9qi = /.*(?:\r\n?|\n)|.*$/g, khu_4 = hdzlxm['locator'], xkmdh = [{ 'currentNSMap': mhdl }], iyqjg = {}, m4_h = 0x0;;) {
    try {
      var rev38o = b2o6aw['indexOf']('<', m4_h),
          fr8vg3,
          w2oa6e;if (rev38o < 0x0) return void (b2o6aw['substr'](m4_h)['match'](/^\s*$/) || (w2oa6e = (fr8vg3 = hdzlxm['doc'])['createTextNode'](b2o6aw['substr'](m4_h)), fr8vg3['appendChild'](w2oa6e), hdzlxm['currentElement'] = w2oa6e));switch (m4_h < rev38o && q957(rev38o), b2o6aw['charAt'](rev38o + 0x1)) {case '/':
          var ba6o = b2o6aw['indexOf']('>', rev38o + 0x3),
              zdcxn = b2o6aw['substring'](rev38o + 0x2, ba6o),
              yjf9iq = xkmdh['pop']();ba6o < 0x0 ? (zdcxn = b2o6aw['substring'](rev38o + 0x2)['replace'](/[\s<].*/, ''), i9j0['error']('end tag name: ' + zdcxn + ' is not complete:' + yjf9iq['tagName']), ba6o = rev38o + 0x1 + zdcxn['length']) : zdcxn['match'](/\s</) && (zdcxn = zdcxn['replace'](/[\s<].*/, ''), i9j0['error']('end tag name: ' + zdcxn + ' maybe not complete'), ba6o = rev38o + 0x1 + zdcxn['length']);var $_mk4h = yjf9iq['localNSMap'],
              n7zsc = yjf9iq['tagName'] == zdcxn;if (n7zsc || yjf9iq['tagName'] && yjf9iq['tagName']['toLowerCase']() == zdcxn['toLowerCase']()) {
            if (hdzlxm['endElement'](yjf9iq['uri'], yjf9iq['localName'], zdcxn), $_mk4h) {
              for (var ivjg in $_mk4h) hdzlxm['endPrefixMapping'](ivjg);
            }n7zsc || i9j0['fatalError']('end tag name: ' + zdcxn + ' is not match the current start tagName:' + yjf9iq['tagName']);
          } else xkmdh['push'](yjf9iq);ba6o++;break;case '?':
          khu_4 && _$hkm4(rev38o), ba6o = n_vgryi(b2o6aw, rev38o, hdzlxm);break;case '!':
          khu_4 && _$hkm4(rev38o), ba6o = n_hkm$(b2o6aw, rev38o, hdzlxm, i9j0);break;default:
          khu_4 && _$hkm4(rev38o);var mzhxld = new n_$_huk(),
              fgv3r8 = xkmdh[xkmdh['length'] - 0x1]['currentNSMap'],
              ba6o = n_$h_4uk(b2o6aw, rev38o, mzhxld, fgv3r8, w6o2ba, i9j0),
              gvy3f = mzhxld['length'];if (!mzhxld['closed'] && n_csxdnz(b2o6aw, ba6o, mzhxld['tagName'], iyqjg) && (mzhxld['closed'] = !0x0, vy3gf['nbsp'] || i9j0['warning']('unclosed xml attribute')), khu_4 && gvy3f) {
            for (var x_mlkh = n_gjfyi(khu_4, {}), s70pc = 0x0; s70pc < gvy3f; s70pc++) {
              var zdxmln = mzhxld[s70pc];_$hkm4(zdxmln['offset']), zdxmln['locator'] = n_gjfyi(khu_4, {});
            }hdzlxm['locator'] = x_mlkh, n_c0ns57(mzhxld, hdzlxm, fgv3r8) && xkmdh['push'](mzhxld), hdzlxm['locator'] = khu_4;
          } else n_c0ns57(mzhxld, hdzlxm, fgv3r8) && xkmdh['push'](mzhxld);'http://www.w3.org/1999/xhtml' !== mzhxld['uri'] || mzhxld['closed'] ? ba6o++ : ba6o = n_pi9q0j(b2o6aw, ba6o, mzhxld['tagName'], w6o2ba, hdzlxm);}
    } catch (yqip9) {
      i9j0['error']('element parse error: ' + yqip9), ba6o = -0x1;
    }m4_h < ba6o ? m4_h = ba6o : q957(Math['max'](rev38o, m4_h) + 0x1);
  }
}function n_gjfyi(h$_mlk, s50n7c) {
  return s50n7c['lineNumber'] = h$_mlk['lineNumber'], s50n7c['columnNumber'] = h$_mlk['columnNumber'], s50n7c;
}function n_$h_4uk(p750q, a2ow6b, aw62eo, e2ao38, cdzn7, xlhmdk) {
  for (var j9iq0, o3ve = ++a2ow6b, ijfy9q = n_zhmld;;) {
    var q9i0j = p750q['charAt'](o3ve);switch (q9i0j) {case '=':
        if (ijfy9q === n_mxhkld) j9iq0 = p750q['slice'](a2ow6b, o3ve), ijfy9q = n_qjyf9;else {
          if (ijfy9q !== n_s5cnz) throw new Error('attribute equal must after attrName');ijfy9q = n_qjyf9;
        }break;case '\x27':case '\x22':
        if (ijfy9q === n_qjyf9 || ijfy9q === n_mxhkld) {
          if (ijfy9q === n_mxhkld && (xlhmdk['warning']('attribute value must after "="'), j9iq0 = p750q['slice'](a2ow6b, o3ve)), !(0x0 < (o3ve = p750q['indexOf'](q9i0j, a2ow6b = o3ve + 0x1)))) throw new Error('attribute value no end \'' + q9i0j + '\' match');twb26 = p750q['slice'](a2ow6b, o3ve)['replace'](/&#?\w+;/g, cdzn7), aw62eo['add'](j9iq0, twb26, a2ow6b - 0x1), ijfy9q = n_o8r;
        } else {
          if (ijfy9q != n_sn7c5z) throw new Error('attribute value must after "="');twb26 = p750q['slice'](a2ow6b, o3ve)['replace'](/&#?\w+;/g, cdzn7), aw62eo['add'](j9iq0, twb26, a2ow6b), xlhmdk['warning']('attribute "' + j9iq0 + '" missed start quot(' + q9i0j + ')!!'), a2ow6b = o3ve + 0x1, ijfy9q = n_o8r;
        }break;case '/':
        switch (ijfy9q) {case n_zhmld:
            aw62eo['setTagName'](p750q['slice'](a2ow6b, o3ve));case n_o8r:case n_m$_kl:case n_i0pjq:
            ijfy9q = n_i0pjq, aw62eo['closed'] = !0x0;case n_sn7c5z:case n_mxhkld:case n_s5cnz:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return xlhmdk['error']('unexpected end of input'), ijfy9q == n_zhmld && aw62eo['setTagName'](p750q['slice'](a2ow6b, o3ve)), o3ve;case '>':
        switch (ijfy9q) {case n_zhmld:
            aw62eo['setTagName'](p750q['slice'](a2ow6b, o3ve));case n_o8r:case n_m$_kl:case n_i0pjq:
            break;case n_sn7c5z:case n_mxhkld:
            '/' === (twb26 = p750q['slice'](a2ow6b, o3ve))['slice'](-0x1) && (aw62eo['closed'] = !0x0, twb26 = twb26['slice'](0x0, -0x1));case n_s5cnz:
            ijfy9q === n_s5cnz && (twb26 = j9iq0), ijfy9q == n_sn7c5z ? (xlhmdk['warning']('attribute "' + twb26 + '" missed quot(")!!'), aw62eo['add'](j9iq0, twb26['replace'](/&#?\w+;/g, cdzn7), a2ow6b)) : ('http://www.w3.org/1999/xhtml' === e2ao38[''] && twb26['match'](/^(?:disabled|checked|selected)$/i) || xlhmdk['warning']('attribute "' + twb26 + '" missed value!! "' + twb26 + '" instead!!'), aw62eo['add'](twb26, twb26, a2ow6b));break;case n_qjyf9:
            throw new Error('attribute value missed!!');}return o3ve;case '\u0080':
        q9i0j = '\x20';default:
        if (q9i0j <= '\x20') switch (ijfy9q) {case n_zhmld:
            aw62eo['setTagName'](p750q['slice'](a2ow6b, o3ve)), ijfy9q = n_m$_kl;break;case n_mxhkld:
            j9iq0 = p750q['slice'](a2ow6b, o3ve), ijfy9q = n_s5cnz;break;case n_sn7c5z:
            var twb26 = p750q['slice'](a2ow6b, o3ve)['replace'](/&#?\w+;/g, cdzn7);xlhmdk['warning']('attribute "' + twb26 + '" missed quot(")!!'), aw62eo['add'](j9iq0, twb26, a2ow6b);case n_o8r:
            ijfy9q = n_m$_kl;} else switch (ijfy9q) {case n_s5cnz:
            aw62eo['tagName'], 'http://www.w3.org/1999/xhtml' === e2ao38[''] && j9iq0['match'](/^(?:disabled|checked|selected)$/i) || xlhmdk['warning']('attribute "' + j9iq0 + '" missed value!! "' + j9iq0 + '" instead2!!'), aw62eo['add'](j9iq0, j9iq0, a2ow6b), a2ow6b = o3ve, ijfy9q = n_mxhkld;break;case n_o8r:
            xlhmdk['warning']('attribute space is required"' + j9iq0 + '\x22!!');case n_m$_kl:
            ijfy9q = n_mxhkld, a2ow6b = o3ve;break;case n_qjyf9:
            ijfy9q = n_sn7c5z, a2ow6b = o3ve;break;case n_i0pjq:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}o3ve++;
  }
}function n_c0ns57(n0sc5, gfyrv, u$1k4) {
  for (var waob26 = n0sc5['tagName'], lndzmx = null, jqig = n0sc5['length']; jqig--;) {
    var e83oa = n0sc5[jqig],
        dhxzlm = e83oa['qName'],
        eo8a32 = e83oa['value'],
        c5n7z;dhxzlm = 0x0 < (mkhlx_ = dhxzlm['indexOf'](':')) ? (dxslzn = e83oa['prefix'] = dhxzlm['slice'](0x0, mkhlx_), c5n7z = dhxzlm['slice'](mkhlx_ + 0x1), 'xmlns' === dxslzn && c5n7z) : (dxslzn = null, 'xmlns' === (c5n7z = dhxzlm) && ''), e83oa['localName'] = c5n7z, !0x1 !== dhxzlm && (null == lndzmx && (lndzmx = {}, n_slxzn(u$1k4, u$1k4 = {})), u$1k4[dhxzlm] = lndzmx[dhxzlm] = eo8a32, e83oa['uri'] = 'http://www.w3.org/2000/xmlns/', gfyrv['startPrefixMapping'](dhxzlm, eo8a32));
  }for (jqig = n0sc5['length']; jqig--;) (dxslzn = (e83oa = n0sc5[jqig])['prefix']) && ('xml' === dxslzn && (e83oa['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== dxslzn && (e83oa['uri'] = u$1k4[dxslzn || '']));var mkhlx_;c5n7z = 0x0 < (mkhlx_ = waob26['indexOf'](':')) ? (dxslzn = n0sc5['prefix'] = waob26['slice'](0x0, mkhlx_), n0sc5['localName'] = waob26['slice'](mkhlx_ + 0x1)) : (dxslzn = null, n0sc5['localName'] = waob26);var _k$4u1 = n0sc5['uri'] = u$1k4[dxslzn || ''];if (gfyrv['startElement'](_k$4u1, c5n7z, waob26, n0sc5), !n0sc5['closed']) return n0sc5['currentNSMap'] = u$1k4, n0sc5['localNSMap'] = lndzmx, !0x0;if (gfyrv['endElement'](_k$4u1, c5n7z, waob26), lndzmx) {
    for (var dxslzn in lndzmx) gfyrv['endPrefixMapping'](dxslzn);
  }
}function n_pi9q0j(gr8v3, fqjgy, jp9qyi, _hm, uh_4k$) {
  if (/^(?:script|textarea)$/i['test'](jp9qyi)) {
    var p9yqij = gr8v3['indexOf']('</' + jp9qyi + '>', fqjgy),
        gr8v3 = gr8v3['substring'](fqjgy + 0x1, p9yqij);if (/[&<]/['test'](gr8v3)) return (/^script$/i['test'](jp9qyi) || (gr8v3 = gr8v3['replace'](/&#?\w+;/g, _hm)), uh_4k$['characters'](gr8v3, 0x0, gr8v3['length']), p9yqij
    );
  }return fqjgy + 0x1;
}function n_csxdnz(lzxdmh, _kxl, kxdmlh, h$l) {
  var c5nzs = h$l[kxdmlh];return null == c5nzs && ((c5nzs = lzxdmh['lastIndexOf']('</' + kxdmlh + '>')) < _kxl && (c5nzs = lzxdmh['lastIndexOf']('</' + kxdmlh)), h$l[kxdmlh] = c5nzs), c5nzs < _kxl;
}function n_slxzn(ji9pq0, p075c9) {
  for (var ypqij in ji9pq0) p075c9[ypqij] = ji9pq0[ypqij];
}function n_hkm$(x_hklm, er8vg, hu4k$, dxls) {
  var zc7nd = x_hklm['charAt'](er8vg + 0x2);if ('-' === zc7nd) return '-' !== x_hklm['charAt'](er8vg + 0x3) ? -0x1 : er8vg < (xsndl = x_hklm['indexOf']('-->', er8vg + 0x4)) ? (hu4k$['comment'](x_hklm, er8vg + 0x4, xsndl - er8vg - 0x4), xsndl + 0x3) : (dxls['error']('Unclosed comment'), -0x1);if ('CDATA[' == x_hklm['substr'](er8vg + 0x3, 0x6)) {
    var xsndl = x_hklm['indexOf'](']]>', er8vg + 0x9);return hu4k$['startCDATA'](), hu4k$['characters'](x_hklm, er8vg + 0x9, xsndl - er8vg - 0x9), hu4k$['endCDATA'](), xsndl + 0x3;
  }zc7nd = n_gv3yf(x_hklm, er8vg), dxls = zc7nd['length'];if (0x1 < dxls && /!doctype/i['test'](zc7nd[0x0][0x0])) return xsndl = zc7nd[0x1][0x0], x_hklm = 0x3 < dxls && /^public$/i['test'](zc7nd[0x2][0x0]) && zc7nd[0x3][0x0], er8vg = 0x4 < dxls && zc7nd[0x4][0x0], dxls = zc7nd[dxls - 0x1], (hu4k$['startDTD'](xsndl, x_hklm && x_hklm['replace'](/^(['"])(.*?)\1$/, '$2'), er8vg && er8vg['replace'](/^(['"])(.*?)\1$/, '$2')), hu4k$['endDTD'](), dxls['index'] + dxls[0x0]['length']);return -0x1;
}function n_vgryi(jqgfyi, xsnzdc, ro38ve) {
  var e3ra = jqgfyi['indexOf']('?>', xsnzdc);if (e3ra) return xsnzdc = jqgfyi['substring'](xsnzdc, e3ra)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), xsnzdc ? (xsnzdc[0x0]['length'], ro38ve['processingInstruction'](xsnzdc[0x1], xsnzdc[0x2]), e3ra + 0x2) : -0x1;return -0x1;
}function n_$_huk() {}function n_gvi(irgy, vr83fg) {
  return irgy['__proto__'] = vr83fg, irgy;
}function n_gv3yf(lmdzn, s05c7) {
  var r8ae,
      k4$h = [],
      jq0i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (jq0i['lastIndex'] = s05c7, jq0i['exec'](lmdzn); r8ae = jq0i['exec'](lmdzn);) if (k4$h['push'](r8ae), r8ae[0x1]) return k4$h;
}var n_dznxcs = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    n_m_$l = new RegExp('[\\-\\.0-9' + n_dznxcs['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    n_oab62w = new RegExp('^' + n_dznxcs['source'] + n_m_$l['source'] + '*(?::' + n_dznxcs['source'] + n_m_$l['source'] + '*)?$'),
    n_zhmld = 0x0,
    n_mxhkld = 0x1,
    n_s5cnz = 0x2,
    n_qjyf9 = 0x3,
    n_sn7c5z = 0x4,
    n_o8r = 0x5,
    n_m$_kl = 0x6,
    n_i0pjq = 0x7;n_hkdm['prototype'] = { 'parse': function (rg3fv, fvy3, $km_hl) {
    var dlmk = this['domBuilder'];dlmk['startDocument'](), n_slxzn(fvy3, fvy3 = {}), n_a6e2o(rg3fv, fvy3, $km_hl, dlmk, this['errorHandler']), dlmk['endDocument']();
  } }, n_$_huk['prototype'] = { 'setTagName': function (iyf9q) {
    if (!n_oab62w['test'](iyf9q)) throw new Error('invalid tagName:' + iyf9q);this['tagName'] = iyf9q;
  }, 'add': function ($u4kh, ygfriv, ear83) {
    if (!n_oab62w['test']($u4kh)) throw new Error('invalid attribute:' + $u4kh);this[this['length']++] = { 'qName': $u4kh, 'value': ygfriv, 'offset': ear83 };
  }, 'length': 0x0, 'getLocalName': function (b2ow) {
    return this[b2ow]['localName'];
  }, 'getLocator': function (pj5q09) {
    return this[pj5q09]['locator'];
  }, 'getQName': function (kl_xhm) {
    return this[kl_xhm]['qName'];
  }, 'getURI': function (fiyrgv) {
    return this[fiyrgv]['uri'];
  }, 'getValue': function (jgifvy) {
    return this[jgifvy]['value'];
  } }, n_gvi({}, n_gvi['prototype']) instanceof n_gvi || (n_gvi = function (ns750, p975c0) {
  function igvfj() {}for (p975c0 in igvfj['prototype'] = p975c0, igvfj = new igvfj(), ns750) igvfj[p975c0] = ns750[p975c0];return igvfj;
}), exports['XMLReader'] = n_hkdm;