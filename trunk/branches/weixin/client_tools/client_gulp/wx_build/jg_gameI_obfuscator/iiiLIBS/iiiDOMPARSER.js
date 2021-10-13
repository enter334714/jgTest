var Q = wx.$I;
function i_x6pq1v(st72rh) {
  this['options'] = st72rh || { 'locator': {} };
}function i__o$8iz(a_zio, v6bncq, xyfe) {
  function _oai$z(bnr2c7) {
    var utjdw = a_zio[bnr2c7];!utjdw && wjutd && (utjdw = 0x2 == a_zio['length'] ? function (exgy) {
      a_zio(bnr2c7, exgy);
    } : a_zio), fyeiz8[bnr2c7] = utjdw && function (thr2s) {
      utjdw('[xmldom ' + bnr2c7 + ']\t' + thr2s + i_thr2sj(xyfe));
    } || function () {};
  }if (!a_zio) {
    if (v6bncq instanceof i_s27hcr) return v6bncq;a_zio = v6bncq;
  }var fyeiz8 = {},
      wjutd = a_zio instanceof Function;return xyfe = xyfe || {}, _oai$z('warning'), _oai$z('error'), _oai$z('fatalError'), fyeiz8;
}function i_s27hcr() {
  this['cdata'] = !0x1;
}function i_n2bcv7(yfxge5, rjhts2) {
  rjhts2['lineNumber'] = yfxge5['lineNumber'], rjhts2['columnNumber'] = yfxge5['columnNumber'];
}function i_thr2sj(_ao$) {
  return _ao$ ? '\x0a@' + (_ao$['systemId'] || '') + '#[line:' + _ao$['lineNumber'] + ',col:' + _ao$['columnNumber'] + ']' : void 0x0;
}function i_cnq6v(wjut, rbs7c, wutd) {
  return 'string' == typeof wjut ? wjut['substr'](rbs7c, wutd) : wjut['length'] >= rbs7c + wutd || rbs7c ? new java['lang']['String'](wjut, rbs7c, wutd) + '' : wjut;
}function i_ao$z3(feiy5, qbc7nv) {
  feiy5['currentElement'] ? feiy5['currentElement']['appendChild'](qbc7nv) : feiy5['doc']['appendChild'](qbc7nv);
}i_x6pq1v['prototype']['parseFromString'] = function (_0ka93, p56x1g) {
  var csr72h = this['options'],
      sjdthw = new i_tujwh(),
      pfx5g = csr72h['domBuilder'] || new i_s27hcr(),
      k9a = csr72h['errorHandler'],
      bvqcn = csr72h['locator'],
      fgpe5 = csr72h['xmlns'] || {},
      o8 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return bvqcn && pfx5g['setDocumentLocator'](bvqcn), sjdthw['errorHandler'] = i__o$8iz(k9a, pfx5g, bvqcn), sjdthw['domBuilder'] = csr72h['domBuilder'] || pfx5g, /\/x?html?$/['test'](p56x1g) && (o8['nbsp'] = '\u00a0', o8['copy'] = '©', fgpe5[''] = 'http://www.w3.org/1999/xhtml'), fgpe5['xml'] = fgpe5['xml'] || 'http://www.w3.org/XML/1998/namespace', _0ka93 ? sjdthw['parse'](_0ka93, fgpe5, o8) : sjdthw['errorHandler']['error']('invalid doc source'), pfx5g['doc'];
}, i_s27hcr['prototype'] = { 'startDocument': function () {
    this['doc'] = new i_efyg5x()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (eyfi85, ey5fi, yeif8z, q61gp) {
    var uhtj = this['doc'],
        sbrc = uhtj['createElementNS'](eyfi85, yeif8z || ey5fi),
        gx16p = q61gp['length'];i_ao$z3(this, sbrc), this['currentElement'] = sbrc, this['locator'] && i_n2bcv7(this['locator'], sbrc);for (var z$3ao = 0x0; gx16p > z$3ao; z$3ao++) {
      var eyfi85 = q61gp['getURI'](z$3ao),
          o8yie = q61gp['getValue'](z$3ao),
          yeif8z = q61gp['getQName'](z$3ao),
          srjth2 = uhtj['createAttributeNS'](eyfi85, yeif8z);this['locator'] && i_n2bcv7(q61gp['getLocator'](z$3ao), srjth2), srjth2['value'] = srjth2['nodeValue'] = o8yie, sbrc['setAttributeNode'](srjth2);
    }
  }, 'endElement': function () {
    {
      var bcrn27 = this['currentElement'];bcrn27['tagName'];
    }this['currentElement'] = bcrn27['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (cnb7, nbv6cq) {
    var pqgx = this['doc']['createProcessingInstruction'](cnb7, nbv6cq);this['locator'] && i_n2bcv7(this['locator'], pqgx), i_ao$z3(this, pqgx);
  }, 'ignorableWhitespace': function () {}, 'characters': function (xf5pe) {
    if (xf5pe = i_cnq6v['apply'](this, arguments)) {
      if (this['cdata']) var cvnq6 = this['doc']['createCDATASection'](xf5pe);else var cvnq6 = this['doc']['createTextNode'](xf5pe);this['currentElement'] ? this['currentElement']['appendChild'](cvnq6) : /^\s*$/['test'](xf5pe) && this['doc']['appendChild'](cvnq6), this['locator'] && i_n2bcv7(this['locator'], cvnq6);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (z_o$a3) {
    (this['locator'] = z_o$a3) && (z_o$a3['lineNumber'] = 0x0);
  }, 'comment': function ($_8oz) {
    $_8oz = i_cnq6v['apply'](this, arguments);var $zo8y = this['doc']['createComment']($_8oz);this['locator'] && i_n2bcv7(this['locator'], $zo8y), i_ao$z3(this, $zo8y);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (rsc7h2, exgpf5, $z_a3o) {
    var fxg5pe = this['doc']['implementation'];if (fxg5pe && fxg5pe['createDocumentType']) {
      var ka39_0 = fxg5pe['createDocumentType'](rsc7h2, exgpf5, $z_a3o);this['locator'] && i_n2bcv7(this['locator'], ka39_0), i_ao$z3(this, ka39_0);
    }
  }, 'warning': function (z8yeio) {
    console['warn']('[xmldom warning]\t' + z8yeio, i_thr2sj(this['locator']));
  }, 'error': function (_oia$) {
    console['error']('[xmldom error]\t' + _oia$, i_thr2sj(this['locator']));
  }, 'fatalError': function (yie85f) {
    throw console['error']('[xmldom fatalError]\t' + yie85f, i_thr2sj(this['locator'])), yie85f;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (yfe58g) {
  i_s27hcr['prototype'][yfe58g] = function () {
    return null;
  };
});var i_tujwh = require('./iiiSAX')['XMLReader'],
    i_efyg5x = exports['DOMImplementation'] = require('./iiiDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./iiiDOM')['XMLSerializer'], exports['DOMParser'] = i_x6pq1v;