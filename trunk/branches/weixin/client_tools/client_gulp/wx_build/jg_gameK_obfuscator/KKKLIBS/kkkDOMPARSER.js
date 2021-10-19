var U = wx.$k;
function K1_uqlgpy(uygozt) {
  this['options'] = uygozt || { 'locator': {} };
}function K1_c7w0k6(mvn9f, w0jck6, m9v5) {
  function quzoyg(e$5n3f) {
    var sx8h1 = mvn9f[e$5n3f];!sx8h1 && s1hb8 && (sx8h1 = 0x2 == mvn9f['length'] ? function (iagq) {
      mvn9f(e$5n3f, iagq);
    } : mvn9f), ogzuyt[e$5n3f] = sx8h1 ? function (z2udt) {
      sx8h1('[xmldom ' + e$5n3f + ']\t' + z2udt + K1_r67bk(m9v5));
    } : function () {};
  }if (!mvn9f) {
    if (w0jck6 instanceof K1_nmvf95) return w0jck6;mvn9f = w0jck6;
  }var ogzuyt = {},
      s1hb8 = mvn9f instanceof Function;return m9v5 = m9v5 || {}, quzoyg('warning'), quzoyg('error'), quzoyg('fatalError'), ogzuyt;
}function K1_nmvf95() {
  this['cdata'] = !0x1;
}function K1_jw60i(jpa0i, jck) {
  jck['lineNumber'] = jpa0i['lineNumber'], jck['columnNumber'] = jpa0i['columnNumber'];
}function K1_r67bk(z2tou) {
  return z2tou ? '\x0a@' + (z2tou['systemId'] || '') + '#[line:' + z2tou['lineNumber'] + ',col:' + z2tou['columnNumber'] + ']' : void 0x0;
}function K1_$9n5(aqglyp, c6, b14s8h) {
  return 'string' == typeof aqglyp ? aqglyp['substr'](c6, b14s8h) : aqglyp['length'] >= c6 + b14s8h || c6 ? new java['lang']['String'](aqglyp, c6, b14s8h) + '' : aqglyp;
}function K1_f$x3e5(e18hx, k7sbwr) {
  (e18hx['currentElement'] || e18hx['doc'])['appendChild'](k7sbwr);
}K1_uqlgpy['prototype']['parseFromString'] = function (tz_o2d, sb81h4) {
  var laqi = this['options'],
      bwksr7 = new K1_ic6jw(),
      _o2ztd = laqi['domBuilder'] || new K1_nmvf95(),
      b7wr = laqi['errorHandler'],
      xhe = laqi['locator'],
      tuzgy = laqi['xmlns'] || {},
      h41xe = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return xhe && _o2ztd['setDocumentLocator'](xhe), bwksr7['errorHandler'] = K1_c7w0k6(b7wr, _o2ztd, xhe), bwksr7['domBuilder'] = laqi['domBuilder'] || _o2ztd, /\/x?html?$/['test'](sb81h4) && (h41xe['nbsp'] = '\u00a0', h41xe['copy'] = '©', tuzgy[''] = 'http://www.w3.org/1999/xhtml'), tuzgy['xml'] = tuzgy['xml'] || 'http://www.w3.org/XML/1998/namespace', tz_o2d ? bwksr7['parse'](tz_o2d, tuzgy, h41xe) : bwksr7['errorHandler']['error']('invalid doc source'), _o2ztd['doc'];
}, K1_nmvf95['prototype'] = { 'startDocument': function () {
    this['doc'] = new K1_k07cw()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (c0kwj, $84xeh, bsh841, $4he8x) {
    var h4$x8 = this['doc'],
        $3xe8 = h4$x8['createElementNS'](c0kwj, bsh841 || $84xeh),
        oydtuz = $4he8x['length'];K1_f$x3e5(this, $3xe8), this['currentElement'] = $3xe8, this['locator'] && K1_jw60i(this['locator'], $3xe8);for (var zouty = 0x0; zouty < oydtuz; zouty++) {
      var c0kwj = $4he8x['getURI'](zouty),
          glpqia = $4he8x['getValue'](zouty),
          bsh841 = $4he8x['getQName'](zouty),
          lupy = h4$x8['createAttributeNS'](c0kwj, bsh841);this['locator'] && K1_jw60i($4he8x['getLocator'](zouty), lupy), lupy['value'] = lupy['nodeValue'] = glpqia, $3xe8['setAttributeNode'](lupy);
    }
  }, 'endElement': function () {
    var luygp = this['currentElement'];luygp['tagName'], this['currentElement'] = luygp['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (hx148e, wr760k) {
    wr760k = this['doc']['createProcessingInstruction'](hx148e, wr760k), (this['locator'] && K1_jw60i(this['locator'], wr760k), K1_f$x3e5(this, wr760k));
  }, 'ignorableWhitespace': function () {}, 'characters': function (qligap) {
    var lgpqu;(qligap = K1_$9n5['apply'](this, arguments)) && (lgpqu = this['cdata'] ? this['doc']['createCDATASection'](qligap) : this['doc']['createTextNode'](qligap), this['currentElement'] ? this['currentElement']['appendChild'](lgpqu) : /^\s*$/['test'](qligap) && this['doc']['appendChild'](lgpqu), this['locator'] && K1_jw60i(this['locator'], lgpqu));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (mv9nf5) {
    (this['locator'] = mv9nf5) && (mv9nf5['lineNumber'] = 0x0);
  }, 'comment': function (uolyg) {
    uolyg = K1_$9n5['apply'](this, arguments);var glqiap = this['doc']['createComment'](uolyg);this['locator'] && K1_jw60i(this['locator'], glqiap), K1_f$x3e5(this, glqiap);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (cjip, w0j6ck, lyg) {
    var zygoqu = this['doc']['implementation'];zygoqu && zygoqu['createDocumentType'] && (lyg = zygoqu['createDocumentType'](cjip, w0j6ck, lyg), this['locator'] && K1_jw60i(this['locator'], lyg), K1_f$x3e5(this, lyg));
  }, 'warning': function (toduzy) {
    console['warn']('[xmldom warning]\t' + toduzy, K1_r67bk(this['locator']));
  }, 'error': function (yguozq) {
    console['error']('[xmldom error]\t' + yguozq, K1_r67bk(this['locator']));
  }, 'fatalError': function (tyogz) {
    throw console['error']('[xmldom fatalError]\t' + tyogz, K1_r67bk(this['locator'])), tyogz;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (hb1r7s) {
  K1_nmvf95['prototype'][hb1r7s] = function () {
    return null;
  };
});var K1_ic6jw = require('./kkkSAX')['XMLReader'],
    K1_k07cw = exports['DOMImplementation'] = require('./kkkDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./kkkDOM')['XMLSerializer'], exports['DOMParser'] = K1_uqlgpy;