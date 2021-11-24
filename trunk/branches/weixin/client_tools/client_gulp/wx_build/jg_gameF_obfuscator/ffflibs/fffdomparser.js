var k = wx.$f;
function fium1(ftib) {
  this['options'] = ftib || { 'locator': {} };
}function fxewnd(_ko6, t5hq0f, thi0) {
  function y7$ap(g1b) {
    var c_42 = _ko6[g1b];!c_42 && mhit0 && (c_42 = 0x2 == _ko6['length'] ? function (btifmh) {
      _ko6(g1b, btifmh);
    } : _ko6), hqkt[g1b] = c_42 && function (imthb) {
      c_42('[xmldom ' + g1b + ']\t' + imthb + fitvfbm(thi0));
    } || function () {};
  }if (!_ko6) {
    if (t5hq0f instanceof fernz8x) return t5hq0f;_ko6 = t5hq0f;
  }var hqkt = {},
      mhit0 = _ko6 instanceof Function;return thi0 = thi0 || {}, y7$ap('warning'), y7$ap('error'), y7$ap('fatalError'), hqkt;
}function fernz8x() {
  this['cdata'] = !0x1;
}function fvfbmt(_0hk, timfbv) {
  timfbv['lineNumber'] = _0hk['lineNumber'], timfbv['columnNumber'] = _0hk['columnNumber'];
}function fitvfbm(k50) {
  return k50 ? '\x0a@' + (k50['systemId'] || '') + '#[line:' + k50['lineNumber'] + ',col:' + k50['columnNumber'] + ']' : void 0x0;
}function fxz8er7(nexdws, dswcnj, k05_q4) {
  return 'string' == typeof nexdws ? nexdws['substr'](dswcnj, k05_q4) : nexdws['length'] >= dswcnj + k05_q4 || dswcnj ? new java['lang']['String'](nexdws, dswcnj, k05_q4) + '' : nexdws;
}function fdsjo6c(h5qkt0, ith) {
  h5qkt0['currentElement'] ? h5qkt0['currentElement']['appendChild'](ith) : h5qkt0['doc']['appendChild'](ith);
}fium1['prototype']['parseFromString'] = function (_q4k50, b9v1g) {
  var t0fmi = this['options'],
      rz7$83 = new fqht0k(),
      k425q_ = t0fmi['domBuilder'] || new fernz8x(),
      ihft0m = t0fmi['errorHandler'],
      _6254k = t0fmi['locator'],
      $8z37r = t0fmi['xmlns'] || {},
      bhtimf = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _6254k && k425q_['setDocumentLocator'](_6254k), rz7$83['errorHandler'] = fxewnd(ihft0m, k425q_, _6254k), rz7$83['domBuilder'] = t0fmi['domBuilder'] || k425q_, /\/x?html?$/['test'](b9v1g) && (bhtimf['nbsp'] = '\u00a0', bhtimf['copy'] = '©', $8z37r[''] = 'http://www.w3.org/1999/xhtml'), $8z37r['xml'] = $8z37r['xml'] || 'http://www.w3.org/XML/1998/namespace', _q4k50 ? rz7$83['parse'](_q4k50, $8z37r, bhtimf) : rz7$83['errorHandler']['error']('invalid doc source'), k425q_['doc'];
}, fernz8x['prototype'] = { 'startDocument': function () {
    this['doc'] = new fdnj()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (e8zx7, cnw, _5hk0q, co462) {
    var sewnx = this['doc'],
        fvbmi = sewnx['createElementNS'](e8zx7, _5hk0q || cnw),
        xnwse = co462['length'];fdsjo6c(this, fvbmi), this['currentElement'] = fvbmi, this['locator'] && fvfbmt(this['locator'], fvbmi);for (var zenx8 = 0x0; xnwse > zenx8; zenx8++) {
      var e8zx7 = co462['getURI'](zenx8),
          tfhi = co462['getValue'](zenx8),
          _5hk0q = co462['getQName'](zenx8),
          m0fi = sewnx['createAttributeNS'](e8zx7, _5hk0q);this['locator'] && fvfbmt(co462['getLocator'](zenx8), m0fi), m0fi['value'] = m0fi['nodeValue'] = tfhi, fvbmi['setAttributeNode'](m0fi);
    }
  }, 'endElement': function () {
    {
      var bimtvf = this['currentElement'];bimtvf['tagName'];
    }this['currentElement'] = bimtvf['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (dscojw, p$37ay) {
    var n8erz = this['doc']['createProcessingInstruction'](dscojw, p$37ay);this['locator'] && fvfbmt(this['locator'], n8erz), fdsjo6c(this, n8erz);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_0h5k) {
    if (_0h5k = fxz8er7['apply'](this, arguments)) {
      if (this['cdata']) var eswnxz = this['doc']['createCDATASection'](_0h5k);else var eswnxz = this['doc']['createTextNode'](_0h5k);this['currentElement'] ? this['currentElement']['appendChild'](eswnxz) : /^\s*$/['test'](_0h5k) && this['doc']['appendChild'](eswnxz), this['locator'] && fvfbmt(this['locator'], eswnxz);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (tfmhi) {
    (this['locator'] = tfmhi) && (tfmhi['lineNumber'] = 0x0);
  }, 'comment': function (jdocs) {
    jdocs = fxz8er7['apply'](this, arguments);var thfmbi = this['doc']['createComment'](jdocs);this['locator'] && fvfbmt(this['locator'], thfmbi), fdsjo6c(this, thfmbi);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (dos6jc, mvbi1, mhit0f) {
    var mvbuif = this['doc']['implementation'];if (mvbuif && mvbuif['createDocumentType']) {
      var ndxwj = mvbuif['createDocumentType'](dos6jc, mvbi1, mhit0f);this['locator'] && fvfbmt(this['locator'], ndxwj), fdsjo6c(this, ndxwj);
    }
  }, 'warning': function ($7pa) {
    console['warn']('[xmldom warning]\t' + $7pa, fitvfbm(this['locator']));
  }, 'error': function (jdo26) {
    console['error']('[xmldom error]\t' + jdo26, fitvfbm(this['locator']));
  }, 'fatalError': function (mh0fq) {
    throw console['error']('[xmldom fatalError]\t' + mh0fq, fitvfbm(this['locator'])), mh0fq;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_2c6o4) {
  fernz8x['prototype'][_2c6o4] = function () {
    return null;
  };
});var fqht0k = require('./fffsax')['XMLReader'],
    fdnj = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fium1;