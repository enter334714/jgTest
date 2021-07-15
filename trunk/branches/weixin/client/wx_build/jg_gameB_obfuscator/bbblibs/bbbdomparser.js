var _ = wx.y$;
function _dpsuqrt($0xy) {
  this['options'] = $0xy || { 'locator': {} };
}function _dtwuv(mklijn, hfceg, imlkhj) {
  function rsonp(tuspq) {
    var trsuw = mklijn[tuspq];!trsuw && ihjlkm && (trsuw = 0x2 == mklijn['length'] ? function (hfjie) {
      mklijn(tuspq, hfjie);
    } : mklijn), rop[tuspq] = trsuw ? function (kglji) {
      trsuw('[xmldom ' + tuspq + ']\t' + kglji + _duyz(imlkhj));
    } : function () {};
  }if (!mklijn) {
    if (hfceg instanceof _dupsqtr) return hfceg;mklijn = hfceg;
  }var rop = {},
      ihjlkm = mklijn instanceof Function;return imlkhj = imlkhj || {}, rsonp('warning'), rsonp('error'), rsonp('fatalError'), rop;
}function _dupsqtr() {
  this['cdata'] = !0x1;
}function _dhlikgj(hife, z_0y$x) {
  z_0y$x['lineNumber'] = hife['lineNumber'], z_0y$x['columnNumber'] = hife['columnNumber'];
}function _duyz(w_$xzy) {
  return w_$xzy ? '\x0a@' + (w_$xzy['systemId'] || '') + '#[line:' + w_$xzy['lineNumber'] + ',col:' + w_$xzy['columnNumber'] + ']' : void 0x0;
}function _dcbfed(jlikh, uvqst, ihefdg) {
  return 'string' == typeof jlikh ? jlikh['substr'](uvqst, ihefdg) : jlikh['length'] >= uvqst + ihefdg || uvqst ? new java['lang']['String'](jlikh, uvqst, ihefdg) + '' : jlikh;
}function _difjeg(ijhfe, suqpr) {
  (ijhfe['currentElement'] || ijhfe['doc'])['appendChild'](suqpr);
}_dpsuqrt['prototype']['parseFromString'] = function (gedfb, jhlim) {
  var rswvu = this['options'],
      yvwuxz = new _dqmornp(),
      fedbg = rswvu['domBuilder'] || new _dupsqtr(),
      $y0_z1 = rswvu['errorHandler'],
      fkg = rswvu['locator'],
      uzvyxw = rswvu['xmlns'] || {},
      x$yvw = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return fkg && fedbg['setDocumentLocator'](fkg), yvwuxz['errorHandler'] = _dtwuv($y0_z1, fedbg, fkg), yvwuxz['domBuilder'] = rswvu['domBuilder'] || fedbg, /\/x?html?$/['test'](jhlim) && (x$yvw['nbsp'] = '\u00a0', x$yvw['copy'] = '©', uzvyxw[''] = 'http://www.w3.org/1999/xhtml'), uzvyxw['xml'] = uzvyxw['xml'] || 'http://www.w3.org/XML/1998/namespace', gedfb ? yvwuxz['parse'](gedfb, uzvyxw, x$yvw) : yvwuxz['errorHandler']['error']('invalid doc source'), fedbg['doc'];
}, _dupsqtr['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dz0_12()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (klijh, sqtorp, gifde, kjihl) {
    var nlik = this['doc'],
        jmkl = nlik['createElementNS'](klijh, gifde || sqtorp),
        nkopl = kjihl['length'];_difjeg(this, jmkl), this['currentElement'] = jmkl, this['locator'] && _dhlikgj(this['locator'], jmkl);for (var xutvw = 0x0; xutvw < nkopl; xutvw++) {
      var klijh = kjihl['getURI'](xutvw),
          hikjl = kjihl['getValue'](xutvw),
          gifde = kjihl['getQName'](xutvw),
          jfge = nlik['createAttributeNS'](klijh, gifde);this['locator'] && _dhlikgj(kjihl['getLocator'](xutvw), jfge), jfge['value'] = jfge['nodeValue'] = hikjl, jmkl['setAttributeNode'](jfge);
    }
  }, 'endElement': function () {
    var gijkhl = this['currentElement'];gijkhl['tagName'], this['currentElement'] = gijkhl['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (x_wz$, z02_$1) {
    z02_$1 = this['doc']['createProcessingInstruction'](x_wz$, z02_$1), (this['locator'] && _dhlikgj(this['locator'], z02_$1), _difjeg(this, z02_$1));
  }, 'ignorableWhitespace': function () {}, 'characters': function (pnlqom) {
    var gkjhil;(pnlqom = _dcbfed['apply'](this, arguments)) && (gkjhil = this['cdata'] ? this['doc']['createCDATASection'](pnlqom) : this['doc']['createTextNode'](pnlqom), this['currentElement'] ? this['currentElement']['appendChild'](gkjhil) : /^\s*$/['test'](pnlqom) && this['doc']['appendChild'](gkjhil), this['locator'] && _dhlikgj(this['locator'], gkjhil));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (klonmp) {
    (this['locator'] = klonmp) && (klonmp['lineNumber'] = 0x0);
  }, 'comment': function (lmkj) {
    lmkj = _dcbfed['apply'](this, arguments);var ljmih = this['doc']['createComment'](lmkj);this['locator'] && _dhlikgj(this['locator'], ljmih), _difjeg(this, ljmih);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (tuqpr, _210$3, jlimh) {
    var kilmhj = this['doc']['implementation'];kilmhj && kilmhj['createDocumentType'] && (jlimh = kilmhj['createDocumentType'](tuqpr, _210$3, jlimh), this['locator'] && _dhlikgj(this['locator'], jlimh), _difjeg(this, jlimh));
  }, 'warning': function (fde) {
    console['warn']('[xmldom warning]\t' + fde, _duyz(this['locator']));
  }, 'error': function (jhkim) {
    console['error']('[xmldom error]\t' + jhkim, _duyz(this['locator']));
  }, 'fatalError': function (bedcfa) {
    throw console['error']('[xmldom fatalError]\t' + bedcfa, _duyz(this['locator'])), bedcfa;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (usrp) {
  _dupsqtr['prototype'][usrp] = function () {
    return null;
  };
});var _dqmornp = require('./bbbsax')['XMLReader'],
    _dz0_12 = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dpsuqrt;