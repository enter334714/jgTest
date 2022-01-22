var F = wx.$D;
function Dpuec03(sq0tve) {
  this['options'] = sq0tve || { 'locator': {} };
}function D_o5ilm(tc30se, u30ecp, c3eus) {
  function aoj5m(tqevw) {
    var swtqkv = tc30se[tqevw];!swtqkv && h_2zri && (swtqkv = 0x2 == tc30se['length'] ? function (uc3b0p) {
      tc30se(tqevw, uc3b0p);
    } : tc30se), _2ilz[tqevw] = swtqkv && function (tsc03e) {
      swtqkv('[xmldom ' + tqevw + ']\t' + tsc03e + Dqvs0te(c3eus));
    } || function () {};
  }if (!tc30se) {
    if (u30ecp instanceof Dy1nh$8) return u30ecp;tc30se = u30ecp;
  }var _2ilz = {},
      h_2zri = tc30se instanceof Function;return c3eus = c3eus || {}, aoj5m('warning'), aoj5m('error'), aoj5m('fatalError'), _2ilz;
}function Dy1nh$8() {
  this['cdata'] = !0x1;
}function Dqwesv(kag6jx, ves0ct) {
  ves0ct['lineNumber'] = kag6jx['lineNumber'], ves0ct['columnNumber'] = kag6jx['columnNumber'];
}function Dqvs0te(etqwvs) {
  return etqwvs ? '\x0a@' + (etqwvs['systemId'] || '') + '#[line:' + etqwvs['lineNumber'] + ',col:' + etqwvs['columnNumber'] + ']' : void 0x0;
}function Dkwja(ewvqt, omiz, vqtkw) {
  return 'string' == typeof ewvqt ? ewvqt['substr'](omiz, vqtkw) : ewvqt['length'] >= omiz + vqtkw || omiz ? new java['lang']['String'](ewvqt, omiz, vqtkw) + '' : ewvqt;
}function Dl_g5m(b93upc, lor) {
  b93upc['currentElement'] ? b93upc['currentElement']['appendChild'](lor) : b93upc['doc']['appendChild'](lor);
}Dpuec03['prototype']['parseFromString'] = function (u39pb, h1ny$) {
  var _loizm = this['options'],
      t3es0 = new Dg6kax(),
      uc3ep0 = _loizm['domBuilder'] || new Dy1nh$8(),
      vqwk6 = _loizm['errorHandler'],
      waxjk = _loizm['locator'],
      cp30u = _loizm['xmlns'] || {},
      b9c3p = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return waxjk && uc3ep0['setDocumentLocator'](waxjk), t3es0['errorHandler'] = D_o5ilm(vqwk6, uc3ep0, waxjk), t3es0['domBuilder'] = _loizm['domBuilder'] || uc3ep0, /\/x?html?$/['test'](h1ny$) && (b9c3p['nbsp'] = '\u00a0', b9c3p['copy'] = '©', cp30u[''] = 'http://www.w3.org/1999/xhtml'), cp30u['xml'] = cp30u['xml'] || 'http://www.w3.org/XML/1998/namespace', u39pb ? t3es0['parse'](u39pb, cp30u, b9c3p) : t3es0['errorHandler']['error']('invalid doc source'), uc3ep0['doc'];
}, Dy1nh$8['prototype'] = { 'startDocument': function () {
    this['doc'] = new Dz2ri1h()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (rzh21, ogj5a, j6ag5x, tse0) {
    var ktwqsv = this['doc'],
        te0sq = ktwqsv['createElementNS'](rzh21, j6ag5x || ogj5a),
        tev0sc = tse0['length'];Dl_g5m(this, te0sq), this['currentElement'] = te0sq, this['locator'] && Dqwesv(this['locator'], te0sq);for (var j5gmxa = 0x0; tev0sc > j5gmxa; j5gmxa++) {
      var rzh21 = tse0['getURI'](j5gmxa),
          r_l2i = tse0['getValue'](j5gmxa),
          j6ag5x = tse0['getQName'](j5gmxa),
          v6tq = ktwqsv['createAttributeNS'](rzh21, j6ag5x);this['locator'] && Dqwesv(tse0['getLocator'](j5gmxa), v6tq), v6tq['value'] = v6tq['nodeValue'] = r_l2i, te0sq['setAttributeNode'](v6tq);
    }
  }, 'endElement': function () {
    {
      var b79f = this['currentElement'];b79f['tagName'];
    }this['currentElement'] = b79f['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (m5_ilo, qtwsv) {
    var h2rz_ = this['doc']['createProcessingInstruction'](m5_ilo, qtwsv);this['locator'] && Dqwesv(this['locator'], h2rz_), Dl_g5m(this, h2rz_);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_rolz) {
    if (_rolz = Dkwja['apply'](this, arguments)) {
      if (this['cdata']) var hn18$ = this['doc']['createCDATASection'](_rolz);else var hn18$ = this['doc']['createTextNode'](_rolz);this['currentElement'] ? this['currentElement']['appendChild'](hn18$) : /^\s*$/['test'](_rolz) && this['doc']['appendChild'](hn18$), this['locator'] && Dqwesv(this['locator'], hn18$);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (uc3s) {
    (this['locator'] = uc3s) && (uc3s['lineNumber'] = 0x0);
  }, 'comment': function (x6vkw) {
    x6vkw = Dkwja['apply'](this, arguments);var kvw6qx = this['doc']['createComment'](x6vkw);this['locator'] && Dqwesv(this['locator'], kvw6qx), Dl_g5m(this, kvw6qx);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (mj5xag, twvk6, mlo_i) {
    var twvqk6 = this['doc']['implementation'];if (twvqk6 && twvqk6['createDocumentType']) {
      var pu9b7 = twvqk6['createDocumentType'](mj5xag, twvk6, mlo_i);this['locator'] && Dqwesv(this['locator'], pu9b7), Dl_g5m(this, pu9b7);
    }
  }, 'warning': function (fp) {
    console['warn']('[xmldom warning]\t' + fp, Dqvs0te(this['locator']));
  }, 'error': function (bc93) {
    console['error']('[xmldom error]\t' + bc93, Dqvs0te(this['locator']));
  }, 'fatalError': function (akgj6x) {
    throw console['error']('[xmldom fatalError]\t' + akgj6x, Dqvs0te(this['locator'])), akgj6x;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_5ogm) {
  Dy1nh$8['prototype'][_5ogm] = function () {
    return null;
  };
});var Dg6kax = require('./d22d22cd22d22')['XMLReader'],
    Dz2ri1h = exports['DOMImplementation'] = require('./d22d22DOd22d22')['DOMImplementation'];exports['XMLSerializer'] = require('./d22d22DOd22d22')['XMLSerializer'], exports['DOMParser'] = Dpuec03;