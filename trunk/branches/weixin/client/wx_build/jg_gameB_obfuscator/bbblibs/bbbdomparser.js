var _ = wx.y$;
function _dqutpsr(rtusv) {
  this['options'] = rtusv || { 'locator': {} };
}function _djhkil(ptqro, khlimj, efjh) {
  function vzxuyw(ilmjn) {
    var xuswtv = ptqro[ilmjn];!xuswtv && hlijmk && (xuswtv = 0x2 == ptqro['length'] ? function (mjikh) {
      ptqro(ilmjn, mjikh);
    } : ptqro), vsutq[ilmjn] = xuswtv ? function (xz$y_0) {
      xuswtv('[xmldom ' + ilmjn + ']\t' + xz$y_0 + _dvwtxus(efjh));
    } : function () {};
  }if (!ptqro) {
    if (khlimj instanceof _dgei) return khlimj;ptqro = khlimj;
  }var vsutq = {},
      hlijmk = ptqro instanceof Function;return efjh = efjh || {}, vzxuyw('warning'), vzxuyw('error'), vzxuyw('fatalError'), vsutq;
}function _dgei() {
  this['cdata'] = !0x1;
}function _dikfjhg(fbd, $xvzw) {
  $xvzw['lineNumber'] = fbd['lineNumber'], $xvzw['columnNumber'] = fbd['columnNumber'];
}function _dvwtxus(qpnlm) {
  return qpnlm ? '\x0a@' + (qpnlm['systemId'] || '') + '#[line:' + qpnlm['lineNumber'] + ',col:' + qpnlm['columnNumber'] + ']' : void 0x0;
}function _dghde(rusvtq, qusp, dehgf) {
  return 'string' == typeof rusvtq ? rusvtq['substr'](qusp, dehgf) : rusvtq['length'] >= qusp + dehgf || qusp ? new java['lang']['String'](rusvtq, qusp, dehgf) + '' : rusvtq;
}function _djikgfh(cgdfe, $012z_) {
  (cgdfe['currentElement'] || cgdfe['doc'])['appendChild']($012z_);
}_dqutpsr['prototype']['parseFromString'] = function (hifegj, x0z_y$) {
  var qtrsv = this['options'],
      kgijhl = new _dghjfki(),
      jihkfg = qtrsv['domBuilder'] || new _dgei(),
      xvyuw = qtrsv['errorHandler'],
      hml = qtrsv['locator'],
      snqrop = qtrsv['xmlns'] || {},
      cbgedf = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return hml && jihkfg['setDocumentLocator'](hml), kgijhl['errorHandler'] = _djhkil(xvyuw, jihkfg, hml), kgijhl['domBuilder'] = qtrsv['domBuilder'] || jihkfg, /\/x?html?$/['test'](x0z_y$) && (cbgedf['nbsp'] = '\u00a0', cbgedf['copy'] = '©', snqrop[''] = 'http://www.w3.org/1999/xhtml'), snqrop['xml'] = snqrop['xml'] || 'http://www.w3.org/XML/1998/namespace', hifegj ? kgijhl['parse'](hifegj, snqrop, cbgedf) : kgijhl['errorHandler']['error']('invalid doc source'), jihkfg['doc'];
}, _dgei['prototype'] = { 'startDocument': function () {
    this['doc'] = new _d$z10_()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ihgjkf, ikmjlh, npqmol, uprsqt) {
    var z_10y = this['doc'],
        npkolm = z_10y['createElementNS'](ihgjkf, npqmol || ikmjlh),
        srto = uprsqt['length'];_djikgfh(this, npkolm), this['currentElement'] = npkolm, this['locator'] && _dikfjhg(this['locator'], npkolm);for (var jihkl = 0x0; jihkl < srto; jihkl++) {
      var ihgjkf = uprsqt['getURI'](jihkl),
          tyvxu = uprsqt['getValue'](jihkl),
          npqmol = uprsqt['getQName'](jihkl),
          kojmnl = z_10y['createAttributeNS'](ihgjkf, npqmol);this['locator'] && _dikfjhg(uprsqt['getLocator'](jihkl), kojmnl), kojmnl['value'] = kojmnl['nodeValue'] = tyvxu, npkolm['setAttributeNode'](kojmnl);
    }
  }, 'endElement': function () {
    var fehc = this['currentElement'];fehc['tagName'], this['currentElement'] = fehc['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (wtsxvu, wvzxy) {
    wvzxy = this['doc']['createProcessingInstruction'](wtsxvu, wvzxy), (this['locator'] && _dikfjhg(this['locator'], wvzxy), _djikgfh(this, wvzxy));
  }, 'ignorableWhitespace': function () {}, 'characters': function (kpmoln) {
    var ptu;(kpmoln = _dghde['apply'](this, arguments)) && (ptu = this['cdata'] ? this['doc']['createCDATASection'](kpmoln) : this['doc']['createTextNode'](kpmoln), this['currentElement'] ? this['currentElement']['appendChild'](ptu) : /^\s*$/['test'](kpmoln) && this['doc']['appendChild'](ptu), this['locator'] && _dikfjhg(this['locator'], ptu));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (wv$xy) {
    (this['locator'] = wv$xy) && (wv$xy['lineNumber'] = 0x0);
  }, 'comment': function (srptqu) {
    srptqu = _dghde['apply'](this, arguments);var cdhgf = this['doc']['createComment'](srptqu);this['locator'] && _dikfjhg(this['locator'], cdhgf), _djikgfh(this, cdhgf);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (gife, x_zy$w, $wy_xz) {
    var wyxzuv = this['doc']['implementation'];wyxzuv && wyxzuv['createDocumentType'] && ($wy_xz = wyxzuv['createDocumentType'](gife, x_zy$w, $wy_xz), this['locator'] && _dikfjhg(this['locator'], $wy_xz), _djikgfh(this, $wy_xz));
  }, 'warning': function (wyxv$) {
    console['warn']('[xmldom warning]\t' + wyxv$, _dvwtxus(this['locator']));
  }, 'error': function (tyxv) {
    console['error']('[xmldom error]\t' + tyxv, _dvwtxus(this['locator']));
  }, 'fatalError': function (poqmn) {
    throw console['error']('[xmldom fatalError]\t' + poqmn, _dvwtxus(this['locator'])), poqmn;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function ($_zwy) {
  _dgei['prototype'][$_zwy] = function () {
    return null;
  };
});var _dghjfki = require('./bbbsax')['XMLReader'],
    _d$z10_ = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dqutpsr;