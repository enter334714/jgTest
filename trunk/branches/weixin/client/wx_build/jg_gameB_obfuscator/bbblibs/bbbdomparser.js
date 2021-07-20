var _ = wx.y$;
function _doqtr(hmkl) {
  this['options'] = hmkl || { 'locator': {} };
}function _dvustq(bgfec, zy_xw, wvzyx$) {
  function hilgjk(edcbaf) {
    var omrnq = bgfec[edcbaf];!omrnq && njlm && (omrnq = 0x2 == bgfec['length'] ? function (_0y1$z) {
      bgfec(edcbaf, _0y1$z);
    } : bgfec), nqmo[edcbaf] = omrnq ? function (pnkolm) {
      omrnq('[xmldom ' + edcbaf + ']\t' + pnkolm + _dmjhkil(wvzyx$));
    } : function () {};
  }if (!bgfec) {
    if (zy_xw instanceof _dyx0$_) return zy_xw;bgfec = zy_xw;
  }var nqmo = {},
      njlm = bgfec instanceof Function;return wvzyx$ = wvzyx$ || {}, hilgjk('warning'), hilgjk('error'), hilgjk('fatalError'), nqmo;
}function _dyx0$_() {
  this['cdata'] = !0x1;
}function _dgjiefh(uzvyxw, _z012) {
  _z012['lineNumber'] = uzvyxw['lineNumber'], _z012['columnNumber'] = uzvyxw['columnNumber'];
}function _dmjhkil(jkol) {
  return jkol ? '\x0a@' + (jkol['systemId'] || '') + '#[line:' + jkol['lineNumber'] + ',col:' + jkol['columnNumber'] + ']' : void 0x0;
}function _dedgif(vxwyz, rut, egdhi) {
  return 'string' == typeof vxwyz ? vxwyz['substr'](rut, egdhi) : vxwyz['length'] >= rut + egdhi || rut ? new java['lang']['String'](vxwyz, rut, egdhi) + '' : vxwyz;
}function _dolnkmp(ebfcgd, jklhmi) {
  (ebfcgd['currentElement'] || ebfcgd['doc'])['appendChild'](jklhmi);
}_doqtr['prototype']['parseFromString'] = function (utyx, mlkoj) {
  var xzy_w = this['options'],
      kifgjh = new _dwzx$yv(),
      onmpk = xzy_w['domBuilder'] || new _dyx0$_(),
      kmnlji = xzy_w['errorHandler'],
      fgkjhi = xzy_w['locator'],
      hfde = xzy_w['xmlns'] || {},
      bed = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return fgkjhi && onmpk['setDocumentLocator'](fgkjhi), kifgjh['errorHandler'] = _dvustq(kmnlji, onmpk, fgkjhi), kifgjh['domBuilder'] = xzy_w['domBuilder'] || onmpk, /\/x?html?$/['test'](mlkoj) && (bed['nbsp'] = '\u00a0', bed['copy'] = '©', hfde[''] = 'http://www.w3.org/1999/xhtml'), hfde['xml'] = hfde['xml'] || 'http://www.w3.org/XML/1998/namespace', utyx ? kifgjh['parse'](utyx, hfde, bed) : kifgjh['errorHandler']['error']('invalid doc source'), onmpk['doc'];
}, _dyx0$_['prototype'] = { 'startDocument': function () {
    this['doc'] = new _d$_z1y0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (cbefd, vzu, rvsutq, iljkgh) {
    var hedc = this['doc'],
        vuyzw = hedc['createElementNS'](cbefd, rvsutq || vzu),
        ghjilk = iljkgh['length'];_dolnkmp(this, vuyzw), this['currentElement'] = vuyzw, this['locator'] && _dgjiefh(this['locator'], vuyzw);for (var cgdh = 0x0; cgdh < ghjilk; cgdh++) {
      var cbefd = iljkgh['getURI'](cgdh),
          onmpr = iljkgh['getValue'](cgdh),
          rvsutq = iljkgh['getQName'](cgdh),
          _yw$ = hedc['createAttributeNS'](cbefd, rvsutq);this['locator'] && _dgjiefh(iljkgh['getLocator'](cgdh), _yw$), _yw$['value'] = _yw$['nodeValue'] = onmpr, vuyzw['setAttributeNode'](_yw$);
    }
  }, 'endElement': function () {
    var wuvts = this['currentElement'];wuvts['tagName'], this['currentElement'] = wuvts['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ropq, rnmqop) {
    rnmqop = this['doc']['createProcessingInstruction'](ropq, rnmqop), (this['locator'] && _dgjiefh(this['locator'], rnmqop), _dolnkmp(this, rnmqop));
  }, 'ignorableWhitespace': function () {}, 'characters': function (xz0y$) {
    var $310_;(xz0y$ = _dedgif['apply'](this, arguments)) && ($310_ = this['cdata'] ? this['doc']['createCDATASection'](xz0y$) : this['doc']['createTextNode'](xz0y$), this['currentElement'] ? this['currentElement']['appendChild']($310_) : /^\s*$/['test'](xz0y$) && this['doc']['appendChild']($310_), this['locator'] && _dgjiefh(this['locator'], $310_));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (kfij) {
    (this['locator'] = kfij) && (kfij['lineNumber'] = 0x0);
  }, 'comment': function (okmlpn) {
    okmlpn = _dedgif['apply'](this, arguments);var ihfk = this['doc']['createComment'](okmlpn);this['locator'] && _dgjiefh(this['locator'], ihfk), _dolnkmp(this, ihfk);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (wy_$zx, rnmqp, nkomlp) {
    var qrtsv = this['doc']['implementation'];qrtsv && qrtsv['createDocumentType'] && (nkomlp = qrtsv['createDocumentType'](wy_$zx, rnmqp, nkomlp), this['locator'] && _dgjiefh(this['locator'], nkomlp), _dolnkmp(this, nkomlp));
  }, 'warning': function (_$03) {
    console['warn']('[xmldom warning]\t' + _$03, _dmjhkil(this['locator']));
  }, 'error': function (orqnp) {
    console['error']('[xmldom error]\t' + orqnp, _dmjhkil(this['locator']));
  }, 'fatalError': function (ihgjfe) {
    throw console['error']('[xmldom fatalError]\t' + ihgjfe, _dmjhkil(this['locator'])), ihgjfe;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (rqvstu) {
  _dyx0$_['prototype'][rqvstu] = function () {
    return null;
  };
});var _dwzx$yv = require('./bbbsax')['XMLReader'],
    _d$_z1y0 = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _doqtr;