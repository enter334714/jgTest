var k = wx.$f;
function fnesxwd(vmbfi) {
  this['options'] = vmbfi || { 'locator': {} };
}function ff0qh5(y$r73, cjwdos, fh0qt5) {
  function ihfmbt($3r8) {
    var zr$3 = y$r73[$3r8];!zr$3 && xnsed && (zr$3 = 0x2 == y$r73['length'] ? function (wjdcsn) {
      y$r73($3r8, wjdcsn);
    } : y$r73), hmftib[$3r8] = zr$3 && function (djsxw) {
      zr$3('[xmldom ' + $3r8 + ']\t' + djsxw + freznx(fh0qt5));
    } || function () {};
  }if (!y$r73) {
    if (cjwdos instanceof f$ya37r) return cjwdos;y$r73 = cjwdos;
  }var hmftib = {},
      xnsed = y$r73 instanceof Function;return fh0qt5 = fh0qt5 || {}, ihfmbt('warning'), ihfmbt('error'), ihfmbt('fatalError'), hmftib;
}function f$ya37r() {
  this['cdata'] = !0x1;
}function frxe7z8(rzxe8, wnxsez) {
  wnxsez['lineNumber'] = rzxe8['lineNumber'], wnxsez['columnNumber'] = rzxe8['columnNumber'];
}function freznx(mhitbf) {
  return mhitbf ? '\x0a@' + (mhitbf['systemId'] || '') + '#[line:' + mhitbf['lineNumber'] + ',col:' + mhitbf['columnNumber'] + ']' : void 0x0;
}function fmbtvi(py$a73, cnjws, dc2oj) {
  return 'string' == typeof py$a73 ? py$a73['substr'](cnjws, dc2oj) : py$a73['length'] >= cnjws + dc2oj || cnjws ? new java['lang']['String'](py$a73, cnjws, dc2oj) + '' : py$a73;
}function fze8rxn(tbifhm, wdjsoc) {
  tbifhm['currentElement'] ? tbifhm['currentElement']['appendChild'](wdjsoc) : tbifhm['doc']['appendChild'](wdjsoc);
}fnesxwd['prototype']['parseFromString'] = function (s6ocjd, mfhi0t) {
  var h5 = this['options'],
      jdscw = new fexz7(),
      biv1u9 = h5['domBuilder'] || new f$ya37r(),
      h5qtk0 = h5['errorHandler'],
      wnexzs = h5['locator'],
      xnwjsd = h5['xmlns'] || {},
      b1iu9v = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return wnexzs && biv1u9['setDocumentLocator'](wnexzs), jdscw['errorHandler'] = ff0qh5(h5qtk0, biv1u9, wnexzs), jdscw['domBuilder'] = h5['domBuilder'] || biv1u9, /\/x?html?$/['test'](mfhi0t) && (b1iu9v['nbsp'] = '\u00a0', b1iu9v['copy'] = '©', xnwjsd[''] = 'http://www.w3.org/1999/xhtml'), xnwjsd['xml'] = xnwjsd['xml'] || 'http://www.w3.org/XML/1998/namespace', s6ocjd ? jdscw['parse'](s6ocjd, xnwjsd, b1iu9v) : jdscw['errorHandler']['error']('invalid doc source'), biv1u9['doc'];
}, f$ya37r['prototype'] = { 'startDocument': function () {
    this['doc'] = new fm0hfit()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (u1vm, $z8er7, fq0htm, dnjsc) {
    var zxw8e = this['doc'],
        o26_ = zxw8e['createElementNS'](u1vm, fq0htm || $z8er7),
        xdsjnw = dnjsc['length'];fze8rxn(this, o26_), this['currentElement'] = o26_, this['locator'] && frxe7z8(this['locator'], o26_);for (var $a7p3y = 0x0; xdsjnw > $a7p3y; $a7p3y++) {
      var u1vm = dnjsc['getURI']($a7p3y),
          a7yr$ = dnjsc['getValue']($a7p3y),
          fq0htm = dnjsc['getQName']($a7p3y),
          rz3$ = zxw8e['createAttributeNS'](u1vm, fq0htm);this['locator'] && frxe7z8(dnjsc['getLocator']($a7p3y), rz3$), rz3$['value'] = rz3$['nodeValue'] = a7yr$, o26_['setAttributeNode'](rz3$);
    }
  }, 'endElement': function () {
    {
      var ibvmu = this['currentElement'];ibvmu['tagName'];
    }this['currentElement'] = ibvmu['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (tmfqh, tqfm0h) {
    var vmbf = this['doc']['createProcessingInstruction'](tmfqh, tqfm0h);this['locator'] && frxe7z8(this['locator'], vmbf), fze8rxn(this, vmbf);
  }, 'ignorableWhitespace': function () {}, 'characters': function (r8z73$) {
    if (r8z73$ = fmbtvi['apply'](this, arguments)) {
      if (this['cdata']) var ivtbfm = this['doc']['createCDATASection'](r8z73$);else var ivtbfm = this['doc']['createTextNode'](r8z73$);this['currentElement'] ? this['currentElement']['appendChild'](ivtbfm) : /^\s*$/['test'](r8z73$) && this['doc']['appendChild'](ivtbfm), this['locator'] && frxe7z8(this['locator'], ivtbfm);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (imbu1) {
    (this['locator'] = imbu1) && (imbu1['lineNumber'] = 0x0);
  }, 'comment': function (jdxnsw) {
    jdxnsw = fmbtvi['apply'](this, arguments);var rzenx8 = this['doc']['createComment'](jdxnsw);this['locator'] && frxe7z8(this['locator'], rzenx8), fze8rxn(this, rzenx8);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (dxnjw, $37zr8, bumi1) {
    var rnxez = this['doc']['implementation'];if (rnxez && rnxez['createDocumentType']) {
      var ay$p = rnxez['createDocumentType'](dxnjw, $37zr8, bumi1);this['locator'] && frxe7z8(this['locator'], ay$p), fze8rxn(this, ay$p);
    }
  }, 'warning': function (xsjdw) {
    console['warn']('[xmldom warning]\t' + xsjdw, freznx(this['locator']));
  }, 'error': function (ubi1v) {
    console['error']('[xmldom error]\t' + ubi1v, freznx(this['locator']));
  }, 'fatalError': function (k42_6) {
    throw console['error']('[xmldom fatalError]\t' + k42_6, freznx(this['locator'])), k42_6;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (q_5k40) {
  f$ya37r['prototype'][q_5k40] = function () {
    return null;
  };
});var fexz7 = require('./fffsax')['XMLReader'],
    fm0hfit = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fnesxwd;