var A = wx.$N;
function n_tbw62(m$h_lk) {
  this['options'] = m$h_lk || { 'locator': {} };
}function n_fyirv(c57z, u$_hk4, ji9pq) {
  function ifqyg(dxcsz) {
    var aor3e8 = c57z[dxcsz];!aor3e8 && yirvf && (aor3e8 = 0x2 == c57z['length'] ? function (xncdsz) {
      c57z(dxcsz, xncdsz);
    } : c57z), vijyfg[dxcsz] = aor3e8 ? function (o6ae8) {
      aor3e8('[xmldom ' + dxcsz + ']\t' + o6ae8 + n_znm(ji9pq));
    } : function () {};
  }if (!c57z) {
    if (u$_hk4 instanceof n_k_$1u4) return u$_hk4;c57z = u$_hk4;
  }var vijyfg = {},
      yirvf = c57z instanceof Function;return ji9pq = ji9pq || {}, ifqyg('warning'), ifqyg('error'), ifqyg('fatalError'), vijyfg;
}function n_k_$1u4() {
  this['cdata'] = !0x1;
}function n__h$k(s0p5, hkdx) {
  hkdx['lineNumber'] = s0p5['lineNumber'], hkdx['columnNumber'] = s0p5['columnNumber'];
}function n_znm(dnxszl) {
  return dnxszl ? '\x0a@' + (dnxszl['systemId'] || '') + '#[line:' + dnxszl['lineNumber'] + ',col:' + dnxszl['columnNumber'] + ']' : void 0x0;
}function n_areo(ldkxh, sn70c, ifjyg) {
  return 'string' == typeof ldkxh ? ldkxh['substr'](sn70c, ifjyg) : ldkxh['length'] >= sn70c + ifjyg || sn70c ? new java['lang']['String'](ldkxh, sn70c, ifjyg) + '' : ldkxh;
}function n_ipj(roe83v, zdmh) {
  (roe83v['currentElement'] || roe83v['doc'])['appendChild'](zdmh);
}n_tbw62['prototype']['parseFromString'] = function (ivgj, py9qji) {
  var sn7czd = this['options'],
      zxdhl = new n_wao62e(),
      pjqyi = sn7czd['domBuilder'] || new n_k_$1u4(),
      evr38o = sn7czd['errorHandler'],
      q097p = sn7czd['locator'],
      znc5s = sn7czd['xmlns'] || {},
      e6oaw = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return q097p && pjqyi['setDocumentLocator'](q097p), zxdhl['errorHandler'] = n_fyirv(evr38o, pjqyi, q097p), zxdhl['domBuilder'] = sn7czd['domBuilder'] || pjqyi, /\/x?html?$/['test'](py9qji) && (e6oaw['nbsp'] = '\u00a0', e6oaw['copy'] = '©', znc5s[''] = 'http://www.w3.org/1999/xhtml'), znc5s['xml'] = znc5s['xml'] || 'http://www.w3.org/XML/1998/namespace', ivgj ? zxdhl['parse'](ivgj, znc5s, e6oaw) : zxdhl['errorHandler']['error']('invalid doc source'), pjqyi['doc'];
}, n_k_$1u4['prototype'] = { 'startDocument': function () {
    this['doc'] = new n_qygfij()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (pq9j0i, dxmlzh, ml_xhk, pjyqi9) {
    var re8a3 = this['doc'],
        q07p = re8a3['createElementNS'](pq9j0i, ml_xhk || dxmlzh),
        q5079 = pjyqi9['length'];n_ipj(this, q07p), this['currentElement'] = q07p, this['locator'] && n__h$k(this['locator'], q07p);for (var gvyf3r = 0x0; gvyf3r < q5079; gvyf3r++) {
      var pq9j0i = pjyqi9['getURI'](gvyf3r),
          xzmhld = pjyqi9['getValue'](gvyf3r),
          ml_xhk = pjyqi9['getQName'](gvyf3r),
          ao826 = re8a3['createAttributeNS'](pq9j0i, ml_xhk);this['locator'] && n__h$k(pjyqi9['getLocator'](gvyf3r), ao826), ao826['value'] = ao826['nodeValue'] = xzmhld, q07p['setAttributeNode'](ao826);
    }
  }, 'endElement': function () {
    var eo382 = this['currentElement'];eo382['tagName'], this['currentElement'] = eo382['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (dnmzxl, nxdszc) {
    nxdszc = this['doc']['createProcessingInstruction'](dnmzxl, nxdszc), (this['locator'] && n__h$k(this['locator'], nxdszc), n_ipj(this, nxdszc));
  }, 'ignorableWhitespace': function () {}, 'characters': function (ldxzm) {
    var nzdls;(ldxzm = n_areo['apply'](this, arguments)) && (nzdls = this['cdata'] ? this['doc']['createCDATASection'](ldxzm) : this['doc']['createTextNode'](ldxzm), this['currentElement'] ? this['currentElement']['appendChild'](nzdls) : /^\s*$/['test'](ldxzm) && this['doc']['appendChild'](nzdls), this['locator'] && n__h$k(this['locator'], nzdls));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (irfgvy) {
    (this['locator'] = irfgvy) && (irfgvy['lineNumber'] = 0x0);
  }, 'comment': function (zndlxs) {
    zndlxs = n_areo['apply'](this, arguments);var evrg83 = this['doc']['createComment'](zndlxs);this['locator'] && n__h$k(this['locator'], evrg83), n_ipj(this, evrg83);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (mdlk, fqj9, oa2wb6) {
    var cs5n0 = this['doc']['implementation'];cs5n0 && cs5n0['createDocumentType'] && (oa2wb6 = cs5n0['createDocumentType'](mdlk, fqj9, oa2wb6), this['locator'] && n__h$k(this['locator'], oa2wb6), n_ipj(this, oa2wb6));
  }, 'warning': function (kmh_lx) {
    console['warn']('[xmldom warning]\t' + kmh_lx, n_znm(this['locator']));
  }, 'error': function (n7s0c) {
    console['error']('[xmldom error]\t' + n7s0c, n_znm(this['locator']));
  }, 'fatalError': function (roe3v) {
    throw console['error']('[xmldom fatalError]\t' + roe3v, n_znm(this['locator'])), roe3v;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (n7csdz) {
  n_k_$1u4['prototype'][n7csdz] = function () {
    return null;
  };
});var n_wao62e = require('./nnnSAX')['XMLReader'],
    n_qygfij = exports['DOMImplementation'] = require('./nnnnDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./nnnnDOM')['XMLSerializer'], exports['DOMParser'] = n_tbw62;