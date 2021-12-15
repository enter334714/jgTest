var E = wx.$p;
function p_dbgq(agdqc) {
  this['options'] = agdqc || { 'locator': {} };
}function p_mouf(lpuxt4, v7$y, xlpt) {
  function ufpxtl(ksijyh) {
    var cgbaq = lpuxt4[ksijyh];!cgbaq && umftx && (cgbaq = 0x2 == lpuxt4['length'] ? function (j1i) {
      lpuxt4(ksijyh, j1i);
    } : lpuxt4), fmtx_u[ksijyh] = cgbaq && function (eq8n5) {
      cgbaq('[xmldom ' + ksijyh + ']\t' + eq8n5 + p_fpxtul(xlpt));
    } || function () {};
  }if (!lpuxt4) {
    if (v7$y instanceof p_mu_f) return v7$y;lpuxt4 = v7$y;
  }var fmtx_u = {},
      umftx = lpuxt4 instanceof Function;return xlpt = xlpt || {}, ufpxtl('warning'), ufpxtl('error'), ufpxtl('fatalError'), fmtx_u;
}function p_mu_f() {
  this['cdata'] = !0x1;
}function p_tpl4sx(ysjih, j6yi) {
  j6yi['lineNumber'] = ysjih['lineNumber'], j6yi['columnNumber'] = ysjih['columnNumber'];
}function p_fpxtul(iy1j6) {
  return iy1j6 ? '\x0a@' + (iy1j6['systemId'] || '') + '#[line:' + iy1j6['lineNumber'] + ',col:' + iy1j6['columnNumber'] + ']' : void 0x0;
}function p_n053w(zr372, xpl4ut, dgqb) {
  return 'string' == typeof zr372 ? zr372['substr'](xpl4ut, dgqb) : zr372['length'] >= xpl4ut + dgqb || xpl4ut ? new java['lang']['String'](zr372, xpl4ut, dgqb) + '' : zr372;
}function p_badqc(wn589e, e58w9n) {
  wn589e['currentElement'] ? wn589e['currentElement']['appendChild'](e58w9n) : wn589e['doc']['appendChild'](e58w9n);
}p_dbgq['prototype']['parseFromString'] = function (wne539, nw98e) {
  var tl4xsp = this['options'],
      y$v67 = new p_isyh(),
      nz50w = tl4xsp['domBuilder'] || new p_mu_f(),
      f_umox = tl4xsp['errorHandler'],
      k4psj = tl4xsp['locator'],
      ishj = tl4xsp['xmlns'] || {},
      r320w = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return k4psj && nz50w['setDocumentLocator'](k4psj), y$v67['errorHandler'] = p_mouf(f_umox, nz50w, k4psj), y$v67['domBuilder'] = tl4xsp['domBuilder'] || nz50w, /\/x?html?$/['test'](nw98e) && (r320w['nbsp'] = '\u00a0', r320w['copy'] = '©', ishj[''] = 'http://www.w3.org/1999/xhtml'), ishj['xml'] = ishj['xml'] || 'http://www.w3.org/XML/1998/namespace', wne539 ? y$v67['parse'](wne539, ishj, r320w) : y$v67['errorHandler']['error']('invalid doc source'), nz50w['doc'];
}, p_mu_f['prototype'] = { 'startDocument': function () {
    this['doc'] = new p_gaqd()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (x_l, qgdca, rw032z, enw359) {
    var m_ufox = this['doc'],
        cqa = m_ufox['createElementNS'](x_l, rw032z || qgdca),
        g9b8aq = enw359['length'];p_badqc(this, cqa), this['currentElement'] = cqa, this['locator'] && p_tpl4sx(this['locator'], cqa);for (var fumox_ = 0x0; g9b8aq > fumox_; fumox_++) {
      var x_l = enw359['getURI'](fumox_),
          _ofum = enw359['getValue'](fumox_),
          rw032z = enw359['getQName'](fumox_),
          r207v1 = m_ufox['createAttributeNS'](x_l, rw032z);this['locator'] && p_tpl4sx(enw359['getLocator'](fumox_), r207v1), r207v1['value'] = r207v1['nodeValue'] = _ofum, cqa['setAttributeNode'](r207v1);
    }
  }, 'endElement': function () {
    {
      var gc8a = this['currentElement'];gc8a['tagName'];
    }this['currentElement'] = gc8a['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (tf_umx, lptx4s) {
    var agq98 = this['doc']['createProcessingInstruction'](tf_umx, lptx4s);this['locator'] && p_tpl4sx(this['locator'], agq98), p_badqc(this, agq98);
  }, 'ignorableWhitespace': function () {}, 'characters': function (s4hpkj) {
    if (s4hpkj = p_n053w['apply'](this, arguments)) {
      if (this['cdata']) var jhs = this['doc']['createCDATASection'](s4hpkj);else var jhs = this['doc']['createTextNode'](s4hpkj);this['currentElement'] ? this['currentElement']['appendChild'](jhs) : /^\s*$/['test'](s4hpkj) && this['doc']['appendChild'](jhs), this['locator'] && p_tpl4sx(this['locator'], jhs);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (q9gb8a) {
    (this['locator'] = q9gb8a) && (q9gb8a['lineNumber'] = 0x0);
  }, 'comment': function (plshk4) {
    plshk4 = p_n053w['apply'](this, arguments);var fplt = this['doc']['createComment'](plshk4);this['locator'] && p_tpl4sx(this['locator'], fplt), p_badqc(this, fplt);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (p4xlu, sk4i, badqgc) {
    var tl4h = this['doc']['implementation'];if (tl4h && tl4h['createDocumentType']) {
      var s4lphk = tl4h['createDocumentType'](p4xlu, sk4i, badqgc);this['locator'] && p_tpl4sx(this['locator'], s4lphk), p_badqc(this, s4lphk);
    }
  }, 'warning': function (dabqc) {
    console['warn']('[xmldom warning]\t' + dabqc, p_fpxtul(this['locator']));
  }, 'error': function (vr$76) {
    console['error']('[xmldom error]\t' + vr$76, p_fpxtul(this['locator']));
  }, 'fatalError': function (j$yi61) {
    throw console['error']('[xmldom fatalError]\t' + j$yi61, p_fpxtul(this['locator'])), j$yi61;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (kyj$i6) {
  p_mu_f['prototype'][kyj$i6] = function () {
    return null;
  };
});var p_isyh = require('./pSAXp')['XMLReader'],
    p_gaqd = exports['DOMImplementation'] = require('./ppDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ppDOM')['XMLSerializer'], exports['DOMParser'] = p_dbgq;