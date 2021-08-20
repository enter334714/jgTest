var _ = wx.y$;
function _d_wyz$(utwrsv) {
  this['options'] = utwrsv || { 'locator': {} };
}function _dtrospq(kjnim, $20_, nspqr) {
  function mnklpo(xuwvzy) {
    var ighfkj = kjnim[xuwvzy];!ighfkj && mnql && (ighfkj = 0x2 == kjnim['length'] ? function (dbfegc) {
      kjnim(xuwvzy, dbfegc);
    } : kjnim), oqs[xuwvzy] = ighfkj ? function (dhg) {
      ighfkj('[xmldom ' + xuwvzy + ']\t' + dhg + _dwstxv(nspqr));
    } : function () {};
  }if (!kjnim) {
    if ($20_ instanceof _ddbcg) return $20_;kjnim = $20_;
  }var oqs = {},
      mnql = kjnim instanceof Function;return nspqr = nspqr || {}, mnklpo('warning'), mnklpo('error'), mnklpo('fatalError'), oqs;
}function _ddbcg() {
  this['cdata'] = !0x1;
}function _dxywtuv(gkhl, yutvxw) {
  yutvxw['lineNumber'] = gkhl['lineNumber'], yutvxw['columnNumber'] = gkhl['columnNumber'];
}function _dwstxv(kinmlj) {
  return kinmlj ? '\x0a@' + (kinmlj['systemId'] || '') + '#[line:' + kinmlj['lineNumber'] + ',col:' + kinmlj['columnNumber'] + ']' : void 0x0;
}function _d$y0_zx(x$zvy, poqrsn, hgfij) {
  return 'string' == typeof x$zvy ? x$zvy['substr'](poqrsn, hgfij) : x$zvy['length'] >= poqrsn + hgfij || poqrsn ? new java['lang']['String'](x$zvy, poqrsn, hgfij) + '' : x$zvy;
}function _dsvu(xwzvy$, kifhg) {
  (xwzvy$['currentElement'] || xwzvy$['doc'])['appendChild'](kifhg);
}_d_wyz$['prototype']['parseFromString'] = function (x0z_y, bacd) {
  var vruwst = this['options'],
      xwutv = new _dxy$zw(),
      hjgk = vruwst['domBuilder'] || new _ddbcg(),
      hjgik = vruwst['errorHandler'],
      sornqp = vruwst['locator'],
      ieghjf = vruwst['xmlns'] || {},
      urvstw = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return sornqp && hjgk['setDocumentLocator'](sornqp), xwutv['errorHandler'] = _dtrospq(hjgik, hjgk, sornqp), xwutv['domBuilder'] = vruwst['domBuilder'] || hjgk, /\/x?html?$/['test'](bacd) && (urvstw['nbsp'] = '\u00a0', urvstw['copy'] = '©', ieghjf[''] = 'http://www.w3.org/1999/xhtml'), ieghjf['xml'] = ieghjf['xml'] || 'http://www.w3.org/XML/1998/namespace', x0z_y ? xwutv['parse'](x0z_y, ieghjf, urvstw) : xwutv['errorHandler']['error']('invalid doc source'), hjgk['doc'];
}, _ddbcg['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dsvtq()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ecdbgf, dihef, cefdgh, dabefc) {
    var fihk = this['doc'],
        txvwuy = fihk['createElementNS'](ecdbgf, cefdgh || dihef),
        vusxw = dabefc['length'];_dsvu(this, txvwuy), this['currentElement'] = txvwuy, this['locator'] && _dxywtuv(this['locator'], txvwuy);for (var vutr = 0x0; vutr < vusxw; vutr++) {
      var ecdbgf = dabefc['getURI'](vutr),
          gfjk = dabefc['getValue'](vutr),
          cefdgh = dabefc['getQName'](vutr),
          ecgfdb = fihk['createAttributeNS'](ecdbgf, cefdgh);this['locator'] && _dxywtuv(dabefc['getLocator'](vutr), ecgfdb), ecgfdb['value'] = ecgfdb['nodeValue'] = gfjk, txvwuy['setAttributeNode'](ecgfdb);
    }
  }, 'endElement': function () {
    var $z_0x = this['currentElement'];$z_0x['tagName'], this['currentElement'] = $z_0x['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (dgcbe, _zx0y$) {
    _zx0y$ = this['doc']['createProcessingInstruction'](dgcbe, _zx0y$), (this['locator'] && _dxywtuv(this['locator'], _zx0y$), _dsvu(this, _zx0y$));
  }, 'ignorableWhitespace': function () {}, 'characters': function (_$xz0) {
    var wvtrsu;(_$xz0 = _d$y0_zx['apply'](this, arguments)) && (wvtrsu = this['cdata'] ? this['doc']['createCDATASection'](_$xz0) : this['doc']['createTextNode'](_$xz0), this['currentElement'] ? this['currentElement']['appendChild'](wvtrsu) : /^\s*$/['test'](_$xz0) && this['doc']['appendChild'](wvtrsu), this['locator'] && _dxywtuv(this['locator'], wvtrsu));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (efhgcd) {
    (this['locator'] = efhgcd) && (efhgcd['lineNumber'] = 0x0);
  }, 'comment': function ($y_01) {
    $y_01 = _d$y0_zx['apply'](this, arguments);var uyvtxw = this['doc']['createComment']($y_01);this['locator'] && _dxywtuv(this['locator'], uyvtxw), _dsvu(this, uyvtxw);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ijheg, ie, kigh) {
    var poqsrn = this['doc']['implementation'];poqsrn && poqsrn['createDocumentType'] && (kigh = poqsrn['createDocumentType'](ijheg, ie, kigh), this['locator'] && _dxywtuv(this['locator'], kigh), _dsvu(this, kigh));
  }, 'warning': function (z0_21$) {
    console['warn']('[xmldom warning]\t' + z0_21$, _dwstxv(this['locator']));
  }, 'error': function (ijhgkf) {
    console['error']('[xmldom error]\t' + ijhgkf, _dwstxv(this['locator']));
  }, 'fatalError': function (oplnk) {
    throw console['error']('[xmldom fatalError]\t' + oplnk, _dwstxv(this['locator'])), oplnk;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (wtxu) {
  _ddbcg['prototype'][wtxu] = function () {
    return null;
  };
});var _dxy$zw = require('./bbbsax')['XMLReader'],
    _dsvtq = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _d_wyz$;