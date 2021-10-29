var U = wx.$k;
function K1_hei7(z$xul) {
  this['options'] = z$xul || { 'locator': {} };
}function K1_d_r$l(p3rd_5, r3pd5_, e6kh9) {
  function vw1n(pfr35g) {
    var nvoq01 = p3rd_5[pfr35g];!nvoq01 && v1qno0 && (nvoq01 = 0x2 == p3rd_5['length'] ? function (eji7m) {
      p3rd_5(pfr35g, eji7m);
    } : p3rd_5), hks6ei[pfr35g] = nvoq01 && function (p5r_$) {
      nvoq01('[xmldom ' + pfr35g + ']\t' + p5r_$ + K1_da$l_(e6kh9));
    } || function () {};
  }if (!p3rd_5) {
    if (r3pd5_ instanceof K1_aulbz) return r3pd5_;p3rd_5 = r3pd5_;
  }var hks6ei = {},
      v1qno0 = p3rd_5 instanceof Function;return e6kh9 = e6kh9 || {}, vw1n('warning'), vw1n('error'), vw1n('fatalError'), hks6ei;
}function K1_aulbz() {
  this['cdata'] = !0x1;
}function K1_q098n2(k890s, pr_$ld) {
  pr_$ld['lineNumber'] = k890s['lineNumber'], pr_$ld['columnNumber'] = k890s['columnNumber'];
}function K1_da$l_(the6i7) {
  return the6i7 ? '\x0a@' + (the6i7['systemId'] || '') + '#[line:' + the6i7['lineNumber'] + ',col:' + the6i7['columnNumber'] + ']' : void 0x0;
}function K1__rpd5(wv1noq, wobz1, r3f5g) {
  return 'string' == typeof wv1noq ? wv1noq['substr'](wobz1, r3f5g) : wv1noq['length'] >= wobz1 + r3f5g || wobz1 ? new java['lang']['String'](wv1noq, wobz1, r3f5g) + '' : wv1noq;
}function K1_k92h(xwaubz, axuzw) {
  xwaubz['currentElement'] ? xwaubz['currentElement']['appendChild'](axuzw) : xwaubz['doc']['appendChild'](axuzw);
}K1_hei7['prototype']['parseFromString'] = function (te7i6h, wbzuax) {
  var wov1qn = this['options'],
      _r$5p = new K1_$rdl_p(),
      bzalx = wov1qn['domBuilder'] || new K1_aulbz(),
      v1no0q = wov1qn['errorHandler'],
      $uaxdl = wov1qn['locator'],
      bxzalu = wov1qn['xmlns'] || {},
      zwbxo = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return $uaxdl && bzalx['setDocumentLocator']($uaxdl), _r$5p['errorHandler'] = K1_d_r$l(v1no0q, bzalx, $uaxdl), _r$5p['domBuilder'] = wov1qn['domBuilder'] || bzalx, /\/x?html?$/['test'](wbzuax) && (zwbxo['nbsp'] = '\u00a0', zwbxo['copy'] = '©', bxzalu[''] = 'http://www.w3.org/1999/xhtml'), bxzalu['xml'] = bxzalu['xml'] || 'http://www.w3.org/XML/1998/namespace', te7i6h ? _r$5p['parse'](te7i6h, bxzalu, zwbxo) : _r$5p['errorHandler']['error']('invalid doc source'), bzalx['doc'];
}, K1_aulbz['prototype'] = { 'startDocument': function () {
    this['doc'] = new K1_z1wvob()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (k6s2, wbozv1, ubxla, d_$a) {
    var ad$lux = this['doc'],
        h9sk26 = ad$lux['createElementNS'](k6s2, ubxla || wbozv1),
        oqnvw1 = d_$a['length'];K1_k92h(this, h9sk26), this['currentElement'] = h9sk26, this['locator'] && K1_q098n2(this['locator'], h9sk26);for (var s8029k = 0x0; oqnvw1 > s8029k; s8029k++) {
      var k6s2 = d_$a['getURI'](s8029k),
          r3d = d_$a['getValue'](s8029k),
          ubxla = d_$a['getQName'](s8029k),
          bxoazw = ad$lux['createAttributeNS'](k6s2, ubxla);this['locator'] && K1_q098n2(d_$a['getLocator'](s8029k), bxoazw), bxoazw['value'] = bxoazw['nodeValue'] = r3d, h9sk26['setAttributeNode'](bxoazw);
    }
  }, 'endElement': function () {
    {
      var c3fgy5 = this['currentElement'];c3fgy5['tagName'];
    }this['currentElement'] = c3fgy5['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (l$uzxa, ek69sh) {
    var fg53y = this['doc']['createProcessingInstruction'](l$uzxa, ek69sh);this['locator'] && K1_q098n2(this['locator'], fg53y), K1_k92h(this, fg53y);
  }, 'ignorableWhitespace': function () {}, 'characters': function (sk8920) {
    if (sk8920 = K1__rpd5['apply'](this, arguments)) {
      if (this['cdata']) var q10ov = this['doc']['createCDATASection'](sk8920);else var q10ov = this['doc']['createTextNode'](sk8920);this['currentElement'] ? this['currentElement']['appendChild'](q10ov) : /^\s*$/['test'](sk8920) && this['doc']['appendChild'](q10ov), this['locator'] && K1_q098n2(this['locator'], q10ov);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (zbxovw) {
    (this['locator'] = zbxovw) && (zbxovw['lineNumber'] = 0x0);
  }, 'comment': function (r35fp) {
    r35fp = K1__rpd5['apply'](this, arguments);var ieth6 = this['doc']['createComment'](r35fp);this['locator'] && K1_q098n2(this['locator'], ieth6), K1_k92h(this, ieth6);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (jt7emi, _d5r3p, zwbovx) {
    var adlx = this['doc']['implementation'];if (adlx && adlx['createDocumentType']) {
      var uwbaxz = adlx['createDocumentType'](jt7emi, _d5r3p, zwbovx);this['locator'] && K1_q098n2(this['locator'], uwbaxz), K1_k92h(this, uwbaxz);
    }
  }, 'warning': function (xzwbua) {
    console['warn']('[xmldom warning]\t' + xzwbua, K1_da$l_(this['locator']));
  }, 'error': function (g5yfc) {
    console['error']('[xmldom error]\t' + g5yfc, K1_da$l_(this['locator']));
  }, 'fatalError': function (xua$ld) {
    throw console['error']('[xmldom fatalError]\t' + xua$ld, K1_da$l_(this['locator'])), xua$ld;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ul$za) {
  K1_aulbz['prototype'][ul$za] = function () {
    return null;
  };
});var K1_$rdl_p = require('./kkkSAX')['XMLReader'],
    K1_z1wvob = exports['DOMImplementation'] = require('./kkkDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./kkkDOM')['XMLSerializer'], exports['DOMParser'] = K1_hei7;