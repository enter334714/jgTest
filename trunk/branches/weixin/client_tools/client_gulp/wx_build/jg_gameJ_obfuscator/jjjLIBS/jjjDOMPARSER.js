var S = wx.$J;
function j1_jp5nbe(ixd89) {
  this['options'] = ixd89 || { 'locator': {} };
}function j1_epbl(hz, hai, lgcyo) {
  function j5p3ne(f1m76r) {
    var d1q2f = hz[f1m76r];!d1q2f && cso0gy && (d1q2f = 0x2 == hz['length'] ? function (u04cgl) {
      hz(f1m76r, u04cgl);
    } : hz), fdqm2[f1m76r] = d1q2f && function (ulebp) {
      d1q2f('[xmldom ' + f1m76r + ']\t' + ulebp + j1_a$9z(lgcyo));
    } || function () {};
  }if (!hz) {
    if (hai instanceof j1_q821) return hai;hz = hai;
  }var fdqm2 = {},
      cso0gy = hz instanceof Function;return lgcyo = lgcyo || {}, j5p3ne('warning'), j5p3ne('error'), j5p3ne('fatalError'), fdqm2;
}function j1_q821() {
  this['cdata'] = !0x1;
}function j1_m6rk7(y6srk, ne5b4p) {
  ne5b4p['lineNumber'] = y6srk['lineNumber'], ne5b4p['columnNumber'] = y6srk['columnNumber'];
}function j1_a$9z(wv3j) {
  return wv3j ? '\x0a@' + (wv3j['systemId'] || '') + '#[line:' + wv3j['lineNumber'] + ',col:' + wv3j['columnNumber'] + ']' : void 0x0;
}function j1_sk7f6(xz$a9, bpe4n5, z8ix92) {
  return 'string' == typeof xz$a9 ? xz$a9['substr'](bpe4n5, z8ix92) : xz$a9['length'] >= bpe4n5 + z8ix92 || bpe4n5 ? new java['lang']['String'](xz$a9, bpe4n5, z8ix92) + '' : xz$a9;
}function j1_zx98ia(cg4u0l, mdfr1q) {
  cg4u0l['currentElement'] ? cg4u0l['currentElement']['appendChild'](mdfr1q) : cg4u0l['doc']['appendChild'](mdfr1q);
}j1_jp5nbe['prototype']['parseFromString'] = function (iq281, m6k7) {
  var sy0c = this['options'],
      syk76 = new j1_fr67s(),
      x2i89z = sy0c['domBuilder'] || new j1_q821(),
      puebl = sy0c['errorHandler'],
      azx$9 = sy0c['locator'],
      skfr67 = sy0c['xmlns'] || {},
      dmrfq1 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return azx$9 && x2i89z['setDocumentLocator'](azx$9), syk76['errorHandler'] = j1_epbl(puebl, x2i89z, azx$9), syk76['domBuilder'] = sy0c['domBuilder'] || x2i89z, /\/x?html?$/['test'](m6k7) && (dmrfq1['nbsp'] = '\u00a0', dmrfq1['copy'] = '©', skfr67[''] = 'http://www.w3.org/1999/xhtml'), skfr67['xml'] = skfr67['xml'] || 'http://www.w3.org/XML/1998/namespace', iq281 ? syk76['parse'](iq281, skfr67, dmrfq1) : syk76['errorHandler']['error']('invalid doc source'), x2i89z['doc'];
}, j1_q821['prototype'] = { 'startDocument': function () {
    this['doc'] = new j1_ylg0co()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (hz9, k0gsyo, ysk67, hx9z$) {
    var rqf = this['doc'],
        pne4b5 = rqf['createElementNS'](hz9, ysk67 || k0gsyo),
        r1mdf = hx9z$['length'];j1_zx98ia(this, pne4b5), this['currentElement'] = pne4b5, this['locator'] && j1_m6rk7(this['locator'], pne4b5);for (var xz$ha9 = 0x0; r1mdf > xz$ha9; xz$ha9++) {
      var hz9 = hx9z$['getURI'](xz$ha9),
          pu4b = hx9z$['getValue'](xz$ha9),
          ysk67 = hx9z$['getQName'](xz$ha9),
          f76srk = rqf['createAttributeNS'](hz9, ysk67);this['locator'] && j1_m6rk7(hx9z$['getLocator'](xz$ha9), f76srk), f76srk['value'] = f76srk['nodeValue'] = pu4b, pne4b5['setAttributeNode'](f76srk);
    }
  }, 'endElement': function () {
    {
      var glyo0 = this['currentElement'];glyo0['tagName'];
    }this['currentElement'] = glyo0['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ksf6r7, wvn5j3) {
    var dq1rfm = this['doc']['createProcessingInstruction'](ksf6r7, wvn5j3);this['locator'] && j1_m6rk7(this['locator'], dq1rfm), j1_zx98ia(this, dq1rfm);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ulc0b4) {
    if (ulc0b4 = j1_sk7f6['apply'](this, arguments)) {
      if (this['cdata']) var e4bpu = this['doc']['createCDATASection'](ulc0b4);else var e4bpu = this['doc']['createTextNode'](ulc0b4);this['currentElement'] ? this['currentElement']['appendChild'](e4bpu) : /^\s*$/['test'](ulc0b4) && this['doc']['appendChild'](e4bpu), this['locator'] && j1_m6rk7(this['locator'], e4bpu);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (njep) {
    (this['locator'] = njep) && (njep['lineNumber'] = 0x0);
  }, 'comment': function (n53jw) {
    n53jw = j1_sk7f6['apply'](this, arguments);var yks0g = this['doc']['createComment'](n53jw);this['locator'] && j1_m6rk7(this['locator'], yks0g), j1_zx98ia(this, yks0g);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (glyoc0, bcu4e, en53p) {
    var b4nup = this['doc']['implementation'];if (b4nup && b4nup['createDocumentType']) {
      var zia9xh = b4nup['createDocumentType'](glyoc0, bcu4e, en53p);this['locator'] && j1_m6rk7(this['locator'], zia9xh), j1_zx98ia(this, zia9xh);
    }
  }, 'warning': function (bpuel4) {
    console['warn']('[xmldom warning]\t' + bpuel4, j1_a$9z(this['locator']));
  }, 'error': function (za9xi8) {
    console['error']('[xmldom error]\t' + za9xi8, j1_a$9z(this['locator']));
  }, 'fatalError': function (eup) {
    throw console['error']('[xmldom fatalError]\t' + eup, j1_a$9z(this['locator'])), eup;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (mq2d8) {
  j1_q821['prototype'][mq2d8] = function () {
    return null;
  };
});var j1_fr67s = require('./jjjSAX')['XMLReader'],
    j1_ylg0co = exports['DOMImplementation'] = require('./jjjDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./jjjDOM')['XMLSerializer'], exports['DOMParser'] = j1_jp5nbe;