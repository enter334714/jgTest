function gskz7ux(uopvb3) {
  this['options'] = uopvb3 || { 'locator': {} };
}function gsxzu3(ksux, wlt8, xdszf) {
  function zkxf(zkfs7) {
    var _le9w = ksux[zkfs7];!_le9w && fkdz && (_le9w = 0x2 == ksux['length'] ? function (xub) {
      ksux(zkfs7, xub);
    } : ksux), xzuk7[zkfs7] = _le9w ? function (t8q) {
      _le9w('[xmldom ' + zkfs7 + ']\t' + t8q + gzkds(xdszf));
    } : function () {};
  }if (!ksux) {
    if (wlt8 instanceof g_h96g) return wlt8;ksux = wlt8;
  }var xzuk7 = {},
      fkdz = ksux instanceof Function;return xdszf = xdszf || {}, zkxf('warning'), zkxf('error'), zkxf('fatalError'), xzuk7;
}function g_h96g() {
  this['cdata'] = !0x1;
}function gh_j(m542a, u37xzs) {
  u37xzs['lineNumber'] = m542a['lineNumber'], u37xzs['columnNumber'] = m542a['columnNumber'];
}function gzkds(p3b7) {
  return p3b7 ? '\x0a@' + (p3b7['systemId'] || '') + '#[line:' + p3b7['lineNumber'] + ',col:' + p3b7['columnNumber'] + ']' : void 0x0;
}function gowet(ov3pt, qwvp, dkf) {
  return 'string' == typeof ov3pt ? ov3pt['substr'](qwvp, dkf) : ov3pt['length'] >= qwvp + dkf || qwvp ? new java['lang']['String'](ov3pt, qwvp, dkf) + '' : ov3pt;
}function gt3obvp(we9, iyj1r$) {
  (we9['currentElement'] || we9['doc'])['appendChild'](iyj1r$);
}gskz7ux['prototype']['parseFromString'] = function (c25m, v3ub) {
  var l_w98 = this['options'],
      $61ir = new g_8he9l(),
      sxz37 = l_w98['domBuilder'] || new g_h96g(),
      obvtp = l_w98['errorHandler'],
      lqetw8 = l_w98['locator'],
      vwtpoq = l_w98['xmlns'] || {},
      _h98gl = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return lqetw8 && sxz37['setDocumentLocator'](lqetw8), $61ir['errorHandler'] = gsxzu3(obvtp, sxz37, lqetw8), $61ir['domBuilder'] = l_w98['domBuilder'] || sxz37, /\/x?html?$/['test'](v3ub) && (_h98gl['nbsp'] = '\u00a0', _h98gl['copy'] = '©', vwtpoq[''] = 'http://www.w3.org/1999/xhtml'), vwtpoq['xml'] = vwtpoq['xml'] || 'http://www.w3.org/XML/1998/namespace', c25m ? $61ir['parse'](c25m, vwtpoq, _h98gl) : $61ir['errorHandler']['error']('invalid doc source'), sxz37['doc'];
}, g_h96g['prototype'] = { 'startDocument': function () {
    this['doc'] = new geq8o()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ux3b7, kdfzxs, $r, h9gl6_) {
    var h$j_g6 = this['doc'],
        qltw8e = h$j_g6['createElementNS'](ux3b7, $r || kdfzxs),
        a5c2m = h9gl6_['length'];gt3obvp(this, qltw8e), this['currentElement'] = qltw8e, this['locator'] && gh_j(this['locator'], qltw8e);for (var m4a5 = 0x0; m4a5 < a5c2m; m4a5++) {
      var ux3b7 = h9gl6_['getURI'](m4a5),
          bvtpoq = h9gl6_['getValue'](m4a5),
          $r = h9gl6_['getQName'](m4a5),
          qe8wto = h$j_g6['createAttributeNS'](ux3b7, $r);this['locator'] && gh_j(h9gl6_['getLocator'](m4a5), qe8wto), qe8wto['value'] = qe8wto['nodeValue'] = bvtpoq, qltw8e['setAttributeNode'](qe8wto);
    }
  }, 'endElement': function () {
    var $hgi6j = this['currentElement'];$hgi6j['tagName'], this['currentElement'] = $hgi6j['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (r14a0y, eowqt) {
    eowqt = this['doc']['createProcessingInstruction'](r14a0y, eowqt), (this['locator'] && gh_j(this['locator'], eowqt), gt3obvp(this, eowqt));
  }, 'ignorableWhitespace': function () {}, 'characters': function (bpvqo) {
    var vpoqw;(bpvqo = gowet['apply'](this, arguments)) && (vpoqw = this['cdata'] ? this['doc']['createCDATASection'](bpvqo) : this['doc']['createTextNode'](bpvqo), this['currentElement'] ? this['currentElement']['appendChild'](vpoqw) : /^\s*$/['test'](bpvqo) && this['doc']['appendChild'](vpoqw), this['locator'] && gh_j(this['locator'], vpoqw));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (a5402) {
    (this['locator'] = a5402) && (a5402['lineNumber'] = 0x0);
  }, 'comment': function (vbp3o) {
    vbp3o = gowet['apply'](this, arguments);var woqt8 = this['doc']['createComment'](vbp3o);this['locator'] && gh_j(this['locator'], woqt8), gt3obvp(this, woqt8);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (gl_9, h$g6ij, $h_jg6) {
    var y524a0 = this['doc']['implementation'];y524a0 && y524a0['createDocumentType'] && ($h_jg6 = y524a0['createDocumentType'](gl_9, h$g6ij, $h_jg6), this['locator'] && gh_j(this['locator'], $h_jg6), gt3obvp(this, $h_jg6));
  }, 'warning': function (l_98g) {
    console['warn']('[xmldom warning]\t' + l_98g, gzkds(this['locator']));
  }, 'error': function (ux7s) {
    console['error']('[xmldom error]\t' + ux7s, gzkds(this['locator']));
  }, 'fatalError': function (g_6l) {
    throw console['error']('[xmldom fatalError]\t' + g_6l, gzkds(this['locator'])), g_6l;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (szfxdk) {
  g_h96g['prototype'][szfxdk] = function () {
    return null;
  };
});var g_8he9l = require('./gggsax')['XMLReader'],
    geq8o = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = gskz7ux;