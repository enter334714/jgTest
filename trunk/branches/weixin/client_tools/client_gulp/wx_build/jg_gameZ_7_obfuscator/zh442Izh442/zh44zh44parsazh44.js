var e = wx.$F;
function lks2$_e(iy8mrx) {
  this['options'] = iy8mrx || { 'locator': {} };
}function llwf1(itm3g, _knesj, ks_e2) {
  function vb$26(yixrm) {
    var o78r0x = itm3g[yixrm];!o78r0x && zc9wu && (o78r0x = 0x2 == itm3g['length'] ? function (ne4pjd) {
      itm3g(yixrm, ne4pjd);
    } : itm3g), zu4cd9[yixrm] = o78r0x && function (c4zd9u) {
      o78r0x('[xmldom ' + yixrm + ']\t' + c4zd9u + lb2a5v6(ks_e2));
    } || function () {};
  }if (!itm3g) {
    if (_knesj instanceof lk_j$e) return _knesj;itm3g = _knesj;
  }var zu4cd9 = {},
      zc9wu = itm3g instanceof Function;return ks_e2 = ks_e2 || {}, vb$26('warning'), vb$26('error'), vb$26('fatalError'), zu4cd9;
}function lk_j$e() {
  this['cdata'] = !0x1;
}function l$kej_(x70q5, r7xi8) {
  r7xi8['lineNumber'] = x70q5['lineNumber'], r7xi8['columnNumber'] = x70q5['columnNumber'];
}function lb2a5v6(ndes) {
  return ndes ? '\x0a@' + (ndes['systemId'] || '') + '#[line:' + ndes['lineNumber'] + ',col:' + ndes['columnNumber'] + ']' : void 0x0;
}function lr780(vb2$k, xyri8, zcn4) {
  return 'string' == typeof vb2$k ? vb2$k['substr'](xyri8, zcn4) : vb2$k['length'] >= xyri8 + zcn4 || xyri8 ? new java['lang']['String'](vb2$k, xyri8, zcn4) + '' : vb2$k;
}function luzwfc9(d9cp4, q5xo70) {
  d9cp4['currentElement'] ? d9cp4['currentElement']['appendChild'](q5xo70) : d9cp4['doc']['appendChild'](q5xo70);
}lks2$_e['prototype']['parseFromString'] = function (jn_ep, ul9w1f) {
  var jen_ks = this['options'],
      p4ndj = new limg8(),
      xq7ro = jen_ks['domBuilder'] || new lk_j$e(),
      spne_ = jen_ks['errorHandler'],
      en_psj = jen_ks['locator'],
      yx8mir = jen_ks['xmlns'] || {},
      orxmi8 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return en_psj && xq7ro['setDocumentLocator'](en_psj), p4ndj['errorHandler'] = llwf1(spne_, xq7ro, en_psj), p4ndj['domBuilder'] = jen_ks['domBuilder'] || xq7ro, /\/x?html?$/['test'](ul9w1f) && (orxmi8['nbsp'] = '\u00a0', orxmi8['copy'] = '©', yx8mir[''] = 'http://www.w3.org/1999/xhtml'), yx8mir['xml'] = yx8mir['xml'] || 'http://www.w3.org/XML/1998/namespace', jn_ep ? p4ndj['parse'](jn_ep, yx8mir, orxmi8) : p4ndj['errorHandler']['error']('invalid doc source'), xq7ro['doc'];
}, lk_j$e['prototype'] = { 'startDocument': function () {
    this['doc'] = new lab2v$6()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (spjdn, d9zp4, n_ps, ejnsdp) {
    var sejpn_ = this['doc'],
        roq07x = sejpn_['createElementNS'](spjdn, n_ps || d9zp4),
        pj_se = ejnsdp['length'];luzwfc9(this, roq07x), this['currentElement'] = roq07x, this['locator'] && l$kej_(this['locator'], roq07x);for (var nkej_ = 0x0; pj_se > nkej_; nkej_++) {
      var spjdn = ejnsdp['getURI'](nkej_),
          k_v$s2 = ejnsdp['getValue'](nkej_),
          n_ps = ejnsdp['getQName'](nkej_),
          k$2_s = sejpn_['createAttributeNS'](spjdn, n_ps);this['locator'] && l$kej_(ejnsdp['getLocator'](nkej_), k$2_s), k$2_s['value'] = k$2_s['nodeValue'] = k_v$s2, roq07x['setAttributeNode'](k$2_s);
    }
  }, 'endElement': function () {
    {
      var oq0rx7 = this['currentElement'];oq0rx7['tagName'];
    }this['currentElement'] = oq0rx7['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (a657q0, mgity3) {
    var nks_ = this['doc']['createProcessingInstruction'](a657q0, mgity3);this['locator'] && l$kej_(this['locator'], nks_), luzwfc9(this, nks_);
  }, 'ignorableWhitespace': function () {}, 'characters': function (yr8ix) {
    if (yr8ix = lr780['apply'](this, arguments)) {
      if (this['cdata']) var vab65 = this['doc']['createCDATASection'](yr8ix);else var vab65 = this['doc']['createTextNode'](yr8ix);this['currentElement'] ? this['currentElement']['appendChild'](vab65) : /^\s*$/['test'](yr8ix) && this['doc']['appendChild'](vab65), this['locator'] && l$kej_(this['locator'], vab65);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (s$v_k) {
    (this['locator'] = s$v_k) && (s$v_k['lineNumber'] = 0x0);
  }, 'comment': function (vk$2b6) {
    vk$2b6 = lr780['apply'](this, arguments);var ndsjp = this['doc']['createComment'](vk$2b6);this['locator'] && l$kej_(this['locator'], ndsjp), luzwfc9(this, ndsjp);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (o7x05, v2kb$6, r3iy) {
    var y8mi3 = this['doc']['implementation'];if (y8mi3 && y8mi3['createDocumentType']) {
      var q65a07 = y8mi3['createDocumentType'](o7x05, v2kb$6, r3iy);this['locator'] && l$kej_(this['locator'], q65a07), luzwfc9(this, q65a07);
    }
  }, 'warning': function (bvk_) {
    console['warn']('[xmldom warning]\t' + bvk_, lb2a5v6(this['locator']));
  }, 'error': function (y8r3mi) {
    console['error']('[xmldom error]\t' + y8r3mi, lb2a5v6(this['locator']));
  }, 'fatalError': function (spdn) {
    throw console['error']('[xmldom fatalError]\t' + spdn, lb2a5v6(this['locator'])), spdn;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_es$kj) {
  lk_j$e['prototype'][_es$kj] = function () {
    return null;
  };
});var limg8 = require('./zh44zh44czh44zh44')['XMLReader'],
    lab2v$6 = exports['DOMImplementation'] = require('./zh44zh44DOzh44zh44')['DOMImplementation'];exports['XMLSerializer'] = require('./zh44zh44DOzh44zh44')['XMLSerializer'], exports['DOMParser'] = lks2$_e;