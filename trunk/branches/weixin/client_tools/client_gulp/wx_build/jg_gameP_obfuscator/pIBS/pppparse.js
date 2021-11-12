var E = wx.$p;
function p_qbag8(nzw035) {
  this['options'] = nzw035 || { 'locator': {} };
}function p_bn98q(xo_muf, wzn3, u_xmt) {
  function px4st(sjihk4) {
    var pl4ts = xo_muf[sjihk4];!pl4ts && tpxluf && (pl4ts = 0x2 == xo_muf['length'] ? function (bcqga8) {
      xo_muf(sjihk4, bcqga8);
    } : xo_muf), v6127[sjihk4] = pl4ts && function (yhkjis) {
      pl4ts('[xmldom ' + sjihk4 + ']\t' + yhkjis + p_luptx(u_xmt));
    } || function () {};
  }if (!xo_muf) {
    if (wzn3 instanceof p_jsih4) return wzn3;xo_muf = wzn3;
  }var v6127 = {},
      tpxluf = xo_muf instanceof Function;return u_xmt = u_xmt || {}, px4st('warning'), px4st('error'), px4st('fatalError'), v6127;
}function p_jsih4() {
  this['cdata'] = !0x1;
}function p_jky6i(we3z5, x4tulp) {
  x4tulp['lineNumber'] = we3z5['lineNumber'], x4tulp['columnNumber'] = we3z5['columnNumber'];
}function p_luptx(mtf_ux) {
  return mtf_ux ? '\x0a@' + (mtf_ux['systemId'] || '') + '#[line:' + mtf_ux['lineNumber'] + ',col:' + mtf_ux['columnNumber'] + ']' : void 0x0;
}function p_w39en5(th4p, dbqgac, e8qa9b) {
  return 'string' == typeof th4p ? th4p['substr'](dbqgac, e8qa9b) : th4p['length'] >= dbqgac + e8qa9b || dbqgac ? new java['lang']['String'](th4p, dbqgac, e8qa9b) + '' : th4p;
}function p_ew59n3(r$16v, jkh$i) {
  r$16v['currentElement'] ? r$16v['currentElement']['appendChild'](jkh$i) : r$16v['doc']['appendChild'](jkh$i);
}p_qbag8['prototype']['parseFromString'] = function (nq985e, n95qe8) {
  var lkph4 = this['options'],
      v7021 = new p_enw95(),
      gdacb = lkph4['domBuilder'] || new p_jsih4(),
      s4hji = lkph4['errorHandler'],
      tsp4lx = lkph4['locator'],
      n8w5 = lkph4['xmlns'] || {},
      g8cabq = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return tsp4lx && gdacb['setDocumentLocator'](tsp4lx), v7021['errorHandler'] = p_bn98q(s4hji, gdacb, tsp4lx), v7021['domBuilder'] = lkph4['domBuilder'] || gdacb, /\/x?html?$/['test'](n95qe8) && (g8cabq['nbsp'] = '\u00a0', g8cabq['copy'] = '©', n8w5[''] = 'http://www.w3.org/1999/xhtml'), n8w5['xml'] = n8w5['xml'] || 'http://www.w3.org/XML/1998/namespace', nq985e ? v7021['parse'](nq985e, n8w5, g8cabq) : v7021['errorHandler']['error']('invalid doc source'), gdacb['doc'];
}, p_jsih4['prototype'] = { 'startDocument': function () {
    this['doc'] = new p_ihyj()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ut_fxl, vy67$, $kih, ufx_lt) {
    var l4xstp = this['doc'],
        hkyi$ = l4xstp['createElementNS'](ut_fxl, $kih || vy67$),
        ky$ijh = ufx_lt['length'];p_ew59n3(this, hkyi$), this['currentElement'] = hkyi$, this['locator'] && p_jky6i(this['locator'], hkyi$);for (var xpltf = 0x0; ky$ijh > xpltf; xpltf++) {
      var ut_fxl = ufx_lt['getURI'](xpltf),
          a8q9be = ufx_lt['getValue'](xpltf),
          $kih = ufx_lt['getQName'](xpltf),
          lp4sxt = l4xstp['createAttributeNS'](ut_fxl, $kih);this['locator'] && p_jky6i(ufx_lt['getLocator'](xpltf), lp4sxt), lp4sxt['value'] = lp4sxt['nodeValue'] = a8q9be, hkyi$['setAttributeNode'](lp4sxt);
    }
  }, 'endElement': function () {
    {
      var q8bne9 = this['currentElement'];q8bne9['tagName'];
    }this['currentElement'] = q8bne9['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (v2zr, _xomf) {
    var y1i$6v = this['doc']['createProcessingInstruction'](v2zr, _xomf);this['locator'] && p_jky6i(this['locator'], y1i$6v), p_ew59n3(this, y1i$6v);
  }, 'ignorableWhitespace': function () {}, 'characters': function (xufmt) {
    if (xufmt = p_w39en5['apply'](this, arguments)) {
      if (this['cdata']) var xlup = this['doc']['createCDATASection'](xufmt);else var xlup = this['doc']['createTextNode'](xufmt);this['currentElement'] ? this['currentElement']['appendChild'](xlup) : /^\s*$/['test'](xufmt) && this['doc']['appendChild'](xlup), this['locator'] && p_jky6i(this['locator'], xlup);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function ($yhikj) {
    (this['locator'] = $yhikj) && ($yhikj['lineNumber'] = 0x0);
  }, 'comment': function (c8bagq) {
    c8bagq = p_w39en5['apply'](this, arguments);var $vi6 = this['doc']['createComment'](c8bagq);this['locator'] && p_jky6i(this['locator'], $vi6), p_ew59n3(this, $vi6);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (w5en3z, si4j, ux_fo) {
    var r27v10 = this['doc']['implementation'];if (r27v10 && r27v10['createDocumentType']) {
      var r072zv = r27v10['createDocumentType'](w5en3z, si4j, ux_fo);this['locator'] && p_jky6i(this['locator'], r072zv), p_ew59n3(this, r072zv);
    }
  }, 'warning': function (tlph) {
    console['warn']('[xmldom warning]\t' + tlph, p_luptx(this['locator']));
  }, 'error': function (lpx4ut) {
    console['error']('[xmldom error]\t' + lpx4ut, p_luptx(this['locator']));
  }, 'fatalError': function (ijhysk) {
    throw console['error']('[xmldom fatalError]\t' + ijhysk, p_luptx(this['locator'])), ijhysk;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (k4lph) {
  p_jsih4['prototype'][k4lph] = function () {
    return null;
  };
});var p_enw95 = require('./pSAXp')['XMLReader'],
    p_ihyj = exports['DOMImplementation'] = require('./ppDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ppDOM')['XMLSerializer'], exports['DOMParser'] = p_qbag8;