var E = wx.$p;
function p_yi$j(slph4t) {
  this['options'] = slph4t || { 'locator': {} };
}function p_n0z3w5(zw0523, h4lt, $16y7) {
  function fxt_l(jhs4kp) {
    var kyis = zw0523[jhs4kp];!kyis && pkj4h && (kyis = 0x2 == zw0523['length'] ? function (xlp4st) {
      zw0523(jhs4kp, xlp4st);
    } : zw0523), r621[jhs4kp] = kyis && function (bq8g) {
      kyis('[xmldom ' + jhs4kp + ']\t' + bq8g + p_w2zr30($16y7));
    } || function () {};
  }if (!zw0523) {
    if (h4lt instanceof p_xflp) return h4lt;zw0523 = h4lt;
  }var r621 = {},
      pkj4h = zw0523 instanceof Function;return $16y7 = $16y7 || {}, fxt_l('warning'), fxt_l('error'), fxt_l('fatalError'), r621;
}function p_xflp() {
  this['cdata'] = !0x1;
}function p_tulxfp(n85eq, hkps4) {
  hkps4['lineNumber'] = n85eq['lineNumber'], hkps4['columnNumber'] = n85eq['columnNumber'];
}function p_w2zr30(qbdcag) {
  return qbdcag ? '\x0a@' + (qbdcag['systemId'] || '') + '#[line:' + qbdcag['lineNumber'] + ',col:' + qbdcag['columnNumber'] + ']' : void 0x0;
}function p_xl_tf(_tlfux, z0n, cqgbad) {
  return 'string' == typeof _tlfux ? _tlfux['substr'](z0n, cqgbad) : _tlfux['length'] >= z0n + cqgbad || z0n ? new java['lang']['String'](_tlfux, z0n, cqgbad) + '' : _tlfux;
}function p_ps4kl(w53z0n, z327r0) {
  w53z0n['currentElement'] ? w53z0n['currentElement']['appendChild'](z327r0) : w53z0n['doc']['appendChild'](z327r0);
}p_yi$j['prototype']['parseFromString'] = function (qnb98e, cdgq) {
  var qbg8a9 = this['options'],
      xtf = new p_v$617r(),
      rz03 = qbg8a9['domBuilder'] || new p_xflp(),
      p4lhst = qbg8a9['errorHandler'],
      e9aq = qbg8a9['locator'],
      y$1j = qbg8a9['xmlns'] || {},
      ne8q95 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return e9aq && rz03['setDocumentLocator'](e9aq), xtf['errorHandler'] = p_n0z3w5(p4lhst, rz03, e9aq), xtf['domBuilder'] = qbg8a9['domBuilder'] || rz03, /\/x?html?$/['test'](cdgq) && (ne8q95['nbsp'] = '\u00a0', ne8q95['copy'] = '©', y$1j[''] = 'http://www.w3.org/1999/xhtml'), y$1j['xml'] = y$1j['xml'] || 'http://www.w3.org/XML/1998/namespace', qnb98e ? xtf['parse'](qnb98e, y$1j, ne8q95) : xtf['errorHandler']['error']('invalid doc source'), rz03['doc'];
}, p_xflp['prototype'] = { 'startDocument': function () {
    this['doc'] = new p_fmuo()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (j6iyk$, _xfmtu, _oxumf, eq9ab) {
    var eb9a8 = this['doc'],
        ji4 = eb9a8['createElementNS'](j6iyk$, _oxumf || _xfmtu),
        q8bc = eq9ab['length'];p_ps4kl(this, ji4), this['currentElement'] = ji4, this['locator'] && p_tulxfp(this['locator'], ji4);for (var pxtu4l = 0x0; q8bc > pxtu4l; pxtu4l++) {
      var j6iyk$ = eq9ab['getURI'](pxtu4l),
          i61$yj = eq9ab['getValue'](pxtu4l),
          _oxumf = eq9ab['getQName'](pxtu4l),
          e9nq8 = eb9a8['createAttributeNS'](j6iyk$, _oxumf);this['locator'] && p_tulxfp(eq9ab['getLocator'](pxtu4l), e9nq8), e9nq8['value'] = e9nq8['nodeValue'] = i61$yj, ji4['setAttributeNode'](e9nq8);
    }
  }, 'endElement': function () {
    {
      var $y1i6 = this['currentElement'];$y1i6['tagName'];
    }this['currentElement'] = $y1i6['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (mxuo_f, uof_m) {
    var w3ne95 = this['doc']['createProcessingInstruction'](mxuo_f, uof_m);this['locator'] && p_tulxfp(this['locator'], w3ne95), p_ps4kl(this, w3ne95);
  }, 'ignorableWhitespace': function () {}, 'characters': function (fuxom_) {
    if (fuxom_ = p_xl_tf['apply'](this, arguments)) {
      if (this['cdata']) var h4ksji = this['doc']['createCDATASection'](fuxom_);else var h4ksji = this['doc']['createTextNode'](fuxom_);this['currentElement'] ? this['currentElement']['appendChild'](h4ksji) : /^\s*$/['test'](fuxom_) && this['doc']['appendChild'](h4ksji), this['locator'] && p_tulxfp(this['locator'], h4ksji);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (b9ae) {
    (this['locator'] = b9ae) && (b9ae['lineNumber'] = 0x0);
  }, 'comment': function (um_tfx) {
    um_tfx = p_xl_tf['apply'](this, arguments);var neq59 = this['doc']['createComment'](um_tfx);this['locator'] && p_tulxfp(this['locator'], neq59), p_ps4kl(this, neq59);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (j4khis, mtfxu, qb9ga) {
    var sp4lh = this['doc']['implementation'];if (sp4lh && sp4lh['createDocumentType']) {
      var flpuxt = sp4lh['createDocumentType'](j4khis, mtfxu, qb9ga);this['locator'] && p_tulxfp(this['locator'], flpuxt), p_ps4kl(this, flpuxt);
    }
  }, 'warning': function (v1r720) {
    console['warn']('[xmldom warning]\t' + v1r720, p_w2zr30(this['locator']));
  }, 'error': function (v7r16$) {
    console['error']('[xmldom error]\t' + v7r16$, p_w2zr30(this['locator']));
  }, 'fatalError': function (r23w0) {
    throw console['error']('[xmldom fatalError]\t' + r23w0, p_w2zr30(this['locator'])), r23w0;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (e953w) {
  p_xflp['prototype'][e953w] = function () {
    return null;
  };
});var p_v$617r = require('./pSAXp')['XMLReader'],
    p_fmuo = exports['DOMImplementation'] = require('./ppDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ppDOM')['XMLSerializer'], exports['DOMParser'] = p_yi$j;