var k = wx.$f;
function fib1muv(mvbi) {
  this['options'] = mvbi || { 'locator': {} };
}function fhkt(hmif, dwcs, r3a$y) {
  function ht05qf(mitb) {
    var bv91ui = hmif[mitb];!bv91ui && bi91v && (bv91ui = 0x2 == hmif['length'] ? function (o2c4) {
      hmif(mitb, o2c4);
    } : hmif), nrexz[mitb] = bv91ui && function (j2cd6) {
      bv91ui('[xmldom ' + mitb + ']\t' + j2cd6 + fndjx(r3a$y));
    } || function () {};
  }if (!hmif) {
    if (dwcs instanceof ffmh0qt) return dwcs;hmif = dwcs;
  }var nrexz = {},
      bi91v = hmif instanceof Function;return r3a$y = r3a$y || {}, ht05qf('warning'), ht05qf('error'), ht05qf('fatalError'), nrexz;
}function ffmh0qt() {
  this['cdata'] = !0x1;
}function fncjw($z7e8r, fbmviu) {
  fbmviu['lineNumber'] = $z7e8r['lineNumber'], fbmviu['columnNumber'] = $z7e8r['columnNumber'];
}function fndjx(e8x7zr) {
  return e8x7zr ? '\x0a@' + (e8x7zr['systemId'] || '') + '#[line:' + e8x7zr['lineNumber'] + ',col:' + e8x7zr['columnNumber'] + ']' : void 0x0;
}function fyr3$(ftimb, vbif, kq2_5) {
  return 'string' == typeof ftimb ? ftimb['substr'](vbif, kq2_5) : ftimb['length'] >= vbif + kq2_5 || vbif ? new java['lang']['String'](ftimb, vbif, kq2_5) + '' : ftimb;
}function f$38ry(biv91, bmvu1i) {
  biv91['currentElement'] ? biv91['currentElement']['appendChild'](bmvu1i) : biv91['doc']['appendChild'](bmvu1i);
}fib1muv['prototype']['parseFromString'] = function (kh0qt, d6sco) {
  var z78r$e = this['options'],
      nzxer = new ftq0k5(),
      k5hq0_ = z78r$e['domBuilder'] || new ffmh0qt(),
      tvmbf = z78r$e['errorHandler'],
      c6o4 = z78r$e['locator'],
      zensx = z78r$e['xmlns'] || {},
      nr8zx = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return c6o4 && k5hq0_['setDocumentLocator'](c6o4), nzxer['errorHandler'] = fhkt(tvmbf, k5hq0_, c6o4), nzxer['domBuilder'] = z78r$e['domBuilder'] || k5hq0_, /\/x?html?$/['test'](d6sco) && (nr8zx['nbsp'] = '\u00a0', nr8zx['copy'] = '©', zensx[''] = 'http://www.w3.org/1999/xhtml'), zensx['xml'] = zensx['xml'] || 'http://www.w3.org/XML/1998/namespace', kh0qt ? nzxer['parse'](kh0qt, zensx, nr8zx) : nzxer['errorHandler']['error']('invalid doc source'), k5hq0_['doc'];
}, ffmh0qt['prototype'] = { 'startDocument': function () {
    this['doc'] = new fbhitmf()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_2oc4, c6o4_2, u9gv1b, _q0h5) {
    var uvi1b9 = this['doc'],
        t0hfq5 = uvi1b9['createElementNS'](_2oc4, u9gv1b || c6o4_2),
        xzewn8 = _q0h5['length'];f$38ry(this, t0hfq5), this['currentElement'] = t0hfq5, this['locator'] && fncjw(this['locator'], t0hfq5);for (var bmthi = 0x0; xzewn8 > bmthi; bmthi++) {
      var _2oc4 = _q0h5['getURI'](bmthi),
          mfvtib = _q0h5['getValue'](bmthi),
          u9gv1b = _q0h5['getQName'](bmthi),
          m0tfih = uvi1b9['createAttributeNS'](_2oc4, u9gv1b);this['locator'] && fncjw(_q0h5['getLocator'](bmthi), m0tfih), m0tfih['value'] = m0tfih['nodeValue'] = mfvtib, t0hfq5['setAttributeNode'](m0tfih);
    }
  }, 'endElement': function () {
    {
      var mfvuib = this['currentElement'];mfvuib['tagName'];
    }this['currentElement'] = mfvuib['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ez8r7x, c6jdo) {
    var q5tf0h = this['doc']['createProcessingInstruction'](ez8r7x, c6jdo);this['locator'] && fncjw(this['locator'], q5tf0h), f$38ry(this, q5tf0h);
  }, 'ignorableWhitespace': function () {}, 'characters': function (u1biv) {
    if (u1biv = fyr3$['apply'](this, arguments)) {
      if (this['cdata']) var nex8 = this['doc']['createCDATASection'](u1biv);else var nex8 = this['doc']['createTextNode'](u1biv);this['currentElement'] ? this['currentElement']['appendChild'](nex8) : /^\s*$/['test'](u1biv) && this['doc']['appendChild'](nex8), this['locator'] && fncjw(this['locator'], nex8);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (jd2co6) {
    (this['locator'] = jd2co6) && (jd2co6['lineNumber'] = 0x0);
  }, 'comment': function (y37a$) {
    y37a$ = fyr3$['apply'](this, arguments);var sdcjo = this['doc']['createComment'](y37a$);this['locator'] && fncjw(this['locator'], sdcjo), f$38ry(this, sdcjo);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (gv9u, k625_4, jnsxdw) {
    var y7r$83 = this['doc']['implementation'];if (y7r$83 && y7r$83['createDocumentType']) {
      var qtmh0 = y7r$83['createDocumentType'](gv9u, k625_4, jnsxdw);this['locator'] && fncjw(this['locator'], qtmh0), f$38ry(this, qtmh0);
    }
  }, 'warning': function (ifht0) {
    console['warn']('[xmldom warning]\t' + ifht0, fndjx(this['locator']));
  }, 'error': function (xnjswd) {
    console['error']('[xmldom error]\t' + xnjswd, fndjx(this['locator']));
  }, 'fatalError': function (bguv1) {
    throw console['error']('[xmldom fatalError]\t' + bguv1, fndjx(this['locator'])), bguv1;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (dco26j) {
  ffmh0qt['prototype'][dco26j] = function () {
    return null;
  };
});var ftq0k5 = require('./fffsax')['XMLReader'],
    fbhitmf = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fib1muv;