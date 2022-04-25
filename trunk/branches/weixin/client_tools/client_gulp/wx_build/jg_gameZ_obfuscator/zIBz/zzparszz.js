var B = wx.$z;
function zpf64vg(za9exs) {
  this['options'] = za9exs || { 'locator': {} };
}function zytdb(s1ph9x, v6l4, ij) {
  function eas9zx(zsaot) {
    var m$j3qi = s1ph9x[zsaot];!m$j3qi && ph4g9 && (m$j3qi = 0x2 == s1ph9x['length'] ? function (fn64v) {
      s1ph9x(zsaot, fn64v);
    } : s1ph9x), b8r[zsaot] = m$j3qi && function (lvi7) {
      m$j3qi('[xmldom ' + zsaot + ']\t' + lvi7 + zrb52(ij));
    } || function () {};
  }if (!s1ph9x) {
    if (v6l4 instanceof zh1pg9x) return v6l4;s1ph9x = v6l4;
  }var b8r = {},
      ph4g9 = s1ph9x instanceof Function;return ij = ij || {}, eas9zx('warning'), eas9zx('error'), eas9zx('fatalError'), b8r;
}function zh1pg9x() {
  this['cdata'] = !0x1;
}function zmn7ivl(tobdy, asoetz) {
  asoetz['lineNumber'] = tobdy['lineNumber'], asoetz['columnNumber'] = tobdy['columnNumber'];
}function zrb52(eatzso) {
  return eatzso ? '\x0a@' + (eatzso['systemId'] || '') + '#[line:' + eatzso['lineNumber'] + ',col:' + eatzso['columnNumber'] + ']' : void 0x0;
}function ztozedy(kobyt, dykbo8, kdyzot) {
  return 'string' == typeof kobyt ? kobyt['substr'](dykbo8, kdyzot) : kobyt['length'] >= dykbo8 + kdyzot || dykbo8 ? new java['lang']['String'](kobyt, dykbo8, kdyzot) + '' : kobyt;
}function zru285(fiv, kb85r) {
  fiv['currentElement'] ? fiv['currentElement']['appendChild'](kb85r) : fiv['doc']['appendChild'](kb85r);
}zpf64vg['prototype']['parseFromString'] = function (b8kr, zaxts) {
  var tzaoe = this['options'],
      tsozea = new zm7li3(),
      pgh419 = tzaoe['domBuilder'] || new zh1pg9x(),
      u5r82_ = tzaoe['errorHandler'],
      i7flnv = tzaoe['locator'],
      m$q37 = tzaoe['xmlns'] || {},
      v6nl4f = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return i7flnv && pgh419['setDocumentLocator'](i7flnv), tsozea['errorHandler'] = zytdb(u5r82_, pgh419, i7flnv), tsozea['domBuilder'] = tzaoe['domBuilder'] || pgh419, /\/x?html?$/['test'](zaxts) && (v6nl4f['nbsp'] = '\u00a0', v6nl4f['copy'] = '©', m$q37[''] = 'http://www.w3.org/1999/xhtml'), m$q37['xml'] = m$q37['xml'] || 'http://www.w3.org/XML/1998/namespace', b8kr ? tsozea['parse'](b8kr, m$q37, v6nl4f) : tsozea['errorHandler']['error']('invalid doc source'), pgh419['doc'];
}, zh1pg9x['prototype'] = { 'startDocument': function () {
    this['doc'] = new zr2uw()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (fvl7i, kbtdyo, bytok, ybkdo8) {
    var r2w5 = this['doc'],
        qn7 = r2w5['createElementNS'](fvl7i, bytok || kbtdyo),
        _8u = ybkdo8['length'];zru285(this, qn7), this['currentElement'] = qn7, this['locator'] && zmn7ivl(this['locator'], qn7);for (var i3nq = 0x0; _8u > i3nq; i3nq++) {
      var fvl7i = ybkdo8['getURI'](i3nq),
          bdkoyt = ybkdo8['getValue'](i3nq),
          bytok = ybkdo8['getQName'](i3nq),
          s19xph = r2w5['createAttributeNS'](fvl7i, bytok);this['locator'] && zmn7ivl(ybkdo8['getLocator'](i3nq), s19xph), s19xph['value'] = s19xph['nodeValue'] = bdkoyt, qn7['setAttributeNode'](s19xph);
    }
  }, 'endElement': function () {
    {
      var b8k_ = this['currentElement'];b8k_['tagName'];
    }this['currentElement'] = b8k_['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (o8kbdy, s1h9xp) {
    var seaot = this['doc']['createProcessingInstruction'](o8kbdy, s1h9xp);this['locator'] && zmn7ivl(this['locator'], seaot), zru285(this, seaot);
  }, 'ignorableWhitespace': function () {}, 'characters': function (zxe9) {
    if (zxe9 = ztozedy['apply'](this, arguments)) {
      if (this['cdata']) var x9sae1 = this['doc']['createCDATASection'](zxe9);else var x9sae1 = this['doc']['createTextNode'](zxe9);this['currentElement'] ? this['currentElement']['appendChild'](x9sae1) : /^\s*$/['test'](zxe9) && this['doc']['appendChild'](x9sae1), this['locator'] && zmn7ivl(this['locator'], x9sae1);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (l6vgf4) {
    (this['locator'] = l6vgf4) && (l6vgf4['lineNumber'] = 0x0);
  }, 'comment': function (eoydz) {
    eoydz = ztozedy['apply'](this, arguments);var mi7$q = this['doc']['createComment'](eoydz);this['locator'] && zmn7ivl(this['locator'], mi7$q), zru285(this, mi7$q);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ydo, etosaz, jm3$iq) {
    var $jq3 = this['doc']['implementation'];if ($jq3 && $jq3['createDocumentType']) {
      var $qjm3 = $jq3['createDocumentType'](ydo, etosaz, jm3$iq);this['locator'] && zmn7ivl(this['locator'], $qjm3), zru285(this, $qjm3);
    }
  }, 'warning': function (dyzo) {
    console['warn']('[xmldom warning]\t' + dyzo, zrb52(this['locator']));
  }, 'error': function (teaozs) {
    console['error']('[xmldom error]\t' + teaozs, zrb52(this['locator']));
  }, 'fatalError': function (m3q7n) {
    throw console['error']('[xmldom fatalError]\t' + m3q7n, zrb52(this['locator'])), m3q7n;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (tza) {
  zh1pg9x['prototype'][tza] = function () {
    return null;
  };
});var zm7li3 = require('./zzczz')['XMLReader'],
    zr2uw = exports['DOMImplementation'] = require('./zzDOzz')['DOMImplementation'];exports['XMLSerializer'] = require('./zzDOzz')['XMLSerializer'], exports['DOMParser'] = zpf64vg;