var _ = wx.y$;
function _dkhgfi(pqus) {
  this['options'] = pqus || { 'locator': {} };
}function _dbegf(cdbeg, npqsr, lmjhik) {
  function gfjkh(pnqos) {
    var lmopn = cdbeg[pnqos];!lmopn && _41203 && (lmopn = 0x2 == cdbeg['length'] ? function (mojknl) {
      cdbeg(pnqos, mojknl);
    } : cdbeg), nklopm[pnqos] = lmopn ? function (sur) {
      lmopn('[xmldom ' + pnqos + ']\t' + sur + _dokmpn(lmjhik));
    } : function () {};
  }if (!cdbeg) {
    if (npqsr instanceof _dbgdcef) return npqsr;cdbeg = npqsr;
  }var nklopm = {},
      _41203 = cdbeg instanceof Function;return lmjhik = lmjhik || {}, gfjkh('warning'), gfjkh('error'), gfjkh('fatalError'), nklopm;
}function _dbgdcef() {
  this['cdata'] = !0x1;
}function _dvyxuzw(yuvxzw, qpsno) {
  qpsno['lineNumber'] = yuvxzw['lineNumber'], qpsno['columnNumber'] = yuvxzw['columnNumber'];
}function _dokmpn(z_$1y0) {
  return z_$1y0 ? '\x0a@' + (z_$1y0['systemId'] || '') + '#[line:' + z_$1y0['lineNumber'] + ',col:' + z_$1y0['columnNumber'] + ']' : void 0x0;
}function _dpqrmo(glihk, mikjlh, ploqmn) {
  return 'string' == typeof glihk ? glihk['substr'](mikjlh, ploqmn) : glihk['length'] >= mikjlh + ploqmn || mikjlh ? new java['lang']['String'](glihk, mikjlh, ploqmn) + '' : glihk;
}function _d$zw_xy(mnikl, kihjgl) {
  (mnikl['currentElement'] || mnikl['doc'])['appendChild'](kihjgl);
}_dkhgfi['prototype']['parseFromString'] = function (tusqvr, xzvuy) {
  var gehjif = this['options'],
      olnmkj = new _degchdf(),
      rwtuvs = gehjif['domBuilder'] || new _dbgdcef(),
      mnoprq = gehjif['errorHandler'],
      qsrvt = gehjif['locator'],
      jhfgk = gehjif['xmlns'] || {},
      dcfbge = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return qsrvt && rwtuvs['setDocumentLocator'](qsrvt), olnmkj['errorHandler'] = _dbegf(mnoprq, rwtuvs, qsrvt), olnmkj['domBuilder'] = gehjif['domBuilder'] || rwtuvs, /\/x?html?$/['test'](xzvuy) && (dcfbge['nbsp'] = '\u00a0', dcfbge['copy'] = '©', jhfgk[''] = 'http://www.w3.org/1999/xhtml'), jhfgk['xml'] = jhfgk['xml'] || 'http://www.w3.org/XML/1998/namespace', tusqvr ? olnmkj['parse'](tusqvr, jhfgk, dcfbge) : olnmkj['errorHandler']['error']('invalid doc source'), rwtuvs['doc'];
}, _dbgdcef['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dtps()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (dihef, z01y$, lkjnmo, z$wyx_) {
    var ihfgej = this['doc'],
        qutpsr = ihfgej['createElementNS'](dihef, lkjnmo || z01y$),
        cfadeb = z$wyx_['length'];_d$zw_xy(this, qutpsr), this['currentElement'] = qutpsr, this['locator'] && _dvyxuzw(this['locator'], qutpsr);for (var giefj = 0x0; giefj < cfadeb; giefj++) {
      var dihef = z$wyx_['getURI'](giefj),
          _yz$0 = z$wyx_['getValue'](giefj),
          lkjnmo = z$wyx_['getQName'](giefj),
          vwyut = ihfgej['createAttributeNS'](dihef, lkjnmo);this['locator'] && _dvyxuzw(z$wyx_['getLocator'](giefj), vwyut), vwyut['value'] = vwyut['nodeValue'] = _yz$0, qutpsr['setAttributeNode'](vwyut);
    }
  }, 'endElement': function () {
    var putqs = this['currentElement'];putqs['tagName'], this['currentElement'] = putqs['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (mnoplk, vxuwyt) {
    vxuwyt = this['doc']['createProcessingInstruction'](mnoplk, vxuwyt), (this['locator'] && _dvyxuzw(this['locator'], vxuwyt), _d$zw_xy(this, vxuwyt));
  }, 'ignorableWhitespace': function () {}, 'characters': function (hkjf) {
    var gkihf;(hkjf = _dpqrmo['apply'](this, arguments)) && (gkihf = this['cdata'] ? this['doc']['createCDATASection'](hkjf) : this['doc']['createTextNode'](hkjf), this['currentElement'] ? this['currentElement']['appendChild'](gkihf) : /^\s*$/['test'](hkjf) && this['doc']['appendChild'](gkihf), this['locator'] && _dvyxuzw(this['locator'], gkihf));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (twuxvs) {
    (this['locator'] = twuxvs) && (twuxvs['lineNumber'] = 0x0);
  }, 'comment': function (qtosr) {
    qtosr = _dpqrmo['apply'](this, arguments);var ihfejg = this['doc']['createComment'](qtosr);this['locator'] && _dvyxuzw(this['locator'], ihfejg), _d$zw_xy(this, ihfejg);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (tsrpqu, lmihkj, lnmj) {
    var cfgedb = this['doc']['implementation'];cfgedb && cfgedb['createDocumentType'] && (lnmj = cfgedb['createDocumentType'](tsrpqu, lmihkj, lnmj), this['locator'] && _dvyxuzw(this['locator'], lnmj), _d$zw_xy(this, lnmj));
  }, 'warning': function (lopnmq) {
    console['warn']('[xmldom warning]\t' + lopnmq, _dokmpn(this['locator']));
  }, 'error': function (uptqr) {
    console['error']('[xmldom error]\t' + uptqr, _dokmpn(this['locator']));
  }, 'fatalError': function (pmonl) {
    throw console['error']('[xmldom fatalError]\t' + pmonl, _dokmpn(this['locator'])), pmonl;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_xy$z0) {
  _dbgdcef['prototype'][_xy$z0] = function () {
    return null;
  };
});var _degchdf = require('./bbbsax')['XMLReader'],
    _dtps = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dkhgfi;