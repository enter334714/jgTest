var k = wx.$f;
function fer7$8z(nwedsx) {
  this['options'] = nwedsx || { 'locator': {} };
}function fd6jocs(ibfmth, r3a7$y, k654_) {
  function zrne8x(c6dosj) {
    var hqft = ibfmth[c6dosj];!hqft && u91vb && (hqft = 0x2 == ibfmth['length'] ? function ($3r7ay) {
      ibfmth(c6dosj, $3r7ay);
    } : ibfmth), nsezx[c6dosj] = hqft && function (zexsn) {
      hqft('[xmldom ' + c6dosj + ']\t' + zexsn + fum1bvi(k654_));
    } || function () {};
  }if (!ibfmth) {
    if (r3a7$y instanceof f_4qk) return r3a7$y;ibfmth = r3a7$y;
  }var nsezx = {},
      u91vb = ibfmth instanceof Function;return k654_ = k654_ || {}, zrne8x('warning'), zrne8x('error'), zrne8x('fatalError'), nsezx;
}function f_4qk() {
  this['cdata'] = !0x1;
}function fgu9b(z8e$7, ojc6d) {
  ojc6d['lineNumber'] = z8e$7['lineNumber'], ojc6d['columnNumber'] = z8e$7['columnNumber'];
}function fum1bvi(cso6j) {
  return cso6j ? '\x0a@' + (cso6j['systemId'] || '') + '#[line:' + cso6j['lineNumber'] + ',col:' + cso6j['columnNumber'] + ']' : void 0x0;
}function ftmfih(viu9b1, _42o6, k_o264) {
  return 'string' == typeof viu9b1 ? viu9b1['substr'](_42o6, k_o264) : viu9b1['length'] >= _42o6 + k_o264 || _42o6 ? new java['lang']['String'](viu9b1, _42o6, k_o264) + '' : viu9b1;
}function fwcod(ezxnw, mft) {
  ezxnw['currentElement'] ? ezxnw['currentElement']['appendChild'](mft) : ezxnw['doc']['appendChild'](mft);
}fer7$8z['prototype']['parseFromString'] = function ($p7a, ubfvi) {
  var dj26oc = this['options'],
      imbv = new fenrzx8(),
      thqfm = dj26oc['domBuilder'] || new f_4qk(),
      f0q5ht = dj26oc['errorHandler'],
      zerx7 = dj26oc['locator'],
      xe8zwn = dj26oc['xmlns'] || {},
      xwnsed = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return zerx7 && thqfm['setDocumentLocator'](zerx7), imbv['errorHandler'] = fd6jocs(f0q5ht, thqfm, zerx7), imbv['domBuilder'] = dj26oc['domBuilder'] || thqfm, /\/x?html?$/['test'](ubfvi) && (xwnsed['nbsp'] = '\u00a0', xwnsed['copy'] = '©', xe8zwn[''] = 'http://www.w3.org/1999/xhtml'), xe8zwn['xml'] = xe8zwn['xml'] || 'http://www.w3.org/XML/1998/namespace', $p7a ? imbv['parse']($p7a, xe8zwn, xwnsed) : imbv['errorHandler']['error']('invalid doc source'), thqfm['doc'];
}, f_4qk['prototype'] = { 'startDocument': function () {
    this['doc'] = new fxre8zn()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (mt0fi, hmbitf, ex7zr, mifv) {
    var c4o2 = this['doc'],
        h50k_q = c4o2['createElementNS'](mt0fi, ex7zr || hmbitf),
        jcnsdw = mifv['length'];fwcod(this, h50k_q), this['currentElement'] = h50k_q, this['locator'] && fgu9b(this['locator'], h50k_q);for (var k2o6 = 0x0; jcnsdw > k2o6; k2o6++) {
      var mt0fi = mifv['getURI'](k2o6),
          h0kt5q = mifv['getValue'](k2o6),
          ex7zr = mifv['getQName'](k2o6),
          hqk_0 = c4o2['createAttributeNS'](mt0fi, ex7zr);this['locator'] && fgu9b(mifv['getLocator'](k2o6), hqk_0), hqk_0['value'] = hqk_0['nodeValue'] = h0kt5q, h50k_q['setAttributeNode'](hqk_0);
    }
  }, 'endElement': function () {
    {
      var k5_4q = this['currentElement'];k5_4q['tagName'];
    }this['currentElement'] = k5_4q['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (dj62co, q4_k25) {
    var h0tmif = this['doc']['createProcessingInstruction'](dj62co, q4_k25);this['locator'] && fgu9b(this['locator'], h0tmif), fwcod(this, h0tmif);
  }, 'ignorableWhitespace': function () {}, 'characters': function (c6do2) {
    if (c6do2 = ftmfih['apply'](this, arguments)) {
      if (this['cdata']) var mbvfti = this['doc']['createCDATASection'](c6do2);else var mbvfti = this['doc']['createTextNode'](c6do2);this['currentElement'] ? this['currentElement']['appendChild'](mbvfti) : /^\s*$/['test'](c6do2) && this['doc']['appendChild'](mbvfti), this['locator'] && fgu9b(this['locator'], mbvfti);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (b1uv9g) {
    (this['locator'] = b1uv9g) && (b1uv9g['lineNumber'] = 0x0);
  }, 'comment': function (bumfiv) {
    bumfiv = ftmfih['apply'](this, arguments);var f5tq0 = this['doc']['createComment'](bumfiv);this['locator'] && fgu9b(this['locator'], f5tq0), fwcod(this, f5tq0);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (v1buim, nwsdc, qk0th5) {
    var wjndx = this['doc']['implementation'];if (wjndx && wjndx['createDocumentType']) {
      var j4c62o = wjndx['createDocumentType'](v1buim, nwsdc, qk0th5);this['locator'] && fgu9b(this['locator'], j4c62o), fwcod(this, j4c62o);
    }
  }, 'warning': function (wenzx8) {
    console['warn']('[xmldom warning]\t' + wenzx8, fum1bvi(this['locator']));
  }, 'error': function (tmfbih) {
    console['error']('[xmldom error]\t' + tmfbih, fum1bvi(this['locator']));
  }, 'fatalError': function (imbhtf) {
    throw console['error']('[xmldom fatalError]\t' + imbhtf, fum1bvi(this['locator'])), imbhtf;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (mbv1iu) {
  f_4qk['prototype'][mbv1iu] = function () {
    return null;
  };
});var fenrzx8 = require('./fffsax')['XMLReader'],
    fxre8zn = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fer7$8z;