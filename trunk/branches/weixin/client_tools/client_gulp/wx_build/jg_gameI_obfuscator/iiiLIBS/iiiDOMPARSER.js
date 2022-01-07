var Q = wx.$I;
function i__38ja6($i0zg) {
  this['options'] = $i0zg || { 'locator': {} };
}function i_w25knq(fc_m1, wnq42, v1mfp) {
  function skbeuq(p_f8a) {
    var pfm1vc = fc_m1[p_f8a];!pfm1vc && f_1p8 && (pfm1vc = 0x2 == fc_m1['length'] ? function (q25kw) {
      fc_m1(p_f8a, q25kw);
    } : fc_m1), skn2qu[p_f8a] = pfm1vc && function (mv19pc) {
      pfm1vc('[xmldom ' + p_f8a + ']\t' + mv19pc + i_p_f18c(v1mfp));
    } || function () {};
  }if (!fc_m1) {
    if (wnq42 instanceof i_$i9lt) return wnq42;fc_m1 = wnq42;
  }var skn2qu = {},
      f_1p8 = fc_m1 instanceof Function;return v1mfp = v1mfp || {}, skbeuq('warning'), skbeuq('error'), skbeuq('fatalError'), skn2qu;
}function i_$i9lt() {
  this['cdata'] = !0x1;
}function i_b763s(pf_1c8, m_p1fc) {
  m_p1fc['lineNumber'] = pf_1c8['lineNumber'], m_p1fc['columnNumber'] = pf_1c8['columnNumber'];
}function i_p_f18c(cv1tm9) {
  return cv1tm9 ? '\x0a@' + (cv1tm9['systemId'] || '') + '#[line:' + cv1tm9['lineNumber'] + ',col:' + cv1tm9['columnNumber'] + ']' : void 0x0;
}function i_mt9r1(pmv, mcv19p, nus2q) {
  return 'string' == typeof pmv ? pmv['substr'](mcv19p, nus2q) : pmv['length'] >= mcv19p + nus2q || mcv19p ? new java['lang']['String'](pmv, mcv19p, nus2q) + '' : pmv;
}function i_$0ilz(mc9vp1, dyz0) {
  mc9vp1['currentElement'] ? mc9vp1['currentElement']['appendChild'](dyz0) : mc9vp1['doc']['appendChild'](dyz0);
}i__38ja6['prototype']['parseFromString'] = function (q5nw, zoy0lg) {
  var uqkn25 = this['options'],
      i$glz = new i_bukqse(),
      dy0zgo = uqkn25['domBuilder'] || new i_$i9lt(),
      uekqs = uqkn25['errorHandler'],
      jp = uqkn25['locator'],
      vmp1c9 = uqkn25['xmlns'] || {},
      e637ba = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return jp && dy0zgo['setDocumentLocator'](jp), i$glz['errorHandler'] = i_w25knq(uekqs, dy0zgo, jp), i$glz['domBuilder'] = uqkn25['domBuilder'] || dy0zgo, /\/x?html?$/['test'](zoy0lg) && (e637ba['nbsp'] = '\u00a0', e637ba['copy'] = '©', vmp1c9[''] = 'http://www.w3.org/1999/xhtml'), vmp1c9['xml'] = vmp1c9['xml'] || 'http://www.w3.org/XML/1998/namespace', q5nw ? i$glz['parse'](q5nw, vmp1c9, e637ba) : i$glz['errorHandler']['error']('invalid doc source'), dy0zgo['doc'];
}, i_$i9lt['prototype'] = { 'startDocument': function () {
    this['doc'] = new i_kqbseu()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (vtm19r, o0$g, rtv9, e7ba6) {
    var rz$ = this['doc'],
        $z0g = rz$['createElementNS'](vtm19r, rtv9 || o0$g),
        k2use = e7ba6['length'];i_$0ilz(this, $z0g), this['currentElement'] = $z0g, this['locator'] && i_b763s(this['locator'], $z0g);for (var lti$9 = 0x0; k2use > lti$9; lti$9++) {
      var vtm19r = e7ba6['getURI'](lti$9),
          v9imrt = e7ba6['getValue'](lti$9),
          rtv9 = e7ba6['getQName'](lti$9),
          k2nq5u = rz$['createAttributeNS'](vtm19r, rtv9);this['locator'] && i_b763s(e7ba6['getLocator'](lti$9), k2nq5u), k2nq5u['value'] = k2nq5u['nodeValue'] = v9imrt, $z0g['setAttributeNode'](k2nq5u);
    }
  }, 'endElement': function () {
    {
      var nwq5k = this['currentElement'];nwq5k['tagName'];
    }this['currentElement'] = nwq5k['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (lo0z, ozl$g0) {
    var w5kn2 = this['doc']['createProcessingInstruction'](lo0z, ozl$g0);this['locator'] && i_b763s(this['locator'], w5kn2), i_$0ilz(this, w5kn2);
  }, 'ignorableWhitespace': function () {}, 'characters': function (g0zol) {
    if (g0zol = i_mt9r1['apply'](this, arguments)) {
      if (this['cdata']) var a67jb = this['doc']['createCDATASection'](g0zol);else var a67jb = this['doc']['createTextNode'](g0zol);this['currentElement'] ? this['currentElement']['appendChild'](a67jb) : /^\s*$/['test'](g0zol) && this['doc']['appendChild'](a67jb), this['locator'] && i_b763s(this['locator'], a67jb);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (hnw54) {
    (this['locator'] = hnw54) && (hnw54['lineNumber'] = 0x0);
  }, 'comment': function (vt9m1r) {
    vt9m1r = i_mt9r1['apply'](this, arguments);var g0odyz = this['doc']['createComment'](vt9m1r);this['locator'] && i_b763s(this['locator'], g0odyz), i_$0ilz(this, g0odyz);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (quseb, j6a8f, i$0rz) {
    var ek2su = this['doc']['implementation'];if (ek2su && ek2su['createDocumentType']) {
      var ub3es7 = ek2su['createDocumentType'](quseb, j6a8f, i$0rz);this['locator'] && i_b763s(this['locator'], ub3es7), i_$0ilz(this, ub3es7);
    }
  }, 'warning': function (j_f8ap) {
    console['warn']('[xmldom warning]\t' + j_f8ap, i_p_f18c(this['locator']));
  }, 'error': function (sb3u) {
    console['error']('[xmldom error]\t' + sb3u, i_p_f18c(this['locator']));
  }, 'fatalError': function (c_p18f) {
    throw console['error']('[xmldom fatalError]\t' + c_p18f, i_p_f18c(this['locator'])), c_p18f;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (cp_f1m) {
  i_$i9lt['prototype'][cp_f1m] = function () {
    return null;
  };
});var i_bukqse = require('./iiiSAX')['XMLReader'],
    i_kqbseu = exports['DOMImplementation'] = require('./iiiDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./iiiDOM')['XMLSerializer'], exports['DOMParser'] = i__38ja6;