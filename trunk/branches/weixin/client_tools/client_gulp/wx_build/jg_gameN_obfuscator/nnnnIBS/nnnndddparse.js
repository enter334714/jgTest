var A = wx.$N;
function n_qgfij(yfr3) {
  this['options'] = yfr3 || { 'locator': {} };
}function n_ijgvyf(twba62, ijf, kmlx_h) {
  function r38oe(_mlkx) {
    var snlxzd = twba62[_mlkx];!snlxzd && a2owb && (snlxzd = 0x2 == twba62['length'] ? function (j90pq5) {
      twba62(_mlkx, j90pq5);
    } : twba62), ew2ao6[_mlkx] = snlxzd && function (khlm_) {
      snlxzd('[xmldom ' + _mlkx + ']\t' + khlm_ + n_eov3(kmlx_h));
    } || function () {};
  }if (!twba62) {
    if (ijf instanceof n_q059pj) return ijf;twba62 = ijf;
  }var ew2ao6 = {},
      a2owb = twba62 instanceof Function;return kmlx_h = kmlx_h || {}, r38oe('warning'), r38oe('error'), r38oe('fatalError'), ew2ao6;
}function n_q059pj() {
  this['cdata'] = !0x1;
}function n_l$khm(jiypq9, hlxdmz) {
  hlxdmz['lineNumber'] = jiypq9['lineNumber'], hlxdmz['columnNumber'] = jiypq9['columnNumber'];
}function n_eov3(nxdlz) {
  return nxdlz ? '\x0a@' + (nxdlz['systemId'] || '') + '#[line:' + nxdlz['lineNumber'] + ',col:' + nxdlz['columnNumber'] + ']' : void 0x0;
}function n_zcns7d(dxklmh, _klmhx, v3r8oe) {
  return 'string' == typeof dxklmh ? dxklmh['substr'](_klmhx, v3r8oe) : dxklmh['length'] >= _klmhx + v3r8oe || _klmhx ? new java['lang']['String'](dxklmh, _klmhx, v3r8oe) + '' : dxklmh;
}function n_p9507c(_hklm$, o83are) {
  _hklm$['currentElement'] ? _hklm$['currentElement']['appendChild'](o83are) : _hklm$['doc']['appendChild'](o83are);
}n_qgfij['prototype']['parseFromString'] = function (_$hmlk, vfigy) {
  var xldsnz = this['options'],
      kmh$4_ = new n_c97p50(),
      hmx_k = xldsnz['domBuilder'] || new n_q059pj(),
      scz75 = xldsnz['errorHandler'],
      p507cs = xldsnz['locator'],
      raoe38 = xldsnz['xmlns'] || {},
      fj9y = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return p507cs && hmx_k['setDocumentLocator'](p507cs), kmh$4_['errorHandler'] = n_ijgvyf(scz75, hmx_k, p507cs), kmh$4_['domBuilder'] = xldsnz['domBuilder'] || hmx_k, /\/x?html?$/['test'](vfigy) && (fj9y['nbsp'] = '\u00a0', fj9y['copy'] = '©', raoe38[''] = 'http://www.w3.org/1999/xhtml'), raoe38['xml'] = raoe38['xml'] || 'http://www.w3.org/XML/1998/namespace', _$hmlk ? kmh$4_['parse'](_$hmlk, raoe38, fj9y) : kmh$4_['errorHandler']['error']('invalid doc source'), hmx_k['doc'];
}, n_q059pj['prototype'] = { 'startDocument': function () {
    this['doc'] = new n_cd7nzs()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (jvigfy, fygr3v, yjfivg, zxcdn) {
    var pyqi9j = this['doc'],
        k_hlx = pyqi9j['createElementNS'](jvigfy, yjfivg || fygr3v),
        eo3ra = zxcdn['length'];n_p9507c(this, k_hlx), this['currentElement'] = k_hlx, this['locator'] && n_l$khm(this['locator'], k_hlx);for (var r8f = 0x0; eo3ra > r8f; r8f++) {
      var jvigfy = zxcdn['getURI'](r8f),
          zdlnxm = zxcdn['getValue'](r8f),
          yjfivg = zxcdn['getQName'](r8f),
          w2oe = pyqi9j['createAttributeNS'](jvigfy, yjfivg);this['locator'] && n_l$khm(zxcdn['getLocator'](r8f), w2oe), w2oe['value'] = w2oe['nodeValue'] = zdlnxm, k_hlx['setAttributeNode'](w2oe);
    }
  }, 'endElement': function () {
    {
      var nc57sz = this['currentElement'];nc57sz['tagName'];
    }this['currentElement'] = nc57sz['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (zxsld, ji9fyq) {
    var mxlnd = this['doc']['createProcessingInstruction'](zxsld, ji9fyq);this['locator'] && n_l$khm(this['locator'], mxlnd), n_p9507c(this, mxlnd);
  }, 'ignorableWhitespace': function () {}, 'characters': function (vjfyi) {
    if (vjfyi = n_zcns7d['apply'](this, arguments)) {
      if (this['cdata']) var gifr = this['doc']['createCDATASection'](vjfyi);else var gifr = this['doc']['createTextNode'](vjfyi);this['currentElement'] ? this['currentElement']['appendChild'](gifr) : /^\s*$/['test'](vjfyi) && this['doc']['appendChild'](gifr), this['locator'] && n_l$khm(this['locator'], gifr);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (eoa6w) {
    (this['locator'] = eoa6w) && (eoa6w['lineNumber'] = 0x0);
  }, 'comment': function (u4$hk) {
    u4$hk = n_zcns7d['apply'](this, arguments);var r83ove = this['doc']['createComment'](u4$hk);this['locator'] && n_l$khm(this['locator'], r83ove), n_p9507c(this, r83ove);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (oab6w2, t6b, fgqjiy) {
    var wa6 = this['doc']['implementation'];if (wa6 && wa6['createDocumentType']) {
      var t2ba6w = wa6['createDocumentType'](oab6w2, t6b, fgqjiy);this['locator'] && n_l$khm(this['locator'], t2ba6w), n_p9507c(this, t2ba6w);
    }
  }, 'warning': function (dlz) {
    console['warn']('[xmldom warning]\t' + dlz, n_eov3(this['locator']));
  }, 'error': function (j5q0) {
    console['error']('[xmldom error]\t' + j5q0, n_eov3(this['locator']));
  }, 'fatalError': function (baw2t6) {
    throw console['error']('[xmldom fatalError]\t' + baw2t6, n_eov3(this['locator'])), baw2t6;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (gqif) {
  n_q059pj['prototype'][gqif] = function () {
    return null;
  };
});var n_c97p50 = require('./nnnSAX')['XMLReader'],
    n_cd7nzs = exports['DOMImplementation'] = require('./nnnnDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./nnnnDOM')['XMLSerializer'], exports['DOMParser'] = n_qgfij;