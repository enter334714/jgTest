var m = wx.$g;
function gfxkrgi(b3e1d) {
  this['options'] = b3e1d || { 'locator': {} };
}function g$qjxwz(d2e8, atl96, latm4o) {
  function s5y802(gk7_) {
    var y28s05 = d2e8[gk7_];!y28s05 && h3d && (y28s05 = 0x2 == d2e8['length'] ? function (xfjki) {
      d2e8(gk7_, xfjki);
    } : d2e8), loac4m[gk7_] = y28s05 ? function (th96bp) {
      y28s05('[xmldom ' + gk7_ + ']\t' + th96bp + ggi$xfk(latm4o));
    } : function () {};
  }if (!d2e8) {
    if (atl96 instanceof gey8d2) return atl96;d2e8 = atl96;
  }var loac4m = {},
      h3d = d2e8 instanceof Function;return latm4o = latm4o || {}, s5y802('warning'), s5y802('error'), s5y802('fatalError'), loac4m;
}function gey8d2() {
  this['cdata'] = !0x1;
}function glat64(x$jwqz, bp) {
  bp['lineNumber'] = x$jwqz['lineNumber'], bp['columnNumber'] = x$jwqz['columnNumber'];
}function ggi$xfk(fk$xgi) {
  return fk$xgi ? '\x0a@' + (fk$xgi['systemId'] || '') + '#[line:' + fk$xgi['lineNumber'] + ',col:' + fk$xgi['columnNumber'] + ']' : void 0x0;
}function ge1hdb(ukgr_7, bdh3e, tlam6) {
  return 'string' == typeof ukgr_7 ? ukgr_7['substr'](bdh3e, tlam6) : ukgr_7['length'] >= bdh3e + tlam6 || bdh3e ? new java['lang']['String'](ukgr_7, bdh3e, tlam6) + '' : ukgr_7;
}function gp649ta(b9pa, xjq$w) {
  (b9pa['currentElement'] || b9pa['doc'])['appendChild'](xjq$w);
}gfxkrgi['prototype']['parseFromString'] = function (bth96p, xfkj$i) {
  var wjzxq = this['options'],
      d280y5 = new gs0y285(),
      f$xik = wjzxq['domBuilder'] || new gey8d2(),
      h3e10 = wjzxq['errorHandler'],
      ku7fgr = wjzxq['locator'],
      ws$zq = wjzxq['xmlns'] || {},
      $xqij = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ku7fgr && f$xik['setDocumentLocator'](ku7fgr), d280y5['errorHandler'] = g$qjxwz(h3e10, f$xik, ku7fgr), d280y5['domBuilder'] = wjzxq['domBuilder'] || f$xik, /\/x?html?$/['test'](xfkj$i) && ($xqij['nbsp'] = '\u00a0', $xqij['copy'] = '©', ws$zq[''] = 'http://www.w3.org/1999/xhtml'), ws$zq['xml'] = ws$zq['xml'] || 'http://www.w3.org/XML/1998/namespace', bth96p ? d280y5['parse'](bth96p, ws$zq, $xqij) : d280y5['errorHandler']['error']('invalid doc source'), f$xik['doc'];
}, gey8d2['prototype'] = { 'startDocument': function () {
    this['doc'] = new ga4otm()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (bh3e1d, ifqjx, bht96p, vl4ocm) {
    var szj5q = this['doc'],
        olmcv4 = szj5q['createElementNS'](bh3e1d, bht96p || ifqjx),
        zjs5wq = vl4ocm['length'];gp649ta(this, olmcv4), this['currentElement'] = olmcv4, this['locator'] && glat64(this['locator'], olmcv4);for (var p4a96 = 0x0; p4a96 < zjs5wq; p4a96++) {
      var bh3e1d = vl4ocm['getURI'](p4a96),
          oca4ml = vl4ocm['getValue'](p4a96),
          bht96p = vl4ocm['getQName'](p4a96),
          lv4omc = szj5q['createAttributeNS'](bh3e1d, bht96p);this['locator'] && glat64(vl4ocm['getLocator'](p4a96), lv4omc), lv4omc['value'] = lv4omc['nodeValue'] = oca4ml, olmcv4['setAttributeNode'](lv4omc);
    }
  }, 'endElement': function () {
    var ugrfk7 = this['currentElement'];ugrfk7['tagName'], this['currentElement'] = ugrfk7['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (guirf, q$zxw) {
    q$zxw = this['doc']['createProcessingInstruction'](guirf, q$zxw), (this['locator'] && glat64(this['locator'], q$zxw), gp649ta(this, q$zxw));
  }, 'ignorableWhitespace': function () {}, 'characters': function ($xfig) {
    var kgfu7r;($xfig = ge1hdb['apply'](this, arguments)) && (kgfu7r = this['cdata'] ? this['doc']['createCDATASection']($xfig) : this['doc']['createTextNode']($xfig), this['currentElement'] ? this['currentElement']['appendChild'](kgfu7r) : /^\s*$/['test']($xfig) && this['doc']['appendChild'](kgfu7r), this['locator'] && glat64(this['locator'], kgfu7r));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (beh1p3) {
    (this['locator'] = beh1p3) && (beh1p3['lineNumber'] = 0x0);
  }, 'comment': function (dhe1b3) {
    dhe1b3 = ge1hdb['apply'](this, arguments);var bp91 = this['doc']['createComment'](dhe1b3);this['locator'] && glat64(this['locator'], bp91), gp649ta(this, bp91);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (sqwz52, dehb, t4a6lm) {
    var xkj$f = this['doc']['implementation'];xkj$f && xkj$f['createDocumentType'] && (t4a6lm = xkj$f['createDocumentType'](sqwz52, dehb, t4a6lm), this['locator'] && glat64(this['locator'], t4a6lm), gp649ta(this, t4a6lm));
  }, 'warning': function (xikf) {
    console['warn']('[xmldom warning]\t' + xikf, ggi$xfk(this['locator']));
  }, 'error': function (gkx$) {
    console['error']('[xmldom error]\t' + gkx$, ggi$xfk(this['locator']));
  }, 'fatalError': function (ur_7k) {
    throw console['error']('[xmldom fatalError]\t' + ur_7k, ggi$xfk(this['locator'])), ur_7k;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (rkiufg) {
  gey8d2['prototype'][rkiufg] = function () {
    return null;
  };
});var gs0y285 = require('./gggsax')['XMLReader'],
    ga4otm = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = gfxkrgi;