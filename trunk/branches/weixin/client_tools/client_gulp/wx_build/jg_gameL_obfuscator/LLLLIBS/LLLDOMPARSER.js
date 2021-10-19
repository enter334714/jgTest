var W = wx.$l;
function L9s6kmd(r2xh) {
  this['options'] = r2xh || { 'locator': {} };
}function L9skw6dm(p7ksd, uhy20x, yh2u0x) {
  function mdks6w(an0$5) {
    var g9fe = p7ksd[an0$5];!g9fe && wm6sdk && (g9fe = 0x2 == p7ksd['length'] ? function (m6w1v) {
      p7ksd(an0$5, m6w1v);
    } : p7ksd), v1wc6q[an0$5] = g9fe ? function (rhxu2y) {
      g9fe('[xmldom ' + an0$5 + ']\t' + rhxu2y + L9sw6mdk(yh2u0x));
    } : function () {};
  }if (!p7ksd) {
    if (uhy20x instanceof L9gnat) return uhy20x;p7ksd = uhy20x;
  }var v1wc6q = {},
      wm6sdk = p7ksd instanceof Function;return yh2u0x = yh2u0x || {}, mdks6w('warning'), mdks6w('error'), mdks6w('fatalError'), v1wc6q;
}function L9gnat() {
  this['cdata'] = !0x1;
}function L9vdk6(k76d, x2yuhr) {
  x2yuhr['lineNumber'] = k76d['lineNumber'], x2yuhr['columnNumber'] = k76d['columnNumber'];
}function L9sw6mdk(k7sdm6) {
  return k7sdm6 ? '\x0a@' + (k7sdm6['systemId'] || '') + '#[line:' + k7sdm6['lineNumber'] + ',col:' + k7sdm6['columnNumber'] + ']' : void 0x0;
}function L9bfep9(s6mdw, c1owq, xy0hu) {
  return 'string' == typeof s6mdw ? s6mdw['substr'](c1owq, xy0hu) : s6mdw['length'] >= c1owq + xy0hu || c1owq ? new java['lang']['String'](s6mdw, c1owq, xy0hu) + '' : s6mdw;
}function L9b8epf9($n50ih, dwk6mv) {
  ($n50ih['currentElement'] || $n50ih['doc'])['appendChild'](dwk6mv);
}L9s6kmd['prototype']['parseFromString'] = function (b9gf, yux2rh) {
  var ni5aj$ = this['options'],
      banj = new L9cwvm(),
      oqvc1w = ni5aj$['domBuilder'] || new L9gnat(),
      h5yxi0 = ni5aj$['errorHandler'],
      u0yxh2 = ni5aj$['locator'],
      o_3l4 = ni5aj$['xmlns'] || {},
      cwqo1v = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return u0yxh2 && oqvc1w['setDocumentLocator'](u0yxh2), banj['errorHandler'] = L9skw6dm(h5yxi0, oqvc1w, u0yxh2), banj['domBuilder'] = ni5aj$['domBuilder'] || oqvc1w, /\/x?html?$/['test'](yux2rh) && (cwqo1v['nbsp'] = '\u00a0', cwqo1v['copy'] = '©', o_3l4[''] = 'http://www.w3.org/1999/xhtml'), o_3l4['xml'] = o_3l4['xml'] || 'http://www.w3.org/XML/1998/namespace', b9gf ? banj['parse'](b9gf, o_3l4, cwqo1v) : banj['errorHandler']['error']('invalid doc source'), oqvc1w['doc'];
}, L9gnat['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9hy2ur()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (f9e7, $5ina0, $tnjai, dks87) {
    var in0a5$ = this['doc'],
        yuh0x5 = in0a5$['createElementNS'](f9e7, $tnjai || $5ina0),
        vq1w6 = dks87['length'];L9b8epf9(this, yuh0x5), this['currentElement'] = yuh0x5, this['locator'] && L9vdk6(this['locator'], yuh0x5);for (var tnj$a = 0x0; tnj$a < vq1w6; tnj$a++) {
      var f9e7 = dks87['getURI'](tnj$a),
          hx0yu = dks87['getValue'](tnj$a),
          $tnjai = dks87['getQName'](tnj$a),
          cqv1w6 = in0a5$['createAttributeNS'](f9e7, $tnjai);this['locator'] && L9vdk6(dks87['getLocator'](tnj$a), cqv1w6), cqv1w6['value'] = cqv1w6['nodeValue'] = hx0yu, yuh0x5['setAttributeNode'](cqv1w6);
    }
  }, 'endElement': function () {
    var cwoqv = this['currentElement'];cwoqv['tagName'], this['currentElement'] = cwoqv['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (m67d, bgftj) {
    bgftj = this['doc']['createProcessingInstruction'](m67d, bgftj), (this['locator'] && L9vdk6(this['locator'], bgftj), L9b8epf9(this, bgftj));
  }, 'ignorableWhitespace': function () {}, 'characters': function (ian5j$) {
    var dpm7ks;(ian5j$ = L9bfep9['apply'](this, arguments)) && (dpm7ks = this['cdata'] ? this['doc']['createCDATASection'](ian5j$) : this['doc']['createTextNode'](ian5j$), this['currentElement'] ? this['currentElement']['appendChild'](dpm7ks) : /^\s*$/['test'](ian5j$) && this['doc']['appendChild'](dpm7ks), this['locator'] && L9vdk6(this['locator'], dpm7ks));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (vwm1) {
    (this['locator'] = vwm1) && (vwm1['lineNumber'] = 0x0);
  }, 'comment': function (jbfg9) {
    jbfg9 = L9bfep9['apply'](this, arguments);var swdk = this['doc']['createComment'](jbfg9);this['locator'] && L9vdk6(this['locator'], swdk), L9b8epf9(this, swdk);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ks8p7, p87sdk, p9e8b) {
    var hxyi05 = this['doc']['implementation'];hxyi05 && hxyi05['createDocumentType'] && (p9e8b = hxyi05['createDocumentType'](ks8p7, p87sdk, p9e8b), this['locator'] && L9vdk6(this['locator'], p9e8b), L9b8epf9(this, p9e8b));
  }, 'warning': function (aintj) {
    console['warn']('[xmldom warning]\t' + aintj, L9sw6mdk(this['locator']));
  }, 'error': function (abng) {
    console['error']('[xmldom error]\t' + abng, L9sw6mdk(this['locator']));
  }, 'fatalError': function (x5hi0$) {
    throw console['error']('[xmldom fatalError]\t' + x5hi0$, L9sw6mdk(this['locator'])), x5hi0$;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (bjtf9g) {
  L9gnat['prototype'][bjtf9g] = function () {
    return null;
  };
});var L9cwvm = require('./lllSAX')['XMLReader'],
    L9hy2ur = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9s6kmd;