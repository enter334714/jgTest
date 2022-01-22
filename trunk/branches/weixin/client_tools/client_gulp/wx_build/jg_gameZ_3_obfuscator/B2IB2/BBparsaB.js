var D = wx.$b;
function blkq7x(kxq37) {
  this['options'] = kxq37 || { 'locator': {} };
}function bztymu(yum0zi, jy0u, o7lq) {
  function $5a4jf(nyzu0i) {
    var kox7lq = yum0zi[nyzu0i];!kox7lq && nj4$0 && (kox7lq = 0x2 == yum0zi['length'] ? function (vchp1w) {
      yum0zi(nyzu0i, vchp1w);
    } : yum0zi), glqk7[nyzu0i] = kox7lq && function (nuij04) {
      kox7lq('[xmldom ' + nyzu0i + ']\t' + nuij04 + b$45aj(o7lq));
    } || function () {};
  }if (!yum0zi) {
    if (jy0u instanceof bl6kod8) return jy0u;yum0zi = jy0u;
  }var glqk7 = {},
      nj4$0 = yum0zi instanceof Function;return o7lq = o7lq || {}, $5a4jf('warning'), $5a4jf('error'), $5a4jf('fatalError'), glqk7;
}function bl6kod8() {
  this['cdata'] = !0x1;
}function blxq7kg(ld6so, zymutc) {
  zymutc['lineNumber'] = ld6so['lineNumber'], zymutc['columnNumber'] = ld6so['columnNumber'];
}function b$45aj(wh_1pv) {
  return wh_1pv ? '\x0a@' + (wh_1pv['systemId'] || '') + '#[line:' + wh_1pv['lineNumber'] + ',col:' + wh_1pv['columnNumber'] + ']' : void 0x0;
}function bqx37g(z1mtcy, twpc1, okl6d8) {
  return 'string' == typeof z1mtcy ? z1mtcy['substr'](twpc1, okl6d8) : z1mtcy['length'] >= twpc1 + okl6d8 || twpc1 ? new java['lang']['String'](z1mtcy, twpc1, okl6d8) + '' : z1mtcy;
}function bmyzcu(lo68sd, c1wpvh) {
  lo68sd['currentElement'] ? lo68sd['currentElement']['appendChild'](c1wpvh) : lo68sd['doc']['appendChild'](c1wpvh);
}blkq7x['prototype']['parseFromString'] = function (k8d6l, j45n0i) {
  var r69ds = this['options'],
      k3xg7q = new bw1vpct(),
      c1pwtv = r69ds['domBuilder'] || new bl6kod8(),
      uzny0i = r69ds['errorHandler'],
      j$4af5 = r69ds['locator'],
      r289sd = r69ds['xmlns'] || {},
      sr9_82 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return j$4af5 && c1pwtv['setDocumentLocator'](j$4af5), k3xg7q['errorHandler'] = bztymu(uzny0i, c1pwtv, j$4af5), k3xg7q['domBuilder'] = r69ds['domBuilder'] || c1pwtv, /\/x?html?$/['test'](j45n0i) && (sr9_82['nbsp'] = '\u00a0', sr9_82['copy'] = '©', r289sd[''] = 'http://www.w3.org/1999/xhtml'), r289sd['xml'] = r289sd['xml'] || 'http://www.w3.org/XML/1998/namespace', k8d6l ? k3xg7q['parse'](k8d6l, r289sd, sr9_82) : k3xg7q['errorHandler']['error']('invalid doc source'), c1pwtv['doc'];
}, bl6kod8['prototype'] = { 'startDocument': function () {
    this['doc'] = new bajn4$5()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (pvh_r2, o9s68, xokd, nuz) {
    var uyczt = this['doc'],
        m0uyiz = uyczt['createElementNS'](pvh_r2, xokd || o9s68),
        x76o = nuz['length'];bmyzcu(this, m0uyiz), this['currentElement'] = m0uyiz, this['locator'] && blxq7kg(this['locator'], m0uyiz);for (var n40uj = 0x0; x76o > n40uj; n40uj++) {
      var pvh_r2 = nuz['getURI'](n40uj),
          yutim = nuz['getValue'](n40uj),
          xokd = nuz['getQName'](n40uj),
          zuctmy = uyczt['createAttributeNS'](pvh_r2, xokd);this['locator'] && blxq7kg(nuz['getLocator'](n40uj), zuctmy), zuctmy['value'] = zuctmy['nodeValue'] = yutim, m0uyiz['setAttributeNode'](zuctmy);
    }
  }, 'endElement': function () {
    {
      var yj0niu = this['currentElement'];yj0niu['tagName'];
    }this['currentElement'] = yj0niu['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (wp2hv_, mwt1p) {
    var s89d2r = this['doc']['createProcessingInstruction'](wp2hv_, mwt1p);this['locator'] && blxq7kg(this['locator'], s89d2r), bmyzcu(this, s89d2r);
  }, 'ignorableWhitespace': function () {}, 'characters': function (kxg3) {
    if (kxg3 = bqx37g['apply'](this, arguments)) {
      if (this['cdata']) var oxk7 = this['doc']['createCDATASection'](kxg3);else var oxk7 = this['doc']['createTextNode'](kxg3);this['currentElement'] ? this['currentElement']['appendChild'](oxk7) : /^\s*$/['test'](kxg3) && this['doc']['appendChild'](oxk7), this['locator'] && blxq7kg(this['locator'], oxk7);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (f4$j) {
    (this['locator'] = f4$j) && (f4$j['lineNumber'] = 0x0);
  }, 'comment': function (vpr_) {
    vpr_ = bqx37g['apply'](this, arguments);var prh_v2 = this['doc']['createComment'](vpr_);this['locator'] && blxq7kg(this['locator'], prh_v2), bmyzcu(this, prh_v2);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (xolk, jni, ij045n) {
    var ui0ymz = this['doc']['implementation'];if (ui0ymz && ui0ymz['createDocumentType']) {
      var rhv_2p = ui0ymz['createDocumentType'](xolk, jni, ij045n);this['locator'] && blxq7kg(this['locator'], rhv_2p), bmyzcu(this, rhv_2p);
    }
  }, 'warning': function (kod) {
    console['warn']('[xmldom warning]\t' + kod, b$45aj(this['locator']));
  }, 'error': function (_9h2r) {
    console['error']('[xmldom error]\t' + _9h2r, b$45aj(this['locator']));
  }, 'fatalError': function (h2p_rv) {
    throw console['error']('[xmldom fatalError]\t' + h2p_rv, b$45aj(this['locator'])), h2p_rv;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (x6odl) {
  bl6kod8['prototype'][x6odl] = function () {
    return null;
  };
});var bw1vpct = require('./BBcBB')['XMLReader'],
    bajn4$5 = exports['DOMImplementation'] = require('./BBDOBB')['DOMImplementation'];exports['XMLSerializer'] = require('./BBDOBB')['XMLSerializer'], exports['DOMParser'] = blkq7x;