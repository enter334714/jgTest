var W = wx.$l;
function L9e1pug(x_0n4) {
  this['options'] = x_0n4 || { 'locator': {} };
}function L9_x0yn4(ny30r, n84yx, bd8$) {
  function d2jka(lkqjz) {
    var oeg71v = ny30r[lkqjz];!oeg71v && _xns8 && (oeg71v = 0x2 == ny30r['length'] ? function (ba2sd) {
      ny30r(lkqjz, ba2sd);
    } : ny30r), a2dk$[lkqjz] = oeg71v && function (sbd82) {
      oeg71v('[xmldom ' + lkqjz + ']\t' + sbd82 + L9hjkba2(bd8$));
    } || function () {};
  }if (!ny30r) {
    if (n84yx instanceof L9f75vo9) return n84yx;ny30r = n84yx;
  }var a2dk$ = {},
      _xns8 = ny30r instanceof Function;return bd8$ = bd8$ || {}, d2jka('warning'), d2jka('error'), d2jka('fatalError'), a2dk$;
}function L9f75vo9() {
  this['cdata'] = !0x1;
}function L9x3r0ny(b$d28s, kzajqh) {
  kzajqh['lineNumber'] = b$d28s['lineNumber'], kzajqh['columnNumber'] = b$d28s['columnNumber'];
}function L9hjkba2(jqkhaz) {
  return jqkhaz ? '\x0a@' + (jqkhaz['systemId'] || '') + '#[line:' + jqkhaz['lineNumber'] + ',col:' + jqkhaz['columnNumber'] + ']' : void 0x0;
}function L9s4d8$2(o7f9t, micr0, $ds8_4) {
  return 'string' == typeof o7f9t ? o7f9t['substr'](micr0, $ds8_4) : o7f9t['length'] >= micr0 + $ds8_4 || micr0 ? new java['lang']['String'](o7f9t, micr0, $ds8_4) + '' : o7f9t;
}function L9n30yxr(hjka2b, ahj2kb) {
  hjka2b['currentElement'] ? hjka2b['currentElement']['appendChild'](ahj2kb) : hjka2b['doc']['appendChild'](ahj2kb);
}L9e1pug['prototype']['parseFromString'] = function (n$8s4_, lf59to) {
  var ogv1e = this['options'],
      r3y0m = new L9ci3rwm(),
      o917v = ogv1e['domBuilder'] || new L9f75vo9(),
      qht5 = ogv1e['errorHandler'],
      m30cri = ogv1e['locator'],
      thlqz = ogv1e['xmlns'] || {},
      ahkjzb = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return m30cri && o917v['setDocumentLocator'](m30cri), r3y0m['errorHandler'] = L9_x0yn4(qht5, o917v, m30cri), r3y0m['domBuilder'] = ogv1e['domBuilder'] || o917v, /\/x?html?$/['test'](lf59to) && (ahkjzb['nbsp'] = '\u00a0', ahkjzb['copy'] = '©', thlqz[''] = 'http://www.w3.org/1999/xhtml'), thlqz['xml'] = thlqz['xml'] || 'http://www.w3.org/XML/1998/namespace', n$8s4_ ? r3y0m['parse'](n$8s4_, thlqz, ahkjzb) : r3y0m['errorHandler']['error']('invalid doc source'), o917v['doc'];
}, L9f75vo9['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9$2bd()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_n4s$8, tzhl, n48s$_, tlof9) {
    var tfl5zq = this['doc'],
        ahzqj = tfl5zq['createElementNS'](_n4s$8, n48s$_ || tzhl),
        y0nx3_ = tlof9['length'];L9n30yxr(this, ahzqj), this['currentElement'] = ahzqj, this['locator'] && L9x3r0ny(this['locator'], ahzqj);for (var ug16ev = 0x0; y0nx3_ > ug16ev; ug16ev++) {
      var _n4s$8 = tlof9['getURI'](ug16ev),
          hbjzka = tlof9['getValue'](ug16ev),
          n48s$_ = tlof9['getQName'](ug16ev),
          o1ev7g = tfl5zq['createAttributeNS'](_n4s$8, n48s$_);this['locator'] && L9x3r0ny(tlof9['getLocator'](ug16ev), o1ev7g), o1ev7g['value'] = o1ev7g['nodeValue'] = hbjzka, ahzqj['setAttributeNode'](o1ev7g);
    }
  }, 'endElement': function () {
    {
      var o59flt = this['currentElement'];o59flt['tagName'];
    }this['currentElement'] = o59flt['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (jkhzab, cmiwr) {
    var $s48n_ = this['doc']['createProcessingInstruction'](jkhzab, cmiwr);this['locator'] && L9x3r0ny(this['locator'], $s48n_), L9n30yxr(this, $s48n_);
  }, 'ignorableWhitespace': function () {}, 'characters': function (o9t7f) {
    if (o9t7f = L9s4d8$2['apply'](this, arguments)) {
      if (this['cdata']) var ftl9 = this['doc']['createCDATASection'](o9t7f);else var ftl9 = this['doc']['createTextNode'](o9t7f);this['currentElement'] ? this['currentElement']['appendChild'](ftl9) : /^\s*$/['test'](o9t7f) && this['doc']['appendChild'](ftl9), this['locator'] && L9x3r0ny(this['locator'], ftl9);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (lztq5h) {
    (this['locator'] = lztq5h) && (lztq5h['lineNumber'] = 0x0);
  }, 'comment': function (g61evu) {
    g61evu = L9s4d8$2['apply'](this, arguments);var zbkj = this['doc']['createComment'](g61evu);this['locator'] && L9x3r0ny(this['locator'], zbkj), L9n30yxr(this, zbkj);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (sd$ba, e6ug1, o971ve) {
    var vu16 = this['doc']['implementation'];if (vu16 && vu16['createDocumentType']) {
      var _3nx = vu16['createDocumentType'](sd$ba, e6ug1, o971ve);this['locator'] && L9x3r0ny(this['locator'], _3nx), L9n30yxr(this, _3nx);
    }
  }, 'warning': function (kqhzjl) {
    console['warn']('[xmldom warning]\t' + kqhzjl, L9hjkba2(this['locator']));
  }, 'error': function (wmc3) {
    console['error']('[xmldom error]\t' + wmc3, L9hjkba2(this['locator']));
  }, 'fatalError': function (n03yxr) {
    throw console['error']('[xmldom fatalError]\t' + n03yxr, L9hjkba2(this['locator'])), n03yxr;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (dbs$2a) {
  L9f75vo9['prototype'][dbs$2a] = function () {
    return null;
  };
});var L9ci3rwm = require('./lllSAX')['XMLReader'],
    L9$2bd = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9e1pug;