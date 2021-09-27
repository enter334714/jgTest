var p = wx.$h;
function a_p60$gn(f24v5) {
  this['options'] = f24v5 || { 'locator': {} };
}function a_xv4a2f(afc4, va4f, oeh981) {
  function jo9np(mq_l3) {
    var fv52 = afc4[mq_l3];!fv52 && fv254 && (fv52 = 0x2 == afc4['length'] ? function (dml3zr) {
      afc4(mq_l3, dml3zr);
    } : afc4), ybq52v[mq_l3] = fv52 ? function (g7n06$) {
      fv52('[xmldom ' + mq_l3 + ']\t' + g7n06$ + a_e8cht(oeh981));
    } : function () {};
  }if (!afc4) {
    if (va4f instanceof a_syqv5) return va4f;afc4 = va4f;
  }var ybq52v = {},
      fv254 = afc4 instanceof Function;return oeh981 = oeh981 || {}, jo9np('warning'), jo9np('error'), jo9np('fatalError'), ybq52v;
}function a_syqv5() {
  this['cdata'] = !0x1;
}function a_tow8(jn06$p, rd3lm) {
  rd3lm['lineNumber'] = jn06$p['lineNumber'], rd3lm['columnNumber'] = jn06$p['columnNumber'];
}function a_e8cht(by2vq5) {
  return by2vq5 ? '\x0a@' + (by2vq5['systemId'] || '') + '#[line:' + by2vq5['lineNumber'] + ',col:' + by2vq5['columnNumber'] + ']' : void 0x0;
}function a_cewia(xf4ia, bs_y, x4v2b5) {
  return 'string' == typeof xf4ia ? xf4ia['substr'](bs_y, x4v2b5) : xf4ia['length'] >= bs_y + x4v2b5 || bs_y ? new java['lang']['String'](xf4ia, bs_y, x4v2b5) + '' : xf4ia;
}function a_ciw4af(iwt, sq_5yb) {
  (iwt['currentElement'] || iwt['doc'])['appendChild'](sq_5yb);
}a_p60$gn['prototype']['parseFromString'] = function (jnop, lzrkd) {
  var $70gn6 = this['options'],
      yvq5bs = new a_lm_sq3(),
      z3rld = $70gn6['domBuilder'] || new a_syqv5(),
      lmq_ = $70gn6['errorHandler'],
      h8j91o = $70gn6['locator'],
      lzdr3 = $70gn6['xmlns'] || {},
      iatew = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return h8j91o && z3rld['setDocumentLocator'](h8j91o), yvq5bs['errorHandler'] = a_xv4a2f(lmq_, z3rld, h8j91o), yvq5bs['domBuilder'] = $70gn6['domBuilder'] || z3rld, /\/x?html?$/['test'](lzrkd) && (iatew['nbsp'] = '\u00a0', iatew['copy'] = '©', lzdr3[''] = 'http://www.w3.org/1999/xhtml'), lzdr3['xml'] = lzdr3['xml'] || 'http://www.w3.org/XML/1998/namespace', jnop ? yvq5bs['parse'](jnop, lzdr3, iatew) : yvq5bs['errorHandler']['error']('invalid doc source'), z3rld['doc'];
}, a_syqv5['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_qy3_ls()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (e8htc, sqbyv5, j$9np6, klrzdm) {
    var taif = this['doc'],
        klrmzd = taif['createElementNS'](e8htc, j$9np6 || sqbyv5),
        x4v52f = klrzdm['length'];a_ciw4af(this, klrmzd), this['currentElement'] = klrmzd, this['locator'] && a_tow8(this['locator'], klrmzd);for (var ot8he1 = 0x0; ot8he1 < x4v52f; ot8he1++) {
      var e8htc = klrzdm['getURI'](ot8he1),
          y_b3q = klrzdm['getValue'](ot8he1),
          j$9np6 = klrzdm['getQName'](ot8he1),
          vby25 = taif['createAttributeNS'](e8htc, j$9np6);this['locator'] && a_tow8(klrzdm['getLocator'](ot8he1), vby25), vby25['value'] = vby25['nodeValue'] = y_b3q, klrmzd['setAttributeNode'](vby25);
    }
  }, 'endElement': function () {
    var xv4f5 = this['currentElement'];xv4f5['tagName'], this['currentElement'] = xv4f5['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (n1jp9o, krm) {
    krm = this['doc']['createProcessingInstruction'](n1jp9o, krm), (this['locator'] && a_tow8(this['locator'], krm), a_ciw4af(this, krm));
  }, 'ignorableWhitespace': function () {}, 'characters': function (eaiwtc) {
    var aicw4f;(eaiwtc = a_cewia['apply'](this, arguments)) && (aicw4f = this['cdata'] ? this['doc']['createCDATASection'](eaiwtc) : this['doc']['createTextNode'](eaiwtc), this['currentElement'] ? this['currentElement']['appendChild'](aicw4f) : /^\s*$/['test'](eaiwtc) && this['doc']['appendChild'](aicw4f), this['locator'] && a_tow8(this['locator'], aicw4f));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (atfcwi) {
    (this['locator'] = atfcwi) && (atfcwi['lineNumber'] = 0x0);
  }, 'comment': function ($n6j0p) {
    $n6j0p = a_cewia['apply'](this, arguments);var a4cxfi = this['doc']['createComment']($n6j0p);this['locator'] && a_tow8(this['locator'], a4cxfi), a_ciw4af(this, a4cxfi);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (jp69, qsml3_, p6j) {
    var q2v5y = this['doc']['implementation'];q2v5y && q2v5y['createDocumentType'] && (p6j = q2v5y['createDocumentType'](jp69, qsml3_, p6j), this['locator'] && a_tow8(this['locator'], p6j), a_ciw4af(this, p6j));
  }, 'warning': function (qysvb) {
    console['warn']('[xmldom warning]\t' + qysvb, a_e8cht(this['locator']));
  }, 'error': function (ethi) {
    console['error']('[xmldom error]\t' + ethi, a_e8cht(this['locator']));
  }, 'fatalError': function (o98jp1) {
    throw console['error']('[xmldom fatalError]\t' + o98jp1, a_e8cht(this['locator'])), o98jp1;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (b3yqs_) {
  a_syqv5['prototype'][b3yqs_] = function () {
    return null;
  };
});var a_lm_sq3 = require('./cccsax')['XMLReader'],
    a_qy3_ls = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_p60$gn;