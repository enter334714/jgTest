function gxfkdzs(a2y50, ux7zb) {
  for (var vp7 in a2y50) ux7zb[vp7] = a2y50[vp7];
}function gelh9_8(m402, h$96_) {
  function j$h_g6() {}var a24cm = m402['prototype'],
      ji$61r;Object['create'] && (ji$61r = Object['create'](h$96_['prototype']), a24cm['__proto__'] = ji$61r), a24cm instanceof h$96_ || (j$h_g6['prototype'] = h$96_['prototype'], gxfkdzs(a24cm, j$h_g6 = new j$h_g6()), m402['prototype'] = a24cm = j$h_g6), a24cm['constructor'] != m402 && ('function' != typeof m402 && console['error']('unknow Class:' + m402), a24cm['constructor'] = m402);
}function gvoqbt(j10ryi, usxz7) {
  var he_;return usxz7 instanceof Error ? he_ = usxz7 : (he_ = this, Error['call'](this, gj61i$r[j10ryi]), this['message'] = gj61i$r[j10ryi], Error['captureStackTrace'] && Error['captureStackTrace'](this, gvoqbt)), he_['code'] = j10ryi, usxz7 && (this['message'] = this['message'] + ':\x20' + usxz7), he_;
}function gb7uvp() {}function go3bptv(z7sxu, w8q9l) {
  this['_node'] = z7sxu, this['_refresh'] = w8q9l, ga5mc42(this);
}function ga5mc42(y4r0a) {
  var m45ac = y4r0a['_node']['_inc'] || y4r0a['_node']['ownerDocument']['_inc'],
      w98e_;y4r0a['_inc'] != m45ac && (w98e_ = y4r0a['_refresh'](y4r0a['_node']), g$iyjr(y4r0a, 'length', w98e_['length']), gxfkdzs(w98e_, y4r0a), y4r0a['_inc'] = m45ac);
}function ga52c4m() {}function get8lwq(cma425, vpq) {
  for (var h6$gj = cma425['length']; h6$gj--;) if (cma425[h6$gj] === vpq) return h6$gj;
}function ge8twlq(a45m2, y$rji1, zvb73u, qeopwt) {
  var _6$jhg;qeopwt ? y$rji1[get8lwq(y$rji1, qeopwt)] = zvb73u : y$rji1[y$rji1['length']++] = zvb73u, a45m2 && (_6$jhg = (zvb73u['ownerElement'] = a45m2)['ownerDocument']) && (qeopwt && gfzsdx(_6$jhg, a45m2, qeopwt), gr1jyi(_6$jhg, a45m2, zvb73u));
}function gi10ry(el_98h, e8tql, ri1yj) {
  var i$hg6j = get8lwq(e8tql, ri1yj);if (!(0x0 <= i$hg6j)) throw gvoqbt(gh9el_8, new Error(el_98h['tagName'] + '@' + ri1yj));for (var ksxz7f = e8tql['length'] - 0x1; i$hg6j < ksxz7f;) e8tql[i$hg6j] = e8tql[++i$hg6j];var w8let;e8tql['length'] = ksxz7f, el_98h && (w8let = el_98h['ownerDocument']) && (gfzsdx(w8let, el_98h, ri1yj), ri1yj['ownerElement'] = null);
}function gz7vb3u(kszfxd) {
  if (this['_features'] = {}, kszfxd) {
    for (var le9h in kszfxd) this['_features'] = kszfxd[le9h];
  }
}function gwe98q() {}function gj6$r1(tqeo8) {
  return ('<' == tqeo8 ? '&lt;' : '>' == tqeo8 && '&gt;') || '&' == tqeo8 && '&amp;' || '\x22' == tqeo8 && '&quot;' || '&#' + tqeo8['charCodeAt']() + ';';
}function gwl89eq(we9_l8, pb3t) {
  if (pb3t(we9_l8)) return !0x0;if (we9_l8 = we9_l8['firstChild']) do {
    if (gwl89eq(we9_l8, pb3t)) return !0x0;
  } while (we9_l8 = we9_l8['nextSibling']);
}function gxb37u() {}function gr1jyi(ar0iy, dfxzk, bu73vz) {
  ar0iy && ar0iy['_inc']++, 'http://www.w3.org/2000/xmlns/' == bu73vz['namespaceURI'] && (dfxzk['_nsMap'][bu73vz['prefix'] ? bu73vz['localName'] : ''] = bu73vz['value']);
}function gfzsdx(vqtp, opvb, teqwl8) {
  vqtp && vqtp['_inc']++, 'http://www.w3.org/2000/xmlns/' == teqwl8['namespaceURI'] && delete opvb['_nsMap'][teqwl8['prefix'] ? teqwl8['localName'] : ''];
}function gb3uvz7(vup7b, lgh8_9, a1yr0i) {
  if (vup7b && vup7b['_inc']) {
    vup7b['_inc']++;var e8lqtw = lgh8_9['childNodes'];if (a1yr0i) e8lqtw[e8lqtw['length']++] = a1yr0i;else {
      for (var b7vu3p = lgh8_9['firstChild'], tobpq = 0x0; b7vu3p;) b7vu3p = (e8lqtw[tobpq++] = b7vu3p)['nextSibling'];e8lqtw['length'] = tobpq;
    }
  }
}function gir10(xz7ub3, pwtqov) {
  var wtpqov = pwtqov['previousSibling'],
      uv37z = pwtqov['nextSibling'];return wtpqov ? wtpqov['nextSibling'] = uv37z : xz7ub3['firstChild'] = uv37z, uv37z ? uv37z['previousSibling'] = wtpqov : xz7ub3['lastChild'] = wtpqov, gb3uvz7(xz7ub3['ownerDocument'], xz7ub3), pwtqov;
}function gkzfxd(fzsdkx, g$6ijh, a10y4) {
  var ya045 = g$6ijh['parentNode'];if (ya045 && ya045['removeChild'](g$6ijh), g$6ijh['nodeType'] === gjryi) {
    var iry1 = g$6ijh['firstChild'];if (null == iry1) return g$6ijh;var u3bx7z = g$6ijh['lastChild'];
  } else iry1 = u3bx7z = g$6ijh;ya045 = a10y4 ? a10y4['previousSibling'] : fzsdkx['lastChild'];for (iry1['previousSibling'] = ya045, u3bx7z['nextSibling'] = a10y4, ya045 ? ya045['nextSibling'] = iry1 : fzsdkx['firstChild'] = iry1, null == a10y4 ? fzsdkx['lastChild'] = u3bx7z : a10y4['previousSibling'] = u3bx7z; iry1['parentNode'] = fzsdkx, iry1 !== u3bx7z && (iry1 = iry1['nextSibling']););return gb3uvz7(fzsdkx['ownerDocument'] || fzsdkx, fzsdkx), g$6ijh['nodeType'] == gjryi && (g$6ijh['firstChild'] = g$6ijh['lastChild'] = null), g$6ijh;
}function gw_8e(fsxzk7, $j1y) {
  var epotwq = $j1y['parentNode'];epotwq && (zxskf7 = fsxzk7['lastChild'], epotwq['removeChild']($j1y), zxskf7 = fsxzk7['lastChild']);var zxskf7 = fsxzk7['lastChild'];return $j1y['parentNode'] = fsxzk7, $j1y['previousSibling'] = zxskf7, $j1y['nextSibling'] = null, zxskf7 ? zxskf7['nextSibling'] = $j1y : fsxzk7['firstChild'] = $j1y, fsxzk7['lastChild'] = $j1y, gb3uvz7(fsxzk7['ownerDocument'], fsxzk7, $j1y), $j1y;
}function g$ijr16() {
  this['_nsMap'] = {};
}function gopub3() {}function ghjig6() {}function gqw8o() {}function g_w8le() {}function gy1i0r() {}function guzxk7() {}function gjyri$() {}function guxb7z3() {}function gg6i1j$() {}function girjy1$() {}function gr$j1iy() {}function go3vbpt() {}function gy5ar4(bpv7, h8l) {
  var ij6g = [],
      vup3ob = 0x9 == this['nodeType'] ? this['documentElement'] : this,
      g9_lh8 = vup3ob['prefix'],
      a25y40 = vup3ob['namespaceURI'],
      $i1g6;return gpovbu(this, ij6g, bpv7, h8l, $i1g6 = a25y40 && null == g9_lh8 && null == (g9_lh8 = vup3ob['lookupPrefix'](a25y40)) ? [{ 'namespace': a25y40, 'prefix': null }] : $i1g6), ij6g['join']('');
}function gq8ewl(xu7z, tbov3p, j6g$h_) {
  var v3uz7 = xu7z['prefix'] || '',
      m052a = xu7z['namespaceURI'];if (!v3uz7 && !m052a) return !0x1;if ('xml' === v3uz7 && 'http://www.w3.org/XML/1998/namespace' === m052a || 'http://www.w3.org/2000/xmlns/' == m052a) return !0x1;for (var c45m2 = j6g$h_['length']; c45m2--;) {
    var kfxs7z = j6g$h_[c45m2];if (kfxs7z['prefix'] == v3uz7) return kfxs7z['namespace'] != m052a;
  }return !0x0;
}function gpovbu(vo3bp, $i6g1j, _e9lh, l9g6, bqopvt) {
  if (l9g6) {
    if (!(vo3bp = l9g6(vo3bp))) return;if ('string' == typeof vo3bp) return void $i6g1j['push'](vo3bp);
  }switch (vo3bp['nodeType']) {case gir0a:
      var twpe = ((bqopvt = bqopvt || [])['length'], vo3bp['attributes']),
          tel8w = twpe['length'],
          e9hl = vo3bp['firstChild'],
          s7fkxz = vo3bp['tagName'];_e9lh = gv3oubp === vo3bp['namespaceURI'] || _e9lh, $i6g1j['push']('<', s7fkxz);for (var voqpw = 0x0; voqpw < tel8w; voqpw++) 'xmlns' == (bqpt = twpe['item'](voqpw))['prefix'] ? bqopvt['push']({ 'prefix': bqpt['localName'], 'namespace': bqpt['value'] }) : 'xmlns' == bqpt['nodeName'] && bqopvt['push']({ 'prefix': '', 'namespace': bqpt['value'] });for (voqpw = 0x0; voqpw < tel8w; voqpw++) {
        var bqpt;gq8ewl(bqpt = twpe['item'](voqpw), _e9lh, bqopvt) && (vzu3b = bqpt['prefix'] || '', tqpbo = bqpt['namespaceURI'], $i6g1j['push'](vzu3b ? ' xmlns:' + vzu3b : ' xmlns', '=\x22', tqpbo, '\x22'), bqopvt['push']({ 'prefix': vzu3b, 'namespace': tqpbo })), gpovbu(bqpt, $i6g1j, _e9lh, l9g6, bqopvt);
      }var vzu3b, tqpbo;if (gq8ewl(vo3bp, _e9lh, bqopvt) && (vzu3b = vo3bp['prefix'] || '', tqpbo = vo3bp['namespaceURI'], $i6g1j['push'](vzu3b ? ' xmlns:' + vzu3b : ' xmlns', '=\x22', tqpbo, '\x22'), bqopvt['push']({ 'prefix': vzu3b, 'namespace': tqpbo })), e9hl || _e9lh && !/^(?:meta|link|img|br|hr|input)$/i['test'](s7fkxz)) {
        if ($i6g1j['push']('>'), _e9lh && /^script$/i['test'](s7fkxz)) {
          for (; e9hl;) e9hl['data'] ? $i6g1j['push'](e9hl['data']) : gpovbu(e9hl, $i6g1j, _e9lh, l9g6, bqopvt), e9hl = e9hl['nextSibling'];
        } else {
          for (; e9hl;) gpovbu(e9hl, $i6g1j, _e9lh, l9g6, bqopvt), e9hl = e9hl['nextSibling'];
        }$i6g1j['push']('</', s7fkxz, '>');
      } else $i6g1j['push']('/>');return;case gma5420:case gjryi:
      for (e9hl = vo3bp['firstChild']; e9hl;) gpovbu(e9hl, $i6g1j, _e9lh, l9g6, bqopvt), e9hl = e9hl['nextSibling'];return;case gyj$ir:
      return $i6g1j['push']('\x20', vo3bp['name'], '=\x22', vo3bp['value']['replace'](/[<&"]/g, gj6$r1), '\x22');case g_l8hg:
      return $i6g1j['push'](vo3bp['data']['replace'](/[<&]/g, gj6$r1));case gwq98e:
      return $i6g1j['push']('<![CDATA[', vo3bp['data'], ']]>');case gqwe8ot:
      return $i6g1j['push']('<!--', vo3bp['data'], '-->');case g$_gh96:
      var vop3u = vo3bp['publicId'],
          s7fkxz = vo3bp['systemId'];return $i6g1j['push']('<!DOCTYPE ', vo3bp['name']), void (vop3u ? ($i6g1j['push'](' PUBLIC "', vop3u), s7fkxz && '.' != s7fkxz && $i6g1j['push']('\x22\x20\x22', s7fkxz), $i6g1j['push']('\x22>')) : s7fkxz && '.' != s7fkxz ? $i6g1j['push'](' SYSTEM "', s7fkxz, '\x22>') : ((s7fkxz = vo3bp['internalSubset']) && $i6g1j['push']('\x20[', s7fkxz, ']'), $i6g1j['push']('>')));case gzbx73:
      return $i6g1j['push']('<?', vo3bp['target'], '\x20', vo3bp['data'], '?>');case gzdfxsk:
      return $i6g1j['push']('&', vo3bp['nodeName'], ';');default:
      $i6g1j['push']('??', vo3bp['nodeName']);}
}function glw98e_($1yjr, woq8t, riy$1j) {
  var tw8qo;switch (woq8t['nodeType']) {case gir0a:
      (tw8qo = woq8t['cloneNode'](!0x1))['ownerDocument'] = $1yjr;case gjryi:
      break;case gyj$ir:
      riy$1j = !0x0;}if ((tw8qo = tw8qo || woq8t['cloneNode'](!0x1))['ownerDocument'] = $1yjr, tw8qo['parentNode'] = null, riy$1j) {
    for (var fsxk = woq8t['firstChild']; fsxk;) tw8qo['appendChild'](glw98e_($1yjr, fsxk, riy$1j)), fsxk = fsxk['nextSibling'];
  }return tw8qo;
}function g$hi6g(_hg$j, eltw8, fxzs) {
  var e8h = new eltw8['constructor']();for (var o3bvu in eltw8) {
    var w8tlqe = eltw8[o3bvu];'object' != typeof w8tlqe && w8tlqe != e8h[o3bvu] && (e8h[o3bvu] = w8tlqe);
  }switch (eltw8['childNodes'] && (e8h['childNodes'] = new gb7uvp()), e8h['ownerDocument'] = _hg$j, e8h['nodeType']) {case gir0a:
      var p3bvu7 = eltw8['attributes'],
          fks7xz = e8h['attributes'] = new ga52c4m(),
          wtvqop = p3bvu7['length'];fks7xz['_ownerElement'] = e8h;for (var e_l9w = 0x0; e_l9w < wtvqop; e_l9w++) e8h['setAttributeNode'](g$hi6g(_hg$j, p3bvu7['item'](e_l9w), !0x0));break;case gyj$ir:
      fxzs = !0x0;}if (fxzs) {
    for (var usxz73 = eltw8['firstChild']; usxz73;) e8h['appendChild'](g$hi6g(_hg$j, usxz73, fxzs)), usxz73 = usxz73['nextSibling'];
  }return e8h;
}function g$iyjr(qle8tw, q8tow, u3bvpo) {
  qle8tw[q8tow] = u3bvpo;
}function gwelq8t(rj16i$) {
  switch (rj16i$['nodeType']) {case gir0a:case gjryi:
      var hig$j = [];for (rj16i$ = rj16i$['firstChild']; rj16i$;) 0x7 !== rj16i$['nodeType'] && 0x8 !== rj16i$['nodeType'] && hig$j['push'](gwelq8t(rj16i$)), rj16i$ = rj16i$['nextSibling'];return hig$j['join']('');default:
      return rj16i$['nodeValue'];}
}var gv3oubp = 'http://www.w3.org/1999/xhtml',
    gtqowv = {},
    gir0a = gtqowv['ELEMENT_NODE'] = 0x1,
    gyj$ir = gtqowv['ATTRIBUTE_NODE'] = 0x2,
    g_l8hg = gtqowv['TEXT_NODE'] = 0x3,
    gwq98e = gtqowv['CDATA_SECTION_NODE'] = 0x4,
    gzdfxsk = gtqowv['ENTITY_REFERENCE_NODE'] = 0x5,
    gsdzkx = gtqowv['ENTITY_NODE'] = 0x6,
    gzbx73 = gtqowv['PROCESSING_INSTRUCTION_NODE'] = 0x7,
    gqwe8ot = gtqowv['COMMENT_NODE'] = 0x8,
    gma5420 = gtqowv['DOCUMENT_NODE'] = 0x9,
    g$_gh96 = gtqowv['DOCUMENT_TYPE_NODE'] = 0xa,
    gjryi = gtqowv['DOCUMENT_FRAGMENT_NODE'] = 0xb,
    gfx7szk = gtqowv['NOTATION_NODE'] = 0xc,
    ga4yr0 = {},
    gj61i$r = {},
    gfxzk = ga4yr0['INDEX_SIZE_ERR'] = (gj61i$r[0x1] = 'Index size error', 0x1),
    gzbxu73 = ga4yr0['DOMSTRING_SIZE_ERR'] = (gj61i$r[0x2] = 'DOMString size error', 0x2),
    gleq8w9 = ga4yr0['HIERARCHY_REQUEST_ERR'] = (gj61i$r[0x3] = 'Hierarchy request error', 0x3),
    gotqbvp = ga4yr0['WRONG_DOCUMENT_ERR'] = (gj61i$r[0x4] = 'Wrong document', 0x4),
    gvupb3 = ga4yr0['INVALID_CHARACTER_ERR'] = (gj61i$r[0x5] = 'Invalid character', 0x5),
    glw_ = ga4yr0['NO_DATA_ALLOWED_ERR'] = (gj61i$r[0x6] = 'No data allowed', 0x6),
    gy14ra = ga4yr0['NO_MODIFICATION_ALLOWED_ERR'] = (gj61i$r[0x7] = 'No modification allowed', 0x7),
    gh9el_8 = ga4yr0['NOT_FOUND_ERR'] = (gj61i$r[0x8] = 'Not found', 0x8),
    gvpowtq = ga4yr0['NOT_SUPPORTED_ERR'] = (gj61i$r[0x9] = 'Not supported', 0x9),
    gya140 = ga4yr0['INUSE_ATTRIBUTE_ERR'] = (gj61i$r[0xa] = 'Attribute in use', 0xa),
    go3bt = ga4yr0['INVALID_STATE_ERR'] = (gj61i$r[0xb] = 'Invalid state', 0xb),
    gyi10a = ga4yr0['SYNTAX_ERR'] = (gj61i$r[0xc] = 'Syntax error', 0xc),
    gfxkd = ga4yr0['INVALID_MODIFICATION_ERR'] = (gj61i$r[0xd] = 'Invalid modification', 0xd),
    gh96_lg = ga4yr0['NAMESPACE_ERR'] = (gj61i$r[0xe] = 'Invalid namespace', 0xe),
    gry5a04 = ga4yr0['INVALID_ACCESS_ERR'] = (gj61i$r[0xf] = 'Invalid access', 0xf);gvoqbt['prototype'] = Error['prototype'], gxfkdzs(ga4yr0, gvoqbt), gb7uvp['prototype'] = { 'length': 0x0, 'item': function (i6r1$j) {
    return this[i6r1$j] || null;
  }, 'toString': function (ma40, yirj10) {
    for (var oubvp = [], vbo3 = 0x0; vbo3 < this['length']; vbo3++) gpovbu(this[vbo3], oubvp, ma40, yirj10);return oubvp['join']('');
  } }, go3bptv['prototype']['item'] = function (ray014) {
  return ga5mc42(this), this[ray014];
}, gelh9_8(go3bptv, gb7uvp), ga52c4m['prototype'] = { 'length': 0x0, 'item': gb7uvp['prototype']['item'], 'getNamedItem': function (s7) {
    for (var zfsk7x = this['length']; zfsk7x--;) {
      var vowpqt = this[zfsk7x];if (vowpqt['nodeName'] == s7) return vowpqt;
    }
  }, 'setNamedItem': function (oeqp) {
    var k7s = oeqp['ownerElement'];if (k7s && k7s != this['_ownerElement']) throw new gvoqbt(gya140);return k7s = this['getNamedItem'](oeqp['nodeName']), (ge8twlq(this['_ownerElement'], this, oeqp, k7s), k7s);
  }, 'setNamedItemNS': function (oqpvtb) {
    var bx37z = oqpvtb['ownerElement'];if (bx37z && bx37z != this['_ownerElement']) throw new gvoqbt(gya140);return bx37z = this['getNamedItemNS'](oqpvtb['namespaceURI'], oqpvtb['localName']), ge8twlq(this['_ownerElement'], this, oqpvtb, bx37z), bx37z;
  }, 'removeNamedItem': function (jg6$i) {
    return jg6$i = this['getNamedItem'](jg6$i), (gi10ry(this['_ownerElement'], this, jg6$i), jg6$i);
  }, 'removeNamedItemNS': function (lw8e, lw8qe) {
    return lw8qe = this['getNamedItemNS'](lw8e, lw8qe), (gi10ry(this['_ownerElement'], this, lw8qe), lw8qe);
  }, 'getNamedItemNS': function (wqe9l, ya5r40) {
    for (var ou3b = this['length']; ou3b--;) {
      var rj1yi0 = this[ou3b];if (rj1yi0['localName'] == ya5r40 && rj1yi0['namespaceURI'] == wqe9l) return rj1yi0;
    }return null;
  } }, gz7vb3u['prototype'] = { 'hasFeature': function ($1ijr, pv3bu) {
    return $1ijr = this['_features'][$1ijr['toLowerCase']()], !(!$1ijr || pv3bu && !(pv3bu in $1ijr));
  }, 'createDocument': function (r1i6j, e8owt, ksf) {
    var opqvb = new gxb37u();return opqvb['implementation'] = this, opqvb['childNodes'] = new gb7uvp(), (opqvb['doctype'] = ksf) && opqvb['appendChild'](ksf), e8owt && (e8owt = opqvb['createElementNS'](r1i6j, e8owt), opqvb['appendChild'](e8owt)), opqvb;
  }, 'createDocumentType': function ($ri1j6, a2540m, wpoqv) {
    var ma2c54 = new guzxk7();return ma2c54['name'] = $ri1j6, ma2c54['nodeName'] = $ri1j6, ma2c54['publicId'] = a2540m, ma2c54['systemId'] = wpoqv, ma2c54;
  } }, gwe98q['prototype'] = { 'firstChild': null, 'lastChild': null, 'previousSibling': null, 'nextSibling': null, 'attributes': null, 'parentNode': null, 'childNodes': null, 'ownerDocument': null, 'nodeValue': null, 'namespaceURI': null, 'prefix': null, 'localName': null, 'insertBefore': function (l9_w8e, opvt3) {
    return gkzfxd(this, l9_w8e, opvt3);
  }, 'replaceChild': function (zsk7ux, p3vbuo) {
    this['insertBefore'](zsk7ux, p3vbuo), p3vbuo && this['removeChild'](p3vbuo);
  }, 'removeChild': function (gh9$6) {
    return gir10(this, gh9$6);
  }, 'appendChild': function (ay140) {
    return this['insertBefore'](ay140, null);
  }, 'hasChildNodes': function () {
    return null != this['firstChild'];
  }, 'cloneNode': function (g1j6$i) {
    return g$hi6g(this['ownerDocument'] || this, this, g1j6$i);
  }, 'normalize': function () {
    for (var r$61i = this['firstChild']; r$61i;) {
      var fsxdz = r$61i['nextSibling'];fsxdz && fsxdz['nodeType'] == g_l8hg && r$61i['nodeType'] == g_l8hg ? (this['removeChild'](fsxdz), r$61i['appendData'](fsxdz['data'])) : (r$61i['normalize'](), r$61i = fsxdz);
    }
  }, 'isSupported': function (x3zu7, qlet8) {
    return this['ownerDocument']['implementation']['hasFeature'](x3zu7, qlet8);
  }, 'hasAttributes': function () {
    return 0x0 < this['attributes']['length'];
  }, 'lookupPrefix': function (_96) {
    for (var bqovtp = this; bqovtp;) {
      var a0ryi = bqovtp['_nsMap'];if (a0ryi) {
        for (var xub3z7 in a0ryi) if (a0ryi[xub3z7] == _96) return xub3z7;
      }bqovtp = bqovtp['nodeType'] == gyj$ir ? bqovtp['ownerDocument'] : bqovtp['parentNode'];
    }return null;
  }, 'lookupNamespaceURI': function (b7zxu) {
    for (var zx7kfs = this; zx7kfs;) {
      var ewtqop = zx7kfs['_nsMap'];if (ewtqop && b7zxu in ewtqop) return ewtqop[b7zxu];zx7kfs = zx7kfs['nodeType'] == gyj$ir ? zx7kfs['ownerDocument'] : zx7kfs['parentNode'];
    }return null;
  }, 'isDefaultNamespace': function (b3otpv) {
    return null == this['lookupPrefix'](b3otpv);
  } }, gxfkdzs(gtqowv, gwe98q), gxfkdzs(gtqowv, gwe98q['prototype']), gxb37u['prototype'] = { 'nodeName': '#document', 'nodeType': gma5420, 'doctype': null, 'documentElement': null, '_inc': 0x1, 'insertBefore': function (xs, l8g9_) {
    if (xs['nodeType'] != gjryi) return null == this['documentElement'] && xs['nodeType'] == gir0a && (this['documentElement'] = xs), gkzfxd(this, xs, l8g9_), xs['ownerDocument'] = this, xs;for (var j1r$y = xs['firstChild']; j1r$y;) {
      var qpov = j1r$y['nextSibling'];this['insertBefore'](j1r$y, l8g9_), j1r$y = qpov;
    }return xs;
  }, 'removeChild': function (toe8) {
    return this['documentElement'] == toe8 && (this['documentElement'] = null), gir10(this, toe8);
  }, 'importNode': function (oeqt8w, qwtle) {
    return glw98e_(this, oeqt8w, qwtle);
  }, 'getElementById': function (kusxz) {
    var $_h9 = null;return gwl89eq(this['documentElement'], function (ew8lq) {
      return ew8lq['nodeType'] == gir0a && ew8lq['getAttribute']('id') == kusxz ? ($_h9 = ew8lq, !0x0) : void 0x0;
    }), $_h9;
  }, 'createElement': function (ry1) {
    var c5m4 = new g$ijr16();return c5m4['ownerDocument'] = this, c5m4['nodeName'] = ry1, c5m4['tagName'] = ry1, c5m4['childNodes'] = new gb7uvp(), (c5m4['attributes'] = new ga52c4m())['_ownerElement'] = c5m4;
  }, 'createDocumentFragment': function () {
    var b3uv = new girjy1$();return b3uv['ownerDocument'] = this, b3uv['childNodes'] = new gb7uvp(), b3uv;
  }, 'createTextNode': function (obp3uv) {
    var sf = new gqw8o();return sf['ownerDocument'] = this, sf['appendData'](obp3uv), sf;
  }, 'createComment': function (wqe8tl) {
    var bpotvq = new g_w8le();return bpotvq['ownerDocument'] = this, bpotvq['appendData'](wqe8tl), bpotvq;
  }, 'createCDATASection': function (xksdfz) {
    var vo3pbt = new gy1i0r();return vo3pbt['ownerDocument'] = this, vo3pbt['appendData'](xksdfz), vo3pbt;
  }, 'createProcessingInstruction': function (buzx, j6gi$) {
    var oqewp = new gr$j1iy();return oqewp['ownerDocument'] = this, oqewp['tagName'] = oqewp['target'] = buzx, oqewp['nodeValue'] = oqewp['data'] = j6gi$, oqewp;
  }, 'createAttribute': function (yj1) {
    var aryi0 = new gopub3();return aryi0['ownerDocument'] = this, aryi0['name'] = yj1, aryi0['nodeName'] = yj1, aryi0['localName'] = yj1, aryi0['specified'] = !0x0, aryi0;
  }, 'createEntityReference': function (h_98l) {
    var bz37xu = new gg6i1j$();return bz37xu['ownerDocument'] = this, bz37xu['nodeName'] = h_98l, bz37xu;
  }, 'createElementNS': function (vqotbp, wq8elt) {
    var kus7zx = new g$ijr16(),
        g6h_$ = wq8elt['split'](':'),
        oweqp = kus7zx['attributes'] = new ga52c4m();return kus7zx['childNodes'] = new gb7uvp(), kus7zx['ownerDocument'] = this, kus7zx['nodeName'] = wq8elt, kus7zx['tagName'] = wq8elt, kus7zx['namespaceURI'] = vqotbp, 0x2 == g6h_$['length'] ? (kus7zx['prefix'] = g6h_$[0x0], kus7zx['localName'] = g6h_$[0x1]) : kus7zx['localName'] = wq8elt, oweqp['_ownerElement'] = kus7zx;
  }, 'createAttributeNS': function (epo, qtbpo) {
    var g98_l = new gopub3(),
        hji6g = qtbpo['split'](':');return g98_l['ownerDocument'] = this, g98_l['nodeName'] = qtbpo, g98_l['name'] = qtbpo, g98_l['namespaceURI'] = epo, g98_l['specified'] = !0x0, 0x2 == hji6g['length'] ? (g98_l['prefix'] = hji6g[0x0], g98_l['localName'] = hji6g[0x1]) : g98_l['localName'] = qtbpo, g98_l;
  } }, gelh9_8(gxb37u, gwe98q), g$ijr16['prototype'] = { 'nodeType': gir0a, 'hasAttribute': function (he9l8) {
    return null != this['getAttributeNode'](he9l8);
  }, 'getAttribute': function (ew_98) {
    return ew_98 = this['getAttributeNode'](ew_98), ew_98 && ew_98['value'] || '';
  }, 'getAttributeNode': function (xuz7b3) {
    return this['attributes']['getNamedItem'](xuz7b3);
  }, 'setAttribute': function (_ghl89, l98q) {
    _ghl89 = this['ownerDocument']['createAttribute'](_ghl89), (_ghl89['value'] = _ghl89['nodeValue'] = '' + l98q, this['setAttributeNode'](_ghl89));
  }, 'removeAttribute': function (et8qw) {
    et8qw = this['getAttributeNode'](et8qw), et8qw && this['removeAttributeNode'](et8qw);
  }, 'appendChild': function (j$_) {
    return j$_['nodeType'] === gjryi ? this['insertBefore'](j$_, null) : gw_8e(this, j$_);
  }, 'setAttributeNode': function (zxu7b) {
    return this['attributes']['setNamedItem'](zxu7b);
  }, 'setAttributeNodeNS': function (g69h$_) {
    return this['attributes']['setNamedItemNS'](g69h$_);
  }, 'removeAttributeNode': function (el98w) {
    return this['attributes']['removeNamedItem'](el98w['nodeName']);
  }, 'removeAttributeNS': function (u3zv7, ai10ry) {
    ai10ry = this['getAttributeNodeNS'](u3zv7, ai10ry), ai10ry && this['removeAttributeNode'](ai10ry);
  }, 'hasAttributeNS': function (uxs7, a0yi1) {
    return null != this['getAttributeNodeNS'](uxs7, a0yi1);
  }, 'getAttributeNS': function (ya01ir, gj6ih) {
    return gj6ih = this['getAttributeNodeNS'](ya01ir, gj6ih), gj6ih && gj6ih['value'] || '';
  }, 'setAttributeNS': function (r$6i1, iyj$1, fzkx7s) {
    iyj$1 = this['ownerDocument']['createAttributeNS'](r$6i1, iyj$1), (iyj$1['value'] = iyj$1['nodeValue'] = '' + fzkx7s, this['setAttributeNode'](iyj$1));
  }, 'getAttributeNodeNS': function (yir$1j, jgh_6$) {
    return this['attributes']['getNamedItemNS'](yir$1j, jgh_6$);
  }, 'getElementsByTagName': function (suk7x) {
    return new go3bptv(this, function (gl89_h) {
      var uzs3x = [];return gwl89eq(gl89_h, function (c25a) {
        c25a === gl89_h || c25a['nodeType'] != gir0a || '*' !== suk7x && c25a['tagName'] != suk7x || uzs3x['push'](c25a);
      }), uzs3x;
    });
  }, 'getElementsByTagNameNS': function (_g9l6, a4r1) {
    return new go3bptv(this, function (ih$6) {
      var $6hijg = [];return gwl89eq(ih$6, function (x7u3zs) {
        x7u3zs === ih$6 || x7u3zs['nodeType'] !== gir0a || '*' !== _g9l6 && x7u3zs['namespaceURI'] !== _g9l6 || '*' !== a4r1 && x7u3zs['localName'] != a4r1 || $6hijg['push'](x7u3zs);
      }), $6hijg;
    });
  } }, gxb37u['prototype']['getElementsByTagName'] = g$ijr16['prototype']['getElementsByTagName'], gxb37u['prototype']['getElementsByTagNameNS'] = g$ijr16['prototype']['getElementsByTagNameNS'], gelh9_8(g$ijr16, gwe98q), gopub3['prototype']['nodeType'] = gyj$ir, gelh9_8(gopub3, gwe98q), ghjig6['prototype'] = { 'data': '', 'substringData': function (a4y0, l8_e9w) {
    return this['data']['substring'](a4y0, a4y0 + l8_e9w);
  }, 'appendData': function (j1iyr0) {
    j1iyr0 = this['data'] + j1iyr0, this['nodeValue'] = this['data'] = j1iyr0, this['length'] = j1iyr0['length'];
  }, 'insertData': function (i$1rjy, otpwqe) {
    this['replaceData'](i$1rjy, 0x0, otpwqe);
  }, 'appendChild': function () {
    throw new Error(gj61i$r[gleq8w9]);
  }, 'deleteData': function (toewpq, vbqop) {
    this['replaceData'](toewpq, vbqop, '');
  }, 'replaceData': function (i0rj1y, j$h6_, g89_h) {
    var o8tqwe = this['data']['substring'](0x0, i0rj1y),
        j$h6_ = this['data']['substring'](i0rj1y + j$h6_);this['nodeValue'] = this['data'] = g89_h = o8tqwe + g89_h + j$h6_, this['length'] = g89_h['length'];
  } }, gelh9_8(ghjig6, gwe98q), gqw8o['prototype'] = { 'nodeName': '#text', 'nodeType': g_l8hg, 'splitText': function (l6_g9h) {
    var opbtvq = this['data'],
        q8lw9 = opbtvq['substring'](l6_g9h);return opbtvq = opbtvq['substring'](0x0, l6_g9h), this['data'] = this['nodeValue'] = opbtvq, this['length'] = opbtvq['length'], q8lw9 = this['ownerDocument']['createTextNode'](q8lw9), (this['parentNode'] && this['parentNode']['insertBefore'](q8lw9, this['nextSibling']), q8lw9);
  } }, gelh9_8(gqw8o, ghjig6), g_w8le['prototype'] = { 'nodeName': '#comment', 'nodeType': gqwe8ot }, gelh9_8(g_w8le, ghjig6), gy1i0r['prototype'] = { 'nodeName': '#cdata-section', 'nodeType': gwq98e }, gelh9_8(gy1i0r, ghjig6), guzxk7['prototype']['nodeType'] = g$_gh96, gelh9_8(guzxk7, gwe98q), gjyri$['prototype']['nodeType'] = gfx7szk, gelh9_8(gjyri$, gwe98q), guxb7z3['prototype']['nodeType'] = gsdzkx, gelh9_8(guxb7z3, gwe98q), gg6i1j$['prototype']['nodeType'] = gzdfxsk, gelh9_8(gg6i1j$, gwe98q), girjy1$['prototype']['nodeName'] = '#document-fragment', girjy1$['prototype']['nodeType'] = gjryi, gelh9_8(girjy1$, gwe98q), gr$j1iy['prototype']['nodeType'] = gzbx73, gelh9_8(gr$j1iy, gwe98q), go3vbpt['prototype']['serializeToString'] = function (wo8eq, a4c, x3bzu) {
  return gy5ar4['call'](wo8eq, a4c, x3bzu);
}, gwe98q['prototype']['toString'] = gy5ar4;try {
  Object['defineProperty'] && (Object['defineProperty'](go3bptv['prototype'], 'length', { 'get': function () {
      return ga5mc42(this), this['$$length'];
    } }), Object['defineProperty'](gwe98q['prototype'], 'textContent', { 'get': function () {
      return gwelq8t(this);
    }, 'set': function (qotewp) {
      switch (this['nodeType']) {case gir0a:case gjryi:
          for (; this['firstChild'];) this['removeChild'](this['firstChild']);(qotewp || String(qotewp)) && this['appendChild'](this['ownerDocument']['createTextNode'](qotewp));break;default:
          this['data'] = qotewp, this['value'] = qotewp, this['nodeValue'] = qotewp;}
    } }), g$iyjr = function (x7kzsf, bu3pov, wel9q8) {
    x7kzsf['$$' + bu3pov] = wel9q8;
  });
} catch (gvbpou) {}exports['DOMImplementation'] = gz7vb3u, exports['XMLSerializer'] = go3vbpt;