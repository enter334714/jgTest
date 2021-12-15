var A = wx.$N;
function n_qipj9() {}function n_jfyi9q(ijfygq, egvr3, hm_$k4, p7c950, qi90j) {
  function c7p90(h$_m) {
    if (h$_m > 0xffff) {
      h$_m -= 0x10000;var yjvg = 0xd800 + (h$_m >> 0xa),
          jyfvi = 0xdc00 + (0x3ff & h$_m);return String['fromCharCode'](yjvg, jyfvi);
    }return String['fromCharCode'](h$_m);
  }function nxslzd(v3frg8) {
    var kxlhm_ = v3frg8['slice'](0x1, -0x1);return kxlhm_ in hm_$k4 ? hm_$k4[kxlhm_] : '#' === kxlhm_['charAt'](0x0) ? c7p90(parseInt(kxlhm_['substr'](0x1)['replace']('x', '0x'))) : (qi90j['error']('entity not found:' + v3frg8), v3frg8);
  }function iyvrg(xmldzh) {
    if (xmldzh > dcxnsz) {
      var oa238e = ijfygq['substring'](dcxnsz, xmldzh)['replace'](/&#?\w+;/g, nxslzd);cn50s && e3vgr(dcxnsz), p7c950['characters'](oa238e, 0x0, xmldzh - dcxnsz), dcxnsz = xmldzh;
    }
  }function e3vgr($lhk_, h$k_lm) {
    for (; $lhk_ >= nlmzdx && (h$k_lm = baw2o['exec'](ijfygq));) ve38g = h$k_lm['index'], nlmzdx = ve38g + h$k_lm[0x0]['length'], cn50s['lineNumber']++;cn50s['columnNumber'] = $lhk_ - ve38g + 0x1;
  }for (var ve38g = 0x0, nlmzdx = 0x0, baw2o = /.*(?:\r\n?|\n)|.*$/g, cn50s = p7c950['locator'], iyvgjf = [{ 'currentNSMap': egvr3 }], n7zc = {}, dcxnsz = 0x0;;) {
    try {
      var erg8v3 = ijfygq['indexOf']('<', dcxnsz);if (0x0 > erg8v3) {
        if (!ijfygq['substr'](dcxnsz)['match'](/^\s*$/)) {
          var lxhkmd = p7c950['doc'],
              a3reo8 = lxhkmd['createTextNode'](ijfygq['substr'](dcxnsz));lxhkmd['appendChild'](a3reo8), p7c950['currentElement'] = a3reo8;
        }return;
      }switch (erg8v3 > dcxnsz && iyvrg(erg8v3), ijfygq['charAt'](erg8v3 + 0x1)) {case '/':
          var znxcd = ijfygq['indexOf']('>', erg8v3 + 0x3),
              zs75cn = ijfygq['substring'](erg8v3 + 0x2, znxcd),
              hmxdlk = iyvgjf['pop']();0x0 > znxcd ? (zs75cn = ijfygq['substring'](erg8v3 + 0x2)['replace'](/[\s<].*/, ''), qi90j['error']('end tag name: ' + zs75cn + ' is not complete:' + hmxdlk['tagName']), znxcd = erg8v3 + 0x1 + zs75cn['length']) : zs75cn['match'](/\s</) && (zs75cn = zs75cn['replace'](/[\s<].*/, ''), qi90j['error']('end tag name: ' + zs75cn + ' maybe not complete'), znxcd = erg8v3 + 0x1 + zs75cn['length']);var k4$1 = hmxdlk['localNSMap'],
              n075cs = hmxdlk['tagName'] == zs75cn,
              lk_m$h = n075cs || hmxdlk['tagName'] && hmxdlk['tagName']['toLowerCase']() == zs75cn['toLowerCase']();if (lk_m$h) {
            if (p7c950['endElement'](hmxdlk['uri'], hmxdlk['localName'], zs75cn), k4$1) {
              for (var $4u1k in k4$1) p7c950['endPrefixMapping']($4u1k);
            }n075cs || qi90j['fatalError']('end tag name: ' + zs75cn + ' is not match the current start tagName:' + hmxdlk['tagName']);
          } else iyvgjf['push'](hmxdlk);znxcd++;break;case '?':
          cn50s && e3vgr(erg8v3), znxcd = n_$kh(ijfygq, erg8v3, p7c950);break;case '!':
          cn50s && e3vgr(erg8v3), znxcd = n_f8rvg3(ijfygq, erg8v3, p7c950, qi90j);break;default:
          cn50s && e3vgr(erg8v3);var mkx_hl = new n_gyvfr(),
              jgq = iyvgjf[iyvgjf['length'] - 0x1]['currentNSMap'],
              znxcd = n_$_m4k(ijfygq, erg8v3, mkx_hl, jgq, nxslzd, qi90j),
              wo2e6a = mkx_hl['length'];if (!mkx_hl['closed'] && n_j95(ijfygq, znxcd, mkx_hl['tagName'], n7zc) && (mkx_hl['closed'] = !0x0, hm_$k4['nbsp'] || qi90j['warning']('unclosed xml attribute')), cn50s && wo2e6a) {
            for (var p5c70s = n_gify(cn50s, {}), lmh_xk = 0x0; wo2e6a > lmh_xk; lmh_xk++) {
              var yr3gvf = mkx_hl[lmh_xk];e3vgr(yr3gvf['offset']), yr3gvf['locator'] = n_gify(cn50s, {});
            }p7c950['locator'] = p5c70s, n_lkmx(mkx_hl, p7c950, jgq) && iyvgjf['push'](mkx_hl), p7c950['locator'] = cn50s;
          } else n_lkmx(mkx_hl, p7c950, jgq) && iyvgjf['push'](mkx_hl);'http://www.w3.org/1999/xhtml' !== mkx_hl['uri'] || mkx_hl['closed'] ? znxcd++ : znxcd = n_iryvgf(ijfygq, znxcd, mkx_hl['tagName'], nxslzd, p7c950);}
    } catch (vijfy) {
      qi90j['error']('element parse error: ' + vijfy), znxcd = -0x1;
    }znxcd > dcxnsz ? dcxnsz = znxcd : iyvrg(Math['max'](erg8v3, dcxnsz) + 0x1);
  }
}function n_gify(_1$ku, eo32a8) {
  return eo32a8['lineNumber'] = _1$ku['lineNumber'], eo32a8['columnNumber'] = _1$ku['columnNumber'], eo32a8;
}function n_$_m4k(v3o8, xmldkh, d7zcn, _lkhx, t6w2b, mkhld) {
  for (var $hu4k, $_ukh, fyvijg = ++xmldkh, j05p = n_kh4$u_;;) {
    var j9p50q = v3o8['charAt'](fyvijg);switch (j9p50q) {case '=':
        if (j05p === n_er83o) $hu4k = v3o8['slice'](xmldkh, fyvijg), j05p = n__u4;else {
          if (j05p !== n_kmh_$) throw new Error('attribute equal must after attrName');j05p = n__u4;
        }break;case '\x27':case '\x22':
        if (j05p === n__u4 || j05p === n_er83o) {
          if (j05p === n_er83o && (mkhld['warning']('attribute value must after "="'), $hu4k = v3o8['slice'](xmldkh, fyvijg)), xmldkh = fyvijg + 0x1, fyvijg = v3o8['indexOf'](j9p50q, xmldkh), !(fyvijg > 0x0)) throw new Error('attribute value no end \'' + j9p50q + '\' match');$_ukh = v3o8['slice'](xmldkh, fyvijg)['replace'](/&#?\w+;/g, t6w2b), d7zcn['add']($hu4k, $_ukh, xmldkh - 0x1), j05p = n_verg83;
        } else {
          if (j05p != n_klmh_x) throw new Error('attribute value must after "="');$_ukh = v3o8['slice'](xmldkh, fyvijg)['replace'](/&#?\w+;/g, t6w2b), d7zcn['add']($hu4k, $_ukh, xmldkh), mkhld['warning']('attribute "' + $hu4k + '" missed start quot(' + j9p50q + ')!!'), xmldkh = fyvijg + 0x1, j05p = n_verg83;
        }break;case '/':
        switch (j05p) {case n_kh4$u_:
            d7zcn['setTagName'](v3o8['slice'](xmldkh, fyvijg));case n_verg83:case n_e38orv:case n_abt2w:
            j05p = n_abt2w, d7zcn['closed'] = !0x0;case n_klmh_x:case n_er83o:case n_kmh_$:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return mkhld['error']('unexpected end of input'), j05p == n_kh4$u_ && d7zcn['setTagName'](v3o8['slice'](xmldkh, fyvijg)), fyvijg;case '>':
        switch (j05p) {case n_kh4$u_:
            d7zcn['setTagName'](v3o8['slice'](xmldkh, fyvijg));case n_verg83:case n_e38orv:case n_abt2w:
            break;case n_klmh_x:case n_er83o:
            $_ukh = v3o8['slice'](xmldkh, fyvijg), '/' === $_ukh['slice'](-0x1) && (d7zcn['closed'] = !0x0, $_ukh = $_ukh['slice'](0x0, -0x1));case n_kmh_$:
            j05p === n_kmh_$ && ($_ukh = $hu4k), j05p == n_klmh_x ? (mkhld['warning']('attribute "' + $_ukh + '" missed quot(")!!'), d7zcn['add']($hu4k, $_ukh['replace'](/&#?\w+;/g, t6w2b), xmldkh)) : ('http://www.w3.org/1999/xhtml' === _lkhx[''] && $_ukh['match'](/^(?:disabled|checked|selected)$/i) || mkhld['warning']('attribute "' + $_ukh + '" missed value!! "' + $_ukh + '" instead!!'), d7zcn['add']($_ukh, $_ukh, xmldkh));break;case n__u4:
            throw new Error('attribute value missed!!');}return fyvijg;case '\u0080':
        j9p50q = '\x20';default:
        if ('\x20' >= j9p50q) switch (j05p) {case n_kh4$u_:
            d7zcn['setTagName'](v3o8['slice'](xmldkh, fyvijg)), j05p = n_e38orv;break;case n_er83o:
            $hu4k = v3o8['slice'](xmldkh, fyvijg), j05p = n_kmh_$;break;case n_klmh_x:
            var $_ukh = v3o8['slice'](xmldkh, fyvijg)['replace'](/&#?\w+;/g, t6w2b);mkhld['warning']('attribute "' + $_ukh + '" missed quot(")!!'), d7zcn['add']($hu4k, $_ukh, xmldkh);case n_verg83:
            j05p = n_e38orv;} else switch (j05p) {case n_kmh_$:
            {
              d7zcn['tagName'];
            }'http://www.w3.org/1999/xhtml' === _lkhx[''] && $hu4k['match'](/^(?:disabled|checked|selected)$/i) || mkhld['warning']('attribute "' + $hu4k + '" missed value!! "' + $hu4k + '" instead2!!'), d7zcn['add']($hu4k, $hu4k, xmldkh), xmldkh = fyvijg, j05p = n_er83o;break;case n_verg83:
            mkhld['warning']('attribute space is required"' + $hu4k + '\x22!!');case n_e38orv:
            j05p = n_er83o, xmldkh = fyvijg;break;case n__u4:
            j05p = n_klmh_x, xmldkh = fyvijg;break;case n_abt2w:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}fyvijg++;
  }
}function n_lkmx(wabo, tab2, p590) {
  for (var ifgyr = wabo['tagName'], _m$4 = null, _mh$4k = wabo['length']; _mh$4k--;) {
    var hlm_xk = wabo[_mh$4k],
        lkmd = hlm_xk['qName'],
        e62woa = hlm_xk['value'],
        scdn7z = lkmd['indexOf'](':');if (scdn7z > 0x0) var _kxlmh = hlm_xk['prefix'] = lkmd['slice'](0x0, scdn7z),
        _4$1u = lkmd['slice'](scdn7z + 0x1),
        ijyqfg = 'xmlns' === _kxlmh && _4$1u;else _4$1u = lkmd, _kxlmh = null, ijyqfg = 'xmlns' === lkmd && '';hlm_xk['localName'] = _4$1u, ijyqfg !== !0x1 && (null == _m$4 && (_m$4 = {}, n_rifgv(p590, p590 = {})), p590[ijyqfg] = _m$4[ijyqfg] = e62woa, hlm_xk['uri'] = 'http://www.w3.org/2000/xmlns/', tab2['startPrefixMapping'](ijyqfg, e62woa));
  }for (var _mh$4k = wabo['length']; _mh$4k--;) {
    hlm_xk = wabo[_mh$4k];var _kxlmh = hlm_xk['prefix'];_kxlmh && ('xml' === _kxlmh && (hlm_xk['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _kxlmh && (hlm_xk['uri'] = p590[_kxlmh || '']));
  }var scdn7z = ifgyr['indexOf'](':');scdn7z > 0x0 ? (_kxlmh = wabo['prefix'] = ifgyr['slice'](0x0, scdn7z), _4$1u = wabo['localName'] = ifgyr['slice'](scdn7z + 0x1)) : (_kxlmh = null, _4$1u = wabo['localName'] = ifgyr);var v8r3o = wabo['uri'] = p590[_kxlmh || ''];if (tab2['startElement'](v8r3o, _4$1u, ifgyr, wabo), !wabo['closed']) return wabo['currentNSMap'] = p590, wabo['localNSMap'] = _m$4, !0x0;if (tab2['endElement'](v8r3o, _4$1u, ifgyr), _m$4) {
    for (_kxlmh in _m$4) tab2['endPrefixMapping'](_kxlmh);
  }
}function n_iryvgf(_h$u, e8vg3r, iygjf, gyf3r, c7sn50) {
  if (/^(?:script|textarea)$/i['test'](iygjf)) {
    var zmhdlx = _h$u['indexOf']('</' + iygjf + '>', e8vg3r),
        ow6ae2 = _h$u['substring'](e8vg3r + 0x1, zmhdlx);if (/[&<]/['test'](ow6ae2)) return (/^script$/i['test'](iygjf) ? (c7sn50['characters'](ow6ae2, 0x0, ow6ae2['length']), zmhdlx) : (ow6ae2 = ow6ae2['replace'](/&#?\w+;/g, gyf3r), c7sn50['characters'](ow6ae2, 0x0, ow6ae2['length']), zmhdlx)
    );
  }return e8vg3r + 0x1;
}function n_j95(u4k_h$, cs57p0, a6wtb, ncz75) {
  var pq709 = ncz75[a6wtb];return null == pq709 && (pq709 = u4k_h$['lastIndexOf']('</' + a6wtb + '>'), cs57p0 > pq709 && (pq709 = u4k_h$['lastIndexOf']('</' + a6wtb)), ncz75[a6wtb] = pq709), cs57p0 > pq709;
}function n_rifgv(yqjgi, hmxdlz) {
  for (var rv8f3g in yqjgi) hmxdlz[rv8f3g] = yqjgi[rv8f3g];
}function n_f8rvg3(hk_xm, k4hu_, zncxsd, p5j9q0) {
  var jip0q = hk_xm['charAt'](k4hu_ + 0x2);switch (jip0q) {case '-':
      if ('-' === hk_xm['charAt'](k4hu_ + 0x3)) {
        var lznsx = hk_xm['indexOf']('-->', k4hu_ + 0x4);return lznsx > k4hu_ ? (zncxsd['comment'](hk_xm, k4hu_ + 0x4, lznsx - k4hu_ - 0x4), lznsx + 0x3) : (p5j9q0['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == hk_xm['substr'](k4hu_ + 0x3, 0x6)) {
        var lznsx = hk_xm['indexOf'](']]>', k4hu_ + 0x9);return zncxsd['startCDATA'](), zncxsd['characters'](hk_xm, k4hu_ + 0x9, lznsx - k4hu_ - 0x9), zncxsd['endCDATA'](), lznsx + 0x3;
      }var lhkxm_ = n_k$_4mh(hk_xm, k4hu_),
          xcnszd = lhkxm_['length'];if (xcnszd > 0x1 && /!doctype/i['test'](lhkxm_[0x0][0x0])) {
        var xdnzs = lhkxm_[0x1][0x0],
            $u_4kh = xcnszd > 0x3 && /^public$/i['test'](lhkxm_[0x2][0x0]) && lhkxm_[0x3][0x0],
            ra83 = xcnszd > 0x4 && lhkxm_[0x4][0x0],
            khx_l = lhkxm_[xcnszd - 0x1];return zncxsd['startDTD'](xdnzs, $u_4kh && $u_4kh['replace'](/^(['"])(.*?)\1$/, '$2'), ra83 && ra83['replace'](/^(['"])(.*?)\1$/, '$2')), zncxsd['endDTD'](), khx_l['index'] + khx_l[0x0]['length'];
      }}return -0x1;
}function n_$kh(r3fvyg, hzlx, _$u4k1) {
  var xsz = r3fvyg['indexOf']('?>', hzlx);if (xsz) {
    var $_kh4u = r3fvyg['substring'](hzlx, xsz)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if ($_kh4u) {
      {
        $_kh4u[0x0]['length'];
      }return _$u4k1['processingInstruction']($_kh4u[0x1], $_kh4u[0x2]), xsz + 0x2;
    }return -0x1;
  }return -0x1;
}function n_gyvfr() {}function n_p0c57(h$ml_, dkhml) {
  return h$ml_['__proto__'] = dkhml, h$ml_;
}function n_k$_4mh(sn7z5, hku_4$) {
  var m4_k$h,
      jvfgy = [],
      dhm = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (dhm['lastIndex'] = hku_4$, dhm['exec'](sn7z5); m4_k$h = dhm['exec'](sn7z5);) if (jvfgy['push'](m4_k$h), m4_k$h[0x1]) return jvfgy;
}var n_zmlxd = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    n_hdlz = new RegExp('[\\-\\.0-9' + n_zmlxd['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    n_fiyrvg = new RegExp('^' + n_zmlxd['source'] + n_hdlz['source'] + '*(?::' + n_zmlxd['source'] + n_hdlz['source'] + '*)?$'),
    n_kh4$u_ = 0x0,
    n_er83o = 0x1,
    n_kmh_$ = 0x2,
    n__u4 = 0x3,
    n_klmh_x = 0x4,
    n_verg83 = 0x5,
    n_e38orv = 0x6,
    n_abt2w = 0x7;n_qipj9['prototype'] = { 'parse': function (xldnmz, ml$kh, erv38) {
    var xlkhdm = this['domBuilder'];xlkhdm['startDocument'](), n_rifgv(ml$kh, ml$kh = {}), n_jfyi9q(xldnmz, ml$kh, erv38, xlkhdm, this['errorHandler']), xlkhdm['endDocument']();
  } }, n_gyvfr['prototype'] = { 'setTagName': function (nzmlx) {
    if (!n_fiyrvg['test'](nzmlx)) throw new Error('invalid tagName:' + nzmlx);this['tagName'] = nzmlx;
  }, 'add': function (jgfiyv, a8r3, owb2a6) {
    if (!n_fiyrvg['test'](jgfiyv)) throw new Error('invalid attribute:' + jgfiyv);this[this['length']++] = { 'qName': jgfiyv, 'value': a8r3, 'offset': owb2a6 };
  }, 'length': 0x0, 'getLocalName': function (dcn7) {
    return this[dcn7]['localName'];
  }, 'getLocator': function (b2ao6) {
    return this[b2ao6]['locator'];
  }, 'getQName': function (t2wab6) {
    return this[t2wab6]['qName'];
  }, 'getURI': function (g8rfv) {
    return this[g8rfv]['uri'];
  }, 'getValue': function (vfygr3) {
    return this[vfygr3]['value'];
  } }, n_p0c57({}, n_p0c57['prototype']) instanceof n_p0c57 || (n_p0c57 = function (zsncd, c0p5s7) {
  function vegr38() {}vegr38['prototype'] = c0p5s7, vegr38 = new vegr38();for (c0p5s7 in zsncd) vegr38[c0p5s7] = zsncd[c0p5s7];return vegr38;
}), exports['XMLReader'] = n_qipj9;