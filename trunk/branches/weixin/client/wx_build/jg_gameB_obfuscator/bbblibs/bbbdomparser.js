var _ = wx.y$;
function _dyzwvxu(dbacfe) {
  this['options'] = dbacfe || { 'locator': {} };
}function _dtuqprs(zxy0$, z_10$2, spnqr) {
  function lnopmk(qps) {
    var lnkojm = zxy0$[qps];!lnkojm && _4103 && (lnkojm = 0x2 == zxy0$['length'] ? function (qrtps) {
      zxy0$(qps, qrtps);
    } : zxy0$), oknpml[qps] = lnkojm ? function (wyxzuv) {
      lnkojm('[xmldom ' + qps + ']\t' + wyxzuv + _dspoqr(spnqr));
    } : function () {};
  }if (!zxy0$) {
    if (z_10$2 instanceof _dvzy$w) return z_10$2;zxy0$ = z_10$2;
  }var oknpml = {},
      _4103 = zxy0$ instanceof Function;return spnqr = spnqr || {}, lnopmk('warning'), lnopmk('error'), lnopmk('fatalError'), oknpml;
}function _dvzy$w() {
  this['cdata'] = !0x1;
}function _dghjfi(gfdebc, $y1_0z) {
  $y1_0z['lineNumber'] = gfdebc['lineNumber'], $y1_0z['columnNumber'] = gfdebc['columnNumber'];
}function _dspoqr(gjhikl) {
  return gjhikl ? '\x0a@' + (gjhikl['systemId'] || '') + '#[line:' + gjhikl['lineNumber'] + ',col:' + gjhikl['columnNumber'] + ']' : void 0x0;
}function _djfhegi(tvr, gcfehd, suwrt) {
  return 'string' == typeof tvr ? tvr['substr'](gcfehd, suwrt) : tvr['length'] >= gcfehd + suwrt || gcfehd ? new java['lang']['String'](tvr, gcfehd, suwrt) + '' : tvr;
}function _dvx$yzw(okjmn, qostrp) {
  (okjmn['currentElement'] || okjmn['doc'])['appendChild'](qostrp);
}_dyzwvxu['prototype']['parseFromString'] = function (zuvy, lnjkim) {
  var oqnpsr = this['options'],
      fgkijh = new _dx0_$(),
      trpos = oqnpsr['domBuilder'] || new _dvzy$w(),
      y$_z0x = oqnpsr['errorHandler'],
      pmkonl = oqnpsr['locator'],
      _$03 = oqnpsr['xmlns'] || {},
      rpsuq = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return pmkonl && trpos['setDocumentLocator'](pmkonl), fgkijh['errorHandler'] = _dtuqprs(y$_z0x, trpos, pmkonl), fgkijh['domBuilder'] = oqnpsr['domBuilder'] || trpos, /\/x?html?$/['test'](lnjkim) && (rpsuq['nbsp'] = '\u00a0', rpsuq['copy'] = '©', _$03[''] = 'http://www.w3.org/1999/xhtml'), _$03['xml'] = _$03['xml'] || 'http://www.w3.org/XML/1998/namespace', zuvy ? fgkijh['parse'](zuvy, _$03, rpsuq) : fgkijh['errorHandler']['error']('invalid doc source'), trpos['doc'];
}, _dvzy$w['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dsrtwv()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (hkfig, npq, nkjilm, _z2) {
    var gdcfhe = this['doc'],
        xy0$_ = gdcfhe['createElementNS'](hkfig, nkjilm || npq),
        yvx$z = _z2['length'];_dvx$yzw(this, xy0$_), this['currentElement'] = xy0$_, this['locator'] && _dghjfi(this['locator'], xy0$_);for (var xy_$0 = 0x0; xy_$0 < yvx$z; xy_$0++) {
      var hkfig = _z2['getURI'](xy_$0),
          tqrpos = _z2['getValue'](xy_$0),
          nkjilm = _z2['getQName'](xy_$0),
          qonlpm = gdcfhe['createAttributeNS'](hkfig, nkjilm);this['locator'] && _dghjfi(_z2['getLocator'](xy_$0), qonlpm), qonlpm['value'] = qonlpm['nodeValue'] = tqrpos, xy0$_['setAttributeNode'](qonlpm);
    }
  }, 'endElement': function () {
    var xwyz_ = this['currentElement'];xwyz_['tagName'], this['currentElement'] = xwyz_['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (glhkji, vr) {
    vr = this['doc']['createProcessingInstruction'](glhkji, vr), (this['locator'] && _dghjfi(this['locator'], vr), _dvx$yzw(this, vr));
  }, 'ignorableWhitespace': function () {}, 'characters': function (tvuxs) {
    var tsrupq;(tvuxs = _djfhegi['apply'](this, arguments)) && (tsrupq = this['cdata'] ? this['doc']['createCDATASection'](tvuxs) : this['doc']['createTextNode'](tvuxs), this['currentElement'] ? this['currentElement']['appendChild'](tsrupq) : /^\s*$/['test'](tvuxs) && this['doc']['appendChild'](tsrupq), this['locator'] && _dghjfi(this['locator'], tsrupq));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (vstw) {
    (this['locator'] = vstw) && (vstw['lineNumber'] = 0x0);
  }, 'comment': function (trpsu) {
    trpsu = _djfhegi['apply'](this, arguments);var qonmrp = this['doc']['createComment'](trpsu);this['locator'] && _dghjfi(this['locator'], qonmrp), _dvx$yzw(this, qonmrp);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (lonjmk, x0$zy, xwuvt) {
    var $wzyx_ = this['doc']['implementation'];$wzyx_ && $wzyx_['createDocumentType'] && (xwuvt = $wzyx_['createDocumentType'](lonjmk, x0$zy, xwuvt), this['locator'] && _dghjfi(this['locator'], xwuvt), _dvx$yzw(this, xwuvt));
  }, 'warning': function (pqsro) {
    console['warn']('[xmldom warning]\t' + pqsro, _dspoqr(this['locator']));
  }, 'error': function (imlnj) {
    console['error']('[xmldom error]\t' + imlnj, _dspoqr(this['locator']));
  }, 'fatalError': function (opqnr) {
    throw console['error']('[xmldom fatalError]\t' + opqnr, _dspoqr(this['locator'])), opqnr;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (lmpkno) {
  _dvzy$w['prototype'][lmpkno] = function () {
    return null;
  };
});var _dx0_$ = require('./bbbsax')['XMLReader'],
    _dsrtwv = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dyzwvxu;