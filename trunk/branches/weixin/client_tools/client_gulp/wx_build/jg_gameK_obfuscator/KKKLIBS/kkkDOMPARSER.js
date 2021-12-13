var U = wx.$k;
function K1_q8v1n0(h6kesi) {
  this['options'] = h6kesi || { 'locator': {} };
}function K1_wbon1(k89s02, x$ualz, ovw) {
  function n10vqo(sk92h6) {
    var bxwoza = k89s02[sk92h6];!bxwoza && pldr$ && (bxwoza = 0x2 == k89s02['length'] ? function (s6k8) {
      k89s02(sk92h6, s6k8);
    } : k89s02), q80s92[sk92h6] = bxwoza && function (zwbxv) {
      bxwoza('[xmldom ' + sk92h6 + ']\t' + zwbxv + K1_r5p3f(ovw));
    } || function () {};
  }if (!k89s02) {
    if (x$ualz instanceof K1_bzwuax) return x$ualz;k89s02 = x$ualz;
  }var q80s92 = {},
      pldr$ = k89s02 instanceof Function;return ovw = ovw || {}, n10vqo('warning'), n10vqo('error'), n10vqo('fatalError'), q80s92;
}function K1_bzwuax() {
  this['cdata'] = !0x1;
}function K1_hk26(rp_$ld, $xadl) {
  $xadl['lineNumber'] = rp_$ld['lineNumber'], $xadl['columnNumber'] = rp_$ld['columnNumber'];
}function K1_r5p3f(s269h) {
  return s269h ? '\x0a@' + (s269h['systemId'] || '') + '#[line:' + s269h['lineNumber'] + ',col:' + s269h['columnNumber'] + ']' : void 0x0;
}function K1__rdp5$(f53cg, q1n820, vqn8) {
  return 'string' == typeof f53cg ? f53cg['substr'](q1n820, vqn8) : f53cg['length'] >= q1n820 + vqn8 || q1n820 ? new java['lang']['String'](f53cg, q1n820, vqn8) + '' : f53cg;
}function K1_g3_rp5(g3p5_r, lzbuax) {
  g3p5_r['currentElement'] ? g3p5_r['currentElement']['appendChild'](lzbuax) : g3p5_r['doc']['appendChild'](lzbuax);
}K1_q8v1n0['prototype']['parseFromString'] = function (nq1wov, dp_l$r) {
  var wbv1zo = this['options'],
      d35r_p = new K1_uxazb(),
      s20 = wbv1zo['domBuilder'] || new K1_bzwuax(),
      zulabx = wbv1zo['errorHandler'],
      jti7me = wbv1zo['locator'],
      g3yf5 = wbv1zo['xmlns'] || {},
      $uzxal = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return jti7me && s20['setDocumentLocator'](jti7me), d35r_p['errorHandler'] = K1_wbon1(zulabx, s20, jti7me), d35r_p['domBuilder'] = wbv1zo['domBuilder'] || s20, /\/x?html?$/['test'](dp_l$r) && ($uzxal['nbsp'] = '\u00a0', $uzxal['copy'] = '©', g3yf5[''] = 'http://www.w3.org/1999/xhtml'), g3yf5['xml'] = g3yf5['xml'] || 'http://www.w3.org/XML/1998/namespace', nq1wov ? d35r_p['parse'](nq1wov, g3yf5, $uzxal) : d35r_p['errorHandler']['error']('invalid doc source'), s20['doc'];
}, K1_bzwuax['prototype'] = { 'startDocument': function () {
    this['doc'] = new K1_bwaoz()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (e6ik, ek6ish, gr53p, xvwo) {
    var aozxbw = this['doc'],
        d3r = aozxbw['createElementNS'](e6ik, gr53p || ek6ish),
        wozb1v = xvwo['length'];K1_g3_rp5(this, d3r), this['currentElement'] = d3r, this['locator'] && K1_hk26(this['locator'], d3r);for (var _gr35p = 0x0; wozb1v > _gr35p; _gr35p++) {
      var e6ik = xvwo['getURI'](_gr35p),
          on1w = xvwo['getValue'](_gr35p),
          gr53p = xvwo['getQName'](_gr35p),
          _a$uld = aozxbw['createAttributeNS'](e6ik, gr53p);this['locator'] && K1_hk26(xvwo['getLocator'](_gr35p), _a$uld), _a$uld['value'] = _a$uld['nodeValue'] = on1w, d3r['setAttributeNode'](_a$uld);
    }
  }, 'endElement': function () {
    {
      var nv0q8 = this['currentElement'];nv0q8['tagName'];
    }this['currentElement'] = nv0q8['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (zoxwv, $pd5_) {
    var r$_d = this['doc']['createProcessingInstruction'](zoxwv, $pd5_);this['locator'] && K1_hk26(this['locator'], r$_d), K1_g3_rp5(this, r$_d);
  }, 'ignorableWhitespace': function () {}, 'characters': function (m7ti4j) {
    if (m7ti4j = K1__rdp5$['apply'](this, arguments)) {
      if (this['cdata']) var ux$da = this['doc']['createCDATASection'](m7ti4j);else var ux$da = this['doc']['createTextNode'](m7ti4j);this['currentElement'] ? this['currentElement']['appendChild'](ux$da) : /^\s*$/['test'](m7ti4j) && this['doc']['appendChild'](ux$da), this['locator'] && K1_hk26(this['locator'], ux$da);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (rgf35p) {
    (this['locator'] = rgf35p) && (rgf35p['lineNumber'] = 0x0);
  }, 'comment': function (jheit) {
    jheit = K1__rdp5$['apply'](this, arguments);var bvno1w = this['doc']['createComment'](jheit);this['locator'] && K1_hk26(this['locator'], bvno1w), K1_g3_rp5(this, bvno1w);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (axlub, obxvz, g5_3r) {
    var tj7h = this['doc']['implementation'];if (tj7h && tj7h['createDocumentType']) {
      var i7tj4 = tj7h['createDocumentType'](axlub, obxvz, g5_3r);this['locator'] && K1_hk26(this['locator'], i7tj4), K1_g3_rp5(this, i7tj4);
    }
  }, 'warning': function (qn820) {
    console['warn']('[xmldom warning]\t' + qn820, K1_r5p3f(this['locator']));
  }, 'error': function (ozb1v) {
    console['error']('[xmldom error]\t' + ozb1v, K1_r5p3f(this['locator']));
  }, 'fatalError': function (dlr_u$) {
    throw console['error']('[xmldom fatalError]\t' + dlr_u$, K1_r5p3f(this['locator'])), dlr_u$;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (abxzw) {
  K1_bzwuax['prototype'][abxzw] = function () {
    return null;
  };
});var K1_uxazb = require('./kkkSAX')['XMLReader'],
    K1_bwaoz = exports['DOMImplementation'] = require('./kkkDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./kkkDOM')['XMLSerializer'], exports['DOMParser'] = K1_q8v1n0;