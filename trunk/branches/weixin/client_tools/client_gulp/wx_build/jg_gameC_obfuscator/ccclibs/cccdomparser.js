var p = wx.$h;
function a_jtcf1s(n_g2v) {
  this['options'] = n_g2v || { 'locator': {} };
}function a_hv_0xg(h0_8gv, vrn_x2, rapw7) {
  function yob$ie(h$k80) {
    var $6eki = h0_8gv[h$k80];!$6eki && $ie6b && ($6eki = 0x2 == h0_8gv['length'] ? function (f74j3a) {
      h0_8gv(h$k80, f74j3a);
    } : h0_8gv), wprna2[h$k80] = $6eki && function (byi6e$) {
      $6eki('[xmldom ' + h$k80 + ']\t' + byi6e$ + a_vh_08g(rapw7));
    } || function () {};
  }if (!h0_8gv) {
    if (vrn_x2 instanceof a__80hv) return vrn_x2;h0_8gv = vrn_x2;
  }var wprna2 = {},
      $ie6b = h0_8gv instanceof Function;return rapw7 = rapw7 || {}, yob$ie('warning'), yob$ie('error'), yob$ie('fatalError'), wprna2;
}function a__80hv() {
  this['cdata'] = !0x1;
}function a_b9z(_8gkh, ctsfj1) {
  ctsfj1['lineNumber'] = _8gkh['lineNumber'], ctsfj1['columnNumber'] = _8gkh['columnNumber'];
}function a_vh_08g(qbyoz) {
  return qbyoz ? '\x0a@' + (qbyoz['systemId'] || '') + '#[line:' + qbyoz['lineNumber'] + ',col:' + qbyoz['columnNumber'] + ']' : void 0x0;
}function a_dst1c($e6ik, nwvr2x, m51cds) {
  return 'string' == typeof $e6ik ? $e6ik['substr'](nwvr2x, m51cds) : $e6ik['length'] >= nwvr2x + m51cds || nwvr2x ? new java['lang']['String']($e6ik, nwvr2x, m51cds) + '' : $e6ik;
}function a_sf31jt(nar4w, bey$6i) {
  nar4w['currentElement'] ? nar4w['currentElement']['appendChild'](bey$6i) : nar4w['doc']['appendChild'](bey$6i);
}a_jtcf1s['prototype']['parseFromString'] = function (b6$eyi, jt1f73) {
  var t173 = this['options'],
      oyie = new a_rxv2(),
      dtc5 = t173['domBuilder'] || new a__80hv(),
      t51dc = t173['errorHandler'],
      n_rx2v = t173['locator'],
      vh0 = t173['xmlns'] || {},
      t1j3sf = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return n_rx2v && dtc5['setDocumentLocator'](n_rx2v), oyie['errorHandler'] = a_hv_0xg(t51dc, dtc5, n_rx2v), oyie['domBuilder'] = t173['domBuilder'] || dtc5, /\/x?html?$/['test'](jt1f73) && (t1j3sf['nbsp'] = '\u00a0', t1j3sf['copy'] = '©', vh0[''] = 'http://www.w3.org/1999/xhtml'), vh0['xml'] = vh0['xml'] || 'http://www.w3.org/XML/1998/namespace', b6$eyi ? oyie['parse'](b6$eyi, vh0, t1j3sf) : oyie['errorHandler']['error']('invalid doc source'), dtc5['doc'];
}, a__80hv['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_ybioz9()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (j713f, xnp, x0_v, xn2wr) {
    var aw374p = this['doc'],
        rxwn2 = aw374p['createElementNS'](j713f, x0_v || xnp),
        iyb6$e = xn2wr['length'];a_sf31jt(this, rxwn2), this['currentElement'] = rxwn2, this['locator'] && a_b9z(this['locator'], rxwn2);for (var i$6eky = 0x0; iyb6$e > i$6eky; i$6eky++) {
      var j713f = xn2wr['getURI'](i$6eky),
          by6ei = xn2wr['getValue'](i$6eky),
          x0_v = xn2wr['getQName'](i$6eky),
          sd1t5 = aw374p['createAttributeNS'](j713f, x0_v);this['locator'] && a_b9z(xn2wr['getLocator'](i$6eky), sd1t5), sd1t5['value'] = sd1t5['nodeValue'] = by6ei, rxwn2['setAttributeNode'](sd1t5);
    }
  }, 'endElement': function () {
    {
      var pxrnw = this['currentElement'];pxrnw['tagName'];
    }this['currentElement'] = pxrnw['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (k6h$8, cd5ml) {
    var o9bi = this['doc']['createProcessingInstruction'](k6h$8, cd5ml);this['locator'] && a_b9z(this['locator'], o9bi), a_sf31jt(this, o9bi);
  }, 'ignorableWhitespace': function () {}, 'characters': function (bzyo9q) {
    if (bzyo9q = a_dst1c['apply'](this, arguments)) {
      if (this['cdata']) var g6h0 = this['doc']['createCDATASection'](bzyo9q);else var g6h0 = this['doc']['createTextNode'](bzyo9q);this['currentElement'] ? this['currentElement']['appendChild'](g6h0) : /^\s*$/['test'](bzyo9q) && this['doc']['appendChild'](g6h0), this['locator'] && a_b9z(this['locator'], g6h0);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (_hkg08) {
    (this['locator'] = _hkg08) && (_hkg08['lineNumber'] = 0x0);
  }, 'comment': function (h_vg0) {
    h_vg0 = a_dst1c['apply'](this, arguments);var ye9io = this['doc']['createComment'](h_vg0);this['locator'] && a_b9z(this['locator'], ye9io), a_sf31jt(this, ye9io);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (g2_, ct5d1, w7r4ap) {
    var y$eboi = this['doc']['implementation'];if (y$eboi && y$eboi['createDocumentType']) {
      var r_xvn = y$eboi['createDocumentType'](g2_, ct5d1, w7r4ap);this['locator'] && a_b9z(this['locator'], r_xvn), a_sf31jt(this, r_xvn);
    }
  }, 'warning': function ($6eib) {
    console['warn']('[xmldom warning]\t' + $6eib, a_vh_08g(this['locator']));
  }, 'error': function (zobyq) {
    console['error']('[xmldom error]\t' + zobyq, a_vh_08g(this['locator']));
  }, 'fatalError': function (tf731j) {
    throw console['error']('[xmldom fatalError]\t' + tf731j, a_vh_08g(this['locator'])), tf731j;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (jt3s) {
  a__80hv['prototype'][jt3s] = function () {
    return null;
  };
});var a_rxv2 = require('./cccsax')['XMLReader'],
    a_ybioz9 = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_jtcf1s;