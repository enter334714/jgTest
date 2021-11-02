var k = wx.$f;
function fewnxz(tm0qfh) {
  this['options'] = tm0qfh || { 'locator': {} };
}function fxernz(vbifu, zr7e8, _4c62) {
  function n8xez(ndjxs) {
    var th5q = vbifu[ndjxs];!th5q && ivbmfu && (th5q = 0x2 == vbifu['length'] ? function (k_5qh0) {
      vbifu(ndjxs, k_5qh0);
    } : vbifu), sjdco[ndjxs] = th5q && function (nx8wze) {
      th5q('[xmldom ' + ndjxs + ']\t' + nx8wze + fjswcn(_4c62));
    } || function () {};
  }if (!vbifu) {
    if (zr7e8 instanceof fezxnr) return zr7e8;vbifu = zr7e8;
  }var sjdco = {},
      ivbmfu = vbifu instanceof Function;return _4c62 = _4c62 || {}, n8xez('warning'), n8xez('error'), n8xez('fatalError'), sjdco;
}function fezxnr() {
  this['cdata'] = !0x1;
}function fxr7e(wsdnc, fihtbm) {
  fihtbm['lineNumber'] = wsdnc['lineNumber'], fihtbm['columnNumber'] = wsdnc['columnNumber'];
}function fjswcn(k4265_) {
  return k4265_ ? '\x0a@' + (k4265_['systemId'] || '') + '#[line:' + k4265_['lineNumber'] + ',col:' + k4265_['columnNumber'] + ']' : void 0x0;
}function fsenxwz(eswdx, ibvmt, q24k) {
  return 'string' == typeof eswdx ? eswdx['substr'](ibvmt, q24k) : eswdx['length'] >= ibvmt + q24k || ibvmt ? new java['lang']['String'](eswdx, ibvmt, q24k) + '' : eswdx;
}function fihmfbt($p7ay, bi1mu) {
  $p7ay['currentElement'] ? $p7ay['currentElement']['appendChild'](bi1mu) : $p7ay['doc']['appendChild'](bi1mu);
}fewnxz['prototype']['parseFromString'] = function (newzx, dsjwcn) {
  var swde = this['options'],
      ocjwds = new fk_2546(),
      $87zer = swde['domBuilder'] || new fezxnr(),
      re7zx8 = swde['errorHandler'],
      fuivm = swde['locator'],
      $7yr8 = swde['xmlns'] || {},
      ojsc6d = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return fuivm && $87zer['setDocumentLocator'](fuivm), ocjwds['errorHandler'] = fxernz(re7zx8, $87zer, fuivm), ocjwds['domBuilder'] = swde['domBuilder'] || $87zer, /\/x?html?$/['test'](dsjwcn) && (ojsc6d['nbsp'] = '\u00a0', ojsc6d['copy'] = '©', $7yr8[''] = 'http://www.w3.org/1999/xhtml'), $7yr8['xml'] = $7yr8['xml'] || 'http://www.w3.org/XML/1998/namespace', newzx ? ocjwds['parse'](newzx, $7yr8, ojsc6d) : ocjwds['errorHandler']['error']('invalid doc source'), $87zer['doc'];
}, fezxnr['prototype'] = { 'startDocument': function () {
    this['doc'] = new fj6co2d()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (thibmf, q540k_, ibvft, tmfvb) {
    var gb1uv = this['doc'],
        q0tfm = gb1uv['createElementNS'](thibmf, ibvft || q540k_),
        f0tmh = tmfvb['length'];fihmfbt(this, q0tfm), this['currentElement'] = q0tfm, this['locator'] && fxr7e(this['locator'], q0tfm);for (var jc6dos = 0x0; f0tmh > jc6dos; jc6dos++) {
      var thibmf = tmfvb['getURI'](jc6dos),
          q_k4 = tmfvb['getValue'](jc6dos),
          ibvft = tmfvb['getQName'](jc6dos),
          d6sj = gb1uv['createAttributeNS'](thibmf, ibvft);this['locator'] && fxr7e(tmfvb['getLocator'](jc6dos), d6sj), d6sj['value'] = d6sj['nodeValue'] = q_k4, q0tfm['setAttributeNode'](d6sj);
    }
  }, 'endElement': function () {
    {
      var yar7$ = this['currentElement'];yar7$['tagName'];
    }this['currentElement'] = yar7$['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (q0ftm, xne8zr) {
    var cdosj = this['doc']['createProcessingInstruction'](q0ftm, xne8zr);this['locator'] && fxr7e(this['locator'], cdosj), fihmfbt(this, cdosj);
  }, 'ignorableWhitespace': function () {}, 'characters': function ($7r3z8) {
    if ($7r3z8 = fsenxwz['apply'](this, arguments)) {
      if (this['cdata']) var thmfq0 = this['doc']['createCDATASection']($7r3z8);else var thmfq0 = this['doc']['createTextNode']($7r3z8);this['currentElement'] ? this['currentElement']['appendChild'](thmfq0) : /^\s*$/['test']($7r3z8) && this['doc']['appendChild'](thmfq0), this['locator'] && fxr7e(this['locator'], thmfq0);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (kh_05) {
    (this['locator'] = kh_05) && (kh_05['lineNumber'] = 0x0);
  }, 'comment': function (zr8$37) {
    zr8$37 = fsenxwz['apply'](this, arguments);var kq52 = this['doc']['createComment'](zr8$37);this['locator'] && fxr7e(this['locator'], kq52), fihmfbt(this, kq52);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (vibm1, tihf0, dc6so) {
    var f0him = this['doc']['implementation'];if (f0him && f0him['createDocumentType']) {
      var xewz8n = f0him['createDocumentType'](vibm1, tihf0, dc6so);this['locator'] && fxr7e(this['locator'], xewz8n), fihmfbt(this, xewz8n);
    }
  }, 'warning': function (tqhk50) {
    console['warn']('[xmldom warning]\t' + tqhk50, fjswcn(this['locator']));
  }, 'error': function (_ok26) {
    console['error']('[xmldom error]\t' + _ok26, fjswcn(this['locator']));
  }, 'fatalError': function (ezswn) {
    throw console['error']('[xmldom fatalError]\t' + ezswn, fjswcn(this['locator'])), ezswn;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (y873) {
  fezxnr['prototype'][y873] = function () {
    return null;
  };
});var fk_2546 = require('./fffsax')['XMLReader'],
    fj6co2d = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fewnxz;