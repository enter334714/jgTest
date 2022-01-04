var E = wx.$p;
function p_x_ul(ulxtfp) {
  this['options'] = ulxtfp || { 'locator': {} };
}function p_w59n3e(en958, ptluxf, n598e) {
  function f_oxu(s4lhpk) {
    var qn985 = en958[s4lhpk];!qn985 && cdqbag && (qn985 = 0x2 == en958['length'] ? function (t_flux) {
      en958(s4lhpk, t_flux);
    } : en958), w3n59[s4lhpk] = qn985 && function (xfmo_u) {
      qn985('[xmldom ' + s4lhpk + ']\t' + xfmo_u + p_l4sh(n598e));
    } || function () {};
  }if (!en958) {
    if (ptluxf instanceof p_tlux_f) return ptluxf;en958 = ptluxf;
  }var w3n59 = {},
      cdqbag = en958 instanceof Function;return n598e = n598e || {}, f_oxu('warning'), f_oxu('error'), f_oxu('fatalError'), w3n59;
}function p_tlux_f() {
  this['cdata'] = !0x1;
}function p_ksh4pj(js4kh, ag8bq) {
  ag8bq['lineNumber'] = js4kh['lineNumber'], ag8bq['columnNumber'] = js4kh['columnNumber'];
}function p_l4sh(n50w) {
  return n50w ? '\x0a@' + (n50w['systemId'] || '') + '#[line:' + n50w['lineNumber'] + ',col:' + n50w['columnNumber'] + ']' : void 0x0;
}function p_w2rz(ez5wn3, gbdca, skiyhj) {
  return 'string' == typeof ez5wn3 ? ez5wn3['substr'](gbdca, skiyhj) : ez5wn3['length'] >= gbdca + skiyhj || gbdca ? new java['lang']['String'](ez5wn3, gbdca, skiyhj) + '' : ez5wn3;
}function p_rz0v72(_lxtuf, tp4xul) {
  _lxtuf['currentElement'] ? _lxtuf['currentElement']['appendChild'](tp4xul) : _lxtuf['doc']['appendChild'](tp4xul);
}p_x_ul['prototype']['parseFromString'] = function ($6v1r7, r7023z) {
  var foxu = this['options'],
      ikyjhs = new p_r703z2(),
      v70r2z = foxu['domBuilder'] || new p_tlux_f(),
      sthlp = foxu['errorHandler'],
      j6iky$ = foxu['locator'],
      lxpt = foxu['xmlns'] || {},
      k$6iyj = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return j6iky$ && v70r2z['setDocumentLocator'](j6iky$), ikyjhs['errorHandler'] = p_w59n3e(sthlp, v70r2z, j6iky$), ikyjhs['domBuilder'] = foxu['domBuilder'] || v70r2z, /\/x?html?$/['test'](r7023z) && (k$6iyj['nbsp'] = '\u00a0', k$6iyj['copy'] = '©', lxpt[''] = 'http://www.w3.org/1999/xhtml'), lxpt['xml'] = lxpt['xml'] || 'http://www.w3.org/XML/1998/namespace', $6v1r7 ? ikyjhs['parse']($6v1r7, lxpt, k$6iyj) : ikyjhs['errorHandler']['error']('invalid doc source'), v70r2z['doc'];
}, p_tlux_f['prototype'] = { 'startDocument': function () {
    this['doc'] = new p_r20vz()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (w023r, t4slh, xf_utm, h4pj) {
    var jphks = this['doc'],
        bq89en = jphks['createElementNS'](w023r, xf_utm || t4slh),
        en5w93 = h4pj['length'];p_rz0v72(this, bq89en), this['currentElement'] = bq89en, this['locator'] && p_ksh4pj(this['locator'], bq89en);for (var e395w = 0x0; en5w93 > e395w; e395w++) {
      var w023r = h4pj['getURI'](e395w),
          nwz3e = h4pj['getValue'](e395w),
          xf_utm = h4pj['getQName'](e395w),
          gq89a = jphks['createAttributeNS'](w023r, xf_utm);this['locator'] && p_ksh4pj(h4pj['getLocator'](e395w), gq89a), gq89a['value'] = gq89a['nodeValue'] = nwz3e, bq89en['setAttributeNode'](gq89a);
    }
  }, 'endElement': function () {
    {
      var sph4k = this['currentElement'];sph4k['tagName'];
    }this['currentElement'] = sph4k['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (p4t, oumfx_) {
    var bg9a = this['doc']['createProcessingInstruction'](p4t, oumfx_);this['locator'] && p_ksh4pj(this['locator'], bg9a), p_rz0v72(this, bg9a);
  }, 'ignorableWhitespace': function () {}, 'characters': function (tuxp4) {
    if (tuxp4 = p_w2rz['apply'](this, arguments)) {
      if (this['cdata']) var hjis4k = this['doc']['createCDATASection'](tuxp4);else var hjis4k = this['doc']['createTextNode'](tuxp4);this['currentElement'] ? this['currentElement']['appendChild'](hjis4k) : /^\s*$/['test'](tuxp4) && this['doc']['appendChild'](hjis4k), this['locator'] && p_ksh4pj(this['locator'], hjis4k);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (z3w02r) {
    (this['locator'] = z3w02r) && (z3w02r['lineNumber'] = 0x0);
  }, 'comment': function (fxtu_m) {
    fxtu_m = p_w2rz['apply'](this, arguments);var tpluf = this['doc']['createComment'](fxtu_m);this['locator'] && p_ksh4pj(this['locator'], tpluf), p_rz0v72(this, tpluf);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ca8gb, g98a, _muxt) {
    var r1v76$ = this['doc']['implementation'];if (r1v76$ && r1v76$['createDocumentType']) {
      var ne89w5 = r1v76$['createDocumentType'](ca8gb, g98a, _muxt);this['locator'] && p_ksh4pj(this['locator'], ne89w5), p_rz0v72(this, ne89w5);
    }
  }, 'warning': function (w9n53) {
    console['warn']('[xmldom warning]\t' + w9n53, p_l4sh(this['locator']));
  }, 'error': function (dqabgc) {
    console['error']('[xmldom error]\t' + dqabgc, p_l4sh(this['locator']));
  }, 'fatalError': function (we9n85) {
    throw console['error']('[xmldom fatalError]\t' + we9n85, p_l4sh(this['locator'])), we9n85;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (y$6j) {
  p_tlux_f['prototype'][y$6j] = function () {
    return null;
  };
});var p_r703z2 = require('./pSAXp')['XMLReader'],
    p_r20vz = exports['DOMImplementation'] = require('./ppDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ppDOM')['XMLSerializer'], exports['DOMParser'] = p_x_ul;