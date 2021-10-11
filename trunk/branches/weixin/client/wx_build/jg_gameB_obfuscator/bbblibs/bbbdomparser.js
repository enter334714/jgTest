var _ = wx.y$;
function _dvtyw(ghecfd) {
  this['options'] = ghecfd || { 'locator': {} };
}function _d_z2$10(lnkopm, jkgli, hie) {
  function hlkij(qps) {
    var xuzyw = lnkopm[qps];!xuzyw && tuxvwy && (xuzyw = 0x2 == lnkopm['length'] ? function (defghi) {
      lnkopm(qps, defghi);
    } : lnkopm), rtvuw[qps] = xuzyw ? function (fabedc) {
      xuzyw('[xmldom ' + qps + ']\t' + fabedc + _duvxs(hie));
    } : function () {};
  }if (!lnkopm) {
    if (jkgli instanceof _dfgecdb) return jkgli;lnkopm = jkgli;
  }var rtvuw = {},
      tuxvwy = lnkopm instanceof Function;return hie = hie || {}, hlkij('warning'), hlkij('error'), hlkij('fatalError'), rtvuw;
}function _dfgecdb() {
  this['cdata'] = !0x1;
}function _dehfgi(fdehgc, cdgb) {
  cdgb['lineNumber'] = fdehgc['lineNumber'], cdgb['columnNumber'] = fdehgc['columnNumber'];
}function _duvxs(jgi) {
  return jgi ? '\x0a@' + (jgi['systemId'] || '') + '#[line:' + jgi['lineNumber'] + ',col:' + jgi['columnNumber'] + ']' : void 0x0;
}function _dedhfc(jfkhi, becafd, hkgfji) {
  return 'string' == typeof jfkhi ? jfkhi['substr'](becafd, hkgfji) : jfkhi['length'] >= becafd + hkgfji || becafd ? new java['lang']['String'](jfkhi, becafd, hkgfji) + '' : jfkhi;
}function _d_34(khfi, gklhij) {
  (khfi['currentElement'] || khfi['doc'])['appendChild'](gklhij);
}_dvtyw['prototype']['parseFromString'] = function (qnpsro, knmji) {
  var gbedfc = this['options'],
      ornqpm = new _dxvy$z(),
      nkpml = gbedfc['domBuilder'] || new _dfgecdb(),
      bedcg = gbedfc['errorHandler'],
      pomq = gbedfc['locator'],
      qrsn = gbedfc['xmlns'] || {},
      vtwyx = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return pomq && nkpml['setDocumentLocator'](pomq), ornqpm['errorHandler'] = _d_z2$10(bedcg, nkpml, pomq), ornqpm['domBuilder'] = gbedfc['domBuilder'] || nkpml, /\/x?html?$/['test'](knmji) && (vtwyx['nbsp'] = '\u00a0', vtwyx['copy'] = '©', qrsn[''] = 'http://www.w3.org/1999/xhtml'), qrsn['xml'] = qrsn['xml'] || 'http://www.w3.org/XML/1998/namespace', qnpsro ? ornqpm['parse'](qnpsro, qrsn, vtwyx) : ornqpm['errorHandler']['error']('invalid doc source'), nkpml['doc'];
}, _dfgecdb['prototype'] = { 'startDocument': function () {
    this['doc'] = new _drmpqon()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ijmlk, ki, kgjhf, qnp) {
    var cgedfb = this['doc'],
        jikmh = cgedfb['createElementNS'](ijmlk, kgjhf || ki),
        nkilmj = qnp['length'];_d_34(this, jikmh), this['currentElement'] = jikmh, this['locator'] && _dehfgi(this['locator'], jikmh);for (var mnopk = 0x0; mnopk < nkilmj; mnopk++) {
      var ijmlk = qnp['getURI'](mnopk),
          stp = qnp['getValue'](mnopk),
          kgjhf = qnp['getQName'](mnopk),
          ghefj = cgedfb['createAttributeNS'](ijmlk, kgjhf);this['locator'] && _dehfgi(qnp['getLocator'](mnopk), ghefj), ghefj['value'] = ghefj['nodeValue'] = stp, jikmh['setAttributeNode'](ghefj);
    }
  }, 'endElement': function () {
    var yuvtx = this['currentElement'];yuvtx['tagName'], this['currentElement'] = yuvtx['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (pqrus, txuwy) {
    txuwy = this['doc']['createProcessingInstruction'](pqrus, txuwy), (this['locator'] && _dehfgi(this['locator'], txuwy), _d_34(this, txuwy));
  }, 'ignorableWhitespace': function () {}, 'characters': function (mjlonk) {
    var efgd;(mjlonk = _dedhfc['apply'](this, arguments)) && (efgd = this['cdata'] ? this['doc']['createCDATASection'](mjlonk) : this['doc']['createTextNode'](mjlonk), this['currentElement'] ? this['currentElement']['appendChild'](efgd) : /^\s*$/['test'](mjlonk) && this['doc']['appendChild'](efgd), this['locator'] && _dehfgi(this['locator'], efgd));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (njmil) {
    (this['locator'] = njmil) && (njmil['lineNumber'] = 0x0);
  }, 'comment': function (fdcegb) {
    fdcegb = _dedhfc['apply'](this, arguments);var wyuzx = this['doc']['createComment'](fdcegb);this['locator'] && _dehfgi(this['locator'], wyuzx), _d_34(this, wyuzx);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (zxv$wy, jgeihf, yz1$_0) {
    var nors = this['doc']['implementation'];nors && nors['createDocumentType'] && (yz1$_0 = nors['createDocumentType'](zxv$wy, jgeihf, yz1$_0), this['locator'] && _dehfgi(this['locator'], yz1$_0), _d_34(this, yz1$_0));
  }, 'warning': function (nomk) {
    console['warn']('[xmldom warning]\t' + nomk, _duvxs(this['locator']));
  }, 'error': function (ecbdgf) {
    console['error']('[xmldom error]\t' + ecbdgf, _duvxs(this['locator']));
  }, 'fatalError': function (gfbc) {
    throw console['error']('[xmldom fatalError]\t' + gfbc, _duvxs(this['locator'])), gfbc;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function ($021) {
  _dfgecdb['prototype'][$021] = function () {
    return null;
  };
});var _dxvy$z = require('./bbbsax')['XMLReader'],
    _drmpqon = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dvtyw;