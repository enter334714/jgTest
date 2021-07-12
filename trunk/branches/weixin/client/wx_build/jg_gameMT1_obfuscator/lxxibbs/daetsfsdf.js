var _$ = wx.x$;
function __spqrot(rnmqpo) {
  this['options'] = rnmqpo || { 'locator': {} };
}function __dehcgf(spqnro, twruv, cdehfg) {
  function faec(ihjgl) {
    var ifgehd = spqnro[ihjgl];!ifgehd && xswv && (ifgehd = 0x2 == spqnro['length'] ? function (xwyzuv) {
      spqnro(ihjgl, xwyzuv);
    } : spqnro), uyzwvx[ihjgl] = ifgehd ? function (cehfdg) {
      ifgehd('[xmldom ' + ihjgl + ']\t' + cehfdg + __decbf(cdehfg));
    } : function () {};
  }if (!spqnro) {
    if (twruv instanceof __pqonrm) return twruv;spqnro = twruv;
  }var uyzwvx = {},
      xswv = spqnro instanceof Function;return cdehfg = cdehfg || {}, faec('warning'), faec('error'), faec('fatalError'), uyzwvx;
}function __pqonrm() {
  this['cdata'] = !0x1;
}function __rtsoqp(ilhkgj, kjhmil) {
  kjhmil['lineNumber'] = ilhkgj['lineNumber'], kjhmil['columnNumber'] = ilhkgj['columnNumber'];
}function __decbf(sroptq) {
  return sroptq ? '\x0a@' + (sroptq['systemId'] || '') + '#[line:' + sroptq['lineNumber'] + ',col:' + sroptq['columnNumber'] + ']' : void 0x0;
}function __yxz0$w(khlg, pqnsor, zy$x) {
  return 'string' == typeof khlg ? khlg['substr'](pqnsor, zy$x) : khlg['length'] >= pqnsor + zy$x || pqnsor ? new java['lang']['String'](khlg, pqnsor, zy$x) + '' : khlg;
}function __ropnm(ihjgfe, xyz0$1) {
  (ihjgfe['currentElement'] || ihjgfe['doc'])['appendChild'](xyz0$1);
}__spqrot['prototype']['parseFromString'] = function (tyvuxw, srpnqo) {
  var fehdgc = this['options'],
      mjlhi = new __stvxw(),
      xuyw = fehdgc['domBuilder'] || new __pqonrm(),
      vywuz = fehdgc['errorHandler'],
      vrwust = fehdgc['locator'],
      nlmpo = fehdgc['xmlns'] || {},
      dgbc = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return vrwust && xuyw['setDocumentLocator'](vrwust), mjlhi['errorHandler'] = __dehcgf(vywuz, xuyw, vrwust), mjlhi['domBuilder'] = fehdgc['domBuilder'] || xuyw, /\/x?html?$/['test'](srpnqo) && (dgbc['nbsp'] = '\u00a0', dgbc['copy'] = '©', nlmpo[''] = 'http://www.w3.org/1999/xhtml'), nlmpo['xml'] = nlmpo['xml'] || 'http://www.w3.org/XML/1998/namespace', tyvuxw ? mjlhi['parse'](tyvuxw, nlmpo, dgbc) : mjlhi['errorHandler']['error']('invalid doc source'), xuyw['doc'];
}, __pqonrm['prototype'] = { 'startDocument': function () {
    this['doc'] = new __rtqsup()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ihfkj, klnojm, fcdhe, hlikm) {
    var svrtu = this['doc'],
        mronpq = svrtu['createElementNS'](ihfkj, fcdhe || klnojm),
        hjlkg = hlikm['length'];__ropnm(this, mronpq), this['currentElement'] = mronpq, this['locator'] && __rtsoqp(this['locator'], mronpq);for (var y0$xz = 0x0; y0$xz < hjlkg; y0$xz++) {
      var ihfkj = hlikm['getURI'](y0$xz),
          ejg = hlikm['getValue'](y0$xz),
          fcdhe = hlikm['getQName'](y0$xz),
          pqrosn = svrtu['createAttributeNS'](ihfkj, fcdhe);this['locator'] && __rtsoqp(hlikm['getLocator'](y0$xz), pqrosn), pqrosn['value'] = pqrosn['nodeValue'] = ejg, mronpq['setAttributeNode'](pqrosn);
    }
  }, 'endElement': function () {
    var iefghd = this['currentElement'];iefghd['tagName'], this['currentElement'] = iefghd['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (dgfbe, xvzuy) {
    xvzuy = this['doc']['createProcessingInstruction'](dgfbe, xvzuy), (this['locator'] && __rtsoqp(this['locator'], xvzuy), __ropnm(this, xvzuy));
  }, 'ignorableWhitespace': function () {}, 'characters': function (qonr) {
    var lmpo;(qonr = __yxz0$w['apply'](this, arguments)) && (lmpo = this['cdata'] ? this['doc']['createCDATASection'](qonr) : this['doc']['createTextNode'](qonr), this['currentElement'] ? this['currentElement']['appendChild'](lmpo) : /^\s*$/['test'](qonr) && this['doc']['appendChild'](lmpo), this['locator'] && __rtsoqp(this['locator'], lmpo));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (prtu) {
    (this['locator'] = prtu) && (prtu['lineNumber'] = 0x0);
  }, 'comment': function (mjkno) {
    mjkno = __yxz0$w['apply'](this, arguments);var yvzw = this['doc']['createComment'](mjkno);this['locator'] && __rtsoqp(this['locator'], yvzw), __ropnm(this, yvzw);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ebfcgd, mprqon, dfebc) {
    var wy0x = this['doc']['implementation'];wy0x && wy0x['createDocumentType'] && (dfebc = wy0x['createDocumentType'](ebfcgd, mprqon, dfebc), this['locator'] && __rtsoqp(this['locator'], dfebc), __ropnm(this, dfebc));
  }, 'warning': function (cbdfg) {
    console['warn']('[xmldom warning]\t' + cbdfg, __decbf(this['locator']));
  }, 'error': function (wtxvyu) {
    console['error']('[xmldom error]\t' + wtxvyu, __decbf(this['locator']));
  }, 'fatalError': function (hgdfec) {
    throw console['error']('[xmldom fatalError]\t' + hgdfec, __decbf(this['locator'])), hgdfec;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (rtvusw) {
  __pqonrm['prototype'][rtvusw] = function () {
    return null;
  };
});var __stvxw = require('./ahg324')['XMLReader'],
    __rtqsup = exports['DOMImplementation'] = require('./dddom')['DOMImplementation'];exports['XMLSerializer'] = require('./dddom')['XMLSerializer'], exports['DOMParser'] = __spqrot;