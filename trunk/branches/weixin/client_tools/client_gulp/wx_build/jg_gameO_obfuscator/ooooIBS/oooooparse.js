var c = wx.$o;
function o_lad6v3(hcoz8b) {
  this['options'] = hcoz8b || { 'locator': {} };
}function o_vu3ln(oh4gxb, m5sqr, ptq5r) {
  function t57smq(_ekyu0) {
    var xf49o = oh4gxb[_ekyu0];!xf49o && tr5qms && (xf49o = 0x2 == oh4gxb['length'] ? function (mrcp5) {
      oh4gxb(_ekyu0, mrcp5);
    } : oh4gxb), zpbh8[_ekyu0] = xf49o && function (y$ekj0) {
      xf49o('[xmldom ' + _ekyu0 + ']\t' + y$ekj0 + o_ne_k(ptq5r));
    } || function () {};
  }if (!oh4gxb) {
    if (m5sqr instanceof o_cozh8b) return m5sqr;oh4gxb = m5sqr;
  }var zpbh8 = {},
      tr5qms = oh4gxb instanceof Function;return ptq5r = ptq5r || {}, t57smq('warning'), t57smq('error'), t57smq('fatalError'), zpbh8;
}function o_cozh8b() {
  this['cdata'] = !0x1;
}function o_n3la6v(yu_ke, prm5q) {
  prm5q['lineNumber'] = yu_ke['lineNumber'], prm5q['columnNumber'] = yu_ke['columnNumber'];
}function o_ne_k(alv3nu) {
  return alv3nu ? '\x0a@' + (alv3nu['systemId'] || '') + '#[line:' + alv3nu['lineNumber'] + ',col:' + alv3nu['columnNumber'] + ']' : void 0x0;
}function o_b8hzg(nvu3y, pm8c5, ai6l2) {
  return 'string' == typeof nvu3y ? nvu3y['substr'](pm8c5, ai6l2) : nvu3y['length'] >= pm8c5 + ai6l2 || pm8c5 ? new java['lang']['String'](nvu3y, pm8c5, ai6l2) + '' : nvu3y;
}function o_rmpcz(msq57, mrpqt) {
  msq57['currentElement'] ? msq57['currentElement']['appendChild'](mrpqt) : msq57['doc']['appendChild'](mrpqt);
}o_lad6v3['prototype']['parseFromString'] = function (z8cph, zb4hgo) {
  var d12wi6 = this['options'],
      m5qrp = new o_hzc8o(),
      tsmqr = d12wi6['domBuilder'] || new o_cozh8b(),
      fg9ox4 = d12wi6['errorHandler'],
      e_k0y$ = d12wi6['locator'],
      trsq5 = d12wi6['xmlns'] || {},
      a1d6 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return e_k0y$ && tsmqr['setDocumentLocator'](e_k0y$), m5qrp['errorHandler'] = o_vu3ln(fg9ox4, tsmqr, e_k0y$), m5qrp['domBuilder'] = d12wi6['domBuilder'] || tsmqr, /\/x?html?$/['test'](zb4hgo) && (a1d6['nbsp'] = '\u00a0', a1d6['copy'] = '©', trsq5[''] = 'http://www.w3.org/1999/xhtml'), trsq5['xml'] = trsq5['xml'] || 'http://www.w3.org/XML/1998/namespace', z8cph ? m5qrp['parse'](z8cph, trsq5, a1d6) : m5qrp['errorHandler']['error']('invalid doc source'), tsmqr['doc'];
}, o_cozh8b['prototype'] = { 'startDocument': function () {
    this['doc'] = new o_gzbo8()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (wdi126, tm7qs5, $ekj0, przm) {
    var $jy = this['doc'],
        ej0$ = $jy['createElementNS'](wdi126, $ekj0 || tm7qs5),
        $0_ke = przm['length'];o_rmpcz(this, ej0$), this['currentElement'] = ej0$, this['locator'] && o_n3la6v(this['locator'], ej0$);for (var wi1fx9 = 0x0; $0_ke > wi1fx9; wi1fx9++) {
      var wdi126 = przm['getURI'](wi1fx9),
          bx4og9 = przm['getValue'](wi1fx9),
          $ekj0 = przm['getQName'](wi1fx9),
          zgbho = $jy['createAttributeNS'](wdi126, $ekj0);this['locator'] && o_n3la6v(przm['getLocator'](wi1fx9), zgbho), zgbho['value'] = zgbho['nodeValue'] = bx4og9, ej0$['setAttributeNode'](zgbho);
    }
  }, 'endElement': function () {
    {
      var x4wgf = this['currentElement'];x4wgf['tagName'];
    }this['currentElement'] = x4wgf['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (c8pzbh, pmrc5) {
    var w2if91 = this['doc']['createProcessingInstruction'](c8pzbh, pmrc5);this['locator'] && o_n3la6v(this['locator'], w2if91), o_rmpcz(this, w2if91);
  }, 'ignorableWhitespace': function () {}, 'characters': function (h8obg) {
    if (h8obg = o_b8hzg['apply'](this, arguments)) {
      if (this['cdata']) var r8p = this['doc']['createCDATASection'](h8obg);else var r8p = this['doc']['createTextNode'](h8obg);this['currentElement'] ? this['currentElement']['appendChild'](r8p) : /^\s*$/['test'](h8obg) && this['doc']['appendChild'](r8p), this['locator'] && o_n3la6v(this['locator'], r8p);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (rmsq5) {
    (this['locator'] = rmsq5) && (rmsq5['lineNumber'] = 0x0);
  }, 'comment': function (rpmzc8) {
    rpmzc8 = o_b8hzg['apply'](this, arguments);var zhgb = this['doc']['createComment'](rpmzc8);this['locator'] && o_n3la6v(this['locator'], zhgb), o_rmpcz(this, zhgb);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (di2la, d21w6, if1w) {
    var xfg94w = this['doc']['implementation'];if (xfg94w && xfg94w['createDocumentType']) {
      var qrpm = xfg94w['createDocumentType'](di2la, d21w6, if1w);this['locator'] && o_n3la6v(this['locator'], qrpm), o_rmpcz(this, qrpm);
    }
  }, 'warning': function (_ey0u) {
    console['warn']('[xmldom warning]\t' + _ey0u, o_ne_k(this['locator']));
  }, 'error': function (z8mcp) {
    console['error']('[xmldom error]\t' + z8mcp, o_ne_k(this['locator']));
  }, 'fatalError': function (l_uv3n) {
    throw console['error']('[xmldom fatalError]\t' + l_uv3n, o_ne_k(this['locator'])), l_uv3n;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (je0) {
  o_cozh8b['prototype'][je0] = function () {
    return null;
  };
});var o_hzc8o = require('./oooSAX')['XMLReader'],
    o_gzbo8 = exports['DOMImplementation'] = require('./ooooDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ooooDOM')['XMLSerializer'], exports['DOMParser'] = o_lad6v3;