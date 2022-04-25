var m = wx.$g;
function ghwyek1(cqe7g) {
  this['options'] = cqe7g || { 'locator': {} };
}function gqyveg(g8qcsl, d4oft3, hxkaw1) {
  function _t3fo(bp0t_f) {
    var d34toz = g8qcsl[bp0t_f];!d34toz && we1yvk && (d34toz = 0x2 == g8qcsl['length'] ? function (z34od) {
      g8qcsl(bp0t_f, z34od);
    } : g8qcsl), qgvye7[bp0t_f] = d34toz && function (p_0bi5) {
      d34toz('[xmldom ' + bp0t_f + ']\t' + p_0bi5 + gqvgy7(hxkaw1));
    } || function () {};
  }if (!g8qcsl) {
    if (d4oft3 instanceof gdzr62j) return d4oft3;g8qcsl = d4oft3;
  }var qgvye7 = {},
      we1yvk = g8qcsl instanceof Function;return hxkaw1 = hxkaw1 || {}, _t3fo('warning'), _t3fo('error'), _t3fo('fatalError'), qgvye7;
}function gdzr62j() {
  this['cdata'] = !0x1;
}function gxa5bpi(cvs7g, doz2) {
  doz2['lineNumber'] = cvs7g['lineNumber'], doz2['columnNumber'] = cvs7g['columnNumber'];
}function gqvgy7(cg98) {
  return cg98 ? '\x0a@' + (cg98['systemId'] || '') + '#[line:' + cg98['lineNumber'] + ',col:' + cg98['columnNumber'] + ']' : void 0x0;
}function gv7geqy(ixa51, rjdz26, xykhw) {
  return 'string' == typeof ixa51 ? ixa51['substr'](rjdz26, xykhw) : ixa51['length'] >= rjdz26 + xykhw || rjdz26 ? new java['lang']['String'](ixa51, rjdz26, xykhw) + '' : ixa51;
}function gpb(d43to, bf0_5p) {
  d43to['currentElement'] ? d43to['currentElement']['appendChild'](bf0_5p) : d43to['doc']['appendChild'](bf0_5p);
}ghwyek1['prototype']['parseFromString'] = function (glcsq, jz62d) {
  var drz6j2 = this['options'],
      df3t4 = new gt4_of3(),
      ykve1 = drz6j2['domBuilder'] || new gdzr62j(),
      k7eywv = drz6j2['errorHandler'],
      j26$rz = drz6j2['locator'],
      eky = drz6j2['xmlns'] || {},
      lc8sqg = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return j26$rz && ykve1['setDocumentLocator'](j26$rz), df3t4['errorHandler'] = gqyveg(k7eywv, ykve1, j26$rz), df3t4['domBuilder'] = drz6j2['domBuilder'] || ykve1, /\/x?html?$/['test'](jz62d) && (lc8sqg['nbsp'] = '\u00a0', lc8sqg['copy'] = '©', eky[''] = 'http://www.w3.org/1999/xhtml'), eky['xml'] = eky['xml'] || 'http://www.w3.org/XML/1998/namespace', glcsq ? df3t4['parse'](glcsq, eky, lc8sqg) : df3t4['errorHandler']['error']('invalid doc source'), ykve1['doc'];
}, gdzr62j['prototype'] = { 'startDocument': function () {
    this['doc'] = new gc8g7s()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (h5bix, $muj6, c8slq, q7ygve) {
    var ykwh = this['doc'],
        gslcq = ykwh['createElementNS'](h5bix, c8slq || $muj6),
        hibx = q7ygve['length'];gpb(this, gslcq), this['currentElement'] = gslcq, this['locator'] && gxa5bpi(this['locator'], gslcq);for (var eyqv7w = 0x0; hibx > eyqv7w; eyqv7w++) {
      var h5bix = q7ygve['getURI'](eyqv7w),
          fb_tp = q7ygve['getValue'](eyqv7w),
          c8slq = q7ygve['getQName'](eyqv7w),
          tfd43o = ykwh['createAttributeNS'](h5bix, c8slq);this['locator'] && gxa5bpi(q7ygve['getLocator'](eyqv7w), tfd43o), tfd43o['value'] = tfd43o['nodeValue'] = fb_tp, gslcq['setAttributeNode'](tfd43o);
    }
  }, 'endElement': function () {
    {
      var w7k = this['currentElement'];w7k['tagName'];
    }this['currentElement'] = w7k['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (u6r$jm, $2r6zj) {
    var pfb0_t = this['doc']['createProcessingInstruction'](u6r$jm, $2r6zj);this['locator'] && gxa5bpi(this['locator'], pfb0_t), gpb(this, pfb0_t);
  }, 'ignorableWhitespace': function () {}, 'characters': function (umr) {
    if (umr = gv7geqy['apply'](this, arguments)) {
      if (this['cdata']) var ord62z = this['doc']['createCDATASection'](umr);else var ord62z = this['doc']['createTextNode'](umr);this['currentElement'] ? this['currentElement']['appendChild'](ord62z) : /^\s*$/['test'](umr) && this['doc']['appendChild'](ord62z), this['locator'] && gxa5bpi(this['locator'], ord62z);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (f30_t) {
    (this['locator'] = f30_t) && (f30_t['lineNumber'] = 0x0);
  }, 'comment': function (hxi1) {
    hxi1 = gv7geqy['apply'](this, arguments);var otdf = this['doc']['createComment'](hxi1);this['locator'] && gxa5bpi(this['locator'], otdf), gpb(this, otdf);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (z423d, c87sq, pb_t) {
    var ft4d3 = this['doc']['implementation'];if (ft4d3 && ft4d3['createDocumentType']) {
      var akwh = ft4d3['createDocumentType'](z423d, c87sq, pb_t);this['locator'] && gxa5bpi(this['locator'], akwh), gpb(this, akwh);
    }
  }, 'warning': function (bxipa) {
    console['warn']('[xmldom warning]\t' + bxipa, gqvgy7(this['locator']));
  }, 'error': function (zr$62) {
    console['error']('[xmldom error]\t' + zr$62, gqvgy7(this['locator']));
  }, 'fatalError': function (q7sgv) {
    throw console['error']('[xmldom fatalError]\t' + q7sgv, gqvgy7(this['locator'])), q7sgv;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (f0bpt_) {
  gdzr62j['prototype'][f0bpt_] = function () {
    return null;
  };
});var gt4_of3 = require('./gggsax')['XMLReader'],
    gc8g7s = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = ghwyek1;