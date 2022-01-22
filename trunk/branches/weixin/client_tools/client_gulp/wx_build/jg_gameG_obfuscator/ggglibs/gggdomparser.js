var m = wx.$g;
function ga5xib(v7qcg) {
  this['options'] = v7qcg || { 'locator': {} };
}function gyhkxw(ls8gc, aipb5, tzo) {
  function v7yq($mrj6u) {
    var zo32d4 = ls8gc[$mrj6u];!zo32d4 && _t3fo4 && (zo32d4 = 0x2 == ls8gc['length'] ? function (svgc7) {
      ls8gc($mrj6u, svgc7);
    } : ls8gc), d6oz2[$mrj6u] = zo32d4 && function (p0_tf) {
      zo32d4('[xmldom ' + $mrj6u + ']\t' + p0_tf + gqvg7e(tzo));
    } || function () {};
  }if (!ls8gc) {
    if (aipb5 instanceof gcgl89) return aipb5;ls8gc = aipb5;
  }var d6oz2 = {},
      _t3fo4 = ls8gc instanceof Function;return tzo = tzo || {}, v7yq('warning'), v7yq('error'), v7yq('fatalError'), d6oz2;
}function gcgl89() {
  this['cdata'] = !0x1;
}function gfp50b_(xhia15, p5f_) {
  p5f_['lineNumber'] = xhia15['lineNumber'], p5f_['columnNumber'] = xhia15['columnNumber'];
}function gqvg7e(vk1) {
  return vk1 ? '\x0a@' + (vk1['systemId'] || '') + '#[line:' + vk1['lineNumber'] + ',col:' + vk1['columnNumber'] + ']' : void 0x0;
}function gp5xbia(akxih, gv7yqe, csvg7) {
  return 'string' == typeof akxih ? akxih['substr'](gv7yqe, csvg7) : akxih['length'] >= gv7yqe + csvg7 || gv7yqe ? new java['lang']['String'](akxih, gv7yqe, csvg7) + '' : akxih;
}function gjur2$6(hewk1y, b_fpt) {
  hewk1y['currentElement'] ? hewk1y['currentElement']['appendChild'](b_fpt) : hewk1y['doc']['appendChild'](b_fpt);
}ga5xib['prototype']['parseFromString'] = function (ve1ykw, hiaxb) {
  var ka1ixh = this['options'],
      aihxk = new gt4o3(),
      hiak1 = ka1ixh['domBuilder'] || new gcgl89(),
      k1ix = ka1ixh['errorHandler'],
      m6u = ka1ixh['locator'],
      pbf_t = ka1ixh['xmlns'] || {},
      ewk7 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return m6u && hiak1['setDocumentLocator'](m6u), aihxk['errorHandler'] = gyhkxw(k1ix, hiak1, m6u), aihxk['domBuilder'] = ka1ixh['domBuilder'] || hiak1, /\/x?html?$/['test'](hiaxb) && (ewk7['nbsp'] = '\u00a0', ewk7['copy'] = '©', pbf_t[''] = 'http://www.w3.org/1999/xhtml'), pbf_t['xml'] = pbf_t['xml'] || 'http://www.w3.org/XML/1998/namespace', ve1ykw ? aihxk['parse'](ve1ykw, pbf_t, ewk7) : aihxk['errorHandler']['error']('invalid doc source'), hiak1['doc'];
}, gcgl89['prototype'] = { 'startDocument': function () {
    this['doc'] = new gwqvy7e()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (akxw1, bxi, ey1kw, u$62r) {
    var c8qsg7 = this['doc'],
        fo43 = c8qsg7['createElementNS'](akxw1, ey1kw || bxi),
        kiha = u$62r['length'];gjur2$6(this, fo43), this['currentElement'] = fo43, this['locator'] && gfp50b_(this['locator'], fo43);for (var o43t = 0x0; kiha > o43t; o43t++) {
      var akxw1 = u$62r['getURI'](o43t),
          qevcg = u$62r['getValue'](o43t),
          ey1kw = u$62r['getQName'](o43t),
          rju$6m = c8qsg7['createAttributeNS'](akxw1, ey1kw);this['locator'] && gfp50b_(u$62r['getLocator'](o43t), rju$6m), rju$6m['value'] = rju$6m['nodeValue'] = qevcg, fo43['setAttributeNode'](rju$6m);
    }
  }, 'endElement': function () {
    {
      var dzt4 = this['currentElement'];dzt4['tagName'];
    }this['currentElement'] = dzt4['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (yvewk7, tf4o_3) {
    var ihb5xa = this['doc']['createProcessingInstruction'](yvewk7, tf4o_3);this['locator'] && gfp50b_(this['locator'], ihb5xa), gjur2$6(this, ihb5xa);
  }, 'ignorableWhitespace': function () {}, 'characters': function (p_ib) {
    if (p_ib = gp5xbia['apply'](this, arguments)) {
      if (this['cdata']) var dr62 = this['doc']['createCDATASection'](p_ib);else var dr62 = this['doc']['createTextNode'](p_ib);this['currentElement'] ? this['currentElement']['appendChild'](dr62) : /^\s*$/['test'](p_ib) && this['doc']['appendChild'](dr62), this['locator'] && gfp50b_(this['locator'], dr62);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (o43dz2) {
    (this['locator'] = o43dz2) && (o43dz2['lineNumber'] = 0x0);
  }, 'comment': function (xkawh) {
    xkawh = gp5xbia['apply'](this, arguments);var yq7v = this['doc']['createComment'](xkawh);this['locator'] && gfp50b_(this['locator'], yq7v), gjur2$6(this, yq7v);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ft043, i05, wykev7) {
    var r6zjd = this['doc']['implementation'];if (r6zjd && r6zjd['createDocumentType']) {
      var b5_f = r6zjd['createDocumentType'](ft043, i05, wykev7);this['locator'] && gfp50b_(this['locator'], b5_f), gjur2$6(this, b5_f);
    }
  }, 'warning': function (r6jz$2) {
    console['warn']('[xmldom warning]\t' + r6jz$2, gqvg7e(this['locator']));
  }, 'error': function (u6$2jr) {
    console['error']('[xmldom error]\t' + u6$2jr, gqvg7e(this['locator']));
  }, 'fatalError': function (aixk1h) {
    throw console['error']('[xmldom fatalError]\t' + aixk1h, gqvg7e(this['locator'])), aixk1h;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (zrj6d) {
  gcgl89['prototype'][zrj6d] = function () {
    return null;
  };
});var gt4o3 = require('./gggsax')['XMLReader'],
    gwqvy7e = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = ga5xib;