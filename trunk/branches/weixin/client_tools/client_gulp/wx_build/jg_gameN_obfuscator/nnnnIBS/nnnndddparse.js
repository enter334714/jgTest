var A = wx.$N;
function n_vyigfj(oaw6e2) {
  this['options'] = oaw6e2 || { 'locator': {} };
}function n_zcdsx(ab2o6w, yq, j05q9) {
  function fyrgiv(mhkdx) {
    var q075p9 = ab2o6w[mhkdx];!q075p9 && nzmlxd && (q075p9 = 0x2 == ab2o6w['length'] ? function (x_mkh) {
      ab2o6w(mhkdx, x_mkh);
    } : ab2o6w), ijyfq9[mhkdx] = q075p9 && function (mkdl) {
      q075p9('[xmldom ' + mhkdx + ']\t' + mkdl + n_xcnd(j05q9));
    } || function () {};
  }if (!ab2o6w) {
    if (yq instanceof n_c7s) return yq;ab2o6w = yq;
  }var ijyfq9 = {},
      nzmlxd = ab2o6w instanceof Function;return j05q9 = j05q9 || {}, fyrgiv('warning'), fyrgiv('error'), fyrgiv('fatalError'), ijyfq9;
}function n_c7s() {
  this['cdata'] = !0x1;
}function n_pji9yq(c07sp5, czsn75) {
  czsn75['lineNumber'] = c07sp5['lineNumber'], czsn75['columnNumber'] = c07sp5['columnNumber'];
}function n_xcnd(mzlh) {
  return mzlh ? '\x0a@' + (mzlh['systemId'] || '') + '#[line:' + mzlh['lineNumber'] + ',col:' + mzlh['columnNumber'] + ']' : void 0x0;
}function n_c570n(zs, dszxl, ar3o) {
  return 'string' == typeof zs ? zs['substr'](dszxl, ar3o) : zs['length'] >= dszxl + ar3o || dszxl ? new java['lang']['String'](zs, dszxl, ar3o) + '' : zs;
}function n_k$m_hl(czxsdn, a62wbo) {
  czxsdn['currentElement'] ? czxsdn['currentElement']['appendChild'](a62wbo) : czxsdn['doc']['appendChild'](a62wbo);
}n_vyigfj['prototype']['parseFromString'] = function (iyq, igjyfq) {
  var weao2 = this['options'],
      $khm_l = new n_jypqi(),
      p075s = weao2['domBuilder'] || new n_c7s(),
      iypj9 = weao2['errorHandler'],
      c5s0n = weao2['locator'],
      mlxh = weao2['xmlns'] || {},
      wta62 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return c5s0n && p075s['setDocumentLocator'](c5s0n), $khm_l['errorHandler'] = n_zcdsx(iypj9, p075s, c5s0n), $khm_l['domBuilder'] = weao2['domBuilder'] || p075s, /\/x?html?$/['test'](igjyfq) && (wta62['nbsp'] = '\u00a0', wta62['copy'] = '©', mlxh[''] = 'http://www.w3.org/1999/xhtml'), mlxh['xml'] = mlxh['xml'] || 'http://www.w3.org/XML/1998/namespace', iyq ? $khm_l['parse'](iyq, mlxh, wta62) : $khm_l['errorHandler']['error']('invalid doc source'), p075s['doc'];
}, n_c7s['prototype'] = { 'startDocument': function () {
    this['doc'] = new n_v83g()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (k_4mh$, veo3, q9j05, xm_lhk) {
    var mx_lkh = this['doc'],
        iyp9j = mx_lkh['createElementNS'](k_4mh$, q9j05 || veo3),
        szc7 = xm_lhk['length'];n_k$m_hl(this, iyp9j), this['currentElement'] = iyp9j, this['locator'] && n_pji9yq(this['locator'], iyp9j);for (var e38v = 0x0; szc7 > e38v; e38v++) {
      var k_4mh$ = xm_lhk['getURI'](e38v),
          bowa62 = xm_lhk['getValue'](e38v),
          q9j05 = xm_lhk['getQName'](e38v),
          rfgv = mx_lkh['createAttributeNS'](k_4mh$, q9j05);this['locator'] && n_pji9yq(xm_lhk['getLocator'](e38v), rfgv), rfgv['value'] = rfgv['nodeValue'] = bowa62, iyp9j['setAttributeNode'](rfgv);
    }
  }, 'endElement': function () {
    {
      var f3gvyr = this['currentElement'];f3gvyr['tagName'];
    }this['currentElement'] = f3gvyr['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (oe6a, s5z7cn) {
    var m_lhxk = this['doc']['createProcessingInstruction'](oe6a, s5z7cn);this['locator'] && n_pji9yq(this['locator'], m_lhxk), n_k$m_hl(this, m_lhxk);
  }, 'ignorableWhitespace': function () {}, 'characters': function (o3ver) {
    if (o3ver = n_c570n['apply'](this, arguments)) {
      if (this['cdata']) var nsd = this['doc']['createCDATASection'](o3ver);else var nsd = this['doc']['createTextNode'](o3ver);this['currentElement'] ? this['currentElement']['appendChild'](nsd) : /^\s*$/['test'](o3ver) && this['doc']['appendChild'](nsd), this['locator'] && n_pji9yq(this['locator'], nsd);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (vjfyi) {
    (this['locator'] = vjfyi) && (vjfyi['lineNumber'] = 0x0);
  }, 'comment': function (c7p05s) {
    c7p05s = n_c570n['apply'](this, arguments);var gfyqji = this['doc']['createComment'](c7p05s);this['locator'] && n_pji9yq(this['locator'], gfyqji), n_k$m_hl(this, gfyqji);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (gqyfij, dsxzn, jfyiv) {
    var kdhlm = this['doc']['implementation'];if (kdhlm && kdhlm['createDocumentType']) {
      var hkxld = kdhlm['createDocumentType'](gqyfij, dsxzn, jfyiv);this['locator'] && n_pji9yq(this['locator'], hkxld), n_k$m_hl(this, hkxld);
    }
  }, 'warning': function ($4uhk) {
    console['warn']('[xmldom warning]\t' + $4uhk, n_xcnd(this['locator']));
  }, 'error': function (c50s7p) {
    console['error']('[xmldom error]\t' + c50s7p, n_xcnd(this['locator']));
  }, 'fatalError': function (zmlnx) {
    throw console['error']('[xmldom fatalError]\t' + zmlnx, n_xcnd(this['locator'])), zmlnx;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (jfygq) {
  n_c7s['prototype'][jfygq] = function () {
    return null;
  };
});var n_jypqi = require('./nnnSAX')['XMLReader'],
    n_v83g = exports['DOMImplementation'] = require('./nnnnDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./nnnnDOM')['XMLSerializer'], exports['DOMParser'] = n_vyigfj;