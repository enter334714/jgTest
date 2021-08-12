var _ = wx.y$;
function _d_30421(bgdce) {
  this['options'] = bgdce || { 'locator': {} };
}function _drponq(bdefgc, vtusx, nposq) {
  function y_$x0z(cdfbe) {
    var noqmr = bdefgc[cdfbe];!noqmr && _$013 && (noqmr = 0x2 == bdefgc['length'] ? function (tqspur) {
      bdefgc(cdfbe, tqspur);
    } : bdefgc), $zx0_y[cdfbe] = noqmr ? function (trquv) {
      noqmr('[xmldom ' + cdfbe + ']\t' + trquv + _dkjhig(nposq));
    } : function () {};
  }if (!bdefgc) {
    if (vtusx instanceof _dmlnk) return vtusx;bdefgc = vtusx;
  }var $zx0_y = {},
      _$013 = bdefgc instanceof Function;return nposq = nposq || {}, y_$x0z('warning'), y_$x0z('error'), y_$x0z('fatalError'), $zx0_y;
}function _dmlnk() {
  this['cdata'] = !0x1;
}function _dfegihj(cbgdf, nlqmop) {
  nlqmop['lineNumber'] = cbgdf['lineNumber'], nlqmop['columnNumber'] = cbgdf['columnNumber'];
}function _dkjhig(_12043) {
  return _12043 ? '\x0a@' + (_12043['systemId'] || '') + '#[line:' + _12043['lineNumber'] + ',col:' + _12043['columnNumber'] + ']' : void 0x0;
}function _d_x0y$z(plnkm, hfijkg, jik) {
  return 'string' == typeof plnkm ? plnkm['substr'](hfijkg, jik) : plnkm['length'] >= hfijkg + jik || hfijkg ? new java['lang']['String'](plnkm, hfijkg, jik) + '' : plnkm;
}function _dpmlnoq(jmihl, qprsut) {
  (jmihl['currentElement'] || jmihl['doc'])['appendChild'](qprsut);
}_d_30421['prototype']['parseFromString'] = function (y$z_w, nqpml) {
  var inljk = this['options'],
      $wyzxv = new _dfjgh(),
      z1$20 = inljk['domBuilder'] || new _dmlnk(),
      y$xvz = inljk['errorHandler'],
      higfk = inljk['locator'],
      iefgjh = inljk['xmlns'] || {},
      mjok = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return higfk && z1$20['setDocumentLocator'](higfk), $wyzxv['errorHandler'] = _drponq(y$xvz, z1$20, higfk), $wyzxv['domBuilder'] = inljk['domBuilder'] || z1$20, /\/x?html?$/['test'](nqpml) && (mjok['nbsp'] = '\u00a0', mjok['copy'] = '©', iefgjh[''] = 'http://www.w3.org/1999/xhtml'), iefgjh['xml'] = iefgjh['xml'] || 'http://www.w3.org/XML/1998/namespace', y$z_w ? $wyzxv['parse'](y$z_w, iefgjh, mjok) : $wyzxv['errorHandler']['error']('invalid doc source'), z1$20['doc'];
}, _dmlnk['prototype'] = { 'startDocument': function () {
    this['doc'] = new _d$013()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function ($zyvxw, fhged, quts, pnormq) {
    var wtsxv = this['doc'],
        klnpm = wtsxv['createElementNS']($zyvxw, quts || fhged),
        qprmn = pnormq['length'];_dpmlnoq(this, klnpm), this['currentElement'] = klnpm, this['locator'] && _dfegihj(this['locator'], klnpm);for (var olknp = 0x0; olknp < qprmn; olknp++) {
      var $zyvxw = pnormq['getURI'](olknp),
          xyz_w$ = pnormq['getValue'](olknp),
          quts = pnormq['getQName'](olknp),
          wusxt = wtsxv['createAttributeNS']($zyvxw, quts);this['locator'] && _dfegihj(pnormq['getLocator'](olknp), wusxt), wusxt['value'] = wusxt['nodeValue'] = xyz_w$, klnpm['setAttributeNode'](wusxt);
    }
  }, 'endElement': function () {
    var $20_ = this['currentElement'];$20_['tagName'], this['currentElement'] = $20_['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (qronps, z2_10) {
    z2_10 = this['doc']['createProcessingInstruction'](qronps, z2_10), (this['locator'] && _dfegihj(this['locator'], z2_10), _dpmlnoq(this, z2_10));
  }, 'ignorableWhitespace': function () {}, 'characters': function (ljhik) {
    var kgfh;(ljhik = _d_x0y$z['apply'](this, arguments)) && (kgfh = this['cdata'] ? this['doc']['createCDATASection'](ljhik) : this['doc']['createTextNode'](ljhik), this['currentElement'] ? this['currentElement']['appendChild'](kgfh) : /^\s*$/['test'](ljhik) && this['doc']['appendChild'](kgfh), this['locator'] && _dfegihj(this['locator'], kgfh));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (mljonk) {
    (this['locator'] = mljonk) && (mljonk['lineNumber'] = 0x0);
  }, 'comment': function (opsrq) {
    opsrq = _d_x0y$z['apply'](this, arguments);var opqt = this['doc']['createComment'](opsrq);this['locator'] && _dfegihj(this['locator'], opqt), _dpmlnoq(this, opqt);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (npsrq, decafb, vtwsu) {
    var toqr = this['doc']['implementation'];toqr && toqr['createDocumentType'] && (vtwsu = toqr['createDocumentType'](npsrq, decafb, vtwsu), this['locator'] && _dfegihj(this['locator'], vtwsu), _dpmlnoq(this, vtwsu));
  }, 'warning': function (ecgbf) {
    console['warn']('[xmldom warning]\t' + ecgbf, _dkjhig(this['locator']));
  }, 'error': function (dbcfa) {
    console['error']('[xmldom error]\t' + dbcfa, _dkjhig(this['locator']));
  }, 'fatalError': function (dfehi) {
    throw console['error']('[xmldom fatalError]\t' + dfehi, _dkjhig(this['locator'])), dfehi;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (wvyxuz) {
  _dmlnk['prototype'][wvyxuz] = function () {
    return null;
  };
});var _dfjgh = require('./bbbsax')['XMLReader'],
    _d$013 = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _d_30421;