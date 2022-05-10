var B = wx.$z;
function zp9sx1(xs) {
  this['options'] = xs || { 'locator': {} };
}function zlvgf6(oykb, tedzoa, k8b) {
  function zdaoet(zadoe) {
    var _r2uw = oykb[zadoe];!_r2uw && fv4n && (_r2uw = 0x2 == oykb['length'] ? function (ydezt) {
      oykb(zadoe, ydezt);
    } : oykb), sx9h1p[zadoe] = _r2uw && function (a1xsh) {
      _r2uw('[xmldom ' + zadoe + ']\t' + a1xsh + zpg461(k8b));
    } || function () {};
  }if (!oykb) {
    if (tedzoa instanceof zr8_b2) return tedzoa;oykb = tedzoa;
  }var sx9h1p = {},
      fv4n = oykb instanceof Function;return k8b = k8b || {}, zdaoet('warning'), zdaoet('error'), zdaoet('fatalError'), sx9h1p;
}function zr8_b2() {
  this['cdata'] = !0x1;
}function zxs1e9(vglf, x1phs9) {
  x1phs9['lineNumber'] = vglf['lineNumber'], x1phs9['columnNumber'] = vglf['columnNumber'];
}function zpg461(i7fn) {
  return i7fn ? '\x0a@' + (i7fn['systemId'] || '') + '#[line:' + i7fn['lineNumber'] + ',col:' + i7fn['columnNumber'] + ']' : void 0x0;
}function zeosta(ghp46, gl6v, gfph) {
  return 'string' == typeof ghp46 ? ghp46['substr'](gl6v, gfph) : ghp46['length'] >= gl6v + gfph || gl6v ? new java['lang']['String'](ghp46, gl6v, gfph) + '' : ghp46;
}function zkbtoyd(kztd, zkdtoy) {
  kztd['currentElement'] ? kztd['currentElement']['appendChild'](zkdtoy) : kztd['doc']['appendChild'](zkdtoy);
}zp9sx1['prototype']['parseFromString'] = function (s1ex9a, u5w_0) {
  var jqm = this['options'],
      k8oydb = new zhax1s9(),
      qmi$3j = jqm['domBuilder'] || new zr8_b2(),
      deoa = jqm['errorHandler'],
      okdtz = jqm['locator'],
      k_yr8b = jqm['xmlns'] || {},
      iq73m = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return okdtz && qmi$3j['setDocumentLocator'](okdtz), k8oydb['errorHandler'] = zlvgf6(deoa, qmi$3j, okdtz), k8oydb['domBuilder'] = jqm['domBuilder'] || qmi$3j, /\/x?html?$/['test'](u5w_0) && (iq73m['nbsp'] = '\u00a0', iq73m['copy'] = '©', k_yr8b[''] = 'http://www.w3.org/1999/xhtml'), k_yr8b['xml'] = k_yr8b['xml'] || 'http://www.w3.org/XML/1998/namespace', s1ex9a ? k8oydb['parse'](s1ex9a, k_yr8b, iq73m) : k8oydb['errorHandler']['error']('invalid doc source'), qmi$3j['doc'];
}, zr8_b2['prototype'] = { 'startDocument': function () {
    this['doc'] = new zg6l4fv()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_uwr5, otdz, otdkzy, h19xps) {
    var ybdr8 = this['doc'],
        ateszo = ybdr8['createElementNS'](_uwr5, otdkzy || otdz),
        jqi$3 = h19xps['length'];zkbtoyd(this, ateszo), this['currentElement'] = ateszo, this['locator'] && zxs1e9(this['locator'], ateszo);for (var miln = 0x0; jqi$3 > miln; miln++) {
      var _uwr5 = h19xps['getURI'](miln),
          dkyb8o = h19xps['getValue'](miln),
          otdkzy = h19xps['getQName'](miln),
          ln76f = ybdr8['createAttributeNS'](_uwr5, otdkzy);this['locator'] && zxs1e9(h19xps['getLocator'](miln), ln76f), ln76f['value'] = ln76f['nodeValue'] = dkyb8o, ateszo['setAttributeNode'](ln76f);
    }
  }, 'endElement': function () {
    {
      var _y8rkb = this['currentElement'];_y8rkb['tagName'];
    }this['currentElement'] = _y8rkb['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ztaso, okybd8) {
    var xsza = this['doc']['createProcessingInstruction'](ztaso, okybd8);this['locator'] && zxs1e9(this['locator'], xsza), zkbtoyd(this, xsza);
  }, 'ignorableWhitespace': function () {}, 'characters': function (i3mnq) {
    if (i3mnq = zeosta['apply'](this, arguments)) {
      if (this['cdata']) var sa91xh = this['doc']['createCDATASection'](i3mnq);else var sa91xh = this['doc']['createTextNode'](i3mnq);this['currentElement'] ? this['currentElement']['appendChild'](sa91xh) : /^\s*$/['test'](i3mnq) && this['doc']['appendChild'](sa91xh), this['locator'] && zxs1e9(this['locator'], sa91xh);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (g1h4) {
    (this['locator'] = g1h4) && (g1h4['lineNumber'] = 0x0);
  }, 'comment': function ($iq73m) {
    $iq73m = zeosta['apply'](this, arguments);var b825r = this['doc']['createComment']($iq73m);this['locator'] && zxs1e9(this['locator'], b825r), zkbtoyd(this, b825r);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (iqmn7, lf46vg, _82) {
    var imn37l = this['doc']['implementation'];if (imn37l && imn37l['createDocumentType']) {
      var b8odky = imn37l['createDocumentType'](iqmn7, lf46vg, _82);this['locator'] && zxs1e9(this['locator'], b8odky), zkbtoyd(this, b8odky);
    }
  }, 'warning': function (do8byk) {
    console['warn']('[xmldom warning]\t' + do8byk, zpg461(this['locator']));
  }, 'error': function (za9esx) {
    console['error']('[xmldom error]\t' + za9esx, zpg461(this['locator']));
  }, 'fatalError': function (_2w0u) {
    throw console['error']('[xmldom fatalError]\t' + _2w0u, zpg461(this['locator'])), _2w0u;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (i$3j) {
  zr8_b2['prototype'][i$3j] = function () {
    return null;
  };
});var zhax1s9 = require('./zzczz')['XMLReader'],
    zg6l4fv = exports['DOMImplementation'] = require('./zzDOzz')['DOMImplementation'];exports['XMLSerializer'] = require('./zzDOzz')['XMLSerializer'], exports['DOMParser'] = zp9sx1;