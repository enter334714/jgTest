var Q = wx.$I;
function i__aj6f8(pvm1c) {
  this['options'] = pvm1c || { 'locator': {} };
}function i_jb376a($rl, fmvc1, t9lri) {
  function iltr(xh54n) {
    var pfa_8 = $rl[xh54n];!pfa_8 && lir$9t && (pfa_8 = 0x2 == $rl['length'] ? function (ueqk2s) {
      $rl(xh54n, ueqk2s);
    } : $rl), f_p1c[xh54n] = pfa_8 && function (n452h) {
      pfa_8('[xmldom ' + xh54n + ']\t' + n452h + i_v1rmt(t9lri));
    } || function () {};
  }if (!$rl) {
    if (fmvc1 instanceof i_c1vmfp) return fmvc1;$rl = fmvc1;
  }var f_p1c = {},
      lir$9t = $rl instanceof Function;return t9lri = t9lri || {}, iltr('warning'), iltr('error'), iltr('fatalError'), f_p1c;
}function i_c1vmfp() {
  this['cdata'] = !0x1;
}function i_w4q5n(xw5h4, nq254w) {
  nq254w['lineNumber'] = xw5h4['lineNumber'], nq254w['columnNumber'] = xw5h4['columnNumber'];
}function i_v1rmt(ksunq) {
  return ksunq ? '\x0a@' + (ksunq['systemId'] || '') + '#[line:' + ksunq['lineNumber'] + ',col:' + ksunq['columnNumber'] + ']' : void 0x0;
}function i_n2uq5(z0$gil, nxw45h, eus) {
  return 'string' == typeof z0$gil ? z0$gil['substr'](nxw45h, eus) : z0$gil['length'] >= nxw45h + eus || nxw45h ? new java['lang']['String'](z0$gil, nxw45h, eus) + '' : z0$gil;
}function i_o0dz(pfc1m_, lg0ozy) {
  pfc1m_['currentElement'] ? pfc1m_['currentElement']['appendChild'](lg0ozy) : pfc1m_['doc']['appendChild'](lg0ozy);
}i__aj6f8['prototype']['parseFromString'] = function (hw425n, e37su) {
  var u25kn = this['options'],
      qbe = new i_pvc1f(),
      mfcvp = u25kn['domBuilder'] || new i_c1vmfp(),
      _8pc1f = u25kn['errorHandler'],
      sbe = u25kn['locator'],
      rz0i$ = u25kn['xmlns'] || {},
      t$il = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return sbe && mfcvp['setDocumentLocator'](sbe), qbe['errorHandler'] = i_jb376a(_8pc1f, mfcvp, sbe), qbe['domBuilder'] = u25kn['domBuilder'] || mfcvp, /\/x?html?$/['test'](e37su) && (t$il['nbsp'] = '\u00a0', t$il['copy'] = '©', rz0i$[''] = 'http://www.w3.org/1999/xhtml'), rz0i$['xml'] = rz0i$['xml'] || 'http://www.w3.org/XML/1998/namespace', hw425n ? qbe['parse'](hw425n, rz0i$, t$il) : qbe['errorHandler']['error']('invalid doc source'), mfcvp['doc'];
}, i_c1vmfp['prototype'] = { 'startDocument': function () {
    this['doc'] = new i_li0$r()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (gz$o0, kes, pm1_, iltzr) {
    var knqu = this['doc'],
        pjc_f = knqu['createElementNS'](gz$o0, pm1_ || kes),
        kqu52n = iltzr['length'];i_o0dz(this, pjc_f), this['currentElement'] = pjc_f, this['locator'] && i_w4q5n(this['locator'], pjc_f);for (var dg0yzo = 0x0; kqu52n > dg0yzo; dg0yzo++) {
      var gz$o0 = iltzr['getURI'](dg0yzo),
          fc_18 = iltzr['getValue'](dg0yzo),
          pm1_ = iltzr['getQName'](dg0yzo),
          dyog0z = knqu['createAttributeNS'](gz$o0, pm1_);this['locator'] && i_w4q5n(iltzr['getLocator'](dg0yzo), dyog0z), dyog0z['value'] = dyog0z['nodeValue'] = fc_18, pjc_f['setAttributeNode'](dyog0z);
    }
  }, 'endElement': function () {
    {
      var l9t$ri = this['currentElement'];l9t$ri['tagName'];
    }this['currentElement'] = l9t$ri['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ajf_8p, nw4x) {
    var rm1v = this['doc']['createProcessingInstruction'](ajf_8p, nw4x);this['locator'] && i_w4q5n(this['locator'], rm1v), i_o0dz(this, rm1v);
  }, 'ignorableWhitespace': function () {}, 'characters': function (jb6a7) {
    if (jb6a7 = i_n2uq5['apply'](this, arguments)) {
      if (this['cdata']) var bske7u = this['doc']['createCDATASection'](jb6a7);else var bske7u = this['doc']['createTextNode'](jb6a7);this['currentElement'] ? this['currentElement']['appendChild'](bske7u) : /^\s*$/['test'](jb6a7) && this['doc']['appendChild'](bske7u), this['locator'] && i_w4q5n(this['locator'], bske7u);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (keqbus) {
    (this['locator'] = keqbus) && (keqbus['lineNumber'] = 0x0);
  }, 'comment': function (o0dgzy) {
    o0dgzy = i_n2uq5['apply'](this, arguments);var kseu2q = this['doc']['createComment'](o0dgzy);this['locator'] && i_w4q5n(this['locator'], kseu2q), i_o0dz(this, kseu2q);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ueq2s, qbeks, ukn52q) {
    var x4h5wn = this['doc']['implementation'];if (x4h5wn && x4h5wn['createDocumentType']) {
      var nq52ku = x4h5wn['createDocumentType'](ueq2s, qbeks, ukn52q);this['locator'] && i_w4q5n(this['locator'], nq52ku), i_o0dz(this, nq52ku);
    }
  }, 'warning': function (be376) {
    console['warn']('[xmldom warning]\t' + be376, i_v1rmt(this['locator']));
  }, 'error': function ($0ogl) {
    console['error']('[xmldom error]\t' + $0ogl, i_v1rmt(this['locator']));
  }, 'fatalError': function (tiz) {
    throw console['error']('[xmldom fatalError]\t' + tiz, i_v1rmt(this['locator'])), tiz;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (jcf8p) {
  i_c1vmfp['prototype'][jcf8p] = function () {
    return null;
  };
});var i_pvc1f = require('./iiiSAX')['XMLReader'],
    i_li0$r = exports['DOMImplementation'] = require('./iiiDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./iiiDOM')['XMLSerializer'], exports['DOMParser'] = i__aj6f8;