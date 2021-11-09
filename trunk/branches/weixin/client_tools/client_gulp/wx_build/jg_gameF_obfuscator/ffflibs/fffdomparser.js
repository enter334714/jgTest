var k = wx.$f;
function fq0k(wcnd) {
  this['options'] = wcnd || { 'locator': {} };
}function fy3ra$7(c4o26, dxwjns, x8nwze) {
  function f0qm(q5fh) {
    var q_504k = c4o26[q5fh];!q_504k && e7zx8r && (q_504k = 0x2 == c4o26['length'] ? function (_k264o) {
      c4o26(q5fh, _k264o);
    } : c4o26), hq0tm[q5fh] = q_504k && function (mbui) {
      q_504k('[xmldom ' + q5fh + ']\t' + mbui + fesxndw(x8nwze));
    } || function () {};
  }if (!c4o26) {
    if (dxwjns instanceof fcdosjw) return dxwjns;c4o26 = dxwjns;
  }var hq0tm = {},
      e7zx8r = c4o26 instanceof Function;return x8nwze = x8nwze || {}, f0qm('warning'), f0qm('error'), f0qm('fatalError'), hq0tm;
}function fcdosjw() {
  this['cdata'] = !0x1;
}function fk0q5_4(b1vuim, bmiuv) {
  bmiuv['lineNumber'] = b1vuim['lineNumber'], bmiuv['columnNumber'] = b1vuim['columnNumber'];
}function fesxndw(ibtmfh) {
  return ibtmfh ? '\x0a@' + (ibtmfh['systemId'] || '') + '#[line:' + ibtmfh['lineNumber'] + ',col:' + ibtmfh['columnNumber'] + ']' : void 0x0;
}function fhmibt(zxwns, r73ya$, doj26c) {
  return 'string' == typeof zxwns ? zxwns['substr'](r73ya$, doj26c) : zxwns['length'] >= r73ya$ + doj26c || r73ya$ ? new java['lang']['String'](zxwns, r73ya$, doj26c) + '' : zxwns;
}function fvbmift(o_k2, cj26) {
  o_k2['currentElement'] ? o_k2['currentElement']['appendChild'](cj26) : o_k2['doc']['appendChild'](cj26);
}fq0k['prototype']['parseFromString'] = function (vubmfi, p7$y) {
  var zr8e7 = this['options'],
      imbf = new fmbtvf(),
      nxez8 = zr8e7['domBuilder'] || new fcdosjw(),
      sxezw = zr8e7['errorHandler'],
      fimh0t = zr8e7['locator'],
      ez78rx = zr8e7['xmlns'] || {},
      o4j2c6 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return fimh0t && nxez8['setDocumentLocator'](fimh0t), imbf['errorHandler'] = fy3ra$7(sxezw, nxez8, fimh0t), imbf['domBuilder'] = zr8e7['domBuilder'] || nxez8, /\/x?html?$/['test'](p7$y) && (o4j2c6['nbsp'] = '\u00a0', o4j2c6['copy'] = '©', ez78rx[''] = 'http://www.w3.org/1999/xhtml'), ez78rx['xml'] = ez78rx['xml'] || 'http://www.w3.org/XML/1998/namespace', vubmfi ? imbf['parse'](vubmfi, ez78rx, o4j2c6) : imbf['errorHandler']['error']('invalid doc source'), nxez8['doc'];
}, fcdosjw['prototype'] = { 'startDocument': function () {
    this['doc'] = new fr378z()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (q50k4_, qk504_, xsnwz, dxjw) {
    var kq50th = this['doc'],
        ren = kq50th['createElementNS'](q50k4_, xsnwz || qk504_),
        ods6j = dxjw['length'];fvbmift(this, ren), this['currentElement'] = ren, this['locator'] && fk0q5_4(this['locator'], ren);for (var k0h5t = 0x0; ods6j > k0h5t; k0h5t++) {
      var q50k4_ = dxjw['getURI'](k0h5t),
          mibu1 = dxjw['getValue'](k0h5t),
          xsnwz = dxjw['getQName'](k0h5t),
          $er8 = kq50th['createAttributeNS'](q50k4_, xsnwz);this['locator'] && fk0q5_4(dxjw['getLocator'](k0h5t), $er8), $er8['value'] = $er8['nodeValue'] = mibu1, ren['setAttributeNode']($er8);
    }
  }, 'endElement': function () {
    {
      var mf0ht = this['currentElement'];mf0ht['tagName'];
    }this['currentElement'] = mf0ht['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (muvifb, oc2d6) {
    var dnwesx = this['doc']['createProcessingInstruction'](muvifb, oc2d6);this['locator'] && fk0q5_4(this['locator'], dnwesx), fvbmift(this, dnwesx);
  }, 'ignorableWhitespace': function () {}, 'characters': function (z$37) {
    if (z$37 = fhmibt['apply'](this, arguments)) {
      if (this['cdata']) var bvgu = this['doc']['createCDATASection'](z$37);else var bvgu = this['doc']['createTextNode'](z$37);this['currentElement'] ? this['currentElement']['appendChild'](bvgu) : /^\s*$/['test'](z$37) && this['doc']['appendChild'](bvgu), this['locator'] && fk0q5_4(this['locator'], bvgu);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (iuvbfm) {
    (this['locator'] = iuvbfm) && (iuvbfm['lineNumber'] = 0x0);
  }, 'comment': function (k6o2) {
    k6o2 = fhmibt['apply'](this, arguments);var $z3r78 = this['doc']['createComment'](k6o2);this['locator'] && fk0q5_4(this['locator'], $z3r78), fvbmift(this, $z3r78);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (jswo, o_c6, xsde) {
    var nxwsd = this['doc']['implementation'];if (nxwsd && nxwsd['createDocumentType']) {
      var tf05h = nxwsd['createDocumentType'](jswo, o_c6, xsde);this['locator'] && fk0q5_4(this['locator'], tf05h), fvbmift(this, tf05h);
    }
  }, 'warning': function (tfh50q) {
    console['warn']('[xmldom warning]\t' + tfh50q, fesxndw(this['locator']));
  }, 'error': function (sodcw) {
    console['error']('[xmldom error]\t' + sodcw, fesxndw(this['locator']));
  }, 'fatalError': function (xe8zw) {
    throw console['error']('[xmldom fatalError]\t' + xe8zw, fesxndw(this['locator'])), xe8zw;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (jo6dsc) {
  fcdosjw['prototype'][jo6dsc] = function () {
    return null;
  };
});var fmbtvf = require('./fffsax')['XMLReader'],
    fr378z = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fq0k;