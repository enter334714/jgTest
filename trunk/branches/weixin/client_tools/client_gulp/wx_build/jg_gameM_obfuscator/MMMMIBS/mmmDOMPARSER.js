var Y = wx.$M;
function M_o_6gs4(c8e2a) {
  this['options'] = c8e2a || { 'locator': {} };
}function M_tce8(fd$bvw, hnij7, zc2e8) {
  function krfv19(m_j47h) {
    var dl0i$ = fd$bvw[m_j47h];!dl0i$ && kx1yu9 && (dl0i$ = 0x2 == fd$bvw['length'] ? function (jm7) {
      fd$bvw(m_j47h, jm7);
    } : fd$bvw), n0h5[m_j47h] = dl0i$ && function (d$50lb) {
      dl0i$('[xmldom ' + m_j47h + ']\t' + d$50lb + M_ld0b$(zc2e8));
    } || function () {};
  }if (!fd$bvw) {
    if (hnij7 instanceof M_m_h74) return hnij7;fd$bvw = hnij7;
  }var n0h5 = {},
      kx1yu9 = fd$bvw instanceof Function;return zc2e8 = zc2e8 || {}, krfv19('warning'), krfv19('error'), krfv19('fatalError'), n0h5;
}function M_m_h74() {
  this['cdata'] = !0x1;
}function M_dbw0$f(h_njm7, i5dl) {
  i5dl['lineNumber'] = h_njm7['lineNumber'], i5dl['columnNumber'] = h_njm7['columnNumber'];
}function M_ld0b$(wrfdvb) {
  return wrfdvb ? '\x0a@' + (wrfdvb['systemId'] || '') + '#[line:' + wrfdvb['lineNumber'] + ',col:' + wrfdvb['columnNumber'] + ']' : void 0x0;
}function M_rwdv(k91xvr, ca8ge2, b$wvd) {
  return 'string' == typeof k91xvr ? k91xvr['substr'](ca8ge2, b$wvd) : k91xvr['length'] >= ca8ge2 + b$wvd || ca8ge2 ? new java['lang']['String'](k91xvr, ca8ge2, b$wvd) + '' : k91xvr;
}function M_t8aec2(j7himn, $vfd) {
  j7himn['currentElement'] ? j7himn['currentElement']['appendChild']($vfd) : j7himn['doc']['appendChild']($vfd);
}M_o_6gs4['prototype']['parseFromString'] = function (v1wfr9, ztp2e8) {
  var mij7 = this['options'],
      v1frw = new M_c8a2e(),
      ku1q = mij7['domBuilder'] || new M_m_h74(),
      so47 = mij7['errorHandler'],
      $0wbf = mij7['locator'],
      m_s = mij7['xmlns'] || {},
      e8z2t = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return $0wbf && ku1q['setDocumentLocator']($0wbf), v1frw['errorHandler'] = M_tce8(so47, ku1q, $0wbf), v1frw['domBuilder'] = mij7['domBuilder'] || ku1q, /\/x?html?$/['test'](ztp2e8) && (e8z2t['nbsp'] = '\u00a0', e8z2t['copy'] = '©', m_s[''] = 'http://www.w3.org/1999/xhtml'), m_s['xml'] = m_s['xml'] || 'http://www.w3.org/XML/1998/namespace', v1wfr9 ? v1frw['parse'](v1wfr9, m_s, e8z2t) : v1frw['errorHandler']['error']('invalid doc source'), ku1q['doc'];
}, M_m_h74['prototype'] = { 'startDocument': function () {
    this['doc'] = new M_gaco86()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (qxy, $vdb, e8cz, a8ogc) {
    var uqyx = this['doc'],
        jm7nhi = uqyx['createElementNS'](qxy, e8cz || $vdb),
        os_476 = a8ogc['length'];M_t8aec2(this, jm7nhi), this['currentElement'] = jm7nhi, this['locator'] && M_dbw0$f(this['locator'], jm7nhi);for (var b9wvrf = 0x0; os_476 > b9wvrf; b9wvrf++) {
      var qxy = a8ogc['getURI'](b9wvrf),
          dl5$ = a8ogc['getValue'](b9wvrf),
          e8cz = a8ogc['getQName'](b9wvrf),
          _jmh4 = uqyx['createAttributeNS'](qxy, e8cz);this['locator'] && M_dbw0$f(a8ogc['getLocator'](b9wvrf), _jmh4), _jmh4['value'] = _jmh4['nodeValue'] = dl5$, jm7nhi['setAttributeNode'](_jmh4);
    }
  }, 'endElement': function () {
    {
      var g_46s = this['currentElement'];g_46s['tagName'];
    }this['currentElement'] = g_46s['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (g8acoe, xrk91u) {
    var _74js = this['doc']['createProcessingInstruction'](g8acoe, xrk91u);this['locator'] && M_dbw0$f(this['locator'], _74js), M_t8aec2(this, _74js);
  }, 'ignorableWhitespace': function () {}, 'characters': function (wv1f9r) {
    if (wv1f9r = M_rwdv['apply'](this, arguments)) {
      if (this['cdata']) var wd$bvf = this['doc']['createCDATASection'](wv1f9r);else var wd$bvf = this['doc']['createTextNode'](wv1f9r);this['currentElement'] ? this['currentElement']['appendChild'](wd$bvf) : /^\s*$/['test'](wv1f9r) && this['doc']['appendChild'](wd$bvf), this['locator'] && M_dbw0$f(this['locator'], wd$bvf);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (nijh7) {
    (this['locator'] = nijh7) && (nijh7['lineNumber'] = 0x0);
  }, 'comment': function ($blwd) {
    $blwd = M_rwdv['apply'](this, arguments);var ru19 = this['doc']['createComment']($blwd);this['locator'] && M_dbw0$f(this['locator'], ru19), M_t8aec2(this, ru19);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (oga6c8, i$5l0, kyx9u1) {
    var z2cet = this['doc']['implementation'];if (z2cet && z2cet['createDocumentType']) {
      var hm_7n = z2cet['createDocumentType'](oga6c8, i$5l0, kyx9u1);this['locator'] && M_dbw0$f(this['locator'], hm_7n), M_t8aec2(this, hm_7n);
    }
  }, 'warning': function (inlh) {
    console['warn']('[xmldom warning]\t' + inlh, M_ld0b$(this['locator']));
  }, 'error': function (_sj47) {
    console['error']('[xmldom error]\t' + _sj47, M_ld0b$(this['locator']));
  }, 'fatalError': function (lni0h) {
    throw console['error']('[xmldom fatalError]\t' + lni0h, M_ld0b$(this['locator'])), lni0h;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (e2ca8) {
  M_m_h74['prototype'][e2ca8] = function () {
    return null;
  };
});var M_c8a2e = require('./mmmSAX')['XMLReader'],
    M_gaco86 = exports['DOMImplementation'] = require('./mmmDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./mmmDOM')['XMLSerializer'], exports['DOMParser'] = M_o_6gs4;