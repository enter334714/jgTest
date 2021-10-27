var Y = wx.$M;
function M_$ya10t(y01a$t) {
  this['options'] = y01a$t || { 'locator': {} };
}function M_fb_7p(ytbfa7, bf_, pf7bh) {
  function t0f$ay($aytf0) {
    var urkd9e = ytbfa7[$aytf0];!urkd9e && i7_bp && (urkd9e = 0x2 == ytbfa7['length'] ? function (_pimh) {
      ytbfa7($aytf0, _pimh);
    } : ytbfa7), $0ay1t[$aytf0] = urkd9e ? function (edku1q) {
      urkd9e('[xmldom ' + $aytf0 + ']\t' + edku1q + M_gxojcn(pf7bh));
    } : function () {};
  }if (!ytbfa7) {
    if (bf_ instanceof M_j8vg3) return bf_;ytbfa7 = bf_;
  }var $0ay1t = {},
      i7_bp = ytbfa7 instanceof Function;return pf7bh = pf7bh || {}, t0f$ay('warning'), t0f$ay('error'), t0f$ay('fatalError'), $0ay1t;
}function M_j8vg3() {
  this['cdata'] = !0x1;
}function M_s6r2e9(hipm_z, vg8) {
  vg8['lineNumber'] = hipm_z['lineNumber'], vg8['columnNumber'] = hipm_z['columnNumber'];
}function M_gxojcn(gjcx5) {
  return gjcx5 ? '\x0a@' + (gjcx5['systemId'] || '') + '#[line:' + gjcx5['lineNumber'] + ',col:' + gjcx5['columnNumber'] + ']' : void 0x0;
}function M_coxj(z_ph, abfh, edkqu1) {
  return 'string' == typeof z_ph ? z_ph['substr'](abfh, edkqu1) : z_ph['length'] >= abfh + edkqu1 || abfh ? new java['lang']['String'](z_ph, abfh, edkqu1) + '' : z_ph;
}function M_ngx(xv3jgn, e9udq) {
  (xv3jgn['currentElement'] || xv3jgn['doc'])['appendChild'](e9udq);
}M_$ya10t['prototype']['parseFromString'] = function (bafty, jon) {
  var s4v38w = this['options'],
      k9deuq = new M_ipz7h(),
      jx5gc = s4v38w['domBuilder'] || new M_j8vg3(),
      erku29 = s4v38w['errorHandler'],
      e926ur = s4v38w['locator'],
      vgx3jn = s4v38w['xmlns'] || {},
      cjxgon = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return e926ur && jx5gc['setDocumentLocator'](e926ur), k9deuq['errorHandler'] = M_fb_7p(erku29, jx5gc, e926ur), k9deuq['domBuilder'] = s4v38w['domBuilder'] || jx5gc, /\/x?html?$/['test'](jon) && (cjxgon['nbsp'] = '\u00a0', cjxgon['copy'] = '©', vgx3jn[''] = 'http://www.w3.org/1999/xhtml'), vgx3jn['xml'] = vgx3jn['xml'] || 'http://www.w3.org/XML/1998/namespace', bafty ? k9deuq['parse'](bafty, vgx3jn, cjxgon) : k9deuq['errorHandler']['error']('invalid doc source'), jx5gc['doc'];
}, M_j8vg3['prototype'] = { 'startDocument': function () {
    this['doc'] = new M_bfp_7h()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (xnjcgo, ogj5cx, iph7z, x5cjgo) {
    var er2 = this['doc'],
        hib7_p = er2['createElementNS'](xnjcgo, iph7z || ogj5cx),
        w8gn3v = x5cjgo['length'];M_ngx(this, hib7_p), this['currentElement'] = hib7_p, this['locator'] && M_s6r2e9(this['locator'], hib7_p);for (var e9drku = 0x0; e9drku < w8gn3v; e9drku++) {
      var xnjcgo = x5cjgo['getURI'](e9drku),
          wr2s4 = x5cjgo['getValue'](e9drku),
          iph7z = x5cjgo['getQName'](e9drku),
          $1t = er2['createAttributeNS'](xnjcgo, iph7z);this['locator'] && M_s6r2e9(x5cjgo['getLocator'](e9drku), $1t), $1t['value'] = $1t['nodeValue'] = wr2s4, hib7_p['setAttributeNode']($1t);
    }
  }, 'endElement': function () {
    var ngjoxc = this['currentElement'];ngjoxc['tagName'], this['currentElement'] = ngjoxc['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (v3xng, bafy$t) {
    bafy$t = this['doc']['createProcessingInstruction'](v3xng, bafy$t), (this['locator'] && M_s6r2e9(this['locator'], bafy$t), M_ngx(this, bafy$t));
  }, 'ignorableWhitespace': function () {}, 'characters': function (dkuq1e) {
    var t0y1$a;(dkuq1e = M_coxj['apply'](this, arguments)) && (t0y1$a = this['cdata'] ? this['doc']['createCDATASection'](dkuq1e) : this['doc']['createTextNode'](dkuq1e), this['currentElement'] ? this['currentElement']['appendChild'](t0y1$a) : /^\s*$/['test'](dkuq1e) && this['doc']['appendChild'](t0y1$a), this['locator'] && M_s6r2e9(this['locator'], t0y1$a));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (vjn38g) {
    (this['locator'] = vjn38g) && (vjn38g['lineNumber'] = 0x0);
  }, 'comment': function (fayb$) {
    fayb$ = M_coxj['apply'](this, arguments);var lhiz = this['doc']['createComment'](fayb$);this['locator'] && M_s6r2e9(this['locator'], lhiz), M_ngx(this, lhiz);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (hpfa7b, cxngo, xgn3v) {
    var jxgvn = this['doc']['implementation'];jxgvn && jxgvn['createDocumentType'] && (xgn3v = jxgvn['createDocumentType'](hpfa7b, cxngo, xgn3v), this['locator'] && M_s6r2e9(this['locator'], xgn3v), M_ngx(this, xgn3v));
  }, 'warning': function (hpzmi_) {
    console['warn']('[xmldom warning]\t' + hpzmi_, M_gxojcn(this['locator']));
  }, 'error': function (s3w84) {
    console['error']('[xmldom error]\t' + s3w84, M_gxojcn(this['locator']));
  }, 'fatalError': function (y7tbf) {
    throw console['error']('[xmldom fatalError]\t' + y7tbf, M_gxojcn(this['locator'])), y7tbf;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ngj3v8) {
  M_j8vg3['prototype'][ngj3v8] = function () {
    return null;
  };
});var M_ipz7h = require('./mmmSAX')['XMLReader'],
    M_bfp_7h = exports['DOMImplementation'] = require('./mmmDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./mmmDOM')['XMLSerializer'], exports['DOMParser'] = M_$ya10t;