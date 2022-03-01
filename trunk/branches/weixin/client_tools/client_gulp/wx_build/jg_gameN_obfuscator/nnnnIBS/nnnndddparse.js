var A = wx.$N;
function n_ljme(ez34) {
  this['options'] = ez34 || { 'locator': {} };
}function n_abw6(y3z4or, _mn8ju, ksxcv1) {
  function ks1vc(nlmju) {
    var e3zl0 = y3z4or[nlmju];!e3zl0 && ez0o3 && (e3zl0 = 0x2 == y3z4or['length'] ? function (umf) {
      y3z4or(nlmju, umf);
    } : y3z4or), df57ht[nlmju] = e3zl0 && function (t5df8) {
      e3zl0('[xmldom ' + nlmju + ']\t' + t5df8 + n_sc1gvx(ksxcv1));
    } || function () {};
  }if (!y3z4or) {
    if (_mn8ju instanceof n_o3ze0) return _mn8ju;y3z4or = _mn8ju;
  }var df57ht = {},
      ez0o3 = y3z4or instanceof Function;return ksxcv1 = ksxcv1 || {}, ks1vc('warning'), ks1vc('error'), ks1vc('fatalError'), df57ht;
}function n_o3ze0() {
  this['cdata'] = !0x1;
}function n_g5dtf7(_n0uj, h_fmu) {
  h_fmu['lineNumber'] = _n0uj['lineNumber'], h_fmu['columnNumber'] = _n0uj['columnNumber'];
}function n_sc1gvx(d7g1t5) {
  return d7g1t5 ? '\x0a@' + (d7g1t5['systemId'] || '') + '#[line:' + d7g1t5['lineNumber'] + ',col:' + d7g1t5['columnNumber'] + ']' : void 0x0;
}function n_dt7h5f(m8_jnu, brw$9q, k2ip) {
  return 'string' == typeof m8_jnu ? m8_jnu['substr'](brw$9q, k2ip) : m8_jnu['length'] >= brw$9q + k2ip || brw$9q ? new java['lang']['String'](m8_jnu, brw$9q, k2ip) + '' : m8_jnu;
}function n_joe30(loj03e, csx1vk) {
  loj03e['currentElement'] ? loj03e['currentElement']['appendChild'](csx1vk) : loj03e['doc']['appendChild'](csx1vk);
}n_ljme['prototype']['parseFromString'] = function (v1sk, mn_8uj) {
  var kx1 = this['options'],
      b96w$ = new n_yleo(),
      ybr9q = kx1['domBuilder'] || new n_o3ze0(),
      m0jlu = kx1['errorHandler'],
      m0lju = kx1['locator'],
      qb4r9$ = kx1['xmlns'] || {},
      bq$4r = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return m0lju && ybr9q['setDocumentLocator'](m0lju), b96w$['errorHandler'] = n_abw6(m0jlu, ybr9q, m0lju), b96w$['domBuilder'] = kx1['domBuilder'] || ybr9q, /\/x?html?$/['test'](mn_8uj) && (bq$4r['nbsp'] = '\u00a0', bq$4r['copy'] = '©', qb4r9$[''] = 'http://www.w3.org/1999/xhtml'), qb4r9$['xml'] = qb4r9$['xml'] || 'http://www.w3.org/XML/1998/namespace', v1sk ? b96w$['parse'](v1sk, qb4r9$, bq$4r) : b96w$['errorHandler']['error']('invalid doc source'), ybr9q['doc'];
}, n_o3ze0['prototype'] = { 'startDocument': function () {
    this['doc'] = new n_r9q$4()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (gx1cs7, hfd75, br$4, yq94) {
    var $qwb96 = this['doc'],
        _numj8 = $qwb96['createElementNS'](gx1cs7, br$4 || hfd75),
        bwq$a6 = yq94['length'];n_joe30(this, _numj8), this['currentElement'] = _numj8, this['locator'] && n_g5dtf7(this['locator'], _numj8);for (var umnl0j = 0x0; bwq$a6 > umnl0j; umnl0j++) {
      var gx1cs7 = yq94['getURI'](umnl0j),
          xv2ik = yq94['getValue'](umnl0j),
          br$4 = yq94['getQName'](umnl0j),
          n0jul = $qwb96['createAttributeNS'](gx1cs7, br$4);this['locator'] && n_g5dtf7(yq94['getLocator'](umnl0j), n0jul), n0jul['value'] = n0jul['nodeValue'] = xv2ik, _numj8['setAttributeNode'](n0jul);
    }
  }, 'endElement': function () {
    {
      var l0e3jo = this['currentElement'];l0e3jo['tagName'];
    }this['currentElement'] = l0e3jo['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (tgd, ju8nm_) {
    var sxg1v = this['doc']['createProcessingInstruction'](tgd, ju8nm_);this['locator'] && n_g5dtf7(this['locator'], sxg1v), n_joe30(this, sxg1v);
  }, 'ignorableWhitespace': function () {}, 'characters': function (lumj0n) {
    if (lumj0n = n_dt7h5f['apply'](this, arguments)) {
      if (this['cdata']) var e3l0nj = this['doc']['createCDATASection'](lumj0n);else var e3l0nj = this['doc']['createTextNode'](lumj0n);this['currentElement'] ? this['currentElement']['appendChild'](e3l0nj) : /^\s*$/['test'](lumj0n) && this['doc']['appendChild'](e3l0nj), this['locator'] && n_g5dtf7(this['locator'], e3l0nj);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (jlemn) {
    (this['locator'] = jlemn) && (jlemn['lineNumber'] = 0x0);
  }, 'comment': function (kcxvi) {
    kcxvi = n_dt7h5f['apply'](this, arguments);var xvsik = this['doc']['createComment'](kcxvi);this['locator'] && n_g5dtf7(this['locator'], xvsik), n_joe30(this, xvsik);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (bw$q9, nul, oe3j) {
    var muj_8 = this['doc']['implementation'];if (muj_8 && muj_8['createDocumentType']) {
      var bw96 = muj_8['createDocumentType'](bw$q9, nul, oe3j);this['locator'] && n_g5dtf7(this['locator'], bw96), n_joe30(this, bw96);
    }
  }, 'warning': function (fth85) {
    console['warn']('[xmldom warning]\t' + fth85, n_sc1gvx(this['locator']));
  }, 'error': function (g1c5x7) {
    console['error']('[xmldom error]\t' + g1c5x7, n_sc1gvx(this['locator']));
  }, 'fatalError': function (h8df5) {
    throw console['error']('[xmldom fatalError]\t' + h8df5, n_sc1gvx(this['locator'])), h8df5;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ksix2v) {
  n_o3ze0['prototype'][ksix2v] = function () {
    return null;
  };
});var n_yleo = require('./nnnSAX')['XMLReader'],
    n_r9q$4 = exports['DOMImplementation'] = require('./nnnnDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./nnnnDOM')['XMLSerializer'], exports['DOMParser'] = n_ljme;