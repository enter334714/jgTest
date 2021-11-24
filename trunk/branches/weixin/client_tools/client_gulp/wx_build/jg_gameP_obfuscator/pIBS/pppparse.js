var E = wx.$p;
function p_y6$jik($6v1y7) {
  this['options'] = $6v1y7 || { 'locator': {} };
}function p_rz7v20(xulf_t, adbcq, _mfxuo) {
  function fltpux(ki4s) {
    var v761y = xulf_t[ki4s];!v761y && qbn89 && (v761y = 0x2 == xulf_t['length'] ? function (bca8q) {
      xulf_t(ki4s, bca8q);
    } : xulf_t), xfmu[ki4s] = v761y && function (lxtupf) {
      v761y('[xmldom ' + ki4s + ']\t' + lxtupf + p_y6ij$1(_mfxuo));
    } || function () {};
  }if (!xulf_t) {
    if (adbcq instanceof p_oxmuf) return adbcq;xulf_t = adbcq;
  }var xfmu = {},
      qbn89 = xulf_t instanceof Function;return _mfxuo = _mfxuo || {}, fltpux('warning'), fltpux('error'), fltpux('fatalError'), xfmu;
}function p_oxmuf() {
  this['cdata'] = !0x1;
}function p_ew5n8(v6y1, xtu_mf) {
  xtu_mf['lineNumber'] = v6y1['lineNumber'], xtu_mf['columnNumber'] = v6y1['columnNumber'];
}function p_y6ij$1(ew5nz) {
  return ew5nz ? '\x0a@' + (ew5nz['systemId'] || '') + '#[line:' + ew5nz['lineNumber'] + ',col:' + ew5nz['columnNumber'] + ']' : void 0x0;
}function p_y$ji61(sjkih, sxp4t, k4hsij) {
  return 'string' == typeof sjkih ? sjkih['substr'](sxp4t, k4hsij) : sjkih['length'] >= sxp4t + k4hsij || sxp4t ? new java['lang']['String'](sjkih, sxp4t, k4hsij) + '' : sjkih;
}function p_yish(eb9a, z53w) {
  eb9a['currentElement'] ? eb9a['currentElement']['appendChild'](z53w) : eb9a['doc']['appendChild'](z53w);
}p_y6$jik['prototype']['parseFromString'] = function (e3znw5, yiv61$) {
  var p4khj = this['options'],
      lps4h = new p_bgaqc(),
      bq8gca = p4khj['domBuilder'] || new p_oxmuf(),
      v27r0z = p4khj['errorHandler'],
      l4pths = p4khj['locator'],
      rv7$16 = p4khj['xmlns'] || {},
      uxftl = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return l4pths && bq8gca['setDocumentLocator'](l4pths), lps4h['errorHandler'] = p_rz7v20(v27r0z, bq8gca, l4pths), lps4h['domBuilder'] = p4khj['domBuilder'] || bq8gca, /\/x?html?$/['test'](yiv61$) && (uxftl['nbsp'] = '\u00a0', uxftl['copy'] = '©', rv7$16[''] = 'http://www.w3.org/1999/xhtml'), rv7$16['xml'] = rv7$16['xml'] || 'http://www.w3.org/XML/1998/namespace', e3znw5 ? lps4h['parse'](e3znw5, rv7$16, uxftl) : lps4h['errorHandler']['error']('invalid doc source'), bq8gca['doc'];
}, p_oxmuf['prototype'] = { 'startDocument': function () {
    this['doc'] = new p_$v67r1()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (fl_xtu, e5w3, lx4spt, ne9w3) {
    var hl4pks = this['doc'],
        $1iy = hl4pks['createElementNS'](fl_xtu, lx4spt || e5w3),
        dgqcba = ne9w3['length'];p_yish(this, $1iy), this['currentElement'] = $1iy, this['locator'] && p_ew5n8(this['locator'], $1iy);for (var ky$j6 = 0x0; dgqcba > ky$j6; ky$j6++) {
      var fl_xtu = ne9w3['getURI'](ky$j6),
          htlps4 = ne9w3['getValue'](ky$j6),
          lx4spt = ne9w3['getQName'](ky$j6),
          xulpt = hl4pks['createAttributeNS'](fl_xtu, lx4spt);this['locator'] && p_ew5n8(ne9w3['getLocator'](ky$j6), xulpt), xulpt['value'] = xulpt['nodeValue'] = htlps4, $1iy['setAttributeNode'](xulpt);
    }
  }, 'endElement': function () {
    {
      var $r7v = this['currentElement'];$r7v['tagName'];
    }this['currentElement'] = $r7v['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (jy1i$6, j6i$y) {
    var lt_ufx = this['doc']['createProcessingInstruction'](jy1i$6, j6i$y);this['locator'] && p_ew5n8(this['locator'], lt_ufx), p_yish(this, lt_ufx);
  }, 'ignorableWhitespace': function () {}, 'characters': function (bqc8a) {
    if (bqc8a = p_y$ji61['apply'](this, arguments)) {
      if (this['cdata']) var e3n5zw = this['doc']['createCDATASection'](bqc8a);else var e3n5zw = this['doc']['createTextNode'](bqc8a);this['currentElement'] ? this['currentElement']['appendChild'](e3n5zw) : /^\s*$/['test'](bqc8a) && this['doc']['appendChild'](e3n5zw), this['locator'] && p_ew5n8(this['locator'], e3n5zw);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (s4phk) {
    (this['locator'] = s4phk) && (s4phk['lineNumber'] = 0x0);
  }, 'comment': function (y7v61) {
    y7v61 = p_y$ji61['apply'](this, arguments);var jhkis4 = this['doc']['createComment'](y7v61);this['locator'] && p_ew5n8(this['locator'], jhkis4), p_yish(this, jhkis4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (yji1$, bgqc8, bqg9a) {
    var b8qne = this['doc']['implementation'];if (b8qne && b8qne['createDocumentType']) {
      var s4kj = b8qne['createDocumentType'](yji1$, bgqc8, bqg9a);this['locator'] && p_ew5n8(this['locator'], s4kj), p_yish(this, s4kj);
    }
  }, 'warning': function (q5en9) {
    console['warn']('[xmldom warning]\t' + q5en9, p_y6ij$1(this['locator']));
  }, 'error': function (shkiyj) {
    console['error']('[xmldom error]\t' + shkiyj, p_y6ij$1(this['locator']));
  }, 'fatalError': function (zen3w5) {
    throw console['error']('[xmldom fatalError]\t' + zen3w5, p_y6ij$1(this['locator'])), zen3w5;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (pjkh4) {
  p_oxmuf['prototype'][pjkh4] = function () {
    return null;
  };
});var p_bgaqc = require('./pSAXp')['XMLReader'],
    p_$v67r1 = exports['DOMImplementation'] = require('./ppDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ppDOM')['XMLSerializer'], exports['DOMParser'] = p_y6$jik;