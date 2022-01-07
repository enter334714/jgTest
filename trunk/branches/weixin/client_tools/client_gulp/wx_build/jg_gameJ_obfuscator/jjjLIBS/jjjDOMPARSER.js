var S = wx.$J;
function j1_d28xqi(iz98) {
  this['options'] = iz98 || { 'locator': {} };
}function j1_hziax9(xqd2i8, d1q8m2, en3pj) {
  function cg0y(cloyg0) {
    var c0oygs = xqd2i8[cloyg0];!c0oygs && ko0s && (c0oygs = 0x2 == xqd2i8['length'] ? function (k6rfs) {
      xqd2i8(cloyg0, k6rfs);
    } : xqd2i8), o0cly[cloyg0] = c0oygs && function (ixah) {
      c0oygs('[xmldom ' + cloyg0 + ']\t' + ixah + j1_xz9i(en3pj));
    } || function () {};
  }if (!xqd2i8) {
    if (d1q8m2 instanceof j1_zax9h$) return d1q8m2;xqd2i8 = d1q8m2;
  }var o0cly = {},
      ko0s = xqd2i8 instanceof Function;return en3pj = en3pj || {}, cg0y('warning'), cg0y('error'), cg0y('fatalError'), o0cly;
}function j1_zax9h$() {
  this['cdata'] = !0x1;
}function j1_nwp35(nupbe4, dmfq21) {
  dmfq21['lineNumber'] = nupbe4['lineNumber'], dmfq21['columnNumber'] = nupbe4['columnNumber'];
}function j1_xz9i(mr17f) {
  return mr17f ? '\x0a@' + (mr17f['systemId'] || '') + '#[line:' + mr17f['lineNumber'] + ',col:' + mr17f['columnNumber'] + ']' : void 0x0;
}function j1_m1r76(x$9azh, ug40l, so76y) {
  return 'string' == typeof x$9azh ? x$9azh['substr'](ug40l, so76y) : x$9azh['length'] >= ug40l + so76y || ug40l ? new java['lang']['String'](x$9azh, ug40l, so76y) + '' : x$9azh;
}function j1_iqx2d(lube4, k7fs6) {
  lube4['currentElement'] ? lube4['currentElement']['appendChild'](k7fs6) : lube4['doc']['appendChild'](k7fs6);
}j1_d28xqi['prototype']['parseFromString'] = function (el4p, rdf1m) {
  var celbu4 = this['options'],
      os7y6 = new j1_f21dm(),
      np5jw = celbu4['domBuilder'] || new j1_zax9h$(),
      sry7 = celbu4['errorHandler'],
      enp4bu = celbu4['locator'],
      sr67y = celbu4['xmlns'] || {},
      cs0yg = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return enp4bu && np5jw['setDocumentLocator'](enp4bu), os7y6['errorHandler'] = j1_hziax9(sry7, np5jw, enp4bu), os7y6['domBuilder'] = celbu4['domBuilder'] || np5jw, /\/x?html?$/['test'](rdf1m) && (cs0yg['nbsp'] = '\u00a0', cs0yg['copy'] = '©', sr67y[''] = 'http://www.w3.org/1999/xhtml'), sr67y['xml'] = sr67y['xml'] || 'http://www.w3.org/XML/1998/namespace', el4p ? os7y6['parse'](el4p, sr67y, cs0yg) : os7y6['errorHandler']['error']('invalid doc source'), np5jw['doc'];
}, j1_zax9h$['prototype'] = { 'startDocument': function () {
    this['doc'] = new j1_n3p()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (lcebu, hi9xa, p5bnj, oc0gu) {
    var $xh9za = this['doc'],
        i8q21d = $xh9za['createElementNS'](lcebu, p5bnj || hi9xa),
        ebpnu = oc0gu['length'];j1_iqx2d(this, i8q21d), this['currentElement'] = i8q21d, this['locator'] && j1_nwp35(this['locator'], i8q21d);for (var mdr = 0x0; ebpnu > mdr; mdr++) {
      var lcebu = oc0gu['getURI'](mdr),
          i298zx = oc0gu['getValue'](mdr),
          p5bnj = oc0gu['getQName'](mdr),
          go0uc = $xh9za['createAttributeNS'](lcebu, p5bnj);this['locator'] && j1_nwp35(oc0gu['getLocator'](mdr), go0uc), go0uc['value'] = go0uc['nodeValue'] = i298zx, i8q21d['setAttributeNode'](go0uc);
    }
  }, 'endElement': function () {
    {
      var sgoyk0 = this['currentElement'];sgoyk0['tagName'];
    }this['currentElement'] = sgoyk0['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ahz$x, pnb5) {
    var soy0c = this['doc']['createProcessingInstruction'](ahz$x, pnb5);this['locator'] && j1_nwp35(this['locator'], soy0c), j1_iqx2d(this, soy0c);
  }, 'ignorableWhitespace': function () {}, 'characters': function (en5p3j) {
    if (en5p3j = j1_m1r76['apply'](this, arguments)) {
      if (this['cdata']) var l0cyo = this['doc']['createCDATASection'](en5p3j);else var l0cyo = this['doc']['createTextNode'](en5p3j);this['currentElement'] ? this['currentElement']['appendChild'](l0cyo) : /^\s*$/['test'](en5p3j) && this['doc']['appendChild'](l0cyo), this['locator'] && j1_nwp35(this['locator'], l0cyo);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (s6f7k) {
    (this['locator'] = s6f7k) && (s6f7k['lineNumber'] = 0x0);
  }, 'comment': function (f21md) {
    f21md = j1_m1r76['apply'](this, arguments);var i2qdx = this['doc']['createComment'](f21md);this['locator'] && j1_nwp35(this['locator'], i2qdx), j1_iqx2d(this, i2qdx);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (l4u0cg, rmq7, kso6g) {
    var zhax9i = this['doc']['implementation'];if (zhax9i && zhax9i['createDocumentType']) {
      var le4upb = zhax9i['createDocumentType'](l4u0cg, rmq7, kso6g);this['locator'] && j1_nwp35(this['locator'], le4upb), j1_iqx2d(this, le4upb);
    }
  }, 'warning': function (gy0) {
    console['warn']('[xmldom warning]\t' + gy0, j1_xz9i(this['locator']));
  }, 'error': function (goy0c) {
    console['error']('[xmldom error]\t' + goy0c, j1_xz9i(this['locator']));
  }, 'fatalError': function (kmr67) {
    throw console['error']('[xmldom fatalError]\t' + kmr67, j1_xz9i(this['locator'])), kmr67;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (d1q82i) {
  j1_zax9h$['prototype'][d1q82i] = function () {
    return null;
  };
});var j1_f21dm = require('./jjjSAX')['XMLReader'],
    j1_n3p = exports['DOMImplementation'] = require('./jjjDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./jjjDOM')['XMLSerializer'], exports['DOMParser'] = j1_d28xqi;