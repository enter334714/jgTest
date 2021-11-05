var k = wx.$f;
function fht50kq(ojcwsd) {
  this['options'] = ojcwsd || { 'locator': {} };
}function fsjnxdw($38yr, iubfm, ze87x) {
  function scd6j(sdwncj) {
    var nwdcsj = $38yr[sdwncj];!nwdcsj && mvfitb && (nwdcsj = 0x2 == $38yr['length'] ? function (xjsdw) {
      $38yr(sdwncj, xjsdw);
    } : $38yr), rn8[sdwncj] = nwdcsj && function ($ya3r7) {
      nwdcsj('[xmldom ' + sdwncj + ']\t' + $ya3r7 + fkthq(ze87x));
    } || function () {};
  }if (!$38yr) {
    if (iubfm instanceof fsweznx) return iubfm;$38yr = iubfm;
  }var rn8 = {},
      mvfitb = $38yr instanceof Function;return ze87x = ze87x || {}, scd6j('warning'), scd6j('error'), scd6j('fatalError'), rn8;
}function fsweznx() {
  this['cdata'] = !0x1;
}function fq4k25(_q05h, ufim) {
  ufim['lineNumber'] = _q05h['lineNumber'], ufim['columnNumber'] = _q05h['columnNumber'];
}function fkthq(iuvb1) {
  return iuvb1 ? '\x0a@' + (iuvb1['systemId'] || '') + '#[line:' + iuvb1['lineNumber'] + ',col:' + iuvb1['columnNumber'] + ']' : void 0x0;
}function fu1vib9(imb, xen, mh0fti) {
  return 'string' == typeof imb ? imb['substr'](xen, mh0fti) : imb['length'] >= xen + mh0fti || xen ? new java['lang']['String'](imb, xen, mh0fti) + '' : imb;
}function fcdj26o(ap$73, x7e8r) {
  ap$73['currentElement'] ? ap$73['currentElement']['appendChild'](x7e8r) : ap$73['doc']['appendChild'](x7e8r);
}fht50kq['prototype']['parseFromString'] = function (uvb91i, mtivb) {
  var sowcj = this['options'],
      jxws = new fez8nxr(),
      enzwsx = sowcj['domBuilder'] || new fsweznx(),
      tvbmf = sowcj['errorHandler'],
      itbmvf = sowcj['locator'],
      _q4k05 = sowcj['xmlns'] || {},
      tivf = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return itbmvf && enzwsx['setDocumentLocator'](itbmvf), jxws['errorHandler'] = fsjnxdw(tvbmf, enzwsx, itbmvf), jxws['domBuilder'] = sowcj['domBuilder'] || enzwsx, /\/x?html?$/['test'](mtivb) && (tivf['nbsp'] = '\u00a0', tivf['copy'] = '©', _q4k05[''] = 'http://www.w3.org/1999/xhtml'), _q4k05['xml'] = _q4k05['xml'] || 'http://www.w3.org/XML/1998/namespace', uvb91i ? jxws['parse'](uvb91i, _q4k05, tivf) : jxws['errorHandler']['error']('invalid doc source'), enzwsx['doc'];
}, fsweznx['prototype'] = { 'startDocument': function () {
    this['doc'] = new fjsnxd()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (y87$3, wcjd, vmfui, fi0mht) {
    var q0tmfh = this['doc'],
        mtbivf = q0tmfh['createElementNS'](y87$3, vmfui || wcjd),
        owjsdc = fi0mht['length'];fcdj26o(this, mtbivf), this['currentElement'] = mtbivf, this['locator'] && fq4k25(this['locator'], mtbivf);for (var xswned = 0x0; owjsdc > xswned; xswned++) {
      var y87$3 = fi0mht['getURI'](xswned),
          bhtfm = fi0mht['getValue'](xswned),
          vmfui = fi0mht['getQName'](xswned),
          k26o = q0tmfh['createAttributeNS'](y87$3, vmfui);this['locator'] && fq4k25(fi0mht['getLocator'](xswned), k26o), k26o['value'] = k26o['nodeValue'] = bhtfm, mtbivf['setAttributeNode'](k26o);
    }
  }, 'endElement': function () {
    {
      var cdj6so = this['currentElement'];cdj6so['tagName'];
    }this['currentElement'] = cdj6so['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (a3$yp, mhfb) {
    var gu1v9b = this['doc']['createProcessingInstruction'](a3$yp, mhfb);this['locator'] && fq4k25(this['locator'], gu1v9b), fcdj26o(this, gu1v9b);
  }, 'ignorableWhitespace': function () {}, 'characters': function (jo24c6) {
    if (jo24c6 = fu1vib9['apply'](this, arguments)) {
      if (this['cdata']) var vufib = this['doc']['createCDATASection'](jo24c6);else var vufib = this['doc']['createTextNode'](jo24c6);this['currentElement'] ? this['currentElement']['appendChild'](vufib) : /^\s*$/['test'](jo24c6) && this['doc']['appendChild'](vufib), this['locator'] && fq4k25(this['locator'], vufib);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (cjdso6) {
    (this['locator'] = cjdso6) && (cjdso6['lineNumber'] = 0x0);
  }, 'comment': function (xzwse) {
    xzwse = fu1vib9['apply'](this, arguments);var nwdxe = this['doc']['createComment'](xzwse);this['locator'] && fq4k25(this['locator'], nwdxe), fcdj26o(this, nwdxe);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (oj62cd, _k2564, tfbivm) {
    var gb1vu9 = this['doc']['implementation'];if (gb1vu9 && gb1vu9['createDocumentType']) {
      var dojc6s = gb1vu9['createDocumentType'](oj62cd, _k2564, tfbivm);this['locator'] && fq4k25(this['locator'], dojc6s), fcdj26o(this, dojc6s);
    }
  }, 'warning': function (ui9) {
    console['warn']('[xmldom warning]\t' + ui9, fkthq(this['locator']));
  }, 'error': function (j264co) {
    console['error']('[xmldom error]\t' + j264co, fkthq(this['locator']));
  }, 'fatalError': function (xwsezn) {
    throw console['error']('[xmldom fatalError]\t' + xwsezn, fkthq(this['locator'])), xwsezn;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_k045) {
  fsweznx['prototype'][_k045] = function () {
    return null;
  };
});var fez8nxr = require('./fffsax')['XMLReader'],
    fjsnxd = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fht50kq;