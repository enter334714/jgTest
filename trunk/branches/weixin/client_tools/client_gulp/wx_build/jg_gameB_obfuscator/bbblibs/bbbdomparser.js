var _ = wx.y$;
function _dkhiml(noqmp) {
  this['options'] = noqmp || { 'locator': {} };
}function _dabefc(lgjhk, fejgih, bdcaf) {
  function hlkjim(stwux) {
    var yz1$ = lgjhk[stwux];!yz1$ && stqopr && (yz1$ = 0x2 == lgjhk['length'] ? function (adfc) {
      lgjhk(stwux, adfc);
    } : lgjhk), dcegfh[stwux] = yz1$ && function (wtsux) {
      yz1$('[xmldom ' + stwux + ']\t' + wtsux + _diegf(bdcaf));
    } || function () {};
  }if (!lgjhk) {
    if (fejgih instanceof _drsvuqt) return fejgih;lgjhk = fejgih;
  }var dcegfh = {},
      stqopr = lgjhk instanceof Function;return bdcaf = bdcaf || {}, hlkjim('warning'), hlkjim('error'), hlkjim('fatalError'), dcegfh;
}function _drsvuqt() {
  this['cdata'] = !0x1;
}function _dkhgfi(x$zy0, _4032) {
  _4032['lineNumber'] = x$zy0['lineNumber'], _4032['columnNumber'] = x$zy0['columnNumber'];
}function _diegf(rpnmoq) {
  return rpnmoq ? '\x0a@' + (rpnmoq['systemId'] || '') + '#[line:' + rpnmoq['lineNumber'] + ',col:' + rpnmoq['columnNumber'] + ']' : void 0x0;
}function _djlghik(badfce, z_0$y, vyzxw) {
  return 'string' == typeof badfce ? badfce['substr'](z_0$y, vyzxw) : badfce['length'] >= z_0$y + vyzxw || z_0$y ? new java['lang']['String'](badfce, z_0$y, vyzxw) + '' : badfce;
}function _djglik(otpsq, adcfb) {
  otpsq['currentElement'] ? otpsq['currentElement']['appendChild'](adcfb) : otpsq['doc']['appendChild'](adcfb);
}_dkhiml['prototype']['parseFromString'] = function (rwt, y_$zx) {
  var qsup = this['options'],
      fbadce = new _debdf(),
      acedfb = qsup['domBuilder'] || new _drsvuqt(),
      kfghi = qsup['errorHandler'],
      tsuwr = qsup['locator'],
      xwuts = qsup['xmlns'] || {},
      debfa = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return tsuwr && acedfb['setDocumentLocator'](tsuwr), fbadce['errorHandler'] = _dabefc(kfghi, acedfb, tsuwr), fbadce['domBuilder'] = qsup['domBuilder'] || acedfb, /\/x?html?$/['test'](y_$zx) && (debfa['nbsp'] = '\u00a0', debfa['copy'] = '©', xwuts[''] = 'http://www.w3.org/1999/xhtml'), xwuts['xml'] = xwuts['xml'] || 'http://www.w3.org/XML/1998/namespace', rwt ? fbadce['parse'](rwt, xwuts, debfa) : fbadce['errorHandler']['error']('invalid doc source'), acedfb['doc'];
}, _drsvuqt['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dzwyv$x()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (qornpm, fjeg, qpsrno, ghfeid) {
    var twuxsv = this['doc'],
        _213$0 = twuxsv['createElementNS'](qornpm, qpsrno || fjeg),
        _2z$ = ghfeid['length'];_djglik(this, _213$0), this['currentElement'] = _213$0, this['locator'] && _dkhgfi(this['locator'], _213$0);for (var gefh = 0x0; _2z$ > gefh; gefh++) {
      var qornpm = ghfeid['getURI'](gefh),
          lmqp = ghfeid['getValue'](gefh),
          qpsrno = ghfeid['getQName'](gefh),
          usr = twuxsv['createAttributeNS'](qornpm, qpsrno);this['locator'] && _dkhgfi(ghfeid['getLocator'](gefh), usr), usr['value'] = usr['nodeValue'] = lmqp, _213$0['setAttributeNode'](usr);
    }
  }, 'endElement': function () {
    {
      var _$x = this['currentElement'];_$x['tagName'];
    }this['currentElement'] = _$x['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (knp, tsvuq) {
    var onqsp = this['doc']['createProcessingInstruction'](knp, tsvuq);this['locator'] && _dkhgfi(this['locator'], onqsp), _djglik(this, onqsp);
  }, 'ignorableWhitespace': function () {}, 'characters': function (x$vzwy) {
    if (x$vzwy = _djlghik['apply'](this, arguments)) {
      if (this['cdata']) var niklj = this['doc']['createCDATASection'](x$vzwy);else var niklj = this['doc']['createTextNode'](x$vzwy);this['currentElement'] ? this['currentElement']['appendChild'](niklj) : /^\s*$/['test'](x$vzwy) && this['doc']['appendChild'](niklj), this['locator'] && _dkhgfi(this['locator'], niklj);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (dbfceg) {
    (this['locator'] = dbfceg) && (dbfceg['lineNumber'] = 0x0);
  }, 'comment': function (ifehgj) {
    ifehgj = _djlghik['apply'](this, arguments);var dba = this['doc']['createComment'](ifehgj);this['locator'] && _dkhgfi(this['locator'], dba), _djglik(this, dba);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (srvtw, qpnosr, yzxw$_) {
    var zwuyxv = this['doc']['implementation'];if (zwuyxv && zwuyxv['createDocumentType']) {
      var hjfig = zwuyxv['createDocumentType'](srvtw, qpnosr, yzxw$_);this['locator'] && _dkhgfi(this['locator'], hjfig), _djglik(this, hjfig);
    }
  }, 'warning': function (_xwz$) {
    console['warn']('[xmldom warning]\t' + _xwz$, _diegf(this['locator']));
  }, 'error': function (jfhgik) {
    console['error']('[xmldom error]\t' + jfhgik, _diegf(this['locator']));
  }, 'fatalError': function (z_w$x) {
    throw console['error']('[xmldom fatalError]\t' + z_w$x, _diegf(this['locator'])), z_w$x;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ecbafd) {
  _drsvuqt['prototype'][ecbafd] = function () {
    return null;
  };
});var _debdf = require('./bbbsax')['XMLReader'],
    _dzwyv$x = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dkhiml;