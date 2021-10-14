var S = wx.$J;
function j1_$a_2n5(x38f2) {
  this['options'] = x38f2 || { 'locator': {} };
}function j1_fqyri(a28nxg, k4c1, ozbe9) {
  function c14jlk(a2x_8n) {
    var kl15j = a28nxg[a2x_8n];!kl15j && du7v && (kl15j = 0x2 == a28nxg['length'] ? function (n_a$) {
      a28nxg(a2x_8n, n_a$);
    } : a28nxg), xg328f[a2x_8n] = kl15j ? function (jelc1) {
      kl15j('[xmldom ' + a2x_8n + ']\t' + jelc1 + j1_vs7mu(ozbe9));
    } : function () {};
  }if (!a28nxg) {
    if (k4c1 instanceof j1_k_j5$4) return k4c1;a28nxg = k4c1;
  }var xg328f = {},
      du7v = a28nxg instanceof Function;return ozbe9 = ozbe9 || {}, c14jlk('warning'), c14jlk('error'), c14jlk('fatalError'), xg328f;
}function j1_k_j5$4() {
  this['cdata'] = !0x1;
}function j1_l14(h9bze, _$5akn) {
  _$5akn['lineNumber'] = h9bze['lineNumber'], _$5akn['columnNumber'] = h9bze['columnNumber'];
}function j1_vs7mu(xag8) {
  return xag8 ? '\x0a@' + (xag8['systemId'] || '') + '#[line:' + xag8['lineNumber'] + ',col:' + xag8['columnNumber'] + ']' : void 0x0;
}function j1_cbjle1(a2gxn, beoh9z, z9hboe) {
  return 'string' == typeof a2gxn ? a2gxn['substr'](beoh9z, z9hboe) : a2gxn['length'] >= beoh9z + z9hboe || beoh9z ? new java['lang']['String'](a2gxn, beoh9z, z9hboe) + '' : a2gxn;
}function j1_udwvm7(du07sm, rgfiq3) {
  (du07sm['currentElement'] || du07sm['doc'])['appendChild'](rgfiq3);
}j1_$a_2n5['prototype']['parseFromString'] = function (hzc9b, r6iqty) {
  var fgi = this['options'],
      zbc9he = new j1_bel91(),
      hbcz9e = fgi['domBuilder'] || new j1_k_j5$4(),
      o09 = fgi['errorHandler'],
      qf6iy = fgi['locator'],
      i8xg3f = fgi['xmlns'] || {},
      dwu7m = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return qf6iy && hbcz9e['setDocumentLocator'](qf6iy), zbc9he['errorHandler'] = j1_fqyri(o09, hbcz9e, qf6iy), zbc9he['domBuilder'] = fgi['domBuilder'] || hbcz9e, /\/x?html?$/['test'](r6iqty) && (dwu7m['nbsp'] = '\u00a0', dwu7m['copy'] = '©', i8xg3f[''] = 'http://www.w3.org/1999/xhtml'), i8xg3f['xml'] = i8xg3f['xml'] || 'http://www.w3.org/XML/1998/namespace', hzc9b ? zbc9he['parse'](hzc9b, i8xg3f, dwu7m) : zbc9he['errorHandler']['error']('invalid doc source'), hbcz9e['doc'];
}, j1_k_j5$4['prototype'] = { 'startDocument': function () {
    this['doc'] = new j1_muwd7()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (hozb90, cej1b, g3xn, g23xn8) {
    var elbc9 = this['doc'],
        iqfy3 = elbc9['createElementNS'](hozb90, g3xn || cej1b),
        b1c9eh = g23xn8['length'];j1_udwvm7(this, iqfy3), this['currentElement'] = iqfy3, this['locator'] && j1_l14(this['locator'], iqfy3);for (var zs0oh9 = 0x0; zs0oh9 < b1c9eh; zs0oh9++) {
      var hozb90 = g23xn8['getURI'](zs0oh9),
          b0 = g23xn8['getValue'](zs0oh9),
          g3xn = g23xn8['getQName'](zs0oh9),
          dms = elbc9['createAttributeNS'](hozb90, g3xn);this['locator'] && j1_l14(g23xn8['getLocator'](zs0oh9), dms), dms['value'] = dms['nodeValue'] = b0, iqfy3['setAttributeNode'](dms);
    }
  }, 'endElement': function () {
    var f83x = this['currentElement'];f83x['tagName'], this['currentElement'] = f83x['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ceb1jl, nxa_) {
    nxa_ = this['doc']['createProcessingInstruction'](ceb1jl, nxa_), (this['locator'] && j1_l14(this['locator'], nxa_), j1_udwvm7(this, nxa_));
  }, 'ignorableWhitespace': function () {}, 'characters': function (omu) {
    var _$5j;(omu = j1_cbjle1['apply'](this, arguments)) && (_$5j = this['cdata'] ? this['doc']['createCDATASection'](omu) : this['doc']['createTextNode'](omu), this['currentElement'] ? this['currentElement']['appendChild'](_$5j) : /^\s*$/['test'](omu) && this['doc']['appendChild'](_$5j), this['locator'] && j1_l14(this['locator'], _$5j));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ecl41) {
    (this['locator'] = ecl41) && (ecl41['lineNumber'] = 0x0);
  }, 'comment': function (s7vmdu) {
    s7vmdu = j1_cbjle1['apply'](this, arguments);var dmozs = this['doc']['createComment'](s7vmdu);this['locator'] && j1_l14(this['locator'], dmozs), j1_udwvm7(this, dmozs);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (dso0mu, qt6ryp, firy6) {
    var shz9 = this['doc']['implementation'];shz9 && shz9['createDocumentType'] && (firy6 = shz9['createDocumentType'](dso0mu, qt6ryp, firy6), this['locator'] && j1_l14(this['locator'], firy6), j1_udwvm7(this, firy6));
  }, 'warning': function (fi3yr) {
    console['warn']('[xmldom warning]\t' + fi3yr, j1_vs7mu(this['locator']));
  }, 'error': function (dw) {
    console['error']('[xmldom error]\t' + dw, j1_vs7mu(this['locator']));
  }, 'fatalError': function (zbeo9h) {
    throw console['error']('[xmldom fatalError]\t' + zbeo9h, j1_vs7mu(this['locator'])), zbeo9h;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (je4l1) {
  j1_k_j5$4['prototype'][je4l1] = function () {
    return null;
  };
});var j1_bel91 = require('./jjjSAX')['XMLReader'],
    j1_muwd7 = exports['DOMImplementation'] = require('./jjjDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./jjjDOM')['XMLSerializer'], exports['DOMParser'] = j1_$a_2n5;