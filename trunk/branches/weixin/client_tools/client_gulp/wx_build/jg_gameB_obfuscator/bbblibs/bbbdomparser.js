var _ = wx.y$;
function _debacdf(x$zvw) {
  this['options'] = x$zvw || { 'locator': {} };
}function _dlnokmj(gjfhik, qmpon, ompnr) {
  function _yz$0x(rnqpso) {
    var mpknol = gjfhik[rnqpso];!mpknol && ifhgkj && (mpknol = 0x2 == gjfhik['length'] ? function (cgbedf) {
      gjfhik(rnqpso, cgbedf);
    } : gjfhik), zy0x$[rnqpso] = mpknol && function (fbade) {
      mpknol('[xmldom ' + rnqpso + ']\t' + fbade + _dz$_0y1(ompnr));
    } || function () {};
  }if (!gjfhik) {
    if (qmpon instanceof _dhlgi) return qmpon;gjfhik = qmpon;
  }var zy0x$ = {},
      ifhgkj = gjfhik instanceof Function;return ompnr = ompnr || {}, _yz$0x('warning'), _yz$0x('error'), _yz$0x('fatalError'), zy0x$;
}function _dhlgi() {
  this['cdata'] = !0x1;
}function _dustvrw(nlqop, nopmrq) {
  nopmrq['lineNumber'] = nlqop['lineNumber'], nopmrq['columnNumber'] = nlqop['columnNumber'];
}function _dz$_0y1(prn) {
  return prn ? '\x0a@' + (prn['systemId'] || '') + '#[line:' + prn['lineNumber'] + ',col:' + prn['columnNumber'] + ']' : void 0x0;
}function _duzvxyw(qsrput, fecgh, lig) {
  return 'string' == typeof qsrput ? qsrput['substr'](fecgh, lig) : qsrput['length'] >= fecgh + lig || fecgh ? new java['lang']['String'](qsrput, fecgh, lig) + '' : qsrput;
}function _dqmlonp(xw$zy_, zy_01) {
  xw$zy_['currentElement'] ? xw$zy_['currentElement']['appendChild'](zy_01) : xw$zy_['doc']['appendChild'](zy_01);
}_debacdf['prototype']['parseFromString'] = function (deihg, xzuvwy) {
  var dbacfe = this['options'],
      swtxu = new _djlinkm(),
      yz$x = dbacfe['domBuilder'] || new _dhlgi(),
      oprtqs = dbacfe['errorHandler'],
      rptqu = dbacfe['locator'],
      fhc = dbacfe['xmlns'] || {},
      ihlkgj = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return rptqu && yz$x['setDocumentLocator'](rptqu), swtxu['errorHandler'] = _dlnokmj(oprtqs, yz$x, rptqu), swtxu['domBuilder'] = dbacfe['domBuilder'] || yz$x, /\/x?html?$/['test'](xzuvwy) && (ihlkgj['nbsp'] = '\u00a0', ihlkgj['copy'] = '©', fhc[''] = 'http://www.w3.org/1999/xhtml'), fhc['xml'] = fhc['xml'] || 'http://www.w3.org/XML/1998/namespace', deihg ? swtxu['parse'](deihg, fhc, ihlkgj) : swtxu['errorHandler']['error']('invalid doc source'), yz$x['doc'];
}, _dhlgi['prototype'] = { 'startDocument': function () {
    this['doc'] = new _d_1z20()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (mnlopk, eijh, mljink, efhcdg) {
    var gcfedh = this['doc'],
        gdfih = gcfedh['createElementNS'](mnlopk, mljink || eijh),
        fgdh = efhcdg['length'];_dqmlonp(this, gdfih), this['currentElement'] = gdfih, this['locator'] && _dustvrw(this['locator'], gdfih);for (var lqnpm = 0x0; fgdh > lqnpm; lqnpm++) {
      var mnlopk = efhcdg['getURI'](lqnpm),
          oqmpn = efhcdg['getValue'](lqnpm),
          mljink = efhcdg['getQName'](lqnpm),
          cegdf = gcfedh['createAttributeNS'](mnlopk, mljink);this['locator'] && _dustvrw(efhcdg['getLocator'](lqnpm), cegdf), cegdf['value'] = cegdf['nodeValue'] = oqmpn, gdfih['setAttributeNode'](cegdf);
    }
  }, 'endElement': function () {
    {
      var ustrqp = this['currentElement'];ustrqp['tagName'];
    }this['currentElement'] = ustrqp['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (bfdac, z_01y$) {
    var ijklm = this['doc']['createProcessingInstruction'](bfdac, z_01y$);this['locator'] && _dustvrw(this['locator'], ijklm), _dqmlonp(this, ijklm);
  }, 'ignorableWhitespace': function () {}, 'characters': function (njkoml) {
    if (njkoml = _duzvxyw['apply'](this, arguments)) {
      if (this['cdata']) var gfje = this['doc']['createCDATASection'](njkoml);else var gfje = this['doc']['createTextNode'](njkoml);this['currentElement'] ? this['currentElement']['appendChild'](gfje) : /^\s*$/['test'](njkoml) && this['doc']['appendChild'](gfje), this['locator'] && _dustvrw(this['locator'], gfje);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (rspoq) {
    (this['locator'] = rspoq) && (rspoq['lineNumber'] = 0x0);
  }, 'comment': function (hfdig) {
    hfdig = _duzvxyw['apply'](this, arguments);var xz$y_0 = this['doc']['createComment'](hfdig);this['locator'] && _dustvrw(this['locator'], xz$y_0), _dqmlonp(this, xz$y_0);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (lqpnom, hefijg, z0y1$_) {
    var sqprot = this['doc']['implementation'];if (sqprot && sqprot['createDocumentType']) {
      var cghed = sqprot['createDocumentType'](lqpnom, hefijg, z0y1$_);this['locator'] && _dustvrw(this['locator'], cghed), _dqmlonp(this, cghed);
    }
  }, 'warning': function (nplmo) {
    console['warn']('[xmldom warning]\t' + nplmo, _dz$_0y1(this['locator']));
  }, 'error': function (_43210) {
    console['error']('[xmldom error]\t' + _43210, _dz$_0y1(this['locator']));
  }, 'fatalError': function (abfedc) {
    throw console['error']('[xmldom fatalError]\t' + abfedc, _dz$_0y1(this['locator'])), abfedc;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (mrqop) {
  _dhlgi['prototype'][mrqop] = function () {
    return null;
  };
});var _djlinkm = require('./bbbsax')['XMLReader'],
    _d_1z20 = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _debacdf;