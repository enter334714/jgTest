var E = wx.$p;
function p_klh4s(r6$17) {
  this['options'] = r6$17 || { 'locator': {} };
}function p_lxftp(y6$7v, kyhj$, qa8) {
  function zr3($hijky) {
    var wne935 = y6$7v[$hijky];!wne935 && shpl4t && (wne935 = 0x2 == y6$7v['length'] ? function (f_ulxt) {
      y6$7v($hijky, f_ulxt);
    } : y6$7v), $ik6[$hijky] = wne935 && function (v2zr7) {
      wne935('[xmldom ' + $hijky + ']\t' + v2zr7 + p_ltx_fu(qa8));
    } || function () {};
  }if (!y6$7v) {
    if (kyhj$ instanceof p_jkpsh4) return kyhj$;y6$7v = kyhj$;
  }var $ik6 = {},
      shpl4t = y6$7v instanceof Function;return qa8 = qa8 || {}, zr3('warning'), zr3('error'), zr3('fatalError'), $ik6;
}function p_jkpsh4() {
  this['cdata'] = !0x1;
}function p_t4(ft_ulx, sjky) {
  sjky['lineNumber'] = ft_ulx['lineNumber'], sjky['columnNumber'] = ft_ulx['columnNumber'];
}function p_ltx_fu(dgbcqa) {
  return dgbcqa ? '\x0a@' + (dgbcqa['systemId'] || '') + '#[line:' + dgbcqa['lineNumber'] + ',col:' + dgbcqa['columnNumber'] + ']' : void 0x0;
}function p_w32rz(st4lx, iyk$6, xtfplu) {
  return 'string' == typeof st4lx ? st4lx['substr'](iyk$6, xtfplu) : st4lx['length'] >= iyk$6 + xtfplu || iyk$6 ? new java['lang']['String'](st4lx, iyk$6, xtfplu) + '' : st4lx;
}function p_r2w30(g9aqb, lph4) {
  g9aqb['currentElement'] ? g9aqb['currentElement']['appendChild'](lph4) : g9aqb['doc']['appendChild'](lph4);
}p_klh4s['prototype']['parseFromString'] = function (mxtuf, qe58n) {
  var skjiyh = this['options'],
      ne5q89 = new p_uflxpt(),
      vyi1$ = skjiyh['domBuilder'] || new p_jkpsh4(),
      eb9q8n = skjiyh['errorHandler'],
      ji6yk$ = skjiyh['locator'],
      ftuxl = skjiyh['xmlns'] || {},
      sikhyj = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ji6yk$ && vyi1$['setDocumentLocator'](ji6yk$), ne5q89['errorHandler'] = p_lxftp(eb9q8n, vyi1$, ji6yk$), ne5q89['domBuilder'] = skjiyh['domBuilder'] || vyi1$, /\/x?html?$/['test'](qe58n) && (sikhyj['nbsp'] = '\u00a0', sikhyj['copy'] = '©', ftuxl[''] = 'http://www.w3.org/1999/xhtml'), ftuxl['xml'] = ftuxl['xml'] || 'http://www.w3.org/XML/1998/namespace', mxtuf ? ne5q89['parse'](mxtuf, ftuxl, sikhyj) : ne5q89['errorHandler']['error']('invalid doc source'), vyi1$['doc'];
}, p_jkpsh4['prototype'] = { 'startDocument': function () {
    this['doc'] = new p_khijs()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (tlu_f, n935ew, nw958e, i$kjyh) {
    var cbgq8a = this['doc'],
        zr2v0 = cbgq8a['createElementNS'](tlu_f, nw958e || n935ew),
        w35n0 = i$kjyh['length'];p_r2w30(this, zr2v0), this['currentElement'] = zr2v0, this['locator'] && p_t4(this['locator'], zr2v0);for (var ultx_f = 0x0; w35n0 > ultx_f; ultx_f++) {
      var tlu_f = i$kjyh['getURI'](ultx_f),
          sp4lxt = i$kjyh['getValue'](ultx_f),
          nw958e = i$kjyh['getQName'](ultx_f),
          mfxuo = cbgq8a['createAttributeNS'](tlu_f, nw958e);this['locator'] && p_t4(i$kjyh['getLocator'](ultx_f), mfxuo), mfxuo['value'] = mfxuo['nodeValue'] = sp4lxt, zr2v0['setAttributeNode'](mfxuo);
    }
  }, 'endElement': function () {
    {
      var ihyk$j = this['currentElement'];ihyk$j['tagName'];
    }this['currentElement'] = ihyk$j['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (pt4xl, qag8) {
    var zv2 = this['doc']['createProcessingInstruction'](pt4xl, qag8);this['locator'] && p_t4(this['locator'], zv2), p_r2w30(this, zv2);
  }, 'ignorableWhitespace': function () {}, 'characters': function (gqba8c) {
    if (gqba8c = p_w32rz['apply'](this, arguments)) {
      if (this['cdata']) var q8bne = this['doc']['createCDATASection'](gqba8c);else var q8bne = this['doc']['createTextNode'](gqba8c);this['currentElement'] ? this['currentElement']['appendChild'](q8bne) : /^\s*$/['test'](gqba8c) && this['doc']['appendChild'](q8bne), this['locator'] && p_t4(this['locator'], q8bne);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (sh4ij) {
    (this['locator'] = sh4ij) && (sh4ij['lineNumber'] = 0x0);
  }, 'comment': function (p4hjsk) {
    p4hjsk = p_w32rz['apply'](this, arguments);var qdacg = this['doc']['createComment'](p4hjsk);this['locator'] && p_t4(this['locator'], qdacg), p_r2w30(this, qdacg);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (s4lpt, v702z, xl4p) {
    var pkjsh4 = this['doc']['implementation'];if (pkjsh4 && pkjsh4['createDocumentType']) {
      var i$1y6 = pkjsh4['createDocumentType'](s4lpt, v702z, xl4p);this['locator'] && p_t4(this['locator'], i$1y6), p_r2w30(this, i$1y6);
    }
  }, 'warning': function ($176y) {
    console['warn']('[xmldom warning]\t' + $176y, p_ltx_fu(this['locator']));
  }, 'error': function (kh$iyj) {
    console['error']('[xmldom error]\t' + kh$iyj, p_ltx_fu(this['locator']));
  }, 'fatalError': function (ps4j) {
    throw console['error']('[xmldom fatalError]\t' + ps4j, p_ltx_fu(this['locator'])), ps4j;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (nw035) {
  p_jkpsh4['prototype'][nw035] = function () {
    return null;
  };
});var p_uflxpt = require('./pSAXp')['XMLReader'],
    p_khijs = exports['DOMImplementation'] = require('./ppDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ppDOM')['XMLSerializer'], exports['DOMParser'] = p_klh4s;