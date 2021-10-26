var _ = wx.y$;
function _djiln(opmknl) {
  this['options'] = opmknl || { 'locator': {} };
}function _dfkgihj(qsvrt, hdefg, hkjig) {
  function fikjgh(xz$w) {
    var _3$1 = qsvrt[xz$w];!_3$1 && $xz_yw && (_3$1 = 0x2 == qsvrt['length'] ? function (klnoj) {
      qsvrt(xz$w, klnoj);
    } : qsvrt), rsotqp[xz$w] = _3$1 && function (mnqr) {
      _3$1('[xmldom ' + xz$w + ']\t' + mnqr + _drtvusq(hkjig));
    } || function () {};
  }if (!qsvrt) {
    if (hdefg instanceof _ddebfac) return hdefg;qsvrt = hdefg;
  }var rsotqp = {},
      $xz_yw = qsvrt instanceof Function;return hkjig = hkjig || {}, fikjgh('warning'), fikjgh('error'), fikjgh('fatalError'), rsotqp;
}function _ddebfac() {
  this['cdata'] = !0x1;
}function _difgejh(nqpolm, ikhfg) {
  ikhfg['lineNumber'] = nqpolm['lineNumber'], ikhfg['columnNumber'] = nqpolm['columnNumber'];
}function _drtvusq(jkihlg) {
  return jkihlg ? '\x0a@' + (jkihlg['systemId'] || '') + '#[line:' + jkihlg['lineNumber'] + ',col:' + jkihlg['columnNumber'] + ']' : void 0x0;
}function _dnoljk(gehfji, bfdge, ghjkif) {
  return 'string' == typeof gehfji ? gehfji['substr'](bfdge, ghjkif) : gehfji['length'] >= bfdge + ghjkif || bfdge ? new java['lang']['String'](gehfji, bfdge, ghjkif) + '' : gehfji;
}function _dquvrt(gchdef, pkmnol) {
  gchdef['currentElement'] ? gchdef['currentElement']['appendChild'](pkmnol) : gchdef['doc']['appendChild'](pkmnol);
}_djiln['prototype']['parseFromString'] = function (dcfegb, z2$01_) {
  var cdfehg = this['options'],
      fjhig = new _dkimhj(),
      efadb = cdfehg['domBuilder'] || new _ddebfac(),
      fihk = cdfehg['errorHandler'],
      xvw = cdfehg['locator'],
      giklhj = cdfehg['xmlns'] || {},
      eijfh = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return xvw && efadb['setDocumentLocator'](xvw), fjhig['errorHandler'] = _dfkgihj(fihk, efadb, xvw), fjhig['domBuilder'] = cdfehg['domBuilder'] || efadb, /\/x?html?$/['test'](z2$01_) && (eijfh['nbsp'] = '\u00a0', eijfh['copy'] = '©', giklhj[''] = 'http://www.w3.org/1999/xhtml'), giklhj['xml'] = giklhj['xml'] || 'http://www.w3.org/XML/1998/namespace', dcfegb ? fjhig['parse'](dcfegb, giklhj, eijfh) : fjhig['errorHandler']['error']('invalid doc source'), efadb['doc'];
}, _ddebfac['prototype'] = { 'startDocument': function () {
    this['doc'] = new _defgdcb()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ptros, eig, oqtr, jghli) {
    var qspur = this['doc'],
        xyz_$w = qspur['createElementNS'](ptros, oqtr || eig),
        ijlnk = jghli['length'];_dquvrt(this, xyz_$w), this['currentElement'] = xyz_$w, this['locator'] && _difgejh(this['locator'], xyz_$w);for (var yxz0$_ = 0x0; ijlnk > yxz0$_; yxz0$_++) {
      var ptros = jghli['getURI'](yxz0$_),
          decabf = jghli['getValue'](yxz0$_),
          oqtr = jghli['getQName'](yxz0$_),
          fhdge = qspur['createAttributeNS'](ptros, oqtr);this['locator'] && _difgejh(jghli['getLocator'](yxz0$_), fhdge), fhdge['value'] = fhdge['nodeValue'] = decabf, xyz_$w['setAttributeNode'](fhdge);
    }
  }, 'endElement': function () {
    {
      var $_0x = this['currentElement'];$_0x['tagName'];
    }this['currentElement'] = $_0x['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (vzuxwy, pmol) {
    var kigfh = this['doc']['createProcessingInstruction'](vzuxwy, pmol);this['locator'] && _difgejh(this['locator'], kigfh), _dquvrt(this, kigfh);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ytxuwv) {
    if (ytxuwv = _dnoljk['apply'](this, arguments)) {
      if (this['cdata']) var njolmk = this['doc']['createCDATASection'](ytxuwv);else var njolmk = this['doc']['createTextNode'](ytxuwv);this['currentElement'] ? this['currentElement']['appendChild'](njolmk) : /^\s*$/['test'](ytxuwv) && this['doc']['appendChild'](njolmk), this['locator'] && _difgejh(this['locator'], njolmk);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (zv$xyw) {
    (this['locator'] = zv$xyw) && (zv$xyw['lineNumber'] = 0x0);
  }, 'comment': function (roqpnm) {
    roqpnm = _dnoljk['apply'](this, arguments);var kjhli = this['doc']['createComment'](roqpnm);this['locator'] && _difgejh(this['locator'], kjhli), _dquvrt(this, kjhli);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (fdbgec, lknomp, lmnojk) {
    var ikmlh = this['doc']['implementation'];if (ikmlh && ikmlh['createDocumentType']) {
      var opsrq = ikmlh['createDocumentType'](fdbgec, lknomp, lmnojk);this['locator'] && _difgejh(this['locator'], opsrq), _dquvrt(this, opsrq);
    }
  }, 'warning': function (digeh) {
    console['warn']('[xmldom warning]\t' + digeh, _drtvusq(this['locator']));
  }, 'error': function (_$xz0y) {
    console['error']('[xmldom error]\t' + _$xz0y, _drtvusq(this['locator']));
  }, 'fatalError': function (trwvsu) {
    throw console['error']('[xmldom fatalError]\t' + trwvsu, _drtvusq(this['locator'])), trwvsu;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (cebfg) {
  _ddebfac['prototype'][cebfg] = function () {
    return null;
  };
});var _dkimhj = require('./bbbsax')['XMLReader'],
    _defgdcb = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _djiln;