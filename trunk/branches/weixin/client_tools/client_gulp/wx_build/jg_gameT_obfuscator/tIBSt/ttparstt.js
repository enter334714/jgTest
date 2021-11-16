var M = wx.$T;
function tt2c4il(rgn381) {
  this['options'] = rgn381 || { 'locator': {} };
}function trbaksj(h5wm1, dfz, tv92) {
  function jusabk(dc9$i) {
    var fd9$v = h5wm1[dc9$i];!fd9$v && njr38 && (fd9$v = 0x2 == h5wm1['length'] ? function (pofze7) {
      h5wm1(dc9$i, pofze7);
    } : h5wm1), e7ozfq[dc9$i] = fd9$v && function (pf$9dv) {
      fd9$v('[xmldom ' + dc9$i + ']\t' + pf$9dv + tn685(tv92));
    } || function () {};
  }if (!h5wm1) {
    if (dfz instanceof tmw5hy) return dfz;h5wm1 = dfz;
  }var e7ozfq = {},
      njr38 = h5wm1 instanceof Function;return tv92 = tv92 || {}, jusabk('warning'), jusabk('error'), jusabk('fatalError'), e7ozfq;
}function tmw5hy() {
  this['cdata'] = !0x1;
}function tkarjbg(dz$f, y_xhm0) {
  y_xhm0['lineNumber'] = dz$f['lineNumber'], y_xhm0['columnNumber'] = dz$f['columnNumber'];
}function tn685(h51m6) {
  return h51m6 ? '\x0a@' + (h51m6['systemId'] || '') + '#[line:' + h51m6['lineNumber'] + ',col:' + h51m6['columnNumber'] + ']' : void 0x0;
}function tbsjuka(tc2li, tc4i92, ksab) {
  return 'string' == typeof tc2li ? tc2li['substr'](tc4i92, ksab) : tc2li['length'] >= tc4i92 + ksab || tc4i92 ? new java['lang']['String'](tc2li, tc4i92, ksab) + '' : tc2li;
}function tksbu(bg3jn, akjbg) {
  bg3jn['currentElement'] ? bg3jn['currentElement']['appendChild'](akjbg) : bg3jn['doc']['appendChild'](akjbg);
}tt2c4il['prototype']['parseFromString'] = function (dfp$v, zfop7e) {
  var g13n = this['options'],
      v9idc = new tg3nrj(),
      i9d$pv = g13n['domBuilder'] || new tmw5hy(),
      h651w8 = g13n['errorHandler'],
      x_qe0y = g13n['locator'],
      h8w615 = g13n['xmlns'] || {},
      hxyw_ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return x_qe0y && i9d$pv['setDocumentLocator'](x_qe0y), v9idc['errorHandler'] = trbaksj(h651w8, i9d$pv, x_qe0y), v9idc['domBuilder'] = g13n['domBuilder'] || i9d$pv, /\/x?html?$/['test'](zfop7e) && (hxyw_['nbsp'] = '\u00a0', hxyw_['copy'] = '©', h8w615[''] = 'http://www.w3.org/1999/xhtml'), h8w615['xml'] = h8w615['xml'] || 'http://www.w3.org/XML/1998/namespace', dfp$v ? v9idc['parse'](dfp$v, h8w615, hxyw_) : v9idc['errorHandler']['error']('invalid doc source'), i9d$pv['doc'];
}, tmw5hy['prototype'] = { 'startDocument': function () {
    this['doc'] = new tnbragj()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (rbgka, g3n81r, i$9v, lic2t4) {
    var d$p7 = this['doc'],
        d7fzp = d$p7['createElementNS'](rbgka, i$9v || g3n81r),
        asjbkr = lic2t4['length'];tksbu(this, d7fzp), this['currentElement'] = d7fzp, this['locator'] && tkarjbg(this['locator'], d7fzp);for (var $9v = 0x0; asjbkr > $9v; $9v++) {
      var rbgka = lic2t4['getURI']($9v),
          pv = lic2t4['getValue']($9v),
          i$9v = lic2t4['getQName']($9v),
          n8r3 = d$p7['createAttributeNS'](rbgka, i$9v);this['locator'] && tkarjbg(lic2t4['getLocator']($9v), n8r3), n8r3['value'] = n8r3['nodeValue'] = pv, d7fzp['setAttributeNode'](n8r3);
    }
  }, 'endElement': function () {
    {
      var dp$9vi = this['currentElement'];dp$9vi['tagName'];
    }this['currentElement'] = dp$9vi['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (c2itl, ey0qxo) {
    var t9vc$ = this['doc']['createProcessingInstruction'](c2itl, ey0qxo);this['locator'] && tkarjbg(this['locator'], t9vc$), tksbu(this, t9vc$);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ajkbrg) {
    if (ajkbrg = tbsjuka['apply'](this, arguments)) {
      if (this['cdata']) var brkajs = this['doc']['createCDATASection'](ajkbrg);else var brkajs = this['doc']['createTextNode'](ajkbrg);this['currentElement'] ? this['currentElement']['appendChild'](brkajs) : /^\s*$/['test'](ajkbrg) && this['doc']['appendChild'](brkajs), this['locator'] && tkarjbg(this['locator'], brkajs);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (w6m5_h) {
    (this['locator'] = w6m5_h) && (w6m5_h['lineNumber'] = 0x0);
  }, 'comment': function (m0y_x) {
    m0y_x = tbsjuka['apply'](this, arguments);var $fpvd = this['doc']['createComment'](m0y_x);this['locator'] && tkarjbg(this['locator'], $fpvd), tksbu(this, $fpvd);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (cit9$v, i4cl, pf7$d) {
    var yw_mhx = this['doc']['implementation'];if (yw_mhx && yw_mhx['createDocumentType']) {
      var bjsuk = yw_mhx['createDocumentType'](cit9$v, i4cl, pf7$d);this['locator'] && tkarjbg(this['locator'], bjsuk), tksbu(this, bjsuk);
    }
  }, 'warning': function (xhm_yw) {
    console['warn']('[xmldom warning]\t' + xhm_yw, tn685(this['locator']));
  }, 'error': function (yxh_m0) {
    console['error']('[xmldom error]\t' + yxh_m0, tn685(this['locator']));
  }, 'fatalError': function (x_e0) {
    throw console['error']('[xmldom fatalError]\t' + x_e0, tn685(this['locator'])), x_e0;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (z7pfod) {
  tmw5hy['prototype'][z7pfod] = function () {
    return null;
  };
});var tg3nrj = require('./tT12tt')['XMLReader'],
    tnbragj = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = tt2c4il;