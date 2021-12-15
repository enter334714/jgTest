var O = wx.$C;
function h_j9$rz8(fgn_) {
  this['options'] = fgn_ || { 'locator': {} };
}function h_ru8pz$(jh0w, _nasvy, p5ucl) {
  function qx103(n_svg) {
    var r8jz$9 = jh0w[n_svg];!r8jz$9 && by26i && (r8jz$9 = 0x2 == jh0w['length'] ? function (u$p5c) {
      jh0w(n_svg, u$p5c);
    } : jh0w), vfng4_[n_svg] = r8jz$9 && function (gs_fv) {
      r8jz$9('[xmldom ' + n_svg + ']\t' + gs_fv + h_sa26(p5ucl));
    } || function () {};
  }if (!jh0w) {
    if (_nasvy instanceof h__sfgv) return _nasvy;jh0w = _nasvy;
  }var vfng4_ = {},
      by26i = jh0w instanceof Function;return p5ucl = p5ucl || {}, qx103('warning'), qx103('error'), qx103('fatalError'), vfng4_;
}function h__sfgv() {
  this['cdata'] = !0x1;
}function h_rj8z9$(rj9$8z, w0qx17) {
  w0qx17['lineNumber'] = rj9$8z['lineNumber'], w0qx17['columnNumber'] = rj9$8z['columnNumber'];
}function h_sa26(q4x13) {
  return q4x13 ? '\x0a@' + (q4x13['systemId'] || '') + '#[line:' + q4x13['lineNumber'] + ',col:' + q4x13['columnNumber'] + ']' : void 0x0;
}function h_w9hd0(kltm5o, gv4f_n, ay6_) {
  return 'string' == typeof kltm5o ? kltm5o['substr'](gv4f_n, ay6_) : kltm5o['length'] >= gv4f_n + ay6_ || gv4f_n ? new java['lang']['String'](kltm5o, gv4f_n, ay6_) + '' : kltm5o;
}function h_vnay_(o5pul, nvy_gs) {
  o5pul['currentElement'] ? o5pul['currentElement']['appendChild'](nvy_gs) : o5pul['doc']['appendChild'](nvy_gs);
}h_j9$rz8['prototype']['parseFromString'] = function (hx7qw, o5mtlk) {
  var ia2eb = this['options'],
      f371q4 = new h_w01qx7(),
      bia2 = ia2eb['domBuilder'] || new h__sfgv(),
      q7431f = ia2eb['errorHandler'],
      yvsna = ia2eb['locator'],
      p8cu$l = ia2eb['xmlns'] || {},
      aei6b2 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return yvsna && bia2['setDocumentLocator'](yvsna), f371q4['errorHandler'] = h_ru8pz$(q7431f, bia2, yvsna), f371q4['domBuilder'] = ia2eb['domBuilder'] || bia2, /\/x?html?$/['test'](o5mtlk) && (aei6b2['nbsp'] = '\u00a0', aei6b2['copy'] = '©', p8cu$l[''] = 'http://www.w3.org/1999/xhtml'), p8cu$l['xml'] = p8cu$l['xml'] || 'http://www.w3.org/XML/1998/namespace', hx7qw ? f371q4['parse'](hx7qw, p8cu$l, aei6b2) : f371q4['errorHandler']['error']('invalid doc source'), bia2['doc'];
}, h__sfgv['prototype'] = { 'startDocument': function () {
    this['doc'] = new h_r9zj8d()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (omkt, q14f73, jdhr, mkto) {
    var dhxj = this['doc'],
        cu5lpo = dhxj['createElementNS'](omkt, jdhr || q14f73),
        x0wdhq = mkto['length'];h_vnay_(this, cu5lpo), this['currentElement'] = cu5lpo, this['locator'] && h_rj8z9$(this['locator'], cu5lpo);for (var _vnsgy = 0x0; x0wdhq > _vnsgy; _vnsgy++) {
      var omkt = mkto['getURI'](_vnsgy),
          u$9z8r = mkto['getValue'](_vnsgy),
          jdhr = mkto['getQName'](_vnsgy),
          co5u = dhxj['createAttributeNS'](omkt, jdhr);this['locator'] && h_rj8z9$(mkto['getLocator'](_vnsgy), co5u), co5u['value'] = co5u['nodeValue'] = u$9z8r, cu5lpo['setAttributeNode'](co5u);
    }
  }, 'endElement': function () {
    {
      var f14g = this['currentElement'];f14g['tagName'];
    }this['currentElement'] = f14g['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (by6i2a, whq0d) {
    var j98zr = this['doc']['createProcessingInstruction'](by6i2a, whq0d);this['locator'] && h_rj8z9$(this['locator'], j98zr), h_vnay_(this, j98zr);
  }, 'ignorableWhitespace': function () {}, 'characters': function (l$pcu5) {
    if (l$pcu5 = h_w9hd0['apply'](this, arguments)) {
      if (this['cdata']) var y_sngv = this['doc']['createCDATASection'](l$pcu5);else var y_sngv = this['doc']['createTextNode'](l$pcu5);this['currentElement'] ? this['currentElement']['appendChild'](y_sngv) : /^\s*$/['test'](l$pcu5) && this['doc']['appendChild'](y_sngv), this['locator'] && h_rj8z9$(this['locator'], y_sngv);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (g_nsyv) {
    (this['locator'] = g_nsyv) && (g_nsyv['lineNumber'] = 0x0);
  }, 'comment': function (kmotl5) {
    kmotl5 = h_w9hd0['apply'](this, arguments);var y2san = this['doc']['createComment'](kmotl5);this['locator'] && h_rj8z9$(this['locator'], y2san), h_vnay_(this, y2san);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (fn_vg, djzhw9, b6e) {
    var up8l = this['doc']['implementation'];if (up8l && up8l['createDocumentType']) {
      var pur$8 = up8l['createDocumentType'](fn_vg, djzhw9, b6e);this['locator'] && h_rj8z9$(this['locator'], pur$8), h_vnay_(this, pur$8);
    }
  }, 'warning': function (u$p8l) {
    console['warn']('[xmldom warning]\t' + u$p8l, h_sa26(this['locator']));
  }, 'error': function (rp$u) {
    console['error']('[xmldom error]\t' + rp$u, h_sa26(this['locator']));
  }, 'fatalError': function (i2y6sa) {
    throw console['error']('[xmldom fatalError]\t' + i2y6sa, h_sa26(this['locator'])), i2y6sa;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (c5polu) {
  h__sfgv['prototype'][c5polu] = function () {
    return null;
  };
});var h_w01qx7 = require('./hhhsax')['XMLReader'],
    h_r9zj8d = exports['DOMImplementation'] = require('./hhhdom')['DOMImplementation'];exports['XMLSerializer'] = require('./hhhdom')['XMLSerializer'], exports['DOMParser'] = h_j9$rz8;