var m = wx.$g;
function g$hfo(aipv1b) {
  this['options'] = aipv1b || { 'locator': {} };
}function gp1tvr(b1vrp, pvbi1, tp18b) {
  function bk_8(mfh6) {
    var fl$h6 = b1vrp[mfh6];!fl$h6 && cx35q && (fl$h6 = 0x2 == b1vrp['length'] ? function (v1pba) {
      b1vrp(mfh6, v1pba);
    } : b1vrp), se53qg[mfh6] = fl$h6 && function (rkt_78) {
      fl$h6('[xmldom ' + mfh6 + ']\t' + rkt_78 + ggsqc5(tp18b));
    } || function () {};
  }if (!b1vrp) {
    if (pvbi1 instanceof gwhu6z) return pvbi1;b1vrp = pvbi1;
  }var se53qg = {},
      cx35q = b1vrp instanceof Function;return tp18b = tp18b || {}, bk_8('warning'), bk_8('error'), bk_8('fatalError'), se53qg;
}function gwhu6z() {
  this['cdata'] = !0x1;
}function gc5qsg(e5q3o, y4jx) {
  y4jx['lineNumber'] = e5q3o['lineNumber'], y4jx['columnNumber'] = e5q3o['columnNumber'];
}function ggsqc5(qeol3g) {
  return qeol3g ? '\x0a@' + (qeol3g['systemId'] || '') + '#[line:' + qeol3g['lineNumber'] + ',col:' + qeol3g['columnNumber'] + ']' : void 0x0;
}function gzuh(x2j0y4, wz6mu, hlefo$) {
  return 'string' == typeof x2j0y4 ? x2j0y4['substr'](wz6mu, hlefo$) : x2j0y4['length'] >= wz6mu + hlefo$ || wz6mu ? new java['lang']['String'](x2j0y4, wz6mu, hlefo$) + '' : x2j0y4;
}function gx542sc(k9_d7, vbpr) {
  k9_d7['currentElement'] ? k9_d7['currentElement']['appendChild'](vbpr) : k9_d7['doc']['appendChild'](vbpr);
}g$hfo['prototype']['parseFromString'] = function (mh6u, e$qog) {
  var d8_7k = this['options'],
      oeg = new guzmh(),
      j4y0d = d8_7k['domBuilder'] || new gwhu6z(),
      c54x2s = d8_7k['errorHandler'],
      ehlof$ = d8_7k['locator'],
      gol$q = d8_7k['xmlns'] || {},
      oel3 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ehlof$ && j4y0d['setDocumentLocator'](ehlof$), oeg['errorHandler'] = gp1tvr(c54x2s, j4y0d, ehlof$), oeg['domBuilder'] = d8_7k['domBuilder'] || j4y0d, /\/x?html?$/['test'](e$qog) && (oel3['nbsp'] = '\u00a0', oel3['copy'] = '©', gol$q[''] = 'http://www.w3.org/1999/xhtml'), gol$q['xml'] = gol$q['xml'] || 'http://www.w3.org/XML/1998/namespace', mh6u ? oeg['parse'](mh6u, gol$q, oel3) : oeg['errorHandler']['error']('invalid doc source'), j4y0d['doc'];
}, gwhu6z['prototype'] = { 'startDocument': function () {
    this['doc'] = new gfwmz6()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (rpvb1t, zfwh6m, geq5s3, k897_d) {
    var k_t789 = this['doc'],
        pibv1a = k_t789['createElementNS'](rpvb1t, geq5s3 || zfwh6m),
        wlfo$h = k897_d['length'];gx542sc(this, pibv1a), this['currentElement'] = pibv1a, this['locator'] && gc5qsg(this['locator'], pibv1a);for (var whmuz = 0x0; wlfo$h > whmuz; whmuz++) {
      var rpvb1t = k897_d['getURI'](whmuz),
          c4y20x = k897_d['getValue'](whmuz),
          geq5s3 = k897_d['getQName'](whmuz),
          q3g5s = k_t789['createAttributeNS'](rpvb1t, geq5s3);this['locator'] && gc5qsg(k897_d['getLocator'](whmuz), q3g5s), q3g5s['value'] = q3g5s['nodeValue'] = c4y20x, pibv1a['setAttributeNode'](q3g5s);
    }
  }, 'endElement': function () {
    {
      var x0yj2 = this['currentElement'];x0yj2['tagName'];
    }this['currentElement'] = x0yj2['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (g5q3, s54cx) {
    var rtb1v = this['doc']['createProcessingInstruction'](g5q3, s54cx);this['locator'] && gc5qsg(this['locator'], rtb1v), gx542sc(this, rtb1v);
  }, 'ignorableWhitespace': function () {}, 'characters': function (xs345) {
    if (xs345 = gzuh['apply'](this, arguments)) {
      if (this['cdata']) var ab1p = this['doc']['createCDATASection'](xs345);else var ab1p = this['doc']['createTextNode'](xs345);this['currentElement'] ? this['currentElement']['appendChild'](ab1p) : /^\s*$/['test'](xs345) && this['doc']['appendChild'](ab1p), this['locator'] && gc5qsg(this['locator'], ab1p);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (cs04) {
    (this['locator'] = cs04) && (cs04['lineNumber'] = 0x0);
  }, 'comment': function (xj42y) {
    xj42y = gzuh['apply'](this, arguments);var h$lw6f = this['doc']['createComment'](xj42y);this['locator'] && gc5qsg(this['locator'], h$lw6f), gx542sc(this, h$lw6f);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ogfel$, y907jd, y4x) {
    var tbrk_ = this['doc']['implementation'];if (tbrk_ && tbrk_['createDocumentType']) {
      var d_79jy = tbrk_['createDocumentType'](ogfel$, y907jd, y4x);this['locator'] && gc5qsg(this['locator'], d_79jy), gx542sc(this, d_79jy);
    }
  }, 'warning': function (prbt8) {
    console['warn']('[xmldom warning]\t' + prbt8, ggsqc5(this['locator']));
  }, 'error': function (l$ehof) {
    console['error']('[xmldom error]\t' + l$ehof, ggsqc5(this['locator']));
  }, 'fatalError': function (pr1bav) {
    throw console['error']('[xmldom fatalError]\t' + pr1bav, ggsqc5(this['locator'])), pr1bav;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (bpr1a) {
  gwhu6z['prototype'][bpr1a] = function () {
    return null;
  };
});var guzmh = require('./gggsax')['XMLReader'],
    gfwmz6 = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = g$hfo;