var g = wx.u$;
function _digykjn(kinyj) {
  this['options'] = kinyj || { 'locator': {} };
}function _dzomcl(mlzo$7, ek8n_w, jkign) {
  function zcpom(f631) {
    var u2b$ = mlzo$7[f631];!u2b$ && mxcpoz && (u2b$ = 0x2 == mlzo$7['length'] ? function (ykn_wj) {
      mlzo$7(f631, ykn_wj);
    } : mlzo$7), b9$zl[f631] = u2b$ && function (oxmpzc) {
      u2b$('[xmldom ' + f631 + ']\t' + oxmpzc + _dsew_h(jkign));
    } || function () {};
  }if (!mlzo$7) {
    if (ek8n_w instanceof _dgk_) return ek8n_w;mlzo$7 = ek8n_w;
  }var b9$zl = {},
      mxcpoz = mlzo$7 instanceof Function;return jkign = jkign || {}, zcpom('warning'), zcpom('error'), zcpom('fatalError'), b9$zl;
}function _dgk_() {
  this['cdata'] = !0x1;
}function _de_jnkw(u5b9v, ynj) {
  ynj['lineNumber'] = u5b9v['lineNumber'], ynj['columnNumber'] = u5b9v['columnNumber'];
}function _dsew_h(h_kew) {
  return h_kew ? '\x0a@' + (h_kew['systemId'] || '') + '#[line:' + h_kew['lineNumber'] + ',col:' + h_kew['columnNumber'] + ']' : void 0x0;
}function _d_ek8nw(hk8we, e8w_k, b5v2) {
  return 'string' == typeof hk8we ? hk8we['substr'](e8w_k, b5v2) : hk8we['length'] >= e8w_k + b5v2 || e8w_k ? new java['lang']['String'](hk8we, e8w_k, b5v2) + '' : hk8we;
}function _dopcxmz(h8ea0, molpzc) {
  h8ea0['currentElement'] ? h8ea0['currentElement']['appendChild'](molpzc) : h8ea0['doc']['appendChild'](molpzc);
}_digykjn['prototype']['parseFromString'] = function (mcp4i, n8kwe) {
  var l$bz97 = this['options'],
      new_kj = new _dewhk8_(),
      wejkn_ = l$bz97['domBuilder'] || new _dgk_(),
      mzcpxo = l$bz97['errorHandler'],
      xcip4 = l$bz97['locator'],
      yijg4x = l$bz97['xmlns'] || {},
      kywj_ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return xcip4 && wejkn_['setDocumentLocator'](xcip4), new_kj['errorHandler'] = _dzomcl(mzcpxo, wejkn_, xcip4), new_kj['domBuilder'] = l$bz97['domBuilder'] || wejkn_, /\/x?html?$/['test'](n8kwe) && (kywj_['nbsp'] = '\u00a0', kywj_['copy'] = '©', yijg4x[''] = 'http://www.w3.org/1999/xhtml'), yijg4x['xml'] = yijg4x['xml'] || 'http://www.w3.org/XML/1998/namespace', mcp4i ? new_kj['parse'](mcp4i, yijg4x, kywj_) : new_kj['errorHandler']['error']('invalid doc source'), wejkn_['doc'];
}, _dgk_['prototype'] = { 'startDocument': function () {
    this['doc'] = new _duv5fq()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (njke_, qdf5r6, vdfqu, ufvd) {
    var cox4p = this['doc'],
        pczm = cox4p['createElementNS'](njke_, vdfqu || qdf5r6),
        zlb7$ = ufvd['length'];_dopcxmz(this, pczm), this['currentElement'] = pczm, this['locator'] && _de_jnkw(this['locator'], pczm);for (var mo7cz = 0x0; zlb7$ > mo7cz; mo7cz++) {
      var njke_ = ufvd['getURI'](mo7cz),
          _khew = ufvd['getValue'](mo7cz),
          vdfqu = ufvd['getQName'](mo7cz),
          vb279$ = cox4p['createAttributeNS'](njke_, vdfqu);this['locator'] && _de_jnkw(ufvd['getLocator'](mo7cz), vb279$), vb279$['value'] = vb279$['nodeValue'] = _khew, pczm['setAttributeNode'](vb279$);
    }
  }, 'endElement': function () {
    {
      var ae8w = this['currentElement'];ae8w['tagName'];
    }this['currentElement'] = ae8w['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (d3f6, t3fr61) {
    var czpl = this['doc']['createProcessingInstruction'](d3f6, t3fr61);this['locator'] && _de_jnkw(this['locator'], czpl), _dopcxmz(this, czpl);
  }, 'ignorableWhitespace': function () {}, 'characters': function (u9$2v) {
    if (u9$2v = _d_ek8nw['apply'](this, arguments)) {
      if (this['cdata']) var gkj_n = this['doc']['createCDATASection'](u9$2v);else var gkj_n = this['doc']['createTextNode'](u9$2v);this['currentElement'] ? this['currentElement']['appendChild'](gkj_n) : /^\s*$/['test'](u9$2v) && this['doc']['appendChild'](gkj_n), this['locator'] && _de_jnkw(this['locator'], gkj_n);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (l9z) {
    (this['locator'] = l9z) && (l9z['lineNumber'] = 0x0);
  }, 'comment': function (h0a) {
    h0a = _d_ek8nw['apply'](this, arguments);var yixj = this['doc']['createComment'](h0a);this['locator'] && _de_jnkw(this['locator'], yixj), _dopcxmz(this, yixj);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (uv2$9b, df6qu, j4igy) {
    var hw8se = this['doc']['implementation'];if (hw8se && hw8se['createDocumentType']) {
      var bv592 = hw8se['createDocumentType'](uv2$9b, df6qu, j4igy);this['locator'] && _de_jnkw(this['locator'], bv592), _dopcxmz(this, bv592);
    }
  }, 'warning': function (dq5vuf) {
    console['warn']('[xmldom warning]\t' + dq5vuf, _dsew_h(this['locator']));
  }, 'error': function (xcgp) {
    console['error']('[xmldom error]\t' + xcgp, _dsew_h(this['locator']));
  }, 'fatalError': function (oplc) {
    throw console['error']('[xmldom fatalError]\t' + oplc, _dsew_h(this['locator'])), oplc;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (xmi) {
  _dgk_['prototype'][xmi] = function () {
    return null;
  };
});var _dewhk8_ = require('./tT12tt')['XMLReader'],
    _duv5fq = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = _digykjn;