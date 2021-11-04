var E = wx.$p;
function p_v16$(qbcg8) {
  this['options'] = qbcg8 || { 'locator': {} };
}function p_wz5e(nw935e, v167r, hkl) {
  function r2v0(y$kjh) {
    var z05n3w = nw935e[y$kjh];!z05n3w && jihk4 && (z05n3w = 0x2 == nw935e['length'] ? function (lpsx4t) {
      nw935e(y$kjh, lpsx4t);
    } : nw935e), lsh4p[y$kjh] = z05n3w && function (l4tp) {
      z05n3w('[xmldom ' + y$kjh + ']\t' + l4tp + p__xfmt(hkl));
    } || function () {};
  }if (!nw935e) {
    if (v167r instanceof p_xtfm) return v167r;nw935e = v167r;
  }var lsh4p = {},
      jihk4 = nw935e instanceof Function;return hkl = hkl || {}, r2v0('warning'), r2v0('error'), r2v0('fatalError'), lsh4p;
}function p_xtfm() {
  this['cdata'] = !0x1;
}function p_jkhsyi(upltf, kph4s) {
  kph4s['lineNumber'] = upltf['lineNumber'], kph4s['columnNumber'] = upltf['columnNumber'];
}function p__xfmt(putxfl) {
  return putxfl ? '\x0a@' + (putxfl['systemId'] || '') + '#[line:' + putxfl['lineNumber'] + ',col:' + putxfl['columnNumber'] + ']' : void 0x0;
}function p_adgc(i4kjsh, w3ne59, r712v6) {
  return 'string' == typeof i4kjsh ? i4kjsh['substr'](w3ne59, r712v6) : i4kjsh['length'] >= w3ne59 + r712v6 || w3ne59 ? new java['lang']['String'](i4kjsh, w3ne59, r712v6) + '' : i4kjsh;
}function p_jy$ki(w53, qaeb8) {
  w53['currentElement'] ? w53['currentElement']['appendChild'](qaeb8) : w53['doc']['appendChild'](qaeb8);
}p_v16$['prototype']['parseFromString'] = function (w5z3e, y1i$) {
  var bag9 = this['options'],
      _xltuf = new p_x4tsl(),
      htl4ps = bag9['domBuilder'] || new p_xtfm(),
      _fomu = bag9['errorHandler'],
      iksh = bag9['locator'],
      hki$yj = bag9['xmlns'] || {},
      x_tful = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return iksh && htl4ps['setDocumentLocator'](iksh), _xltuf['errorHandler'] = p_wz5e(_fomu, htl4ps, iksh), _xltuf['domBuilder'] = bag9['domBuilder'] || htl4ps, /\/x?html?$/['test'](y1i$) && (x_tful['nbsp'] = '\u00a0', x_tful['copy'] = '©', hki$yj[''] = 'http://www.w3.org/1999/xhtml'), hki$yj['xml'] = hki$yj['xml'] || 'http://www.w3.org/XML/1998/namespace', w5z3e ? _xltuf['parse'](w5z3e, hki$yj, x_tful) : _xltuf['errorHandler']['error']('invalid doc source'), htl4ps['doc'];
}, p_xtfm['prototype'] = { 'startDocument': function () {
    this['doc'] = new p_w035nz()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (tp4xsl, j6$kiy, ufxom, fputl) {
    var ky6j = this['doc'],
        i6$k = ky6j['createElementNS'](tp4xsl, ufxom || j6$kiy),
        i6y$j = fputl['length'];p_jy$ki(this, i6$k), this['currentElement'] = i6$k, this['locator'] && p_jkhsyi(this['locator'], i6$k);for (var vyi6$ = 0x0; i6y$j > vyi6$; vyi6$++) {
      var tp4xsl = fputl['getURI'](vyi6$),
          neqb98 = fputl['getValue'](vyi6$),
          ufxom = fputl['getQName'](vyi6$),
          kjyi6$ = ky6j['createAttributeNS'](tp4xsl, ufxom);this['locator'] && p_jkhsyi(fputl['getLocator'](vyi6$), kjyi6$), kjyi6$['value'] = kjyi6$['nodeValue'] = neqb98, i6$k['setAttributeNode'](kjyi6$);
    }
  }, 'endElement': function () {
    {
      var $6viy1 = this['currentElement'];$6viy1['tagName'];
    }this['currentElement'] = $6viy1['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (qb89ga, qcgb8) {
    var tux_lf = this['doc']['createProcessingInstruction'](qb89ga, qcgb8);this['locator'] && p_jkhsyi(this['locator'], tux_lf), p_jy$ki(this, tux_lf);
  }, 'ignorableWhitespace': function () {}, 'characters': function (gb8qa9) {
    if (gb8qa9 = p_adgc['apply'](this, arguments)) {
      if (this['cdata']) var khs4lp = this['doc']['createCDATASection'](gb8qa9);else var khs4lp = this['doc']['createTextNode'](gb8qa9);this['currentElement'] ? this['currentElement']['appendChild'](khs4lp) : /^\s*$/['test'](gb8qa9) && this['doc']['appendChild'](khs4lp), this['locator'] && p_jkhsyi(this['locator'], khs4lp);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (mxuft_) {
    (this['locator'] = mxuft_) && (mxuft_['lineNumber'] = 0x0);
  }, 'comment': function (mxo_u) {
    mxo_u = p_adgc['apply'](this, arguments);var v6i$y = this['doc']['createComment'](mxo_u);this['locator'] && p_jkhsyi(this['locator'], v6i$y), p_jy$ki(this, v6i$y);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (w593e, k4shl, h4stpl) {
    var ksiyh = this['doc']['implementation'];if (ksiyh && ksiyh['createDocumentType']) {
      var zw2r3 = ksiyh['createDocumentType'](w593e, k4shl, h4stpl);this['locator'] && p_jkhsyi(this['locator'], zw2r3), p_jy$ki(this, zw2r3);
    }
  }, 'warning': function (q8be) {
    console['warn']('[xmldom warning]\t' + q8be, p__xfmt(this['locator']));
  }, 'error': function (jsyk) {
    console['error']('[xmldom error]\t' + jsyk, p__xfmt(this['locator']));
  }, 'fatalError': function (stx4p) {
    throw console['error']('[xmldom fatalError]\t' + stx4p, p__xfmt(this['locator'])), stx4p;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (lsphk) {
  p_xtfm['prototype'][lsphk] = function () {
    return null;
  };
});var p_x4tsl = require('./pSAXp')['XMLReader'],
    p_w035nz = exports['DOMImplementation'] = require('./ppDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ppDOM')['XMLSerializer'], exports['DOMParser'] = p_v16$;