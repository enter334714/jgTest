var Y = wx.$M;
function M_hj5imn(rx9v1) {
  this['options'] = rx9v1 || { 'locator': {} };
}function M_$bdfw(jmh47_, ni0lh5, cg8o6) {
  function $vd(x1y9k) {
    var bd0f = jmh47_[x1y9k];!bd0f && dvfwb && (bd0f = 0x2 == jmh47_['length'] ? function (ogea8c) {
      jmh47_(x1y9k, ogea8c);
    } : jmh47_), i5nl0$[x1y9k] = bd0f && function (cat82e) {
      bd0f('[xmldom ' + x1y9k + ']\t' + cat82e + M_rkx9(cg8o6));
    } || function () {};
  }if (!jmh47_) {
    if (ni0lh5 instanceof M_x91r) return ni0lh5;jmh47_ = ni0lh5;
  }var i5nl0$ = {},
      dvfwb = jmh47_ instanceof Function;return cg8o6 = cg8o6 || {}, $vd('warning'), $vd('error'), $vd('fatalError'), i5nl0$;
}function M_x91r() {
  this['cdata'] = !0x1;
}function M_qu1x(j6_47, kx91u) {
  kx91u['lineNumber'] = j6_47['lineNumber'], kx91u['columnNumber'] = j6_47['columnNumber'];
}function M_rkx9($bdl) {
  return $bdl ? '\x0a@' + ($bdl['systemId'] || '') + '#[line:' + $bdl['lineNumber'] + ',col:' + $bdl['columnNumber'] + ']' : void 0x0;
}function M_zce(ogac8e, ez8p, n5mhli) {
  return 'string' == typeof ogac8e ? ogac8e['substr'](ez8p, n5mhli) : ogac8e['length'] >= ez8p + n5mhli || ez8p ? new java['lang']['String'](ogac8e, ez8p, n5mhli) + '' : ogac8e;
}function M_g6os4(kxq3yu, wvbf9r) {
  kxq3yu['currentElement'] ? kxq3yu['currentElement']['appendChild'](wvbf9r) : kxq3yu['doc']['appendChild'](wvbf9r);
}M_hj5imn['prototype']['parseFromString'] = function (df$wb0, $lin0) {
  var oagec = this['options'],
      cao6g8 = new M_mnhj5i(),
      n7_j = oagec['domBuilder'] || new M_x91r(),
      kvrx19 = oagec['errorHandler'],
      lnimh = oagec['locator'],
      ace8t = oagec['xmlns'] || {},
      hn7j_ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return lnimh && n7_j['setDocumentLocator'](lnimh), cao6g8['errorHandler'] = M_$bdfw(kvrx19, n7_j, lnimh), cao6g8['domBuilder'] = oagec['domBuilder'] || n7_j, /\/x?html?$/['test']($lin0) && (hn7j_['nbsp'] = '\u00a0', hn7j_['copy'] = '©', ace8t[''] = 'http://www.w3.org/1999/xhtml'), ace8t['xml'] = ace8t['xml'] || 'http://www.w3.org/XML/1998/namespace', df$wb0 ? cao6g8['parse'](df$wb0, ace8t, hn7j_) : cao6g8['errorHandler']['error']('invalid doc source'), n7_j['doc'];
}, M_x91r['prototype'] = { 'startDocument': function () {
    this['doc'] = new M_wl$b0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (hm, bfdvw, a64gs, in5l$) {
    var m7_jn = this['doc'],
        m_4h = m7_jn['createElementNS'](hm, a64gs || bfdvw),
        k9r1fv = in5l$['length'];M_g6os4(this, m_4h), this['currentElement'] = m_4h, this['locator'] && M_qu1x(this['locator'], m_4h);for (var x1ky9 = 0x0; k9r1fv > x1ky9; x1ky9++) {
      var hm = in5l$['getURI'](x1ky9),
          d0$bw = in5l$['getValue'](x1ky9),
          a64gs = in5l$['getQName'](x1ky9),
          dw0l$b = m7_jn['createAttributeNS'](hm, a64gs);this['locator'] && M_qu1x(in5l$['getLocator'](x1ky9), dw0l$b), dw0l$b['value'] = dw0l$b['nodeValue'] = d0$bw, m_4h['setAttributeNode'](dw0l$b);
    }
  }, 'endElement': function () {
    {
      var df$w0b = this['currentElement'];df$w0b['tagName'];
    }this['currentElement'] = df$w0b['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (jhmn5i, o8a6g) {
    var v1wfr = this['doc']['createProcessingInstruction'](jhmn5i, o8a6g);this['locator'] && M_qu1x(this['locator'], v1wfr), M_g6os4(this, v1wfr);
  }, 'ignorableWhitespace': function () {}, 'characters': function (saocg) {
    if (saocg = M_zce['apply'](this, arguments)) {
      if (this['cdata']) var j_674s = this['doc']['createCDATASection'](saocg);else var j_674s = this['doc']['createTextNode'](saocg);this['currentElement'] ? this['currentElement']['appendChild'](j_674s) : /^\s*$/['test'](saocg) && this['doc']['appendChild'](j_674s), this['locator'] && M_qu1x(this['locator'], j_674s);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ags64) {
    (this['locator'] = ags64) && (ags64['lineNumber'] = 0x0);
  }, 'comment': function (rbvfwd) {
    rbvfwd = M_zce['apply'](this, arguments);var x3ky = this['doc']['createComment'](rbvfwd);this['locator'] && M_qu1x(this['locator'], x3ky), M_g6os4(this, x3ky);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (s46_j7, r9xk, fk1vr9) {
    var _76 = this['doc']['implementation'];if (_76 && _76['createDocumentType']) {
      var v$dbf = _76['createDocumentType'](s46_j7, r9xk, fk1vr9);this['locator'] && M_qu1x(this['locator'], v$dbf), M_g6os4(this, v$dbf);
    }
  }, 'warning': function (wbfvd) {
    console['warn']('[xmldom warning]\t' + wbfvd, M_rkx9(this['locator']));
  }, 'error': function (m5ln) {
    console['error']('[xmldom error]\t' + m5ln, M_rkx9(this['locator']));
  }, 'fatalError': function (l5n0i$) {
    throw console['error']('[xmldom fatalError]\t' + l5n0i$, M_rkx9(this['locator'])), l5n0i$;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (w$0bdl) {
  M_x91r['prototype'][w$0bdl] = function () {
    return null;
  };
});var M_mnhj5i = require('./mmmSAX')['XMLReader'],
    M_wl$b0 = exports['DOMImplementation'] = require('./mmmDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./mmmDOM')['XMLSerializer'], exports['DOMParser'] = M_hj5imn;