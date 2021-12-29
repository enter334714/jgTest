var S = wx.$J;
function j1_az8x9i($h9azx) {
  this['options'] = $h9azx || { 'locator': {} };
}function j1_nwv5j(xz98a, vj, qid281) {
  function mdqfr(neu4b) {
    var og0sc = xz98a[neu4b];!og0sc && np53e && (og0sc = 0x2 == xz98a['length'] ? function (k76sy) {
      xz98a(neu4b, k76sy);
    } : xz98a), s6r7ky[neu4b] = og0sc && function (zi28) {
      og0sc('[xmldom ' + neu4b + ']\t' + zi28 + j1_puleb(qid281));
    } || function () {};
  }if (!xz98a) {
    if (vj instanceof j1_gc4lu) return vj;xz98a = vj;
  }var s6r7ky = {},
      np53e = xz98a instanceof Function;return qid281 = qid281 || {}, mdqfr('warning'), mdqfr('error'), mdqfr('fatalError'), s6r7ky;
}function j1_gc4lu() {
  this['cdata'] = !0x1;
}function j1_rq17mf(gcluo, di28q1) {
  di28q1['lineNumber'] = gcluo['lineNumber'], di28q1['columnNumber'] = gcluo['columnNumber'];
}function j1_puleb(nebp4u) {
  return nebp4u ? '\x0a@' + (nebp4u['systemId'] || '') + '#[line:' + nebp4u['lineNumber'] + ',col:' + nebp4u['columnNumber'] + ']' : void 0x0;
}function j1_uc0lo(rfs76, lucb, ejnbp) {
  return 'string' == typeof rfs76 ? rfs76['substr'](lucb, ejnbp) : rfs76['length'] >= lucb + ejnbp || lucb ? new java['lang']['String'](rfs76, lucb, ejnbp) + '' : rfs76;
}function j1_bpe4n(q2d81i, xa9i) {
  q2d81i['currentElement'] ? q2d81i['currentElement']['appendChild'](xa9i) : q2d81i['doc']['appendChild'](xa9i);
}j1_az8x9i['prototype']['parseFromString'] = function (eup4b, cgoly) {
  var y6ks7r = this['options'],
      id2q = new j1_hax$(),
      pej53n = y6ks7r['domBuilder'] || new j1_gc4lu(),
      f6k7rm = y6ks7r['errorHandler'],
      kosyg6 = y6ks7r['locator'],
      cbu0l4 = y6ks7r['xmlns'] || {},
      z9hiax = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return kosyg6 && pej53n['setDocumentLocator'](kosyg6), id2q['errorHandler'] = j1_nwv5j(f6k7rm, pej53n, kosyg6), id2q['domBuilder'] = y6ks7r['domBuilder'] || pej53n, /\/x?html?$/['test'](cgoly) && (z9hiax['nbsp'] = '\u00a0', z9hiax['copy'] = '©', cbu0l4[''] = 'http://www.w3.org/1999/xhtml'), cbu0l4['xml'] = cbu0l4['xml'] || 'http://www.w3.org/XML/1998/namespace', eup4b ? id2q['parse'](eup4b, cbu0l4, z9hiax) : id2q['errorHandler']['error']('invalid doc source'), pej53n['doc'];
}, j1_gc4lu['prototype'] = { 'startDocument': function () {
    this['doc'] = new j1_q1di28()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (z9x8ia, lo0gu, blc4u0, xz$9ah) {
    var qm2fd1 = this['doc'],
        b4lepu = qm2fd1['createElementNS'](z9x8ia, blc4u0 || lo0gu),
        lebc4 = xz$9ah['length'];j1_bpe4n(this, b4lepu), this['currentElement'] = b4lepu, this['locator'] && j1_rq17mf(this['locator'], b4lepu);for (var f1dqm2 = 0x0; lebc4 > f1dqm2; f1dqm2++) {
      var z9x8ia = xz$9ah['getURI'](f1dqm2),
          h$ = xz$9ah['getValue'](f1dqm2),
          blc4u0 = xz$9ah['getQName'](f1dqm2),
          fmr167 = qm2fd1['createAttributeNS'](z9x8ia, blc4u0);this['locator'] && j1_rq17mf(xz$9ah['getLocator'](f1dqm2), fmr167), fmr167['value'] = fmr167['nodeValue'] = h$, b4lepu['setAttributeNode'](fmr167);
    }
  }, 'endElement': function () {
    {
      var npeb54 = this['currentElement'];npeb54['tagName'];
    }this['currentElement'] = npeb54['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (z8x29, oygsc0) {
    var h$xz9a = this['doc']['createProcessingInstruction'](z8x29, oygsc0);this['locator'] && j1_rq17mf(this['locator'], h$xz9a), j1_bpe4n(this, h$xz9a);
  }, 'ignorableWhitespace': function () {}, 'characters': function (qd2i) {
    if (qd2i = j1_uc0lo['apply'](this, arguments)) {
      if (this['cdata']) var pn45 = this['doc']['createCDATASection'](qd2i);else var pn45 = this['doc']['createTextNode'](qd2i);this['currentElement'] ? this['currentElement']['appendChild'](pn45) : /^\s*$/['test'](qd2i) && this['doc']['appendChild'](pn45), this['locator'] && j1_rq17mf(this['locator'], pn45);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (jbpe5n) {
    (this['locator'] = jbpe5n) && (jbpe5n['lineNumber'] = 0x0);
  }, 'comment': function (azh9ix) {
    azh9ix = j1_uc0lo['apply'](this, arguments);var eu4bcl = this['doc']['createComment'](azh9ix);this['locator'] && j1_rq17mf(this['locator'], eu4bcl), j1_bpe4n(this, eu4bcl);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (yksg0o, zix9ah, ylco) {
    var ziax89 = this['doc']['implementation'];if (ziax89 && ziax89['createDocumentType']) {
      var gyk0os = ziax89['createDocumentType'](yksg0o, zix9ah, ylco);this['locator'] && j1_rq17mf(this['locator'], gyk0os), j1_bpe4n(this, gyk0os);
    }
  }, 'warning': function (lgu04) {
    console['warn']('[xmldom warning]\t' + lgu04, j1_puleb(this['locator']));
  }, 'error': function (r1dqmf) {
    console['error']('[xmldom error]\t' + r1dqmf, j1_puleb(this['locator']));
  }, 'fatalError': function (lc0gy) {
    throw console['error']('[xmldom fatalError]\t' + lc0gy, j1_puleb(this['locator'])), lc0gy;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (n3vw5) {
  j1_gc4lu['prototype'][n3vw5] = function () {
    return null;
  };
});var j1_hax$ = require('./jjjSAX')['XMLReader'],
    j1_q1di28 = exports['DOMImplementation'] = require('./jjjDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./jjjDOM')['XMLSerializer'], exports['DOMParser'] = j1_az8x9i;