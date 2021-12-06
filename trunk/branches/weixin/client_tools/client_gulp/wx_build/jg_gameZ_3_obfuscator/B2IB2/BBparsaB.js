var D = wx.$b;
function bhol2(q5g69) {
  this['options'] = q5g69 || { 'locator': {} };
}function bkv5g6r(yau$7, _4d07w, rkgvp6) {
  function z3n8$u(ioht2e) {
    var gv6pkr = yau$7[ioht2e];!gv6pkr && f4d0m && (gv6pkr = 0x2 == yau$7['length'] ? function (r5v6kg) {
      yau$7(ioht2e, r5v6kg);
    } : yau$7), ifc1ms[ioht2e] = gv6pkr && function (g9q65) {
      gv6pkr('[xmldom ' + ioht2e + ']\t' + g9q65 + bwuy$z(rkgvp6));
    } || function () {};
  }if (!yau$7) {
    if (_4d07w instanceof bfm0s1c) return _4d07w;yau$7 = _4d07w;
  }var ifc1ms = {},
      f4d0m = yau$7 instanceof Function;return rkgvp6 = rkgvp6 || {}, z3n8$u('warning'), z3n8$u('error'), z3n8$u('fatalError'), ifc1ms;
}function bfm0s1c() {
  this['cdata'] = !0x1;
}function bi2t1hc(yw7u, h2itc1) {
  h2itc1['lineNumber'] = yw7u['lineNumber'], h2itc1['columnNumber'] = yw7u['columnNumber'];
}function bwuy$z(io2t) {
  return io2t ? '\x0a@' + (io2t['systemId'] || '') + '#[line:' + io2t['lineNumber'] + ',col:' + io2t['columnNumber'] + ']' : void 0x0;
}function bu7ya$(h1sci, is2hc, tei) {
  return 'string' == typeof h1sci ? h1sci['substr'](is2hc, tei) : h1sci['length'] >= is2hc + tei || is2hc ? new java['lang']['String'](h1sci, is2hc, tei) + '' : h1sci;
}function bw07d4(tc21hi, qg6r95) {
  tc21hi['currentElement'] ? tc21hi['currentElement']['appendChild'](qg6r95) : tc21hi['doc']['appendChild'](qg6r95);
}bhol2['prototype']['parseFromString'] = function (q9ojle, prvk6) {
  var jl5oq = this['options'],
      u7dawy = new bsmc(),
      g69r5k = jl5oq['domBuilder'] || new bfm0s1c(),
      rgkpx = jl5oq['errorHandler'],
      _s4f0m = jl5oq['locator'],
      yauz$8 = jl5oq['xmlns'] || {},
      _f0sm4 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _s4f0m && g69r5k['setDocumentLocator'](_s4f0m), u7dawy['errorHandler'] = bkv5g6r(rgkpx, g69r5k, _s4f0m), u7dawy['domBuilder'] = jl5oq['domBuilder'] || g69r5k, /\/x?html?$/['test'](prvk6) && (_f0sm4['nbsp'] = '\u00a0', _f0sm4['copy'] = '©', yauz$8[''] = 'http://www.w3.org/1999/xhtml'), yauz$8['xml'] = yauz$8['xml'] || 'http://www.w3.org/XML/1998/namespace', q9ojle ? u7dawy['parse'](q9ojle, yauz$8, _f0sm4) : u7dawy['errorHandler']['error']('invalid doc source'), g69r5k['doc'];
}, bfm0s1c['prototype'] = { 'startDocument': function () {
    this['doc'] = new br6g5()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (qj956l, m0_f4, olq9, ljqe9) {
    var ayz$u8 = this['doc'],
        o2let = ayz$u8['createElementNS'](qj956l, olq9 || m0_f4),
        jl2te = ljqe9['length'];bw07d4(this, o2let), this['currentElement'] = o2let, this['locator'] && bi2t1hc(this['locator'], o2let);for (var yu8$za = 0x0; jl2te > yu8$za; yu8$za++) {
      var qj956l = ljqe9['getURI'](yu8$za),
          aw7y4 = ljqe9['getValue'](yu8$za),
          olq9 = ljqe9['getQName'](yu8$za),
          tich21 = ayz$u8['createAttributeNS'](qj956l, olq9);this['locator'] && bi2t1hc(ljqe9['getLocator'](yu8$za), tich21), tich21['value'] = tich21['nodeValue'] = aw7y4, o2let['setAttributeNode'](tich21);
    }
  }, 'endElement': function () {
    {
      var u$nz8 = this['currentElement'];u$nz8['tagName'];
    }this['currentElement'] = u$nz8['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (icsh2, kg69r) {
    var c1msh = this['doc']['createProcessingInstruction'](icsh2, kg69r);this['locator'] && bi2t1hc(this['locator'], c1msh), bw07d4(this, c1msh);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_sfm04) {
    if (_sfm04 = bu7ya$['apply'](this, arguments)) {
      if (this['cdata']) var s_1m0 = this['doc']['createCDATASection'](_sfm04);else var s_1m0 = this['doc']['createTextNode'](_sfm04);this['currentElement'] ? this['currentElement']['appendChild'](s_1m0) : /^\s*$/['test'](_sfm04) && this['doc']['appendChild'](s_1m0), this['locator'] && bi2t1hc(this['locator'], s_1m0);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (v5r6k) {
    (this['locator'] = v5r6k) && (v5r6k['lineNumber'] = 0x0);
  }, 'comment': function (sf0_m1) {
    sf0_m1 = bu7ya$['apply'](this, arguments);var kgpv = this['doc']['createComment'](sf0_m1);this['locator'] && bi2t1hc(this['locator'], kgpv), bw07d4(this, kgpv);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (kr, qotlje, shc1mi) {
    var k6vrgp = this['doc']['implementation'];if (k6vrgp && k6vrgp['createDocumentType']) {
      var ict2 = k6vrgp['createDocumentType'](kr, qotlje, shc1mi);this['locator'] && bi2t1hc(this['locator'], ict2), bw07d4(this, ict2);
    }
  }, 'warning': function (ud7aw) {
    console['warn']('[xmldom warning]\t' + ud7aw, bwuy$z(this['locator']));
  }, 'error': function (mci) {
    console['error']('[xmldom error]\t' + mci, bwuy$z(this['locator']));
  }, 'fatalError': function (ifc1m) {
    throw console['error']('[xmldom fatalError]\t' + ifc1m, bwuy$z(this['locator'])), ifc1m;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (a38uz$) {
  bfm0s1c['prototype'][a38uz$] = function () {
    return null;
  };
});var bsmc = require('./BBcBB')['XMLReader'],
    br6g5 = exports['DOMImplementation'] = require('./BBDOBB')['DOMImplementation'];exports['XMLSerializer'] = require('./BBDOBB')['XMLSerializer'], exports['DOMParser'] = bhol2;