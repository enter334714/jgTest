var Q = wx.$I;
function i_ilrz$0(equks) {
  this['options'] = equks || { 'locator': {} };
}function i_seuqkb(ti$rl9, qkes2u, be6a73) {
  function iz$(k5uq2) {
    var l$zi0r = ti$rl9[k5uq2];!l$zi0r && sukb7e && (l$zi0r = 0x2 == ti$rl9['length'] ? function (i$gz0) {
      ti$rl9(k5uq2, i$gz0);
    } : ti$rl9), yzglo0[k5uq2] = l$zi0r && function (ztl$) {
      l$zi0r('[xmldom ' + k5uq2 + ']\t' + ztl$ + i_qkw(be6a73));
    } || function () {};
  }if (!ti$rl9) {
    if (qkes2u instanceof i_ydgo0) return qkes2u;ti$rl9 = qkes2u;
  }var yzglo0 = {},
      sukb7e = ti$rl9 instanceof Function;return be6a73 = be6a73 || {}, iz$('warning'), iz$('error'), iz$('fatalError'), yzglo0;
}function i_ydgo0() {
  this['cdata'] = !0x1;
}function i_be7s(u2kn, fa_j6) {
  fa_j6['lineNumber'] = u2kn['lineNumber'], fa_j6['columnNumber'] = u2kn['columnNumber'];
}function i_qkw(n45xh) {
  return n45xh ? '\x0a@' + (n45xh['systemId'] || '') + '#[line:' + n45xh['lineNumber'] + ',col:' + n45xh['columnNumber'] + ']' : void 0x0;
}function i_pc8j($tzil, j6a8f_, g0zdoy) {
  return 'string' == typeof $tzil ? $tzil['substr'](j6a8f_, g0zdoy) : $tzil['length'] >= j6a8f_ + g0zdoy || j6a8f_ ? new java['lang']['String']($tzil, j6a8f_, g0zdoy) + '' : $tzil;
}function i__a6j(ajb673, $0zgi) {
  ajb673['currentElement'] ? ajb673['currentElement']['appendChild']($0zgi) : ajb673['doc']['appendChild']($0zgi);
}i_ilrz$0['prototype']['parseFromString'] = function (x4nh, hw5n24) {
  var zl$r0 = this['options'],
      h4wn52 = new i_z$tir(),
      tliz$ = zl$r0['domBuilder'] || new i_ydgo0(),
      imvr9t = zl$r0['errorHandler'],
      _8ajf = zl$r0['locator'],
      b36se = zl$r0['xmlns'] || {},
      go0z = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _8ajf && tliz$['setDocumentLocator'](_8ajf), h4wn52['errorHandler'] = i_seuqkb(imvr9t, tliz$, _8ajf), h4wn52['domBuilder'] = zl$r0['domBuilder'] || tliz$, /\/x?html?$/['test'](hw5n24) && (go0z['nbsp'] = '\u00a0', go0z['copy'] = '©', b36se[''] = 'http://www.w3.org/1999/xhtml'), b36se['xml'] = b36se['xml'] || 'http://www.w3.org/XML/1998/namespace', x4nh ? h4wn52['parse'](x4nh, b36se, go0z) : h4wn52['errorHandler']['error']('invalid doc source'), tliz$['doc'];
}, i_ydgo0['prototype'] = { 'startDocument': function () {
    this['doc'] = new i_w54qn2()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (a6_, r$izt, k25nqw, u52q) {
    var _jp8 = this['doc'],
        _3a = _jp8['createElementNS'](a6_, k25nqw || r$izt),
        unsk2q = u52q['length'];i__a6j(this, _3a), this['currentElement'] = _3a, this['locator'] && i_be7s(this['locator'], _3a);for (var b3ue = 0x0; unsk2q > b3ue; b3ue++) {
      var a6_ = u52q['getURI'](b3ue),
          w42q = u52q['getValue'](b3ue),
          k25nqw = u52q['getQName'](b3ue),
          pafj = _jp8['createAttributeNS'](a6_, k25nqw);this['locator'] && i_be7s(u52q['getLocator'](b3ue), pafj), pafj['value'] = pafj['nodeValue'] = w42q, _3a['setAttributeNode'](pafj);
    }
  }, 'endElement': function () {
    {
      var beskqu = this['currentElement'];beskqu['tagName'];
    }this['currentElement'] = beskqu['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (pfc1vm, qkbe) {
    var a_j86f = this['doc']['createProcessingInstruction'](pfc1vm, qkbe);this['locator'] && i_be7s(this['locator'], a_j86f), i__a6j(this, a_j86f);
  }, 'ignorableWhitespace': function () {}, 'characters': function (b7a3e) {
    if (b7a3e = i_pc8j['apply'](this, arguments)) {
      if (this['cdata']) var wqk5 = this['doc']['createCDATASection'](b7a3e);else var wqk5 = this['doc']['createTextNode'](b7a3e);this['currentElement'] ? this['currentElement']['appendChild'](wqk5) : /^\s*$/['test'](b7a3e) && this['doc']['appendChild'](wqk5), this['locator'] && i_be7s(this['locator'], wqk5);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (kes) {
    (this['locator'] = kes) && (kes['lineNumber'] = 0x0);
  }, 'comment': function (wnh4) {
    wnh4 = i_pc8j['apply'](this, arguments);var ebqsk = this['doc']['createComment'](wnh4);this['locator'] && i_be7s(this['locator'], ebqsk), i__a6j(this, ebqsk);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (im9v, i$r0lz, k52nuq) {
    var v1cfmp = this['doc']['implementation'];if (v1cfmp && v1cfmp['createDocumentType']) {
      var nqkw25 = v1cfmp['createDocumentType'](im9v, i$r0lz, k52nuq);this['locator'] && i_be7s(this['locator'], nqkw25), i__a6j(this, nqkw25);
    }
  }, 'warning': function (pvc19) {
    console['warn']('[xmldom warning]\t' + pvc19, i_qkw(this['locator']));
  }, 'error': function (jpa_f) {
    console['error']('[xmldom error]\t' + jpa_f, i_qkw(this['locator']));
  }, 'fatalError': function (f_8pjc) {
    throw console['error']('[xmldom fatalError]\t' + f_8pjc, i_qkw(this['locator'])), f_8pjc;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (vp91m) {
  i_ydgo0['prototype'][vp91m] = function () {
    return null;
  };
});var i_z$tir = require('./iiiSAX')['XMLReader'],
    i_w54qn2 = exports['DOMImplementation'] = require('./iiiDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./iiiDOM')['XMLSerializer'], exports['DOMParser'] = i_ilrz$0;