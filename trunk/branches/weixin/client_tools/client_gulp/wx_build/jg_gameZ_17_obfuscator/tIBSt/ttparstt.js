var g = wx.u$;
function _do7z$lb(lb$z7o) {
  this['options'] = lb$z7o || { 'locator': {} };
}function _dqdvu5f(ygjkn, lop, pmlco) {
  function xpzmco(kigny) {
    var opcmxz = ygjkn[kigny];!opcmxz && w8seh_ && (opcmxz = 0x2 == ygjkn['length'] ? function (xpco4) {
      ygjkn(kigny, xpco4);
    } : ygjkn), ngkij[kigny] = opcmxz && function (colpmz) {
      opcmxz('[xmldom ' + kigny + ']\t' + colpmz + _do7mz(pmlco));
    } || function () {};
  }if (!ygjkn) {
    if (lop instanceof _djkynw_) return lop;ygjkn = lop;
  }var ngkij = {},
      w8seh_ = ygjkn instanceof Function;return pmlco = pmlco || {}, xpzmco('warning'), xpzmco('error'), xpzmco('fatalError'), ngkij;
}function _djkynw_() {
  this['cdata'] = !0x1;
}function _dv5fd(_nwk, kwnj_e) {
  kwnj_e['lineNumber'] = _nwk['lineNumber'], kwnj_e['columnNumber'] = _nwk['columnNumber'];
}function _do7mz(mlzoc) {
  return mlzoc ? '\x0a@' + (mlzoc['systemId'] || '') + '#[line:' + mlzoc['lineNumber'] + ',col:' + mlzoc['columnNumber'] + ']' : void 0x0;
}function _dd6f(u5b9v, $b9uv, gjixy4) {
  return 'string' == typeof u5b9v ? u5b9v['substr']($b9uv, gjixy4) : u5b9v['length'] >= $b9uv + gjixy4 || $b9uv ? new java['lang']['String'](u5b9v, $b9uv, gjixy4) + '' : u5b9v;
}function _dq5fdr(ypxg, f5) {
  ypxg['currentElement'] ? ypxg['currentElement']['appendChild'](f5) : ypxg['doc']['appendChild'](f5);
}_do7z$lb['prototype']['parseFromString'] = function (cipx, xicmp) {
  var nkwy_ = this['options'],
      ygi4jx = new _dyji4gx(),
      k_hwe8 = nkwy_['domBuilder'] || new _djkynw_(),
      vq9u5 = nkwy_['errorHandler'],
      zcmlo7 = nkwy_['locator'],
      qr5f = nkwy_['xmlns'] || {},
      pci = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return zcmlo7 && k_hwe8['setDocumentLocator'](zcmlo7), ygi4jx['errorHandler'] = _dqdvu5f(vq9u5, k_hwe8, zcmlo7), ygi4jx['domBuilder'] = nkwy_['domBuilder'] || k_hwe8, /\/x?html?$/['test'](xicmp) && (pci['nbsp'] = '\u00a0', pci['copy'] = '©', qr5f[''] = 'http://www.w3.org/1999/xhtml'), qr5f['xml'] = qr5f['xml'] || 'http://www.w3.org/XML/1998/namespace', cipx ? ygi4jx['parse'](cipx, qr5f, pci) : ygi4jx['errorHandler']['error']('invalid doc source'), k_hwe8['doc'];
}, _djkynw_['prototype'] = { 'startDocument': function () {
    this['doc'] = new _d$oz7()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (rf3t1, qdt6, _ngyjk, e_nwkj) {
    var tr613f = this['doc'],
        jixyg = tr613f['createElementNS'](rf3t1, _ngyjk || qdt6),
        b5vu2 = e_nwkj['length'];_dq5fdr(this, jixyg), this['currentElement'] = jixyg, this['locator'] && _dv5fd(this['locator'], jixyg);for (var d2v = 0x0; b5vu2 > d2v; d2v++) {
      var rf3t1 = e_nwkj['getURI'](d2v),
          _kjenw = e_nwkj['getValue'](d2v),
          _ngyjk = e_nwkj['getQName'](d2v),
          mczxpo = tr613f['createAttributeNS'](rf3t1, _ngyjk);this['locator'] && _dv5fd(e_nwkj['getLocator'](d2v), mczxpo), mczxpo['value'] = mczxpo['nodeValue'] = _kjenw, jixyg['setAttributeNode'](mczxpo);
    }
  }, 'endElement': function () {
    {
      var xpo4m = this['currentElement'];xpo4m['tagName'];
    }this['currentElement'] = xpo4m['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (pozx, _wyj) {
    var r13f6t = this['doc']['createProcessingInstruction'](pozx, _wyj);this['locator'] && _dv5fd(this['locator'], r13f6t), _dq5fdr(this, r13f6t);
  }, 'ignorableWhitespace': function () {}, 'characters': function (b9v5u2) {
    if (b9v5u2 = _dd6f['apply'](this, arguments)) {
      if (this['cdata']) var ft3rd6 = this['doc']['createCDATASection'](b9v5u2);else var ft3rd6 = this['doc']['createTextNode'](b9v5u2);this['currentElement'] ? this['currentElement']['appendChild'](ft3rd6) : /^\s*$/['test'](b9v5u2) && this['doc']['appendChild'](ft3rd6), this['locator'] && _dv5fd(this['locator'], ft3rd6);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (pzomx) {
    (this['locator'] = pzomx) && (pzomx['lineNumber'] = 0x0);
  }, 'comment': function (frdqt6) {
    frdqt6 = _dd6f['apply'](this, arguments);var b2v59 = this['doc']['createComment'](frdqt6);this['locator'] && _dv5fd(this['locator'], b2v59), _dq5fdr(this, b2v59);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (u259vq, ehkw8, bz) {
    var c4xpo = this['doc']['implementation'];if (c4xpo && c4xpo['createDocumentType']) {
      var nkej_ = c4xpo['createDocumentType'](u259vq, ehkw8, bz);this['locator'] && _dv5fd(this['locator'], nkej_), _dq5fdr(this, nkej_);
    }
  }, 'warning': function (fudv5) {
    console['warn']('[xmldom warning]\t' + fudv5, _do7mz(this['locator']));
  }, 'error': function (p4icm) {
    console['error']('[xmldom error]\t' + p4icm, _do7mz(this['locator']));
  }, 'fatalError': function (ekjn_) {
    throw console['error']('[xmldom fatalError]\t' + ekjn_, _do7mz(this['locator'])), ekjn_;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (nwek) {
  _djkynw_['prototype'][nwek] = function () {
    return null;
  };
});var _dyji4gx = require('./tT12tt')['XMLReader'],
    _d$oz7 = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = _do7z$lb;