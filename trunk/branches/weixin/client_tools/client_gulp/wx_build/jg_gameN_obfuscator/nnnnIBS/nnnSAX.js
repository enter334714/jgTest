var A = wx.$N;
function n_u$k_41() {}function n_oa6we2(c0957, dzcn, cd7n, xmld, dxl) {
  function $khl(l$hk_) {
    if (l$hk_ > 0xffff) {
      l$hk_ -= 0x10000;var ore83v = 0xd800 + (l$hk_ >> 0xa),
          mxdhk = 0xdc00 + (0x3ff & l$hk_);return String['fromCharCode'](ore83v, mxdhk);
    }return String['fromCharCode'](l$hk_);
  }function $u4_h(p05s7c) {
    var qjyif9 = p05s7c['slice'](0x1, -0x1);return qjyif9 in cd7n ? cd7n[qjyif9] : '#' === qjyif9['charAt'](0x0) ? $khl(parseInt(qjyif9['substr'](0x1)['replace']('x', '0x'))) : (dxl['error']('entity not found:' + p05s7c), p05s7c);
  }function jfq9(oe328a) {
    if (oe328a > fy9j) {
      var p057sc = c0957['substring'](fy9j, oe328a)['replace'](/&#?\w+;/g, $u4_h);zmdh && jyq9ip(fy9j), xmld['characters'](p057sc, 0x0, oe328a - fy9j), fy9j = oe328a;
    }
  }function jyq9ip(hxkmd, eao2w) {
    for (; hxkmd >= yjvi && (eao2w = v3gf8r['exec'](c0957));) fgvyi = eao2w['index'], yjvi = fgvyi + eao2w[0x0]['length'], zmdh['lineNumber']++;zmdh['columnNumber'] = hxkmd - fgvyi + 0x1;
  }for (var fgvyi = 0x0, yjvi = 0x0, v3gf8r = /.*(?:\r\n?|\n)|.*$/g, zmdh = xmld['locator'], hmlk$_ = [{ 'currentNSMap': dzcn }], gr3v8f = {}, fy9j = 0x0;;) {
    try {
      var fjvgiy = c0957['indexOf']('<', fy9j);if (0x0 > fjvgiy) {
        if (!c0957['substr'](fy9j)['match'](/^\s*$/)) {
          var o23ea = xmld['doc'],
              nxdzml = o23ea['createTextNode'](c0957['substr'](fy9j));o23ea['appendChild'](nxdzml), xmld['currentElement'] = nxdzml;
        }return;
      }switch (fjvgiy > fy9j && jfq9(fjvgiy), c0957['charAt'](fjvgiy + 0x1)) {case '/':
          var gqyfj = c0957['indexOf']('>', fjvgiy + 0x3),
              lmh$ = c0957['substring'](fjvgiy + 0x2, gqyfj),
              ijvfgy = hmlk$_['pop']();0x0 > gqyfj ? (lmh$ = c0957['substring'](fjvgiy + 0x2)['replace'](/[\s<].*/, ''), dxl['error']('end tag name: ' + lmh$ + ' is not complete:' + ijvfgy['tagName']), gqyfj = fjvgiy + 0x1 + lmh$['length']) : lmh$['match'](/\s</) && (lmh$ = lmh$['replace'](/[\s<].*/, ''), dxl['error']('end tag name: ' + lmh$ + ' maybe not complete'), gqyfj = fjvgiy + 0x1 + lmh$['length']);var dcnxs = ijvfgy['localNSMap'],
              $lh = ijvfgy['tagName'] == lmh$,
              mlk$_ = $lh || ijvfgy['tagName'] && ijvfgy['tagName']['toLowerCase']() == lmh$['toLowerCase']();if (mlk$_) {
            if (xmld['endElement'](ijvfgy['uri'], ijvfgy['localName'], lmh$), dcnxs) {
              for (var cnsz5 in dcnxs) xmld['endPrefixMapping'](cnsz5);
            }$lh || dxl['fatalError']('end tag name: ' + lmh$ + ' is not match the current start tagName:' + ijvfgy['tagName']);
          } else hmlk$_['push'](ijvfgy);gqyfj++;break;case '?':
          zmdh && jyq9ip(fjvgiy), gqyfj = n_zdnxlm(c0957, fjvgiy, xmld);break;case '!':
          zmdh && jyq9ip(fjvgiy), gqyfj = n_p0597c(c0957, fjvgiy, xmld, dxl);break;default:
          zmdh && jyq9ip(fjvgiy);var k_m4h$ = new n_dz7csn(),
              dxzhm = hmlk$_[hmlk$_['length'] - 0x1]['currentNSMap'],
              gqyfj = n_vfr38(c0957, fjvgiy, k_m4h$, dxzhm, $u4_h, dxl),
              vyjf = k_m4h$['length'];if (!k_m4h$['closed'] && n_oaew6(c0957, gqyfj, k_m4h$['tagName'], gr3v8f) && (k_m4h$['closed'] = !0x0, cd7n['nbsp'] || dxl['warning']('unclosed xml attribute')), zmdh && vyjf) {
            for (var hk_xl = n_mdhlk(zmdh, {}), bwat26 = 0x0; vyjf > bwat26; bwat26++) {
              var ryivgf = k_m4h$[bwat26];jyq9ip(ryivgf['offset']), ryivgf['locator'] = n_mdhlk(zmdh, {});
            }xmld['locator'] = hk_xl, n_mkdxlh(k_m4h$, xmld, dxzhm) && hmlk$_['push'](k_m4h$), xmld['locator'] = zmdh;
          } else n_mkdxlh(k_m4h$, xmld, dxzhm) && hmlk$_['push'](k_m4h$);'http://www.w3.org/1999/xhtml' !== k_m4h$['uri'] || k_m4h$['closed'] ? gqyfj++ : gqyfj = n_jgyvif(c0957, gqyfj, k_m4h$['tagName'], $u4_h, xmld);}
    } catch (q95p) {
      dxl['error']('element parse error: ' + q95p), gqyfj = -0x1;
    }gqyfj > fy9j ? fy9j = gqyfj : jfq9(Math['max'](fjvgiy, fy9j) + 0x1);
  }
}function n_mdhlk(cdnsz7, iyfgr) {
  return iyfgr['lineNumber'] = cdnsz7['lineNumber'], iyfgr['columnNumber'] = cdnsz7['columnNumber'], iyfgr;
}function n_vfr38(ivfgyr, ldnmxz, klxd, xzdnsc, n5z7cs, lzxhdm) {
  for (var ygf3rv, xmnzld, rigyvf = ++ldnmxz, hzdmx = n_c7nz5;;) {
    var gjfvy = ivfgyr['charAt'](rigyvf);switch (gjfvy) {case '=':
        if (hzdmx === n_lxk_h) ygf3rv = ivfgyr['slice'](ldnmxz, rigyvf), hzdmx = n_ijgyqf;else {
          if (hzdmx !== n_ov8r3) throw new Error('attribute equal must after attrName');hzdmx = n_ijgyqf;
        }break;case '\x27':case '\x22':
        if (hzdmx === n_ijgyqf || hzdmx === n_lxk_h) {
          if (hzdmx === n_lxk_h && (lzxhdm['warning']('attribute value must after "="'), ygf3rv = ivfgyr['slice'](ldnmxz, rigyvf)), ldnmxz = rigyvf + 0x1, rigyvf = ivfgyr['indexOf'](gjfvy, ldnmxz), !(rigyvf > 0x0)) throw new Error('attribute value no end \'' + gjfvy + '\' match');xmnzld = ivfgyr['slice'](ldnmxz, rigyvf)['replace'](/&#?\w+;/g, n5z7cs), klxd['add'](ygf3rv, xmnzld, ldnmxz - 0x1), hzdmx = n_dlmkhx;
        } else {
          if (hzdmx != n_tab2) throw new Error('attribute value must after "="');xmnzld = ivfgyr['slice'](ldnmxz, rigyvf)['replace'](/&#?\w+;/g, n5z7cs), klxd['add'](ygf3rv, xmnzld, ldnmxz), lzxhdm['warning']('attribute "' + ygf3rv + '" missed start quot(' + gjfvy + ')!!'), ldnmxz = rigyvf + 0x1, hzdmx = n_dlmkhx;
        }break;case '/':
        switch (hzdmx) {case n_c7nz5:
            klxd['setTagName'](ivfgyr['slice'](ldnmxz, rigyvf));case n_dlmkhx:case n_vyf3gr:case n_e2w6a:
            hzdmx = n_e2w6a, klxd['closed'] = !0x0;case n_tab2:case n_lxk_h:case n_ov8r3:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return lzxhdm['error']('unexpected end of input'), hzdmx == n_c7nz5 && klxd['setTagName'](ivfgyr['slice'](ldnmxz, rigyvf)), rigyvf;case '>':
        switch (hzdmx) {case n_c7nz5:
            klxd['setTagName'](ivfgyr['slice'](ldnmxz, rigyvf));case n_dlmkhx:case n_vyf3gr:case n_e2w6a:
            break;case n_tab2:case n_lxk_h:
            xmnzld = ivfgyr['slice'](ldnmxz, rigyvf), '/' === xmnzld['slice'](-0x1) && (klxd['closed'] = !0x0, xmnzld = xmnzld['slice'](0x0, -0x1));case n_ov8r3:
            hzdmx === n_ov8r3 && (xmnzld = ygf3rv), hzdmx == n_tab2 ? (lzxhdm['warning']('attribute "' + xmnzld + '" missed quot(")!!'), klxd['add'](ygf3rv, xmnzld['replace'](/&#?\w+;/g, n5z7cs), ldnmxz)) : ('http://www.w3.org/1999/xhtml' === xzdnsc[''] && xmnzld['match'](/^(?:disabled|checked|selected)$/i) || lzxhdm['warning']('attribute "' + xmnzld + '" missed value!! "' + xmnzld + '" instead!!'), klxd['add'](xmnzld, xmnzld, ldnmxz));break;case n_ijgyqf:
            throw new Error('attribute value missed!!');}return rigyvf;case '\u0080':
        gjfvy = '\x20';default:
        if ('\x20' >= gjfvy) switch (hzdmx) {case n_c7nz5:
            klxd['setTagName'](ivfgyr['slice'](ldnmxz, rigyvf)), hzdmx = n_vyf3gr;break;case n_lxk_h:
            ygf3rv = ivfgyr['slice'](ldnmxz, rigyvf), hzdmx = n_ov8r3;break;case n_tab2:
            var xmnzld = ivfgyr['slice'](ldnmxz, rigyvf)['replace'](/&#?\w+;/g, n5z7cs);lzxhdm['warning']('attribute "' + xmnzld + '" missed quot(")!!'), klxd['add'](ygf3rv, xmnzld, ldnmxz);case n_dlmkhx:
            hzdmx = n_vyf3gr;} else switch (hzdmx) {case n_ov8r3:
            {
              klxd['tagName'];
            }'http://www.w3.org/1999/xhtml' === xzdnsc[''] && ygf3rv['match'](/^(?:disabled|checked|selected)$/i) || lzxhdm['warning']('attribute "' + ygf3rv + '" missed value!! "' + ygf3rv + '" instead2!!'), klxd['add'](ygf3rv, ygf3rv, ldnmxz), ldnmxz = rigyvf, hzdmx = n_lxk_h;break;case n_dlmkhx:
            lzxhdm['warning']('attribute space is required"' + ygf3rv + '\x22!!');case n_vyf3gr:
            hzdmx = n_lxk_h, ldnmxz = rigyvf;break;case n_ijgyqf:
            hzdmx = n_tab2, ldnmxz = rigyvf;break;case n_e2w6a:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}rigyvf++;
  }
}function n_mkdxlh(xdz, fg3yrv, kmh_l) {
  for (var nzls = xdz['tagName'], yvigj = null, i0qj9p = xdz['length']; i0qj9p--;) {
    var $4_khu = xdz[i0qj9p],
        _k$4hu = $4_khu['qName'],
        cz7nds = $4_khu['value'],
        ijq9yp = _k$4hu['indexOf'](':');if (ijq9yp > 0x0) var k4_h$u = $4_khu['prefix'] = _k$4hu['slice'](0x0, ijq9yp),
        yjifgq = _k$4hu['slice'](ijq9yp + 0x1),
        k4h = 'xmlns' === k4_h$u && yjifgq;else yjifgq = _k$4hu, k4_h$u = null, k4h = 'xmlns' === _k$4hu && '';$4_khu['localName'] = yjifgq, k4h !== !0x1 && (null == yvigj && (yvigj = {}, n_i9yjqp(kmh_l, kmh_l = {})), kmh_l[k4h] = yvigj[k4h] = cz7nds, $4_khu['uri'] = 'http://www.w3.org/2000/xmlns/', fg3yrv['startPrefixMapping'](k4h, cz7nds));
  }for (var i0qj9p = xdz['length']; i0qj9p--;) {
    $4_khu = xdz[i0qj9p];var k4_h$u = $4_khu['prefix'];k4_h$u && ('xml' === k4_h$u && ($4_khu['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== k4_h$u && ($4_khu['uri'] = kmh_l[k4_h$u || '']));
  }var ijq9yp = nzls['indexOf'](':');ijq9yp > 0x0 ? (k4_h$u = xdz['prefix'] = nzls['slice'](0x0, ijq9yp), yjifgq = xdz['localName'] = nzls['slice'](ijq9yp + 0x1)) : (k4_h$u = null, yjifgq = xdz['localName'] = nzls);var qijp = xdz['uri'] = kmh_l[k4_h$u || ''];if (fg3yrv['startElement'](qijp, yjifgq, nzls, xdz), !xdz['closed']) return xdz['currentNSMap'] = kmh_l, xdz['localNSMap'] = yvigj, !0x0;if (fg3yrv['endElement'](qijp, yjifgq, nzls), yvigj) {
    for (k4_h$u in yvigj) fg3yrv['endPrefixMapping'](k4_h$u);
  }
}function n_jgyvif(aow26b, szn7d, uh_4$, y3vr, e8v3ro) {
  if (/^(?:script|textarea)$/i['test'](uh_4$)) {
    var kh_xlm = aow26b['indexOf']('</' + uh_4$ + '>', szn7d),
        slxdz = aow26b['substring'](szn7d + 0x1, kh_xlm);if (/[&<]/['test'](slxdz)) return (/^script$/i['test'](uh_4$) ? (e8v3ro['characters'](slxdz, 0x0, slxdz['length']), kh_xlm) : (slxdz = slxdz['replace'](/&#?\w+;/g, y3vr), e8v3ro['characters'](slxdz, 0x0, slxdz['length']), kh_xlm)
    );
  }return szn7d + 0x1;
}function n_oaew6(hkx_, p0cs75, pc59, k4uh$) {
  var atw26 = k4uh$[pc59];return null == atw26 && (atw26 = hkx_['lastIndexOf']('</' + pc59 + '>'), p0cs75 > atw26 && (atw26 = hkx_['lastIndexOf']('</' + pc59)), k4uh$[pc59] = atw26), p0cs75 > atw26;
}function n_i9yjqp(frgv38, ij9qyp) {
  for (var kl$m_h in frgv38) ij9qyp[kl$m_h] = frgv38[kl$m_h];
}function n_p0597c(s5ncz7, pji0q9, givfr, fg38v) {
  var _mk4h = s5ncz7['charAt'](pji0q9 + 0x2);switch (_mk4h) {case '-':
      if ('-' === s5ncz7['charAt'](pji0q9 + 0x3)) {
        var s7zn = s5ncz7['indexOf']('-->', pji0q9 + 0x4);return s7zn > pji0q9 ? (givfr['comment'](s5ncz7, pji0q9 + 0x4, s7zn - pji0q9 - 0x4), s7zn + 0x3) : (fg38v['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == s5ncz7['substr'](pji0q9 + 0x3, 0x6)) {
        var s7zn = s5ncz7['indexOf'](']]>', pji0q9 + 0x9);return givfr['startCDATA'](), givfr['characters'](s5ncz7, pji0q9 + 0x9, s7zn - pji0q9 - 0x9), givfr['endCDATA'](), s7zn + 0x3;
      }var pcs70 = n_kdlmhx(s5ncz7, pji0q9),
          t2aw6 = pcs70['length'];if (t2aw6 > 0x1 && /!doctype/i['test'](pcs70[0x0][0x0])) {
        var iyjgf = pcs70[0x1][0x0],
            jvyfg = t2aw6 > 0x3 && /^public$/i['test'](pcs70[0x2][0x0]) && pcs70[0x3][0x0],
            _4hu$k = t2aw6 > 0x4 && pcs70[0x4][0x0],
            yfv3r = pcs70[t2aw6 - 0x1];return givfr['startDTD'](iyjgf, jvyfg && jvyfg['replace'](/^(['"])(.*?)\1$/, '$2'), _4hu$k && _4hu$k['replace'](/^(['"])(.*?)\1$/, '$2')), givfr['endDTD'](), yfv3r['index'] + yfv3r[0x0]['length'];
      }}return -0x1;
}function n_zdnxlm(jgfvy, qjpyi9, y9jpq) {
  var ygvjif = jgfvy['indexOf']('?>', qjpyi9);if (ygvjif) {
    var kh$m = jgfvy['substring'](qjpyi9, ygvjif)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (kh$m) {
      {
        kh$m[0x0]['length'];
      }return y9jpq['processingInstruction'](kh$m[0x1], kh$m[0x2]), ygvjif + 0x2;
    }return -0x1;
  }return -0x1;
}function n_dz7csn() {}function n_$hkl(hkldmx, sc7n5) {
  return hkldmx['__proto__'] = sc7n5, hkldmx;
}function n_kdlmhx(nxzml, cp750s) {
  var km4h$_,
      gjiyf = [],
      q9fijy = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (q9fijy['lastIndex'] = cp750s, q9fijy['exec'](nxzml); km4h$_ = q9fijy['exec'](nxzml);) if (gjiyf['push'](km4h$_), km4h$_[0x1]) return gjiyf;
}var n_mh_xl = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    n_zndsxl = new RegExp('[\\-\\.0-9' + n_mh_xl['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    n_r8evg3 = new RegExp('^' + n_mh_xl['source'] + n_zndsxl['source'] + '*(?::' + n_mh_xl['source'] + n_zndsxl['source'] + '*)?$'),
    n_c7nz5 = 0x0,
    n_lxk_h = 0x1,
    n_ov8r3 = 0x2,
    n_ijgyqf = 0x3,
    n_tab2 = 0x4,
    n_dlmkhx = 0x5,
    n_vyf3gr = 0x6,
    n_e2w6a = 0x7;n_u$k_41['prototype'] = { 'parse': function (jyvgf, yvfrig, ov8e3r) {
    var nxzld = this['domBuilder'];nxzld['startDocument'](), n_i9yjqp(yvfrig, yvfrig = {}), n_oa6we2(jyvgf, yvfrig, ov8e3r, nxzld, this['errorHandler']), nxzld['endDocument']();
  } }, n_dz7csn['prototype'] = { 'setTagName': function (hkxld) {
    if (!n_r8evg3['test'](hkxld)) throw new Error('invalid tagName:' + hkxld);this['tagName'] = hkxld;
  }, 'add': function ($hm4, ijyf, dxzl) {
    if (!n_r8evg3['test']($hm4)) throw new Error('invalid attribute:' + $hm4);this[this['length']++] = { 'qName': $hm4, 'value': ijyf, 'offset': dxzl };
  }, 'length': 0x0, 'getLocalName': function (p795) {
    return this[p795]['localName'];
  }, 'getLocator': function (hku_4$) {
    return this[hku_4$]['locator'];
  }, 'getQName': function (ea382) {
    return this[ea382]['qName'];
  }, 'getURI': function (gv83re) {
    return this[gv83re]['uri'];
  }, 'getValue': function (ijf9) {
    return this[ijf9]['value'];
  } }, n_$hkl({}, n_$hkl['prototype']) instanceof n_$hkl || (n_$hkl = function (yigfjq, $_k4m) {
  function u4kh$() {}u4kh$['prototype'] = $_k4m, u4kh$ = new u4kh$();for ($_k4m in yigfjq) u4kh$[$_k4m] = yigfjq[$_k4m];return u4kh$;
}), exports['XMLReader'] = n_u$k_41;