var K = wx.$S;
function seuad$(ckz9w0) {
  this['options'] = ckz9w0 || { 'locator': {} };
}function spq81j(ph5dy, j1g, ahd4$5) {
  function n_xim($ue43r) {
    var t2xmni = ph5dy[$ue43r];!t2xmni && cwz9k && (t2xmni = 0x2 == ph5dy['length'] ? function (aeud4$) {
      ph5dy($ue43r, aeud4$);
    } : ph5dy), xmn2t7[$ue43r] = t2xmni && function (wvkz0) {
      t2xmni('[xmldom ' + $ue43r + ']\t' + wvkz0 + swzo9v(ahd4$5));
    } || function () {};
  }if (!ph5dy) {
    if (j1g instanceof sc0zkw) return j1g;ph5dy = j1g;
  }var xmn2t7 = {},
      cwz9k = ph5dy instanceof Function;return ahd4$5 = ahd4$5 || {}, n_xim('warning'), n_xim('error'), n_xim('fatalError'), xmn2t7;
}function sc0zkw() {
  this['cdata'] = !0x1;
}function syq5(ad4$u, hqpsgy) {
  hqpsgy['lineNumber'] = ad4$u['lineNumber'], hqpsgy['columnNumber'] = ad4$u['columnNumber'];
}function swzo9v(oz3k9v) {
  return oz3k9v ? '\x0a@' + (oz3k9v['systemId'] || '') + '#[line:' + oz3k9v['lineNumber'] + ',col:' + oz3k9v['columnNumber'] + ']' : void 0x0;
}function seau$4d(w_xi, fl1b8, owk9z) {
  return 'string' == typeof w_xi ? w_xi['substr'](fl1b8, owk9z) : w_xi['length'] >= fl1b8 + owk9z || fl1b8 ? new java['lang']['String'](w_xi, fl1b8, owk9z) + '' : w_xi;
}function sh5d$ya(m7n, ou3evr) {
  m7n['currentElement'] ? m7n['currentElement']['appendChild'](ou3evr) : m7n['doc']['appendChild'](ou3evr);
}seuad$['prototype']['parseFromString'] = function (vz9ok3, oue34) {
  var xi_0mc = this['options'],
      _2mixn = new s$u43r(),
      cz = xi_0mc['domBuilder'] || new sc0zkw(),
      hdy5$a = xi_0mc['errorHandler'],
      z0ck = xi_0mc['locator'],
      w0kzc = xi_0mc['xmlns'] || {},
      n72mxt = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return z0ck && cz['setDocumentLocator'](z0ck), _2mixn['errorHandler'] = spq81j(hdy5$a, cz, z0ck), _2mixn['domBuilder'] = xi_0mc['domBuilder'] || cz, /\/x?html?$/['test'](oue34) && (n72mxt['nbsp'] = '\u00a0', n72mxt['copy'] = '©', w0kzc[''] = 'http://www.w3.org/1999/xhtml'), w0kzc['xml'] = w0kzc['xml'] || 'http://www.w3.org/XML/1998/namespace', vz9ok3 ? _2mixn['parse'](vz9ok3, w0kzc, n72mxt) : _2mixn['errorHandler']['error']('invalid doc source'), cz['doc'];
}, sc0zkw['prototype'] = { 'startDocument': function () {
    this['doc'] = new sc_i09w()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (i_cx0w, nit2mx, $ae4d5, n2xmit) {
    var hpd5sy = this['doc'],
        $5dhya = hpd5sy['createElementNS'](i_cx0w, $ae4d5 || nit2mx),
        d$ayh = n2xmit['length'];sh5d$ya(this, $5dhya), this['currentElement'] = $5dhya, this['locator'] && syq5(this['locator'], $5dhya);for (var u$ra = 0x0; d$ayh > u$ra; u$ra++) {
      var i_cx0w = n2xmit['getURI'](u$ra),
          eo4u = n2xmit['getValue'](u$ra),
          $ae4d5 = n2xmit['getQName'](u$ra),
          rkz3o = hpd5sy['createAttributeNS'](i_cx0w, $ae4d5);this['locator'] && syq5(n2xmit['getLocator'](u$ra), rkz3o), rkz3o['value'] = rkz3o['nodeValue'] = eo4u, $5dhya['setAttributeNode'](rkz3o);
    }
  }, 'endElement': function () {
    {
      var t2mx7n = this['currentElement'];t2mx7n['tagName'];
    }this['currentElement'] = t2mx7n['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (nmtx2i, ur3) {
    var i2m_c = this['doc']['createProcessingInstruction'](nmtx2i, ur3);this['locator'] && syq5(this['locator'], i2m_c), sh5d$ya(this, i2m_c);
  }, 'ignorableWhitespace': function () {}, 'characters': function (euad4$) {
    if (euad4$ = seau$4d['apply'](this, arguments)) {
      if (this['cdata']) var dphys = this['doc']['createCDATASection'](euad4$);else var dphys = this['doc']['createTextNode'](euad4$);this['currentElement'] ? this['currentElement']['appendChild'](dphys) : /^\s*$/['test'](euad4$) && this['doc']['appendChild'](dphys), this['locator'] && syq5(this['locator'], dphys);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (e4d$a) {
    (this['locator'] = e4d$a) && (e4d$a['lineNumber'] = 0x0);
  }, 'comment': function (z0wc) {
    z0wc = seau$4d['apply'](this, arguments);var _c0ix = this['doc']['createComment'](z0wc);this['locator'] && syq5(this['locator'], _c0ix), sh5d$ya(this, _c0ix);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (nxit2m, uz3vo, _xwi0c) {
    var bgq8j1 = this['doc']['implementation'];if (bgq8j1 && bgq8j1['createDocumentType']) {
      var x2mn7 = bgq8j1['createDocumentType'](nxit2m, uz3vo, _xwi0c);this['locator'] && syq5(this['locator'], x2mn7), sh5d$ya(this, x2mn7);
    }
  }, 'warning': function (cx2m) {
    console['warn']('[xmldom warning]\t' + cx2m, swzo9v(this['locator']));
  }, 'error': function (xmc0i_) {
    console['error']('[xmldom error]\t' + xmc0i_, swzo9v(this['locator']));
  }, 'fatalError': function (kc0_w) {
    throw console['error']('[xmldom fatalError]\t' + kc0_w, swzo9v(this['locator'])), kc0_w;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ueovr) {
  sc0zkw['prototype'][ueovr] = function () {
    return null;
  };
});var s$u43r = require('./sS12ss')['XMLReader'],
    sc_i09w = exports['DOMImplementation'] = require('./ssDOss')['DOMImplementation'];exports['XMLSerializer'] = require('./ssDOss')['XMLSerializer'], exports['DOMParser'] = seuad$;