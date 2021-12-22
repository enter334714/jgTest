var B = wx.$B;
function Bn967hs(xq$td) {
  this['options'] = xq$td || { 'locator': {} };
}function Bgpae(i2pega, epgus, ns7hu) {
  function us76hn(r8w3a) {
    var sk796h = i2pega[r8w3a];!sk796h && x$0ty_ && (sk796h = 0x2 == i2pega['length'] ? function (jrm15f) {
      i2pega(r8w3a, jrm15f);
    } : i2pega), s7upg[r8w3a] = sk796h && function (l4vbzy) {
      sk796h('[xmldom ' + r8w3a + ']\t' + l4vbzy + Bbvzl4y(ns7hu));
    } || function () {};
  }if (!i2pega) {
    if (epgus instanceof Bi328w) return epgus;i2pega = epgus;
  }var s7upg = {},
      x$0ty_ = i2pega instanceof Function;return ns7hu = ns7hu || {}, us76hn('warning'), us76hn('error'), us76hn('fatalError'), s7upg;
}function Bi328w() {
  this['cdata'] = !0x1;
}function Be2i3aw(geuin, ly$4v) {
  ly$4v['lineNumber'] = geuin['lineNumber'], ly$4v['columnNumber'] = geuin['columnNumber'];
}function Bbvzl4y($tx0_d) {
  return $tx0_d ? '\x0a@' + ($tx0_d['systemId'] || '') + '#[line:' + $tx0_d['lineNumber'] + ',col:' + $tx0_d['columnNumber'] + ']' : void 0x0;
}function Bvx$0(nu7gsh, r8f5j3, qxtd$) {
  return 'string' == typeof nu7gsh ? nu7gsh['substr'](r8f5j3, qxtd$) : nu7gsh['length'] >= r8f5j3 + qxtd$ || r8f5j3 ? new java['lang']['String'](nu7gsh, r8f5j3, qxtd$) + '' : nu7gsh;
}function Bgpusn7(pseugn, mj15r) {
  pseugn['currentElement'] ? pseugn['currentElement']['appendChild'](mj15r) : pseugn['doc']['appendChild'](mj15r);
}Bn967hs['prototype']['parseFromString'] = function (gns7, sepu) {
  var ks976h = this['options'],
      h967k = new Ba2iw38(),
      l9zk4 = ks976h['domBuilder'] || new Bi328w(),
      d$0xt = ks976h['errorHandler'],
      lyv0$t = ks976h['locator'],
      bl94k = ks976h['xmlns'] || {},
      v0yzl4 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return lyv0$t && l9zk4['setDocumentLocator'](lyv0$t), h967k['errorHandler'] = Bgpae(d$0xt, l9zk4, lyv0$t), h967k['domBuilder'] = ks976h['domBuilder'] || l9zk4, /\/x?html?$/['test'](sepu) && (v0yzl4['nbsp'] = '\u00a0', v0yzl4['copy'] = '©', bl94k[''] = 'http://www.w3.org/1999/xhtml'), bl94k['xml'] = bl94k['xml'] || 'http://www.w3.org/XML/1998/namespace', gns7 ? h967k['parse'](gns7, bl94k, v0yzl4) : h967k['errorHandler']['error']('invalid doc source'), l9zk4['doc'];
}, Bi328w['prototype'] = { 'startDocument': function () {
    this['doc'] = new Bhng7u()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (pgenui, y$0vt, ugi2e, apeig2) {
    var gp2i = this['doc'],
        lvkbz = gp2i['createElementNS'](pgenui, ugi2e || y$0vt),
        iwea2 = apeig2['length'];Bgpusn7(this, lvkbz), this['currentElement'] = lvkbz, this['locator'] && Be2i3aw(this['locator'], lvkbz);for (var eniug = 0x0; iwea2 > eniug; eniug++) {
      var pgenui = apeig2['getURI'](eniug),
          kz9h6b = apeig2['getValue'](eniug),
          ugi2e = apeig2['getQName'](eniug),
          agepi = gp2i['createAttributeNS'](pgenui, ugi2e);this['locator'] && Be2i3aw(apeig2['getLocator'](eniug), agepi), agepi['value'] = agepi['nodeValue'] = kz9h6b, lvkbz['setAttributeNode'](agepi);
    }
  }, 'endElement': function () {
    {
      var peiu2g = this['currentElement'];peiu2g['tagName'];
    }this['currentElement'] = peiu2g['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (x_$0dt, sugen) {
    var ns69 = this['doc']['createProcessingInstruction'](x_$0dt, sugen);this['locator'] && Be2i3aw(this['locator'], ns69), Bgpusn7(this, ns69);
  }, 'ignorableWhitespace': function () {}, 'characters': function (f81jr) {
    if (f81jr = Bvx$0['apply'](this, arguments)) {
      if (this['cdata']) var ipg2a = this['doc']['createCDATASection'](f81jr);else var ipg2a = this['doc']['createTextNode'](f81jr);this['currentElement'] ? this['currentElement']['appendChild'](ipg2a) : /^\s*$/['test'](f81jr) && this['doc']['appendChild'](ipg2a), this['locator'] && Be2i3aw(this['locator'], ipg2a);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (fw8r3a) {
    (this['locator'] = fw8r3a) && (fw8r3a['lineNumber'] = 0x0);
  }, 'comment': function (_txd0$) {
    _txd0$ = Bvx$0['apply'](this, arguments);var vy0l4$ = this['doc']['createComment'](_txd0$);this['locator'] && Be2i3aw(this['locator'], vy0l4$), Bgpusn7(this, vy0l4$);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (xq$_d, f3j8r5, eupn) {
    var kl9b4z = this['doc']['implementation'];if (kl9b4z && kl9b4z['createDocumentType']) {
      var h6u7n = kl9b4z['createDocumentType'](xq$_d, f3j8r5, eupn);this['locator'] && Be2i3aw(this['locator'], h6u7n), Bgpusn7(this, h6u7n);
    }
  }, 'warning': function (yl0$t) {
    console['warn']('[xmldom warning]\t' + yl0$t, Bbvzl4y(this['locator']));
  }, 'error': function (r185f) {
    console['error']('[xmldom error]\t' + r185f, Bbvzl4y(this['locator']));
  }, 'fatalError': function (t_yx0) {
    throw console['error']('[xmldom fatalError]\t' + t_yx0, Bbvzl4y(this['locator'])), t_yx0;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (y$_xt0) {
  Bi328w['prototype'][y$_xt0] = function () {
    return null;
  };
});var Ba2iw38 = require('./T5T5cT5T5')['XMLReader'],
    Bhng7u = exports['DOMImplementation'] = require('./T5T5DOT5T5')['DOMImplementation'];exports['XMLSerializer'] = require('./T5T5DOT5T5')['XMLSerializer'], exports['DOMParser'] = Bn967hs;