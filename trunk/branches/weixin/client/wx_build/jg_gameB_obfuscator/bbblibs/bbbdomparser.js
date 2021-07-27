var _ = wx.y$;
function _dpron(uyxtv) {
  this['options'] = uyxtv || { 'locator': {} };
}function _dsrvtqu(uxyvwz, idgh, pkomn) {
  function jihklm(y_z10$) {
    var vuxtw = uxyvwz[y_z10$];!vuxtw && lkopmn && (vuxtw = 0x2 == uxyvwz['length'] ? function (_10y) {
      uxyvwz(y_z10$, _10y);
    } : uxyvwz), _13042[y_z10$] = vuxtw ? function (uwvytx) {
      vuxtw('[xmldom ' + y_z10$ + ']\t' + uwvytx + _dnqmrop(pkomn));
    } : function () {};
  }if (!uxyvwz) {
    if (idgh instanceof _dyvwz$x) return idgh;uxyvwz = idgh;
  }var _13042 = {},
      lkopmn = uxyvwz instanceof Function;return pkomn = pkomn || {}, jihklm('warning'), jihklm('error'), jihklm('fatalError'), _13042;
}function _dyvwz$x() {
  this['cdata'] = !0x1;
}function _dwvxsu(rtosp, vyzu) {
  vyzu['lineNumber'] = rtosp['lineNumber'], vyzu['columnNumber'] = rtosp['columnNumber'];
}function _dnqmrop(mrpqo) {
  return mrpqo ? '\x0a@' + (mrpqo['systemId'] || '') + '#[line:' + mrpqo['lineNumber'] + ',col:' + mrpqo['columnNumber'] + ']' : void 0x0;
}function _dlkmjn(xzywv, ehfcgd, ghfce) {
  return 'string' == typeof xzywv ? xzywv['substr'](ehfcgd, ghfce) : xzywv['length'] >= ehfcgd + ghfce || ehfcgd ? new java['lang']['String'](xzywv, ehfcgd, ghfce) + '' : xzywv;
}function _dmnlqop(kmjlhi, oqtsp) {
  (kmjlhi['currentElement'] || kmjlhi['doc'])['appendChild'](oqtsp);
}_dpron['prototype']['parseFromString'] = function (z_y0x, xytvw) {
  var degfcb = this['options'],
      qpn = new _ddgf(),
      dehc = degfcb['domBuilder'] || new _dyvwz$x(),
      mknlop = degfcb['errorHandler'],
      gehji = degfcb['locator'],
      vwsux = degfcb['xmlns'] || {},
      hlgkji = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return gehji && dehc['setDocumentLocator'](gehji), qpn['errorHandler'] = _dsrvtqu(mknlop, dehc, gehji), qpn['domBuilder'] = degfcb['domBuilder'] || dehc, /\/x?html?$/['test'](xytvw) && (hlgkji['nbsp'] = '\u00a0', hlgkji['copy'] = '©', vwsux[''] = 'http://www.w3.org/1999/xhtml'), vwsux['xml'] = vwsux['xml'] || 'http://www.w3.org/XML/1998/namespace', z_y0x ? qpn['parse'](z_y0x, vwsux, hlgkji) : qpn['errorHandler']['error']('invalid doc source'), dehc['doc'];
}, _dyvwz$x['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dwrvuts()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_xwy, hfkgij, gjeh, ihkjl) {
    var ecbdfg = this['doc'],
        gdfihe = ecbdfg['createElementNS'](_xwy, gjeh || hfkgij),
        ijkhl = ihkjl['length'];_dmnlqop(this, gdfihe), this['currentElement'] = gdfihe, this['locator'] && _dwvxsu(this['locator'], gdfihe);for (var tpsqu = 0x0; tpsqu < ijkhl; tpsqu++) {
      var _xwy = ihkjl['getURI'](tpsqu),
          uvtxwy = ihkjl['getValue'](tpsqu),
          gjeh = ihkjl['getQName'](tpsqu),
          opmnql = ecbdfg['createAttributeNS'](_xwy, gjeh);this['locator'] && _dwvxsu(ihkjl['getLocator'](tpsqu), opmnql), opmnql['value'] = opmnql['nodeValue'] = uvtxwy, gdfihe['setAttributeNode'](opmnql);
    }
  }, 'endElement': function () {
    var porsq = this['currentElement'];porsq['tagName'], this['currentElement'] = porsq['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (kmnij, $y0zx) {
    $y0zx = this['doc']['createProcessingInstruction'](kmnij, $y0zx), (this['locator'] && _dwvxsu(this['locator'], $y0zx), _dmnlqop(this, $y0zx));
  }, 'ignorableWhitespace': function () {}, 'characters': function (tuvrq) {
    var qrpso;(tuvrq = _dlkmjn['apply'](this, arguments)) && (qrpso = this['cdata'] ? this['doc']['createCDATASection'](tuvrq) : this['doc']['createTextNode'](tuvrq), this['currentElement'] ? this['currentElement']['appendChild'](qrpso) : /^\s*$/['test'](tuvrq) && this['doc']['appendChild'](qrpso), this['locator'] && _dwvxsu(this['locator'], qrpso));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (tvwux) {
    (this['locator'] = tvwux) && (tvwux['lineNumber'] = 0x0);
  }, 'comment': function (srqtpu) {
    srqtpu = _dlkmjn['apply'](this, arguments);var hfiej = this['doc']['createComment'](srqtpu);this['locator'] && _dwvxsu(this['locator'], hfiej), _dmnlqop(this, hfiej);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (vy$wzx, rqsp, suqtp) {
    var facb = this['doc']['implementation'];facb && facb['createDocumentType'] && (suqtp = facb['createDocumentType'](vy$wzx, rqsp, suqtp), this['locator'] && _dwvxsu(this['locator'], suqtp), _dmnlqop(this, suqtp));
  }, 'warning': function (zwvyu) {
    console['warn']('[xmldom warning]\t' + zwvyu, _dnqmrop(this['locator']));
  }, 'error': function ($zy_01) {
    console['error']('[xmldom error]\t' + $zy_01, _dnqmrop(this['locator']));
  }, 'fatalError': function (zyux) {
    throw console['error']('[xmldom fatalError]\t' + zyux, _dnqmrop(this['locator'])), zyux;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (hikml) {
  _dyvwz$x['prototype'][hikml] = function () {
    return null;
  };
});var _ddgf = require('./bbbsax')['XMLReader'],
    _dwrvuts = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dpron;