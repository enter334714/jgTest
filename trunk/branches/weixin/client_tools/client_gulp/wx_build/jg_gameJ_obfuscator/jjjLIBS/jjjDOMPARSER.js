var S = wx.$J;
function j1_swajh(g59dq2) {
  this['options'] = g59dq2 || { 'locator': {} };
}function j1__t48kr(exkou, erkt, cmlvbp) {
  function fz37n(vblcm) {
    var lybcp = exkou[vblcm];!lybcp && q9y6c && (lybcp = 0x2 == exkou['length'] ? function (k_or) {
      exkou(vblcm, k_or);
    } : exkou), t4f83_[vblcm] = lybcp ? function (r8_k) {
      lybcp('[xmldom ' + vblcm + ']\t' + r8_k + j1_sjwiah(cmlvbp));
    } : function () {};
  }if (!exkou) {
    if (erkt instanceof j1_saz$iw) return erkt;exkou = erkt;
  }var t4f83_ = {},
      q9y6c = exkou instanceof Function;return cmlvbp = cmlvbp || {}, fz37n('warning'), fz37n('error'), fz37n('fatalError'), t4f83_;
}function j1_saz$iw() {
  this['cdata'] = !0x1;
}function j1_e_ro8(ypcm6, yblcmp) {
  yblcmp['lineNumber'] = ypcm6['lineNumber'], yblcmp['columnNumber'] = ypcm6['columnNumber'];
}function j1_sjwiah(keo_8) {
  return keo_8 ? '\x0a@' + (keo_8['systemId'] || '') + '#[line:' + keo_8['lineNumber'] + ',col:' + keo_8['columnNumber'] + ']' : void 0x0;
}function j1_qc6y9p(kxoeu, $s1zni, w$siza) {
  return 'string' == typeof kxoeu ? kxoeu['substr']($s1zni, w$siza) : kxoeu['length'] >= $s1zni + w$siza || $s1zni ? new java['lang']['String'](kxoeu, $s1zni, w$siza) + '' : kxoeu;
}function j1_vlpmcb(n41f37, s1i$nz) {
  (n41f37['currentElement'] || n41f37['doc'])['appendChild'](s1i$nz);
}j1_swajh['prototype']['parseFromString'] = function (n$zi1s, wjhas) {
  var f73z1n = this['options'],
      $1nf7 = new j1_ypqg(),
      gd905 = f73z1n['domBuilder'] || new j1_saz$iw(),
      hd25 = f73z1n['errorHandler'],
      nf7z1$ = f73z1n['locator'],
      $ns17 = f73z1n['xmlns'] || {},
      bpmcyl = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return nf7z1$ && gd905['setDocumentLocator'](nf7z1$), $1nf7['errorHandler'] = j1__t48kr(hd25, gd905, nf7z1$), $1nf7['domBuilder'] = f73z1n['domBuilder'] || gd905, /\/x?html?$/['test'](wjhas) && (bpmcyl['nbsp'] = '\u00a0', bpmcyl['copy'] = '©', $ns17[''] = 'http://www.w3.org/1999/xhtml'), $ns17['xml'] = $ns17['xml'] || 'http://www.w3.org/XML/1998/namespace', n$zi1s ? $1nf7['parse'](n$zi1s, $ns17, bpmcyl) : $1nf7['errorHandler']['error']('invalid doc source'), gd905['doc'];
}, j1_saz$iw['prototype'] = { 'startDocument': function () {
    this['doc'] = new j1_jsiawh()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (kr8t, bpvl, ft47, ork_e8) {
    var o_ke8 = this['doc'],
        lcymbp = o_ke8['createElementNS'](kr8t, ft47 || bpvl),
        q9c = ork_e8['length'];j1_vlpmcb(this, lcymbp), this['currentElement'] = lcymbp, this['locator'] && j1_e_ro8(this['locator'], lcymbp);for (var clpmy6 = 0x0; clpmy6 < q9c; clpmy6++) {
      var kr8t = ork_e8['getURI'](clpmy6),
          g952q = ork_e8['getValue'](clpmy6),
          ft47 = ork_e8['getQName'](clpmy6),
          et_8 = o_ke8['createAttributeNS'](kr8t, ft47);this['locator'] && j1_e_ro8(ork_e8['getLocator'](clpmy6), et_8), et_8['value'] = et_8['nodeValue'] = g952q, lcymbp['setAttributeNode'](et_8);
    }
  }, 'endElement': function () {
    var plmbvc = this['currentElement'];plmbvc['tagName'], this['currentElement'] = plmbvc['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (nz13f7, z$iwas) {
    z$iwas = this['doc']['createProcessingInstruction'](nz13f7, z$iwas), (this['locator'] && j1_e_ro8(this['locator'], z$iwas), j1_vlpmcb(this, z$iwas));
  }, 'ignorableWhitespace': function () {}, 'characters': function (hji0w) {
    var f34_t7;(hji0w = j1_qc6y9p['apply'](this, arguments)) && (f34_t7 = this['cdata'] ? this['doc']['createCDATASection'](hji0w) : this['doc']['createTextNode'](hji0w), this['currentElement'] ? this['currentElement']['appendChild'](f34_t7) : /^\s*$/['test'](hji0w) && this['doc']['appendChild'](f34_t7), this['locator'] && j1_e_ro8(this['locator'], f34_t7));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (uro8k) {
    (this['locator'] = uro8k) && (uro8k['lineNumber'] = 0x0);
  }, 'comment': function (n374) {
    n374 = j1_qc6y9p['apply'](this, arguments);var _4kt = this['doc']['createComment'](n374);this['locator'] && j1_e_ro8(this['locator'], _4kt), j1_vlpmcb(this, _4kt);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (kreou8, mby, ylcqp6) {
    var _kor8 = this['doc']['implementation'];_kor8 && _kor8['createDocumentType'] && (ylcqp6 = _kor8['createDocumentType'](kreou8, mby, ylcqp6), this['locator'] && j1_e_ro8(this['locator'], ylcqp6), j1_vlpmcb(this, ylcqp6));
  }, 'warning': function (rxueok) {
    console['warn']('[xmldom warning]\t' + rxueok, j1_sjwiah(this['locator']));
  }, 'error': function (plqc6) {
    console['error']('[xmldom error]\t' + plqc6, j1_sjwiah(this['locator']));
  }, 'fatalError': function (iaswjh) {
    throw console['error']('[xmldom fatalError]\t' + iaswjh, j1_sjwiah(this['locator'])), iaswjh;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (rokxe) {
  j1_saz$iw['prototype'][rokxe] = function () {
    return null;
  };
});var j1_ypqg = require('./jjjSAX')['XMLReader'],
    j1_jsiawh = exports['DOMImplementation'] = require('./jjjDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./jjjDOM')['XMLSerializer'], exports['DOMParser'] = j1_swajh;