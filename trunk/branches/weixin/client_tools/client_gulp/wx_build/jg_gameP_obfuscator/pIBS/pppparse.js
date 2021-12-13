var E = wx.$p;
function p_h4ps(i6$y1j) {
  this['options'] = i6$y1j || { 'locator': {} };
}function p_j$y1i(tufxlp, znwe3, i4hskj) {
  function jkhy$i(ux_omf) {
    var sihy = tufxlp[ux_omf];!sihy && xptlf && (sihy = 0x2 == tufxlp['length'] ? function (_tmfu) {
      tufxlp(ux_omf, _tmfu);
    } : tufxlp), xtulp4[ux_omf] = sihy && function (uoxmf_) {
      sihy('[xmldom ' + ux_omf + ']\t' + uoxmf_ + p_lptxfu(i4hskj));
    } || function () {};
  }if (!tufxlp) {
    if (znwe3 instanceof p_vy$i) return znwe3;tufxlp = znwe3;
  }var xtulp4 = {},
      xptlf = tufxlp instanceof Function;return i4hskj = i4hskj || {}, jkhy$i('warning'), jkhy$i('error'), jkhy$i('fatalError'), xtulp4;
}function p_vy$i() {
  this['cdata'] = !0x1;
}function p_bcdqg(hs4pj, uxtpl) {
  uxtpl['lineNumber'] = hs4pj['lineNumber'], uxtpl['columnNumber'] = hs4pj['columnNumber'];
}function p_lptxfu(xl_tfu) {
  return xl_tfu ? '\x0a@' + (xl_tfu['systemId'] || '') + '#[line:' + xl_tfu['lineNumber'] + ',col:' + xl_tfu['columnNumber'] + ']' : void 0x0;
}function p_lxptu4(v$6r7, hp4kjs, jshkyi) {
  return 'string' == typeof v$6r7 ? v$6r7['substr'](hp4kjs, jshkyi) : v$6r7['length'] >= hp4kjs + jshkyi || hp4kjs ? new java['lang']['String'](v$6r7, hp4kjs, jshkyi) + '' : v$6r7;
}function p_$vr1(i6y$jk, dq) {
  i6y$jk['currentElement'] ? i6y$jk['currentElement']['appendChild'](dq) : i6y$jk['doc']['appendChild'](dq);
}p_h4ps['prototype']['parseFromString'] = function (utlpxf, w0z2) {
  var eb8nq = this['options'],
      xtfm_u = new p_wen359(),
      ne8q = eb8nq['domBuilder'] || new p_vy$i(),
      y$1ij6 = eb8nq['errorHandler'],
      eq95n = eb8nq['locator'],
      pftxl = eb8nq['xmlns'] || {},
      we395 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return eq95n && ne8q['setDocumentLocator'](eq95n), xtfm_u['errorHandler'] = p_j$y1i(y$1ij6, ne8q, eq95n), xtfm_u['domBuilder'] = eb8nq['domBuilder'] || ne8q, /\/x?html?$/['test'](w0z2) && (we395['nbsp'] = '\u00a0', we395['copy'] = '©', pftxl[''] = 'http://www.w3.org/1999/xhtml'), pftxl['xml'] = pftxl['xml'] || 'http://www.w3.org/XML/1998/namespace', utlpxf ? xtfm_u['parse'](utlpxf, pftxl, we395) : xtfm_u['errorHandler']['error']('invalid doc source'), ne8q['doc'];
}, p_vy$i['prototype'] = { 'startDocument': function () {
    this['doc'] = new p_b8a9qg()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (w85e9n, mtxfu, n9e5q8, ji$1) {
    var xo_uf = this['doc'],
        khj$ = xo_uf['createElementNS'](w85e9n, n9e5q8 || mtxfu),
        g8abqc = ji$1['length'];p_$vr1(this, khj$), this['currentElement'] = khj$, this['locator'] && p_bcdqg(this['locator'], khj$);for (var z03wn5 = 0x0; g8abqc > z03wn5; z03wn5++) {
      var w85e9n = ji$1['getURI'](z03wn5),
          zr0 = ji$1['getValue'](z03wn5),
          n9e5q8 = ji$1['getQName'](z03wn5),
          zw2530 = xo_uf['createAttributeNS'](w85e9n, n9e5q8);this['locator'] && p_bcdqg(ji$1['getLocator'](z03wn5), zw2530), zw2530['value'] = zw2530['nodeValue'] = zr0, khj$['setAttributeNode'](zw2530);
    }
  }, 'endElement': function () {
    {
      var wr30 = this['currentElement'];wr30['tagName'];
    }this['currentElement'] = wr30['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (iky$6j, xuof_) {
    var s4hkpl = this['doc']['createProcessingInstruction'](iky$6j, xuof_);this['locator'] && p_bcdqg(this['locator'], s4hkpl), p_$vr1(this, s4hkpl);
  }, 'ignorableWhitespace': function () {}, 'characters': function (v6$i1y) {
    if (v6$i1y = p_lxptu4['apply'](this, arguments)) {
      if (this['cdata']) var lxup4 = this['doc']['createCDATASection'](v6$i1y);else var lxup4 = this['doc']['createTextNode'](v6$i1y);this['currentElement'] ? this['currentElement']['appendChild'](lxup4) : /^\s*$/['test'](v6$i1y) && this['doc']['appendChild'](lxup4), this['locator'] && p_bcdqg(this['locator'], lxup4);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (b9qg8a) {
    (this['locator'] = b9qg8a) && (b9qg8a['lineNumber'] = 0x0);
  }, 'comment': function (lxtf) {
    lxtf = p_lxptu4['apply'](this, arguments);var yv16$7 = this['doc']['createComment'](lxtf);this['locator'] && p_bcdqg(this['locator'], yv16$7), p_$vr1(this, yv16$7);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ulftp, y$k6ji, a9b8q) {
    var qne = this['doc']['implementation'];if (qne && qne['createDocumentType']) {
      var hpls = qne['createDocumentType'](ulftp, y$k6ji, a9b8q);this['locator'] && p_bcdqg(this['locator'], hpls), p_$vr1(this, hpls);
    }
  }, 'warning': function (puxtl4) {
    console['warn']('[xmldom warning]\t' + puxtl4, p_lptxfu(this['locator']));
  }, 'error': function (kphj4) {
    console['error']('[xmldom error]\t' + kphj4, p_lptxfu(this['locator']));
  }, 'fatalError': function (r170) {
    throw console['error']('[xmldom fatalError]\t' + r170, p_lptxfu(this['locator'])), r170;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (t4xspl) {
  p_vy$i['prototype'][t4xspl] = function () {
    return null;
  };
});var p_wen359 = require('./pSAXp')['XMLReader'],
    p_b8a9qg = exports['DOMImplementation'] = require('./ppDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ppDOM')['XMLSerializer'], exports['DOMParser'] = p_h4ps;