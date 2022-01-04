var I = wx.$R;
function r_geq7pd(yw8rk) {
  this['options'] = yw8rk || { 'locator': {} };
}function r_z2lst3(nepqfd, woik8y, pdenqf) {
  function kmrw8(zt2jxs) {
    var qdpe7 = nepqfd[zt2jxs];!qdpe7 && owm8yk && (qdpe7 = 0x2 == nepqfd['length'] ? function (ba$_1u) {
      nepqfd(zt2jxs, ba$_1u);
    } : nepqfd), wremg7[zt2jxs] = qdpe7 && function (myk8wr) {
      qdpe7('[xmldom ' + zt2jxs + ']\t' + myk8wr + r_w8m(pdenqf));
    } || function () {};
  }if (!nepqfd) {
    if (woik8y instanceof r_yxio2j) return woik8y;nepqfd = woik8y;
  }var wremg7 = {},
      owm8yk = nepqfd instanceof Function;return pdenqf = pdenqf || {}, kmrw8('warning'), kmrw8('error'), kmrw8('fatalError'), wremg7;
}function r_yxio2j() {
  this['cdata'] = !0x1;
}function r_h65_cn(pdeg7q, h5cu_6) {
  h5cu_6['lineNumber'] = pdeg7q['lineNumber'], h5cu_6['columnNumber'] = pdeg7q['columnNumber'];
}function r_w8m(s3vltz) {
  return s3vltz ? '\x0a@' + (s3vltz['systemId'] || '') + '#[line:' + s3vltz['lineNumber'] + ',col:' + s3vltz['columnNumber'] + ']' : void 0x0;
}function r_npqed(egprq, oyxi2, rp7eq) {
  return 'string' == typeof egprq ? egprq['substr'](oyxi2, rp7eq) : egprq['length'] >= oyxi2 + rp7eq || oyxi2 ? new java['lang']['String'](egprq, oyxi2, rp7eq) + '' : egprq;
}function r_pegdfq(l0st3, gem7wr) {
  l0st3['currentElement'] ? l0st3['currentElement']['appendChild'](gem7wr) : l0st3['doc']['appendChild'](gem7wr);
}r_geq7pd['prototype']['parseFromString'] = function (gpe7r, k7gmr) {
  var $4ab1 = this['options'],
      x2tsz3 = new r_mrwk7g(),
      nfh6c = $4ab1['domBuilder'] || new r_yxio2j(),
      dq7gp = $4ab1['errorHandler'],
      krmwg = $4ab1['locator'],
      ewmg7r = $4ab1['xmlns'] || {},
      $b1u = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return krmwg && nfh6c['setDocumentLocator'](krmwg), x2tsz3['errorHandler'] = r_z2lst3(dq7gp, nfh6c, krmwg), x2tsz3['domBuilder'] = $4ab1['domBuilder'] || nfh6c, /\/x?html?$/['test'](k7gmr) && ($b1u['nbsp'] = '\u00a0', $b1u['copy'] = '©', ewmg7r[''] = 'http://www.w3.org/1999/xhtml'), ewmg7r['xml'] = ewmg7r['xml'] || 'http://www.w3.org/XML/1998/namespace', gpe7r ? x2tsz3['parse'](gpe7r, ewmg7r, $b1u) : x2tsz3['errorHandler']['error']('invalid doc source'), nfh6c['doc'];
}, r_yxio2j['prototype'] = { 'startDocument': function () {
    this['doc'] = new r_z3l2()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (jz2xs, ky8wmr, iowyk8, mewr) {
    var gq7pr = this['doc'],
        c65nf = gq7pr['createElementNS'](jz2xs, iowyk8 || ky8wmr),
        yji8xo = mewr['length'];r_pegdfq(this, c65nf), this['currentElement'] = c65nf, this['locator'] && r_h65_cn(this['locator'], c65nf);for (var qdcn = 0x0; yji8xo > qdcn; qdcn++) {
      var jz2xs = mewr['getURI'](qdcn),
          j2izo = mewr['getValue'](qdcn),
          iowyk8 = mewr['getQName'](qdcn),
          jxoi8y = gq7pr['createAttributeNS'](jz2xs, iowyk8);this['locator'] && r_h65_cn(mewr['getLocator'](qdcn), jxoi8y), jxoi8y['value'] = jxoi8y['nodeValue'] = j2izo, c65nf['setAttributeNode'](jxoi8y);
    }
  }, 'endElement': function () {
    {
      var eqfn = this['currentElement'];eqfn['tagName'];
    }this['currentElement'] = eqfn['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (u1_bh, dn65f) {
    var gfqdp = this['doc']['createProcessingInstruction'](u1_bh, dn65f);this['locator'] && r_h65_cn(this['locator'], gfqdp), r_pegdfq(this, gfqdp);
  }, 'ignorableWhitespace': function () {}, 'characters': function (bu1$a) {
    if (bu1$a = r_npqed['apply'](this, arguments)) {
      if (this['cdata']) var w7r8km = this['doc']['createCDATASection'](bu1$a);else var w7r8km = this['doc']['createTextNode'](bu1$a);this['currentElement'] ? this['currentElement']['appendChild'](w7r8km) : /^\s*$/['test'](bu1$a) && this['doc']['appendChild'](w7r8km), this['locator'] && r_h65_cn(this['locator'], w7r8km);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (c5h_6) {
    (this['locator'] = c5h_6) && (c5h_6['lineNumber'] = 0x0);
  }, 'comment': function (x2st3) {
    x2st3 = r_npqed['apply'](this, arguments);var hu_c56 = this['doc']['createComment'](x2st3);this['locator'] && r_h65_cn(this['locator'], hu_c56), r_pegdfq(this, hu_c56);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (peqg7, c_65u, wmk8o) {
    var _cnh56 = this['doc']['implementation'];if (_cnh56 && _cnh56['createDocumentType']) {
      var ymw8 = _cnh56['createDocumentType'](peqg7, c_65u, wmk8o);this['locator'] && r_h65_cn(this['locator'], ymw8), r_pegdfq(this, ymw8);
    }
  }, 'warning': function (ub9$a) {
    console['warn']('[xmldom warning]\t' + ub9$a, r_w8m(this['locator']));
  }, 'error': function (gemw7) {
    console['error']('[xmldom error]\t' + gemw7, r_w8m(this['locator']));
  }, 'fatalError': function (dgqefp) {
    throw console['error']('[xmldom fatalError]\t' + dgqefp, r_w8m(this['locator'])), dgqefp;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (j2iyo) {
  r_yxio2j['prototype'][j2iyo] = function () {
    return null;
  };
});var r_mrwk7g = require('./rS12r')['XMLReader'],
    r_z3l2 = exports['DOMImplementation'] = require('./rrDOMr')['DOMImplementation'];exports['XMLSerializer'] = require('./rrDOMr')['XMLSerializer'], exports['DOMParser'] = r_geq7pd;