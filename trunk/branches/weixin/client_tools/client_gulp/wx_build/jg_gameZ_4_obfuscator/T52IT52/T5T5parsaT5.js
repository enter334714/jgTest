var B = wx.$B;
function Bk6b4z9(w8a32f) {
  this['options'] = w8a32f || { 'locator': {} };
}function Buspgn7(yt$l0, b9k7h6, y0$xt_) {
  function w823ia(v40yz) {
    var qd$tx = yt$l0[v40yz];!qd$tx && h69zbk && (qd$tx = 0x2 == yt$l0['length'] ? function (un67sh) {
      yt$l0(v40yz, un67sh);
    } : yt$l0), j3r85[v40yz] = qd$tx && function (iepga2) {
      qd$tx('[xmldom ' + v40yz + ']\t' + iepga2 + Buei(y0$xt_));
    } || function () {};
  }if (!yt$l0) {
    if (b9k7h6 instanceof Bzkbl49) return b9k7h6;yt$l0 = b9k7h6;
  }var j3r85 = {},
      h69zbk = yt$l0 instanceof Function;return y0$xt_ = y0$xt_ || {}, w823ia('warning'), w823ia('error'), w823ia('fatalError'), j3r85;
}function Bzkbl49() {
  this['cdata'] = !0x1;
}function Bzbk4lv(d_qx, gnsuh7) {
  gnsuh7['lineNumber'] = d_qx['lineNumber'], gnsuh7['columnNumber'] = d_qx['columnNumber'];
}function Buei(a83iw) {
  return a83iw ? '\x0a@' + (a83iw['systemId'] || '') + '#[line:' + a83iw['lineNumber'] + ',col:' + a83iw['columnNumber'] + ']' : void 0x0;
}function Bf5w3r(nuhg, aeip2g, td_0x) {
  return 'string' == typeof nuhg ? nuhg['substr'](aeip2g, td_0x) : nuhg['length'] >= aeip2g + td_0x || aeip2g ? new java['lang']['String'](nuhg, aeip2g, td_0x) + '' : nuhg;
}function Be23aw(jr5fm1, ig2ea) {
  jr5fm1['currentElement'] ? jr5fm1['currentElement']['appendChild'](ig2ea) : jr5fm1['doc']['appendChild'](ig2ea);
}Bk6b4z9['prototype']['parseFromString'] = function (xqdt$, u6hs7) {
  var mj15ro = this['options'],
      n6sh79 = new Bei2a3w(),
      tdxq$ = mj15ro['domBuilder'] || new Bzkbl49(),
      l49k = mj15ro['errorHandler'],
      ipag = mj15ro['locator'],
      war38f = mj15ro['xmlns'] || {},
      yt0$lv = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ipag && tdxq$['setDocumentLocator'](ipag), n6sh79['errorHandler'] = Buspgn7(l49k, tdxq$, ipag), n6sh79['domBuilder'] = mj15ro['domBuilder'] || tdxq$, /\/x?html?$/['test'](u6hs7) && (yt0$lv['nbsp'] = '\u00a0', yt0$lv['copy'] = '©', war38f[''] = 'http://www.w3.org/1999/xhtml'), war38f['xml'] = war38f['xml'] || 'http://www.w3.org/XML/1998/namespace', xqdt$ ? n6sh79['parse'](xqdt$, war38f, yt0$lv) : n6sh79['errorHandler']['error']('invalid doc source'), tdxq$['doc'];
}, Bzkbl49['prototype'] = { 'startDocument': function () {
    this['doc'] = new Bsk69()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (b679hk, lzk4, iw8, t0yvx$) {
    var a82wi3 = this['doc'],
        jm15r = a82wi3['createElementNS'](b679hk, iw8 || lzk4),
        pgnesu = t0yvx$['length'];Be23aw(this, jm15r), this['currentElement'] = jm15r, this['locator'] && Bzbk4lv(this['locator'], jm15r);for (var a82f3w = 0x0; pgnesu > a82f3w; a82f3w++) {
      var b679hk = t0yvx$['getURI'](a82f3w),
          ylvbz = t0yvx$['getValue'](a82f3w),
          iw8 = t0yvx$['getQName'](a82f3w),
          $ylv4 = a82wi3['createAttributeNS'](b679hk, iw8);this['locator'] && Bzbk4lv(t0yvx$['getLocator'](a82f3w), $ylv4), $ylv4['value'] = $ylv4['nodeValue'] = ylvbz, jm15r['setAttributeNode']($ylv4);
    }
  }, 'endElement': function () {
    {
      var supn = this['currentElement'];supn['tagName'];
    }this['currentElement'] = supn['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (sugnh, us7h) {
    var t$xdq = this['doc']['createProcessingInstruction'](sugnh, us7h);this['locator'] && Bzbk4lv(this['locator'], t$xdq), Be23aw(this, t$xdq);
  }, 'ignorableWhitespace': function () {}, 'characters': function (negiup) {
    if (negiup = Bf5w3r['apply'](this, arguments)) {
      if (this['cdata']) var uhn7s = this['doc']['createCDATASection'](negiup);else var uhn7s = this['doc']['createTextNode'](negiup);this['currentElement'] ? this['currentElement']['appendChild'](uhn7s) : /^\s*$/['test'](negiup) && this['doc']['appendChild'](uhn7s), this['locator'] && Bzbk4lv(this['locator'], uhn7s);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (z96khb) {
    (this['locator'] = z96khb) && (z96khb['lineNumber'] = 0x0);
  }, 'comment': function (k79sh) {
    k79sh = Bf5w3r['apply'](this, arguments);var z4kbl = this['doc']['createComment'](k79sh);this['locator'] && Bzbk4lv(this['locator'], z4kbl), Be23aw(this, z4kbl);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (spunge, x0_ty$, w2iape) {
    var tv0y$l = this['doc']['implementation'];if (tv0y$l && tv0y$l['createDocumentType']) {
      var vlz40 = tv0y$l['createDocumentType'](spunge, x0_ty$, w2iape);this['locator'] && Bzbk4lv(this['locator'], vlz40), Be23aw(this, vlz40);
    }
  }, 'warning': function (f83wa2) {
    console['warn']('[xmldom warning]\t' + f83wa2, Buei(this['locator']));
  }, 'error': function (s7ugp) {
    console['error']('[xmldom error]\t' + s7ugp, Buei(this['locator']));
  }, 'fatalError': function (g7shu) {
    throw console['error']('[xmldom fatalError]\t' + g7shu, Buei(this['locator'])), g7shu;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (lyv0) {
  Bzkbl49['prototype'][lyv0] = function () {
    return null;
  };
});var Bei2a3w = require('./T5T5cT5T5')['XMLReader'],
    Bsk69 = exports['DOMImplementation'] = require('./T5T5DOT5T5')['DOMImplementation'];exports['XMLSerializer'] = require('./T5T5DOT5T5')['XMLSerializer'], exports['DOMParser'] = Bk6b4z9;