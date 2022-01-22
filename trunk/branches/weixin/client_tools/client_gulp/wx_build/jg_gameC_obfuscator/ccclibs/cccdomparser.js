var p = wx.$h;
function a_s31(o$ib) {
  this['options'] = o$ib || { 'locator': {} };
}function a_pwrx2n(qb9y, yeb$oi, k$86eh) {
  function bzq9(byie9) {
    var hg_08 = qb9y[byie9];!hg_08 && e8i$6k && (hg_08 = 0x2 == qb9y['length'] ? function (tj1sfc) {
      qb9y(byie9, tj1sfc);
    } : qb9y), h80$k[byie9] = hg_08 && function (rpw2x) {
      hg_08('[xmldom ' + byie9 + ']\t' + rpw2x + a_rp7a(k$86eh));
    } || function () {};
  }if (!qb9y) {
    if (yeb$oi instanceof a_pnwa4) return yeb$oi;qb9y = yeb$oi;
  }var h80$k = {},
      e8i$6k = qb9y instanceof Function;return k$86eh = k$86eh || {}, bzq9('warning'), bzq9('error'), bzq9('fatalError'), h80$k;
}function a_pnwa4() {
  this['cdata'] = !0x1;
}function a_npwr2a(h$68k, dl5m) {
  dl5m['lineNumber'] = h$68k['lineNumber'], dl5m['columnNumber'] = h$68k['columnNumber'];
}function a_rp7a(gk0_8) {
  return gk0_8 ? '\x0a@' + (gk0_8['systemId'] || '') + '#[line:' + gk0_8['lineNumber'] + ',col:' + gk0_8['columnNumber'] + ']' : void 0x0;
}function a_pnrw2a(hkg_8, biyoz, gh_0v) {
  return 'string' == typeof hkg_8 ? hkg_8['substr'](biyoz, gh_0v) : hkg_8['length'] >= biyoz + gh_0v || biyoz ? new java['lang']['String'](hkg_8, biyoz, gh_0v) + '' : hkg_8;
}function a_pf7a4(sjf13, dst15) {
  sjf13['currentElement'] ? sjf13['currentElement']['appendChild'](dst15) : sjf13['doc']['appendChild'](dst15);
}a_s31['prototype']['parseFromString'] = function (xv2, gk086) {
  var jsct15 = this['options'],
      oyzb9 = new a__xrv(),
      tf31 = jsct15['domBuilder'] || new a_pnwa4(),
      ek8h$6 = jsct15['errorHandler'],
      zobi = jsct15['locator'],
      fjt371 = jsct15['xmlns'] || {},
      i$6by = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return zobi && tf31['setDocumentLocator'](zobi), oyzb9['errorHandler'] = a_pwrx2n(ek8h$6, tf31, zobi), oyzb9['domBuilder'] = jsct15['domBuilder'] || tf31, /\/x?html?$/['test'](gk086) && (i$6by['nbsp'] = '\u00a0', i$6by['copy'] = '©', fjt371[''] = 'http://www.w3.org/1999/xhtml'), fjt371['xml'] = fjt371['xml'] || 'http://www.w3.org/XML/1998/namespace', xv2 ? oyzb9['parse'](xv2, fjt371, i$6by) : oyzb9['errorHandler']['error']('invalid doc source'), tf31['doc'];
}, a_pnwa4['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_e$yb()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (m5, ekiy, b9ieoy, k6i$e) {
    var $6k0 = this['doc'],
        yoe$ = $6k0['createElementNS'](m5, b9ieoy || ekiy),
        g_0h = k6i$e['length'];a_pf7a4(this, yoe$), this['currentElement'] = yoe$, this['locator'] && a_npwr2a(this['locator'], yoe$);for (var ieo9y = 0x0; g_0h > ieo9y; ieo9y++) {
      var m5 = k6i$e['getURI'](ieo9y),
          e$obyi = k6i$e['getValue'](ieo9y),
          b9ieoy = k6i$e['getQName'](ieo9y),
          x2_n = $6k0['createAttributeNS'](m5, b9ieoy);this['locator'] && a_npwr2a(k6i$e['getLocator'](ieo9y), x2_n), x2_n['value'] = x2_n['nodeValue'] = e$obyi, yoe$['setAttributeNode'](x2_n);
    }
  }, 'endElement': function () {
    {
      var rn2pa = this['currentElement'];rn2pa['tagName'];
    }this['currentElement'] = rn2pa['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (gv_x2n, f713) {
    var s1mc5 = this['doc']['createProcessingInstruction'](gv_x2n, f713);this['locator'] && a_npwr2a(this['locator'], s1mc5), a_pf7a4(this, s1mc5);
  }, 'ignorableWhitespace': function () {}, 'characters': function (vwr2n) {
    if (vwr2n = a_pnrw2a['apply'](this, arguments)) {
      if (this['cdata']) var ike68$ = this['doc']['createCDATASection'](vwr2n);else var ike68$ = this['doc']['createTextNode'](vwr2n);this['currentElement'] ? this['currentElement']['appendChild'](ike68$) : /^\s*$/['test'](vwr2n) && this['doc']['appendChild'](ike68$), this['locator'] && a_npwr2a(this['locator'], ike68$);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (k6e$8h) {
    (this['locator'] = k6e$8h) && (k6e$8h['lineNumber'] = 0x0);
  }, 'comment': function (pr2nxw) {
    pr2nxw = a_pnrw2a['apply'](this, arguments);var fj13 = this['doc']['createComment'](pr2nxw);this['locator'] && a_npwr2a(this['locator'], fj13), a_pf7a4(this, fj13);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (nwvx2r, j1f37t, cmls5d) {
    var cjsft1 = this['doc']['implementation'];if (cjsft1 && cjsft1['createDocumentType']) {
      var na2 = cjsft1['createDocumentType'](nwvx2r, j1f37t, cmls5d);this['locator'] && a_npwr2a(this['locator'], na2), a_pf7a4(this, na2);
    }
  }, 'warning': function (gk0h8) {
    console['warn']('[xmldom warning]\t' + gk0h8, a_rp7a(this['locator']));
  }, 'error': function (qb9z) {
    console['error']('[xmldom error]\t' + qb9z, a_rp7a(this['locator']));
  }, 'fatalError': function (gx02_v) {
    throw console['error']('[xmldom fatalError]\t' + gx02_v, a_rp7a(this['locator'])), gx02_v;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (jtf13) {
  a_pnwa4['prototype'][jtf13] = function () {
    return null;
  };
});var a__xrv = require('./cccsax')['XMLReader'],
    a_e$yb = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_s31;