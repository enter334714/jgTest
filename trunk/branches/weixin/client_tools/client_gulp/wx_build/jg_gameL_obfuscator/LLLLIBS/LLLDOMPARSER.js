var W = wx.$l;
function L9$4n_8s(kjbh2a) {
  this['options'] = kjbh2a || { 'locator': {} };
}function L9_xsn84(t5qlf9, o9v7f5, x8sn4_) {
  function $4_d8s(htqzlj) {
    var o5l9f = t5qlf9[htqzlj];!o5l9f && khzjl && (o5l9f = 0x2 == t5qlf9['length'] ? function ($dkba2) {
      t5qlf9(htqzlj, $dkba2);
    } : t5qlf9), $s2bad[htqzlj] = o5l9f && function (zkbaj) {
      o5l9f('[xmldom ' + htqzlj + ']\t' + zkbaj + L9$d4s8(x8sn4_));
    } || function () {};
  }if (!t5qlf9) {
    if (o9v7f5 instanceof L9xyc03r) return o9v7f5;t5qlf9 = o9v7f5;
  }var $s2bad = {},
      khzjl = t5qlf9 instanceof Function;return x8sn4_ = x8sn4_ || {}, $4_d8s('warning'), $4_d8s('error'), $4_d8s('fatalError'), $s2bad;
}function L9xyc03r() {
  this['cdata'] = !0x1;
}function L9qhz5tl(jbakd, ogv71) {
  ogv71['lineNumber'] = jbakd['lineNumber'], ogv71['columnNumber'] = jbakd['columnNumber'];
}function L9$d4s8(n8_s) {
  return n8_s ? '\x0a@' + (n8_s['systemId'] || '') + '#[line:' + n8_s['lineNumber'] + ',col:' + n8_s['columnNumber'] + ']' : void 0x0;
}function L9lh5zqt(xn03yr, nx4s8_, ymr3c) {
  return 'string' == typeof xn03yr ? xn03yr['substr'](nx4s8_, ymr3c) : xn03yr['length'] >= nx4s8_ + ymr3c || nx4s8_ ? new java['lang']['String'](xn03yr, nx4s8_, ymr3c) + '' : xn03yr;
}function L9qtlzf5(mrcy3, o79v) {
  mrcy3['currentElement'] ? mrcy3['currentElement']['appendChild'](o79v) : mrcy3['doc']['appendChild'](o79v);
}L9$4n_8s['prototype']['parseFromString'] = function (f9l5q, t59qlf) {
  var _8xns4 = this['options'],
      n4$8s_ = new L9t5ol(),
      jzhak = _8xns4['domBuilder'] || new L9xyc03r(),
      lzjkqh = _8xns4['errorHandler'],
      x_ns84 = _8xns4['locator'],
      ep6u = _8xns4['xmlns'] || {},
      kzqja = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return x_ns84 && jzhak['setDocumentLocator'](x_ns84), n4$8s_['errorHandler'] = L9_xsn84(lzjkqh, jzhak, x_ns84), n4$8s_['domBuilder'] = _8xns4['domBuilder'] || jzhak, /\/x?html?$/['test'](t59qlf) && (kzqja['nbsp'] = '\u00a0', kzqja['copy'] = '©', ep6u[''] = 'http://www.w3.org/1999/xhtml'), ep6u['xml'] = ep6u['xml'] || 'http://www.w3.org/XML/1998/namespace', f9l5q ? n4$8s_['parse'](f9l5q, ep6u, kzqja) : n4$8s_['errorHandler']['error']('invalid doc source'), jzhak['doc'];
}, L9xyc03r['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9pg16u()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (o9tfl5, x0y4_, eu1gv, tzhj) {
    var v9o = this['doc'],
        x4y0n = v9o['createElementNS'](o9tfl5, eu1gv || x0y4_),
        d2s$8 = tzhj['length'];L9qtlzf5(this, x4y0n), this['currentElement'] = x4y0n, this['locator'] && L9qhz5tl(this['locator'], x4y0n);for (var kbajhz = 0x0; d2s$8 > kbajhz; kbajhz++) {
      var o9tfl5 = tzhj['getURI'](kbajhz),
          icw3m = tzhj['getValue'](kbajhz),
          eu1gv = tzhj['getQName'](kbajhz),
          g16evu = v9o['createAttributeNS'](o9tfl5, eu1gv);this['locator'] && L9qhz5tl(tzhj['getLocator'](kbajhz), g16evu), g16evu['value'] = g16evu['nodeValue'] = icw3m, x4y0n['setAttributeNode'](g16evu);
    }
  }, 'endElement': function () {
    {
      var zqt5lh = this['currentElement'];zqt5lh['tagName'];
    }this['currentElement'] = zqt5lh['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (tqjlh, $s_84d) {
    var v7o = this['doc']['createProcessingInstruction'](tqjlh, $s_84d);this['locator'] && L9qhz5tl(this['locator'], v7o), L9qtlzf5(this, v7o);
  }, 'ignorableWhitespace': function () {}, 'characters': function (zhjqlt) {
    if (zhjqlt = L9lh5zqt['apply'](this, arguments)) {
      if (this['cdata']) var o9fv57 = this['doc']['createCDATASection'](zhjqlt);else var o9fv57 = this['doc']['createTextNode'](zhjqlt);this['currentElement'] ? this['currentElement']['appendChild'](o9fv57) : /^\s*$/['test'](zhjqlt) && this['doc']['appendChild'](o9fv57), this['locator'] && L9qhz5tl(this['locator'], o9fv57);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (zf5qtl) {
    (this['locator'] = zf5qtl) && (zf5qtl['lineNumber'] = 0x0);
  }, 'comment': function ($2ds84) {
    $2ds84 = L9lh5zqt['apply'](this, arguments);var f579v = this['doc']['createComment']($2ds84);this['locator'] && L9qhz5tl(this['locator'], f579v), L9qtlzf5(this, f579v);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (yx30_n, g61ue, jbdk2a) {
    var y03mr = this['doc']['implementation'];if (y03mr && y03mr['createDocumentType']) {
      var n0_3xy = y03mr['createDocumentType'](yx30_n, g61ue, jbdk2a);this['locator'] && L9qhz5tl(this['locator'], n0_3xy), L9qtlzf5(this, n0_3xy);
    }
  }, 'warning': function (ve1g7u) {
    console['warn']('[xmldom warning]\t' + ve1g7u, L9$d4s8(this['locator']));
  }, 'error': function (kjzlq) {
    console['error']('[xmldom error]\t' + kjzlq, L9$d4s8(this['locator']));
  }, 'fatalError': function (y0c3m) {
    throw console['error']('[xmldom fatalError]\t' + y0c3m, L9$d4s8(this['locator'])), y0c3m;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (f9v75o) {
  L9xyc03r['prototype'][f9v75o] = function () {
    return null;
  };
});var L9t5ol = require('./lllSAX')['XMLReader'],
    L9pg16u = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9$4n_8s;