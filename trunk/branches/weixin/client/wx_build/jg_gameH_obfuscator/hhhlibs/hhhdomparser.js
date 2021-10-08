var O = wx.$C;
function h__ni7d1(_3cd1) {
  this['options'] = _3cd1 || { 'locator': {} };
}function h_h9clu(uhec9, prkag5, sjz$0o) {
  function ragkp(ygap) {
    var buhc9l = uhec9[ygap];!buhc9l && paeuhk && (buhc9l = 0x2 == uhec9['length'] ? function (z4ot0) {
      uhec9(ygap, z4ot0);
    } : uhec9), $s8z6m[ygap] = buhc9l ? function (_dn71) {
      buhc9l('[xmldom ' + ygap + ']\t' + _dn71 + h_l9euk(sjz$0o));
    } : function () {};
  }if (!uhec9) {
    if (prkag5 instanceof h_o6sz) return prkag5;uhec9 = prkag5;
  }var $s8z6m = {},
      paeuhk = uhec9 instanceof Function;return sjz$0o = sjz$0o || {}, ragkp('warning'), ragkp('error'), ragkp('fatalError'), $s8z6m;
}function h_o6sz() {
  this['cdata'] = !0x1;
}function h_m6s$8w(itn04, a5gpry) {
  a5gpry['lineNumber'] = itn04['lineNumber'], a5gpry['columnNumber'] = itn04['columnNumber'];
}function h_l9euk(ubc) {
  return ubc ? '\x0a@' + (ubc['systemId'] || '') + '#[line:' + ubc['lineNumber'] + ',col:' + ubc['columnNumber'] + ']' : void 0x0;
}function h_u9hel($s6zjo, p5ekag, mw8$s) {
  return 'string' == typeof $s6zjo ? $s6zjo['substr'](p5ekag, mw8$s) : $s6zjo['length'] >= p5ekag + mw8$s || p5ekag ? new java['lang']['String']($s6zjo, p5ekag, mw8$s) + '' : $s6zjo;
}function h_uelc9h(s8m$z, w6vm8) {
  (s8m$z['currentElement'] || s8m$z['doc'])['appendChild'](w6vm8);
}h__ni7d1['prototype']['parseFromString'] = function (m8$z, $osj) {
  var kg5ar = this['options'],
      kaupe = new h_ukphel(),
      z$ms86 = kg5ar['domBuilder'] || new h_o6sz(),
      i0nt = kg5ar['errorHandler'],
      zotj4 = kg5ar['locator'],
      jit04 = kg5ar['xmlns'] || {},
      vwm8f = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return zotj4 && z$ms86['setDocumentLocator'](zotj4), kaupe['errorHandler'] = h_h9clu(i0nt, z$ms86, zotj4), kaupe['domBuilder'] = kg5ar['domBuilder'] || z$ms86, /\/x?html?$/['test']($osj) && (vwm8f['nbsp'] = '\u00a0', vwm8f['copy'] = '©', jit04[''] = 'http://www.w3.org/1999/xhtml'), jit04['xml'] = jit04['xml'] || 'http://www.w3.org/XML/1998/namespace', m8$z ? kaupe['parse'](m8$z, jit04, vwm8f) : kaupe['errorHandler']['error']('invalid doc source'), z$ms86['doc'];
}, h_o6sz['prototype'] = { 'startDocument': function () {
    this['doc'] = new h_o0$zj()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (d39b_, di147, $6mzs8, euc9lh) {
    var o0j$t = this['doc'],
        m68$z = o0j$t['createElementNS'](d39b_, $6mzs8 || di147),
        db9c = euc9lh['length'];h_uelc9h(this, m68$z), this['currentElement'] = m68$z, this['locator'] && h_m6s$8w(this['locator'], m68$z);for (var x2r = 0x0; x2r < db9c; x2r++) {
      var d39b_ = euc9lh['getURI'](x2r),
          szm = euc9lh['getValue'](x2r),
          $6mzs8 = euc9lh['getQName'](x2r),
          hpluk = o0j$t['createAttributeNS'](d39b_, $6mzs8);this['locator'] && h_m6s$8w(euc9lh['getLocator'](x2r), hpluk), hpluk['value'] = hpluk['nodeValue'] = szm, m68$z['setAttributeNode'](hpluk);
    }
  }, 'endElement': function () {
    var z0o$ = this['currentElement'];z0o$['tagName'], this['currentElement'] = z0o$['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (kapeh, ni04tj) {
    ni04tj = this['doc']['createProcessingInstruction'](kapeh, ni04tj), (this['locator'] && h_m6s$8w(this['locator'], ni04tj), h_uelc9h(this, ni04tj));
  }, 'ignorableWhitespace': function () {}, 'characters': function (mv8qf) {
    var t174;(mv8qf = h_u9hel['apply'](this, arguments)) && (t174 = this['cdata'] ? this['doc']['createCDATASection'](mv8qf) : this['doc']['createTextNode'](mv8qf), this['currentElement'] ? this['currentElement']['appendChild'](t174) : /^\s*$/['test'](mv8qf) && this['doc']['appendChild'](t174), this['locator'] && h_m6s$8w(this['locator'], t174));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (b_1c3) {
    (this['locator'] = b_1c3) && (b_1c3['lineNumber'] = 0x0);
  }, 'comment': function (tn40oj) {
    tn40oj = h_u9hel['apply'](this, arguments);var xrg5ya = this['doc']['createComment'](tn40oj);this['locator'] && h_m6s$8w(this['locator'], xrg5ya), h_uelc9h(this, xrg5ya);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (eu9k, rg2yx5, gepk5a) {
    var n07t = this['doc']['implementation'];n07t && n07t['createDocumentType'] && (gepk5a = n07t['createDocumentType'](eu9k, rg2yx5, gepk5a), this['locator'] && h_m6s$8w(this['locator'], gepk5a), h_uelc9h(this, gepk5a));
  }, 'warning': function (z$t0j) {
    console['warn']('[xmldom warning]\t' + z$t0j, h_l9euk(this['locator']));
  }, 'error': function (d713i_) {
    console['error']('[xmldom error]\t' + d713i_, h_l9euk(this['locator']));
  }, 'fatalError': function (to4nj0) {
    throw console['error']('[xmldom fatalError]\t' + to4nj0, h_l9euk(this['locator'])), to4nj0;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (pkhleu) {
  h_o6sz['prototype'][pkhleu] = function () {
    return null;
  };
});var h_ukphel = require('./hhhsax')['XMLReader'],
    h_o0$zj = exports['DOMImplementation'] = require('./hhhdom')['DOMImplementation'];exports['XMLSerializer'] = require('./hhhdom')['XMLSerializer'], exports['DOMParser'] = h__ni7d1;