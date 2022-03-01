var B = wx.$z;
function zbk8ry_(u_2w5r) {
  this['options'] = u_2w5r || { 'locator': {} };
}function zvnli7f(hfg, lfv6, exz9s) {
  function obdtk(phf6g4) {
    var hpf64 = hfg[phf6g4];!hpf64 && bokdy && (hpf64 = 0x2 == hfg['length'] ? function (g1h6) {
      hfg(phf6g4, g1h6);
    } : hfg), kb_r85[phf6g4] = hpf64 ? function (_8bryk) {
      hpf64('[xmldom ' + phf6g4 + ']\t' + _8bryk + zg1h9px(exz9s));
    } : function () {};
  }if (!hfg) {
    if (lfv6 instanceof zzdyotk) return lfv6;hfg = lfv6;
  }var kb_r85 = {},
      bokdy = hfg instanceof Function;return exz9s = exz9s || {}, obdtk('warning'), obdtk('error'), obdtk('fatalError'), kb_r85;
}function zzdyotk() {
  this['cdata'] = !0x1;
}function zf6ln7v(y8krbd, u2_50w) {
  u2_50w['lineNumber'] = y8krbd['lineNumber'], u2_50w['columnNumber'] = y8krbd['columnNumber'];
}function zg1h9px(qm7i$) {
  return qm7i$ ? '\x0a@' + (qm7i$['systemId'] || '') + '#[line:' + qm7i$['lineNumber'] + ',col:' + qm7i$['columnNumber'] + ']' : void 0x0;
}function zpfg6h(zkdto, esxt, _w02u5) {
  return 'string' == typeof zkdto ? zkdto['substr'](esxt, _w02u5) : zkdto['length'] >= esxt + _w02u5 || esxt ? new java['lang']['String'](zkdto, esxt, _w02u5) + '' : zkdto;
}function zxghp9(doztyk, q73nmi) {
  (doztyk['currentElement'] || doztyk['doc'])['appendChild'](q73nmi);
}zbk8ry_['prototype']['parseFromString'] = function (okzy, h1p4) {
  var m3q$i7 = this['options'],
      gf4p = new zotdzk(),
      br25_ = m3q$i7['domBuilder'] || new zzdyotk(),
      dbyotk = m3q$i7['errorHandler'],
      oetzy = m3q$i7['locator'],
      v76lfn = m3q$i7['xmlns'] || {},
      gp1xh = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return oetzy && br25_['setDocumentLocator'](oetzy), gf4p['errorHandler'] = zvnli7f(dbyotk, br25_, oetzy), gf4p['domBuilder'] = m3q$i7['domBuilder'] || br25_, /\/x?html?$/['test'](h1p4) && (gp1xh['nbsp'] = '\u00a0', gp1xh['copy'] = '©', v76lfn[''] = 'http://www.w3.org/1999/xhtml'), v76lfn['xml'] = v76lfn['xml'] || 'http://www.w3.org/XML/1998/namespace', okzy ? gf4p['parse'](okzy, v76lfn, gp1xh) : gf4p['errorHandler']['error']('invalid doc source'), br25_['doc'];
}, zzdyotk['prototype'] = { 'startDocument': function () {
    this['doc'] = new zp46gfv()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (zyeo, p6g4h1, qm7$i, esa9x1) {
    var fl64g = this['doc'],
        mn3l7i = fl64g['createElementNS'](zyeo, qm7$i || p6g4h1),
        $3mj = esa9x1['length'];zxghp9(this, mn3l7i), this['currentElement'] = mn3l7i, this['locator'] && zf6ln7v(this['locator'], mn3l7i);for (var dkbot = 0x0; dkbot < $3mj; dkbot++) {
      var zyeo = esa9x1['getURI'](dkbot),
          pg91xh = esa9x1['getValue'](dkbot),
          qm7$i = esa9x1['getQName'](dkbot),
          _8rkby = fl64g['createAttributeNS'](zyeo, qm7$i);this['locator'] && zf6ln7v(esa9x1['getLocator'](dkbot), _8rkby), _8rkby['value'] = _8rkby['nodeValue'] = pg91xh, mn3l7i['setAttributeNode'](_8rkby);
    }
  }, 'endElement': function () {
    var hp491g = this['currentElement'];hp491g['tagName'], this['currentElement'] = hp491g['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (aex9sz, xsp1h) {
    aex9sz = this['doc']['createProcessingInstruction'](aex9sz, xsp1h), (this['locator'] && zf6ln7v(this['locator'], aex9sz), zxghp9(this, aex9sz));
  }, 'ignorableWhitespace': function () {}, 'characters': function (f6v4nl) {
    var r2u58;(f6v4nl = zpfg6h['apply'](this, arguments)) && (r2u58 = this['cdata'] ? this['doc']['createCDATASection'](f6v4nl) : this['doc']['createTextNode'](f6v4nl), this['currentElement'] ? this['currentElement']['appendChild'](r2u58) : /^\s*$/['test'](f6v4nl) && this['doc']['appendChild'](r2u58), this['locator'] && zf6ln7v(this['locator'], r2u58));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (xp9s1) {
    (this['locator'] = xp9s1) && (xp9s1['lineNumber'] = 0x0);
  }, 'comment': function (q$7im3) {
    q$7im3 = zpfg6h['apply'](this, arguments);var ydkr8b = this['doc']['createComment'](q$7im3);this['locator'] && zf6ln7v(this['locator'], ydkr8b), zxghp9(this, ydkr8b);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (k8rdby, toby, rkb8_5) {
    var r_k85b = this['doc']['implementation'];r_k85b && r_k85b['createDocumentType'] && (r_k85b = r_k85b['createDocumentType'](k8rdby, toby, rkb8_5), this['locator'] && zf6ln7v(this['locator'], r_k85b), zxghp9(this, r_k85b));
  }, 'warning': function (ktyzdo) {
    console['warn']('[xmldom warning]\t' + ktyzdo, zg1h9px(this['locator']));
  }, 'error': function (uw2_r) {
    console['error']('[xmldom error]\t' + uw2_r, zg1h9px(this['locator']));
  }, 'fatalError': function (tao) {
    throw console['error']('[xmldom fatalError]\t' + tao, zg1h9px(this['locator'])), tao;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (h4pg) {
  zzdyotk['prototype'][h4pg] = function () {
    return null;
  };
});var zotdzk = require('./zzczz')['XMLReader'],
    zp46gfv = exports['DOMImplementation'] = require('./zzDOzz')['DOMImplementation'];exports['XMLSerializer'] = require('./zzDOzz')['XMLSerializer'], exports['DOMParser'] = zbk8ry_;