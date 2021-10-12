var p = wx.$h;
function a_gyce9h(va5d) {
  this['options'] = va5d || { 'locator': {} };
}function a_j8zmsf(eyrv, wogh9c, wokgc) {
  function pzjmq(ljm) {
    var fjqmz = eyrv[ljm];!fjqmz && kot2q1 && (fjqmz = 0x2 == eyrv['length'] ? function (w1ock) {
      eyrv(ljm, w1ock);
    } : eyrv), o12tk[ljm] = fjqmz ? function (ehc9gy) {
      fjqmz('[xmldom ' + ljm + ']\t' + ehc9gy + a_ptqzmf(wokgc));
    } : function () {};
  }if (!eyrv) {
    if (wogh9c instanceof a_x5rd3) return wogh9c;eyrv = wogh9c;
  }var o12tk = {},
      kot2q1 = eyrv instanceof Function;return wokgc = wokgc || {}, pzjmq('warning'), pzjmq('error'), pzjmq('fatalError'), o12tk;
}function a_x5rd3() {
  this['cdata'] = !0x1;
}function a_vyerbd(gohwk, ms08z) {
  ms08z['lineNumber'] = gohwk['lineNumber'], ms08z['columnNumber'] = gohwk['columnNumber'];
}function a_ptqzmf(zmfqtp) {
  return zmfqtp ? '\x0a@' + (zmfqtp['systemId'] || '') + '#[line:' + zmfqtp['lineNumber'] + ',col:' + zmfqtp['columnNumber'] + ']' : void 0x0;
}function a_t2kw(h9evgy, ohkgwc, aevrb) {
  return 'string' == typeof h9evgy ? h9evgy['substr'](ohkgwc, aevrb) : h9evgy['length'] >= ohkgwc + aevrb || ohkgwc ? new java['lang']['String'](h9evgy, ohkgwc, aevrb) + '' : h9evgy;
}function a_jls0(_04l, pmtzfq) {
  (_04l['currentElement'] || _04l['doc'])['appendChild'](pmtzfq);
}a_gyce9h['prototype']['parseFromString'] = function (l8_7$, gcokwh) {
  var hgcy9e = this['options'],
      edabrv = new a_r5aix3(),
      bverda = hgcy9e['domBuilder'] || new a_x5rd3(),
      fzm8js = hgcy9e['errorHandler'],
      wcgy9 = hgcy9e['locator'],
      n3xa5i = hgcy9e['xmlns'] || {},
      xbdr = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return wcgy9 && bverda['setDocumentLocator'](wcgy9), edabrv['errorHandler'] = a_j8zmsf(fzm8js, bverda, wcgy9), edabrv['domBuilder'] = hgcy9e['domBuilder'] || bverda, /\/x?html?$/['test'](gcokwh) && (xbdr['nbsp'] = '\u00a0', xbdr['copy'] = '©', n3xa5i[''] = 'http://www.w3.org/1999/xhtml'), n3xa5i['xml'] = n3xa5i['xml'] || 'http://www.w3.org/XML/1998/namespace', l8_7$ ? edabrv['parse'](l8_7$, n3xa5i, xbdr) : edabrv['errorHandler']['error']('invalid doc source'), bverda['doc'];
}, a_x5rd3['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_dye9bv()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (qzfpt2, fpt1q, bvrea, erbvdy) {
    var ptq1k = this['doc'],
        pk2t = ptq1k['createElementNS'](qzfpt2, bvrea || fpt1q),
        who9 = erbvdy['length'];a_jls0(this, pk2t), this['currentElement'] = pk2t, this['locator'] && a_vyerbd(this['locator'], pk2t);for (var pzmtq = 0x0; pzmtq < who9; pzmtq++) {
      var qzfpt2 = erbvdy['getURI'](pzmtq),
          ecy = erbvdy['getValue'](pzmtq),
          bvrea = erbvdy['getQName'](pzmtq),
          v9gbye = ptq1k['createAttributeNS'](qzfpt2, bvrea);this['locator'] && a_vyerbd(erbvdy['getLocator'](pzmtq), v9gbye), v9gbye['value'] = v9gbye['nodeValue'] = ecy, pk2t['setAttributeNode'](v9gbye);
    }
  }, 'endElement': function () {
    var y9hve = this['currentElement'];y9hve['tagName'], this['currentElement'] = y9hve['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (fmzpjs, mszj8) {
    mszj8 = this['doc']['createProcessingInstruction'](fmzpjs, mszj8), (this['locator'] && a_vyerbd(this['locator'], mszj8), a_jls0(this, mszj8));
  }, 'ignorableWhitespace': function () {}, 'characters': function (eyg9bv) {
    var q2ftp;(eyg9bv = a_t2kw['apply'](this, arguments)) && (q2ftp = this['cdata'] ? this['doc']['createCDATASection'](eyg9bv) : this['doc']['createTextNode'](eyg9bv), this['currentElement'] ? this['currentElement']['appendChild'](q2ftp) : /^\s*$/['test'](eyg9bv) && this['doc']['appendChild'](q2ftp), this['locator'] && a_vyerbd(this['locator'], q2ftp));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (xn35a) {
    (this['locator'] = xn35a) && (xn35a['lineNumber'] = 0x0);
  }, 'comment': function (r3xa5d) {
    r3xa5d = a_t2kw['apply'](this, arguments);var pzt2fq = this['doc']['createComment'](r3xa5d);this['locator'] && a_vyerbd(this['locator'], pzt2fq), a_jls0(this, pzt2fq);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (l0$87, redba, eydb9v) {
    var _$l7 = this['doc']['implementation'];_$l7 && _$l7['createDocumentType'] && (eydb9v = _$l7['createDocumentType'](l0$87, redba, eydb9v), this['locator'] && a_vyerbd(this['locator'], eydb9v), a_jls0(this, eydb9v));
  }, 'warning': function (e9bvy) {
    console['warn']('[xmldom warning]\t' + e9bvy, a_ptqzmf(this['locator']));
  }, 'error': function (whco1) {
    console['error']('[xmldom error]\t' + whco1, a_ptqzmf(this['locator']));
  }, 'fatalError': function (evh9gy) {
    throw console['error']('[xmldom fatalError]\t' + evh9gy, a_ptqzmf(this['locator'])), evh9gy;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (zjsmf8) {
  a_x5rd3['prototype'][zjsmf8] = function () {
    return null;
  };
});var a_r5aix3 = require('./cccsax')['XMLReader'],
    a_dye9bv = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_gyce9h;