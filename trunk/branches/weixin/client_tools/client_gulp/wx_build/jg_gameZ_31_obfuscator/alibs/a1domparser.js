var c = wx.$a;
function gf1ux(bmac$) {
  this['options'] = bmac$ || { 'locator': {} };
}function gu1g2xf(qt8rd6, o4ew_0, f21xs) {
  function vkdh6($amlbc) {
    var g_uw2e = qt8rd6[$amlbc];!g_uw2e && mb$yc && (g_uw2e = 0x2 == qt8rd6['length'] ? function (t85r73) {
      qt8rd6($amlbc, t85r73);
    } : qt8rd6), lmab9$[$amlbc] = g_uw2e && function (w_4ge) {
      g_uw2e('[xmldom ' + $amlbc + ']\t' + w_4ge + gg_euw(f21xs));
    } || function () {};
  }if (!qt8rd6) {
    if (o4ew_0 instanceof gd8rtq5) return o4ew_0;qt8rd6 = o4ew_0;
  }var lmab9$ = {},
      mb$yc = qt8rd6 instanceof Function;return f21xs = f21xs || {}, vkdh6('warning'), vkdh6('error'), vkdh6('fatalError'), lmab9$;
}function gd8rtq5() {
  this['cdata'] = !0x1;
}function gq58t7r(nz6h, qdk6) {
  qdk6['lineNumber'] = nz6h['lineNumber'], qdk6['columnNumber'] = nz6h['columnNumber'];
}function gg_euw(kqdh6z) {
  return kqdh6z ? '\x0a@' + (kqdh6z['systemId'] || '') + '#[line:' + kqdh6z['lineNumber'] + ',col:' + kqdh6z['columnNumber'] + ']' : void 0x0;
}function gvhz6nk(lb0y$c, q8k6d, q78) {
  return 'string' == typeof lb0y$c ? lb0y$c['substr'](q8k6d, q78) : lb0y$c['length'] >= q8k6d + q78 || q8k6d ? new java['lang']['String'](lb0y$c, q8k6d, q78) + '' : lb0y$c;
}function gt35p(wu, bm$) {
  wu['currentElement'] ? wu['currentElement']['appendChild'](bm$) : wu['doc']['appendChild'](bm$);
}gf1ux['prototype']['parseFromString'] = function (wueo_4, zkd68) {
  var y4_oc0 = this['options'],
      hkq6 = new gjsnzvh(),
      cblam = y4_oc0['domBuilder'] || new gd8rtq5(),
      f1gu = y4_oc0['errorHandler'],
      _c4y0o = y4_oc0['locator'],
      znjhk = y4_oc0['xmlns'] || {},
      xsjnh = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _c4y0o && cblam['setDocumentLocator'](_c4y0o), hkq6['errorHandler'] = gu1g2xf(f1gu, cblam, _c4y0o), hkq6['domBuilder'] = y4_oc0['domBuilder'] || cblam, /\/x?html?$/['test'](zkd68) && (xsjnh['nbsp'] = '\u00a0', xsjnh['copy'] = '©', znjhk[''] = 'http://www.w3.org/1999/xhtml'), znjhk['xml'] = znjhk['xml'] || 'http://www.w3.org/XML/1998/namespace', wueo_4 ? hkq6['parse'](wueo_4, znjhk, xsjnh) : hkq6['errorHandler']['error']('invalid doc source'), cblam['doc'];
}, gd8rtq5['prototype'] = { 'startDocument': function () {
    this['doc'] = new gu4_gwe()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (g1, yo40e_, y4ob0c, lb0yc$) {
    var dtkq6 = this['doc'],
        jxfvs = dtkq6['createElementNS'](g1, y4ob0c || yo40e_),
        _4geu = lb0yc$['length'];gt35p(this, jxfvs), this['currentElement'] = jxfvs, this['locator'] && gq58t7r(this['locator'], jxfvs);for (var u_o = 0x0; _4geu > u_o; u_o++) {
      var g1 = lb0yc$['getURI'](u_o),
          jn1sfx = lb0yc$['getValue'](u_o),
          y4ob0c = lb0yc$['getQName'](u_o),
          xu1fg2 = dtkq6['createAttributeNS'](g1, y4ob0c);this['locator'] && gq58t7r(lb0yc$['getLocator'](u_o), xu1fg2), xu1fg2['value'] = xu1fg2['nodeValue'] = jn1sfx, jxfvs['setAttributeNode'](xu1fg2);
    }
  }, 'endElement': function () {
    {
      var rt5q78 = this['currentElement'];rt5q78['tagName'];
    }this['currentElement'] = rt5q78['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (qr8t57, gfxs12) {
    var y4ocb0 = this['doc']['createProcessingInstruction'](qr8t57, gfxs12);this['locator'] && gq58t7r(this['locator'], y4ocb0), gt35p(this, y4ocb0);
  }, 'ignorableWhitespace': function () {}, 'characters': function (k6d8qz) {
    if (k6d8qz = gvhz6nk['apply'](this, arguments)) {
      if (this['cdata']) var oc0 = this['doc']['createCDATASection'](k6d8qz);else var oc0 = this['doc']['createTextNode'](k6d8qz);this['currentElement'] ? this['currentElement']['appendChild'](oc0) : /^\s*$/['test'](k6d8qz) && this['doc']['appendChild'](oc0), this['locator'] && gq58t7r(this['locator'], oc0);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (t35r87) {
    (this['locator'] = t35r87) && (t35r87['lineNumber'] = 0x0);
  }, 'comment': function (boy0) {
    boy0 = gvhz6nk['apply'](this, arguments);var tp75r3 = this['doc']['createComment'](boy0);this['locator'] && gq58t7r(this['locator'], tp75r3), gt35p(this, tp75r3);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (euw2g1, jx2, bml$9) {
    var hn6 = this['doc']['implementation'];if (hn6 && hn6['createDocumentType']) {
      var z8q = hn6['createDocumentType'](euw2g1, jx2, bml$9);this['locator'] && gq58t7r(this['locator'], z8q), gt35p(this, z8q);
    }
  }, 'warning': function (g_u4) {
    console['warn']('[xmldom warning]\t' + g_u4, gg_euw(this['locator']));
  }, 'error': function (lcym$) {
    console['error']('[xmldom error]\t' + lcym$, gg_euw(this['locator']));
  }, 'fatalError': function (u2w1gf) {
    throw console['error']('[xmldom fatalError]\t' + u2w1gf, gg_euw(this['locator'])), u2w1gf;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (egu21w) {
  gd8rtq5['prototype'][egu21w] = function () {
    return null;
  };
});var gjsnzvh = require('./a1sax')['XMLReader'],
    gu4_gwe = exports['DOMImplementation'] = require('./a1dom')['DOMImplementation'];exports['XMLSerializer'] = require('./a1dom')['XMLSerializer'], exports['DOMParser'] = gf1ux;