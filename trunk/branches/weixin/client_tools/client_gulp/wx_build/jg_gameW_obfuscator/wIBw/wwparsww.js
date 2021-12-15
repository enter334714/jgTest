var s = wx.$W;
function wdxak(jfeo) {
  this['options'] = jfeo || { 'locator': {} };
}function wavl(kxgdrb, xvary, pqms64) {
  function ravy$(c5t8g) {
    var la9v$_ = kxgdrb[c5t8g];!la9v$_ && sqo46m && (la9v$_ = 0x2 == kxgdrb['length'] ? function (m6h) {
      kxgdrb(c5t8g, m6h);
    } : kxgdrb), wfznej[c5t8g] = la9v$_ && function (th08u5) {
      la9v$_('[xmldom ' + c5t8g + ']\t' + th08u5 + wnqsm(pqms64));
    } || function () {};
  }if (!kxgdrb) {
    if (xvary instanceof wp4sm6q) return xvary;kxgdrb = xvary;
  }var wfznej = {},
      sqo46m = kxgdrb instanceof Function;return pqms64 = pqms64 || {}, ravy$('warning'), ravy$('error'), ravy$('fatalError'), wfznej;
}function wp4sm6q() {
  this['cdata'] = !0x1;
}function wyv$rx(bdykx, q4om6s) {
  q4om6s['lineNumber'] = bdykx['lineNumber'], q4om6s['columnNumber'] = bdykx['columnNumber'];
}function wnqsm(ydrxak) {
  return ydrxak ? '\x0a@' + (ydrxak['systemId'] || '') + '#[line:' + ydrxak['lineNumber'] + ',col:' + ydrxak['columnNumber'] + ']' : void 0x0;
}function wj3fz1e(osmn, xkyd, p08t) {
  return 'string' == typeof osmn ? osmn['substr'](xkyd, p08t) : osmn['length'] >= xkyd + p08t || xkyd ? new java['lang']['String'](osmn, xkyd, p08t) + '' : osmn;
}function wsoq6m4(yd, jef3z) {
  yd['currentElement'] ? yd['currentElement']['appendChild'](jef3z) : yd['doc']['appendChild'](jef3z);
}wdxak['prototype']['parseFromString'] = function (gkcr, owqnms) {
  var mwsnqo = this['options'],
      l$_9v = new wt8pu0(),
      vla$9_ = mwsnqo['domBuilder'] || new wp4sm6q(),
      nfwjso = mwsnqo['errorHandler'],
      xyadk = mwsnqo['locator'],
      som64q = mwsnqo['xmlns'] || {},
      zf1w = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return xyadk && vla$9_['setDocumentLocator'](xyadk), l$_9v['errorHandler'] = wavl(nfwjso, vla$9_, xyadk), l$_9v['domBuilder'] = mwsnqo['domBuilder'] || vla$9_, /\/x?html?$/['test'](owqnms) && (zf1w['nbsp'] = '\u00a0', zf1w['copy'] = '©', som64q[''] = 'http://www.w3.org/1999/xhtml'), som64q['xml'] = som64q['xml'] || 'http://www.w3.org/XML/1998/namespace', gkcr ? l$_9v['parse'](gkcr, som64q, zf1w) : l$_9v['errorHandler']['error']('invalid doc source'), vla$9_['doc'];
}, wp4sm6q['prototype'] = { 'startDocument': function () {
    this['doc'] = new ward$x()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (y9l$va, lva9$, r$yx, yar$xv) {
    var jmwons = this['doc'],
        $ly9a = jmwons['createElementNS'](y9l$va, r$yx || lva9$),
        z3j1f = yar$xv['length'];wsoq6m4(this, $ly9a), this['currentElement'] = $ly9a, this['locator'] && wyv$rx(this['locator'], $ly9a);for (var h0ut8 = 0x0; z3j1f > h0ut8; h0ut8++) {
      var y9l$va = yar$xv['getURI'](h0ut8),
          rvyx$ = yar$xv['getValue'](h0ut8),
          r$yx = yar$xv['getQName'](h0ut8),
          wje1zf = jmwons['createAttributeNS'](y9l$va, r$yx);this['locator'] && wyv$rx(yar$xv['getLocator'](h0ut8), wje1zf), wje1zf['value'] = wje1zf['nodeValue'] = rvyx$, $ly9a['setAttributeNode'](wje1zf);
    }
  }, 'endElement': function () {
    {
      var akyrdx = this['currentElement'];akyrdx['tagName'];
    }this['currentElement'] = akyrdx['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function ($_lv9, d$xy) {
    var mwnqso = this['doc']['createProcessingInstruction']($_lv9, d$xy);this['locator'] && wyv$rx(this['locator'], mwnqso), wsoq6m4(this, mwnqso);
  }, 'ignorableWhitespace': function () {}, 'characters': function (omsq6) {
    if (omsq6 = wj3fz1e['apply'](this, arguments)) {
      if (this['cdata']) var z173i = this['doc']['createCDATASection'](omsq6);else var z173i = this['doc']['createTextNode'](omsq6);this['currentElement'] ? this['currentElement']['appendChild'](z173i) : /^\s*$/['test'](omsq6) && this['doc']['appendChild'](z173i), this['locator'] && wyv$rx(this['locator'], z173i);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (osm4n) {
    (this['locator'] = osm4n) && (osm4n['lineNumber'] = 0x0);
  }, 'comment': function (rbkdg) {
    rbkdg = wj3fz1e['apply'](this, arguments);var a$yvl9 = this['doc']['createComment'](rbkdg);this['locator'] && wyv$rx(this['locator'], a$yvl9), wsoq6m4(this, a$yvl9);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (g0cb85, jwos, hp08tu) {
    var e1f3zj = this['doc']['implementation'];if (e1f3zj && e1f3zj['createDocumentType']) {
      var efnwoj = e1f3zj['createDocumentType'](g0cb85, jwos, hp08tu);this['locator'] && wyv$rx(this['locator'], efnwoj), wsoq6m4(this, efnwoj);
    }
  }, 'warning': function (rx) {
    console['warn']('[xmldom warning]\t' + rx, wnqsm(this['locator']));
  }, 'error': function (y$9a) {
    console['error']('[xmldom error]\t' + y$9a, wnqsm(this['locator']));
  }, 'fatalError': function (msqnwo) {
    throw console['error']('[xmldom fatalError]\t' + msqnwo, wnqsm(this['locator'])), msqnwo;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (nmwqos) {
  wp4sm6q['prototype'][nmwqos] = function () {
    return null;
  };
});var wt8pu0 = require('./wwqww')['XMLReader'],
    ward$x = exports['DOMImplementation'] = require('./wwDOww')['DOMImplementation'];exports['XMLSerializer'] = require('./wwDOww')['XMLSerializer'], exports['DOMParser'] = wdxak;