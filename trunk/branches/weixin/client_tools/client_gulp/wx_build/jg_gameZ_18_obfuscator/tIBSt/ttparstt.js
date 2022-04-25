var v = wx.$d;
function zv06apm(_f7195) {
  this['options'] = _f7195 || { 'locator': {} };
}function zc28dq(o2q8cw, q8cod2, nma0p) {
  function ni0beg(rtk1yz) {
    var f$9x_ = o2q8cw[rtk1yz];!f$9x_ && dc && (f$9x_ = 0x2 == o2q8cw['length'] ? function (vx6mpj) {
      o2q8cw(rtk1yz, vx6mpj);
    } : o2q8cw), npa06[rtk1yz] = f$9x_ && function (gbaen0) {
      f$9x_('[xmldom ' + rtk1yz + ']\t' + gbaen0 + zf75_z1(nma0p));
    } || function () {};
  }if (!o2q8cw) {
    if (q8cod2 instanceof zurly) return q8cod2;o2q8cw = q8cod2;
  }var npa06 = {},
      dc = o2q8cw instanceof Function;return nma0p = nma0p || {}, ni0beg('warning'), ni0beg('error'), ni0beg('fatalError'), npa06;
}function zurly() {
  this['cdata'] = !0x1;
}function zjx6$v(mbna0, ge0nb) {
  ge0nb['lineNumber'] = mbna0['lineNumber'], ge0nb['columnNumber'] = mbna0['columnNumber'];
}function zf75_z1(j9v7$) {
  return j9v7$ ? '\x0a@' + (j9v7$['systemId'] || '') + '#[line:' + j9v7$['lineNumber'] + ',col:' + j9v7$['columnNumber'] + ']' : void 0x0;
}function z$xjv79(x9j7$, coq82w, $xvmj) {
  return 'string' == typeof x9j7$ ? x9j7$['substr'](coq82w, $xvmj) : x9j7$['length'] >= coq82w + $xvmj || coq82w ? new java['lang']['String'](x9j7$, coq82w, $xvmj) + '' : x9j7$;
}function zr5tz1f(l3hu, jv6am) {
  l3hu['currentElement'] ? l3hu['currentElement']['appendChild'](jv6am) : l3hu['doc']['appendChild'](jv6am);
}zv06apm['prototype']['parseFromString'] = function (ld4h8, d48c23) {
  var ytuzkr = this['options'],
      hylt = new zf97_$(),
      j9$xv = ytuzkr['domBuilder'] || new zurly(),
      zyrku = ytuzkr['errorHandler'],
      lyku3h = ytuzkr['locator'],
      m$6jvx = ytuzkr['xmlns'] || {},
      hk3yl = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return lyku3h && j9$xv['setDocumentLocator'](lyku3h), hylt['errorHandler'] = zc28dq(zyrku, j9$xv, lyku3h), hylt['domBuilder'] = ytuzkr['domBuilder'] || j9$xv, /\/x?html?$/['test'](d48c23) && (hk3yl['nbsp'] = '\u00a0', hk3yl['copy'] = '©', m$6jvx[''] = 'http://www.w3.org/1999/xhtml'), m$6jvx['xml'] = m$6jvx['xml'] || 'http://www.w3.org/XML/1998/namespace', ld4h8 ? hylt['parse'](ld4h8, m$6jvx, hk3yl) : hylt['errorHandler']['error']('invalid doc source'), j9$xv['doc'];
}, zurly['prototype'] = { 'startDocument': function () {
    this['doc'] = new zz71()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (a6pnm0, v9xj6$, co28dq, jxv6m) {
    var xvjm$6 = this['doc'],
        cq482 = xvjm$6['createElementNS'](a6pnm0, co28dq || v9xj6$),
        d28c = jxv6m['length'];zr5tz1f(this, cq482), this['currentElement'] = cq482, this['locator'] && zjx6$v(this['locator'], cq482);for (var t5f1z = 0x0; d28c > t5f1z; t5f1z++) {
      var a6pnm0 = jxv6m['getURI'](t5f1z),
          z5ty1 = jxv6m['getValue'](t5f1z),
          co28dq = jxv6m['getQName'](t5f1z),
          m6jvx = xvjm$6['createAttributeNS'](a6pnm0, co28dq);this['locator'] && zjx6$v(jxv6m['getLocator'](t5f1z), m6jvx), m6jvx['value'] = m6jvx['nodeValue'] = z5ty1, cq482['setAttributeNode'](m6jvx);
    }
  }, 'endElement': function () {
    {
      var krlyu = this['currentElement'];krlyu['tagName'];
    }this['currentElement'] = krlyu['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (c8owq, cdq8o) {
    var zktyur = this['doc']['createProcessingInstruction'](c8owq, cdq8o);this['locator'] && zjx6$v(this['locator'], zktyur), zr5tz1f(this, zktyur);
  }, 'ignorableWhitespace': function () {}, 'characters': function (egab0n) {
    if (egab0n = z$xjv79['apply'](this, arguments)) {
      if (this['cdata']) var ukztr = this['doc']['createCDATASection'](egab0n);else var ukztr = this['doc']['createTextNode'](egab0n);this['currentElement'] ? this['currentElement']['appendChild'](ukztr) : /^\s*$/['test'](egab0n) && this['doc']['appendChild'](ukztr), this['locator'] && zjx6$v(this['locator'], ukztr);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (hudl3) {
    (this['locator'] = hudl3) && (hudl3['lineNumber'] = 0x0);
  }, 'comment': function (o2wc8q) {
    o2wc8q = z$xjv79['apply'](this, arguments);var t1kryz = this['doc']['createComment'](o2wc8q);this['locator'] && zjx6$v(this['locator'], t1kryz), zr5tz1f(this, t1kryz);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (h4u, ukrlty, jx$97) {
    var d48c2 = this['doc']['implementation'];if (d48c2 && d48c2['createDocumentType']) {
      var y3hukl = d48c2['createDocumentType'](h4u, ukrlty, jx$97);this['locator'] && zjx6$v(this['locator'], y3hukl), zr5tz1f(this, y3hukl);
    }
  }, 'warning': function (v6jpm) {
    console['warn']('[xmldom warning]\t' + v6jpm, zf75_z1(this['locator']));
  }, 'error': function (xpm6jv) {
    console['error']('[xmldom error]\t' + xpm6jv, zf75_z1(this['locator']));
  }, 'fatalError': function (pmanb0) {
    throw console['error']('[xmldom fatalError]\t' + pmanb0, zf75_z1(this['locator'])), pmanb0;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function ($jx_) {
  zurly['prototype'][$jx_] = function () {
    return null;
  };
});var zf97_$ = require('./tT12tt')['XMLReader'],
    zz71 = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = zv06apm;