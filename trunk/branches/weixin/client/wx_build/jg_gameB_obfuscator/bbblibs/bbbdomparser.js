var _ = wx.y$;
function _dkghijf(ghfij) {
  this['options'] = ghfij || { 'locator': {} };
}function _dijgehf(klomnj, _10$32, vwsrt) {
  function w_x$yz(vtxwu) {
    var sqtr = klomnj[vtxwu];!sqtr && wty && (sqtr = 0x2 == klomnj['length'] ? function (hjgeif) {
      klomnj(vtxwu, hjgeif);
    } : klomnj), vutrw[vtxwu] = sqtr ? function (sprnoq) {
      sqtr('[xmldom ' + vtxwu + ']\t' + sprnoq + _dyxwz$v(vwsrt));
    } : function () {};
  }if (!klomnj) {
    if (_10$32 instanceof _dnqosp) return _10$32;klomnj = _10$32;
  }var vutrw = {},
      wty = klomnj instanceof Function;return vwsrt = vwsrt || {}, w_x$yz('warning'), w_x$yz('error'), w_x$yz('fatalError'), vutrw;
}function _dnqosp() {
  this['cdata'] = !0x1;
}function _dyz1$0(bcfge, nqplom) {
  nqplom['lineNumber'] = bcfge['lineNumber'], nqplom['columnNumber'] = bcfge['columnNumber'];
}function _dyxwz$v(dhgife) {
  return dhgife ? '\x0a@' + (dhgife['systemId'] || '') + '#[line:' + dhgife['lineNumber'] + ',col:' + dhgife['columnNumber'] + ']' : void 0x0;
}function _dyw_zx(mklnop, lnjmko, usqtrp) {
  return 'string' == typeof mklnop ? mklnop['substr'](lnjmko, usqtrp) : mklnop['length'] >= lnjmko + usqtrp || lnjmko ? new java['lang']['String'](mklnop, lnjmko, usqtrp) + '' : mklnop;
}function _dtvwyx(vwustx, lnpqom) {
  (vwustx['currentElement'] || vwustx['doc'])['appendChild'](lnpqom);
}_dkghijf['prototype']['parseFromString'] = function (imkjlh, ieghdf) {
  var ptsqu = this['options'],
      mqnlop = new _ddceab(),
      ebgfcd = ptsqu['domBuilder'] || new _dnqosp(),
      efigd = ptsqu['errorHandler'],
      ghdfce = ptsqu['locator'],
      eghid = ptsqu['xmlns'] || {},
      utvsxw = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ghdfce && ebgfcd['setDocumentLocator'](ghdfce), mqnlop['errorHandler'] = _dijgehf(efigd, ebgfcd, ghdfce), mqnlop['domBuilder'] = ptsqu['domBuilder'] || ebgfcd, /\/x?html?$/['test'](ieghdf) && (utvsxw['nbsp'] = '\u00a0', utvsxw['copy'] = '©', eghid[''] = 'http://www.w3.org/1999/xhtml'), eghid['xml'] = eghid['xml'] || 'http://www.w3.org/XML/1998/namespace', imkjlh ? mqnlop['parse'](imkjlh, eghid, utvsxw) : mqnlop['errorHandler']['error']('invalid doc source'), ebgfcd['doc'];
}, _dnqosp['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dfcghe()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (jgihk, lmonjk, rqpmno, bgcdfe) {
    var ijmkl = this['doc'],
        wtvur = ijmkl['createElementNS'](jgihk, rqpmno || lmonjk),
        wurs = bgcdfe['length'];_dtvwyx(this, wtvur), this['currentElement'] = wtvur, this['locator'] && _dyz1$0(this['locator'], wtvur);for (var jfkgi = 0x0; jfkgi < wurs; jfkgi++) {
      var jgihk = bgcdfe['getURI'](jfkgi),
          cbfgde = bgcdfe['getValue'](jfkgi),
          rqpmno = bgcdfe['getQName'](jfkgi),
          tvsuw = ijmkl['createAttributeNS'](jgihk, rqpmno);this['locator'] && _dyz1$0(bgcdfe['getLocator'](jfkgi), tvsuw), tvsuw['value'] = tvsuw['nodeValue'] = cbfgde, wtvur['setAttributeNode'](tvsuw);
    }
  }, 'endElement': function () {
    var y1$z0_ = this['currentElement'];y1$z0_['tagName'], this['currentElement'] = y1$z0_['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (_1z$y, tsrqu) {
    tsrqu = this['doc']['createProcessingInstruction'](_1z$y, tsrqu), (this['locator'] && _dyz1$0(this['locator'], tsrqu), _dtvwyx(this, tsrqu));
  }, 'ignorableWhitespace': function () {}, 'characters': function (jkmlh) {
    var lknmoj;(jkmlh = _dyw_zx['apply'](this, arguments)) && (lknmoj = this['cdata'] ? this['doc']['createCDATASection'](jkmlh) : this['doc']['createTextNode'](jkmlh), this['currentElement'] ? this['currentElement']['appendChild'](lknmoj) : /^\s*$/['test'](jkmlh) && this['doc']['appendChild'](lknmoj), this['locator'] && _dyz1$0(this['locator'], lknmoj));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (vsxtu) {
    (this['locator'] = vsxtu) && (vsxtu['lineNumber'] = 0x0);
  }, 'comment': function (lomp) {
    lomp = _dyw_zx['apply'](this, arguments);var $zx_wy = this['doc']['createComment'](lomp);this['locator'] && _dyz1$0(this['locator'], $zx_wy), _dtvwyx(this, $zx_wy);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (uqtsr, fce, psnqr) {
    var hgij = this['doc']['implementation'];hgij && hgij['createDocumentType'] && (psnqr = hgij['createDocumentType'](uqtsr, fce, psnqr), this['locator'] && _dyz1$0(this['locator'], psnqr), _dtvwyx(this, psnqr));
  }, 'warning': function (fhgd) {
    console['warn']('[xmldom warning]\t' + fhgd, _dyxwz$v(this['locator']));
  }, 'error': function (jlkmh) {
    console['error']('[xmldom error]\t' + jlkmh, _dyxwz$v(this['locator']));
  }, 'fatalError': function ($xw_y) {
    throw console['error']('[xmldom fatalError]\t' + $xw_y, _dyxwz$v(this['locator'])), $xw_y;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (njlik) {
  _dnqosp['prototype'][njlik] = function () {
    return null;
  };
});var _ddceab = require('./bbbsax')['XMLReader'],
    _dfcghe = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dkghijf;