var a = wx.$y;
function yojhw4t(whfo4) {
  this['options'] = whfo4 || { 'locator': {} };
}function y_j7(i2gn, jf_78, lcs8_7) {
  function _cls7(l2ck9) {
    var ns92kc = i2gn[l2ck9];!ns92kc && v63m && (ns92kc = 0x2 == i2gn['length'] ? function (hdt41) {
      i2gn(l2ck9, hdt41);
    } : i2gn), ezrxy0[l2ck9] = ns92kc && function (wto4) {
      ns92kc('[xmldom ' + l2ck9 + ']\t' + wto4 + yy3av5(lcs8_7));
    } || function () {};
  }if (!i2gn) {
    if (jf_78 instanceof yck8l) return jf_78;i2gn = jf_78;
  }var ezrxy0 = {},
      v63m = i2gn instanceof Function;return lcs8_7 = lcs8_7 || {}, _cls7('warning'), _cls7('error'), _cls7('fatalError'), ezrxy0;
}function yck8l() {
  this['cdata'] = !0x1;
}function yjtdhw4(yzrvx, kn2g) {
  kn2g['lineNumber'] = yzrvx['lineNumber'], kn2g['columnNumber'] = yzrvx['columnNumber'];
}function yy3av5(of4w) {
  return of4w ? '\x0a@' + (of4w['systemId'] || '') + '#[line:' + of4w['lineNumber'] + ',col:' + of4w['columnNumber'] + ']' : void 0x0;
}function yowt4j(_sl8c7, u5a61m, jhfo4w) {
  return 'string' == typeof _sl8c7 ? _sl8c7['substr'](u5a61m, jhfo4w) : _sl8c7['length'] >= u5a61m + jhfo4w || u5a61m ? new java['lang']['String'](_sl8c7, u5a61m, jhfo4w) + '' : _sl8c7;
}function yzvr(tjw4o, _fo8) {
  tjw4o['currentElement'] ? tjw4o['currentElement']['appendChild'](_fo8) : tjw4o['doc']['appendChild'](_fo8);
}yojhw4t['prototype']['parseFromString'] = function (ud1tm5, $inqgp) {
  var s8l_7 = this['options'],
      ks89lc = new yrzy3v0(),
      kcn2s = s8l_7['domBuilder'] || new yck8l(),
      hw4otj = s8l_7['errorHandler'],
      lf_87o = s8l_7['locator'],
      whd1 = s8l_7['xmlns'] || {},
      hf7jo_ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return lf_87o && kcn2s['setDocumentLocator'](lf_87o), ks89lc['errorHandler'] = y_j7(hw4otj, kcn2s, lf_87o), ks89lc['domBuilder'] = s8l_7['domBuilder'] || kcn2s, /\/x?html?$/['test']($inqgp) && (hf7jo_['nbsp'] = '\u00a0', hf7jo_['copy'] = '©', whd1[''] = 'http://www.w3.org/1999/xhtml'), whd1['xml'] = whd1['xml'] || 'http://www.w3.org/XML/1998/namespace', ud1tm5 ? ks89lc['parse'](ud1tm5, whd1, hf7jo_) : ks89lc['errorHandler']['error']('invalid doc source'), kcn2s['doc'];
}, yck8l['prototype'] = { 'startDocument': function () {
    this['doc'] = new yol_78f()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ohwf4j, jo7f8_, ohw4j, cs8_7) {
    var $pi = this['doc'],
        $2knig = $pi['createElementNS'](ohwf4j, ohw4j || jo7f8_),
        qg$pni = cs8_7['length'];yzvr(this, $2knig), this['currentElement'] = $2knig, this['locator'] && yjtdhw4(this['locator'], $2knig);for (var ngi2$k = 0x0; qg$pni > ngi2$k; ngi2$k++) {
      var ohwf4j = cs8_7['getURI'](ngi2$k),
          l7c9s = cs8_7['getValue'](ngi2$k),
          ohw4j = cs8_7['getQName'](ngi2$k),
          a65vy3 = $pi['createAttributeNS'](ohwf4j, ohw4j);this['locator'] && yjtdhw4(cs8_7['getLocator'](ngi2$k), a65vy3), a65vy3['value'] = a65vy3['nodeValue'] = l7c9s, $2knig['setAttributeNode'](a65vy3);
    }
  }, 'endElement': function () {
    {
      var _f7ojh = this['currentElement'];_f7ojh['tagName'];
    }this['currentElement'] = _f7ojh['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (to4j, wjoh) {
    var y0ez = this['doc']['createProcessingInstruction'](to4j, wjoh);this['locator'] && yjtdhw4(this['locator'], y0ez), yzvr(this, y0ez);
  }, 'ignorableWhitespace': function () {}, 'characters': function (sk9cn) {
    if (sk9cn = yowt4j['apply'](this, arguments)) {
      if (this['cdata']) var c8lks9 = this['doc']['createCDATASection'](sk9cn);else var c8lks9 = this['doc']['createTextNode'](sk9cn);this['currentElement'] ? this['currentElement']['appendChild'](c8lks9) : /^\s*$/['test'](sk9cn) && this['doc']['appendChild'](c8lks9), this['locator'] && yjtdhw4(this['locator'], c8lks9);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (m3a56) {
    (this['locator'] = m3a56) && (m3a56['lineNumber'] = 0x0);
  }, 'comment': function (pq$gni) {
    pq$gni = yowt4j['apply'](this, arguments);var s9l78c = this['doc']['createComment'](pq$gni);this['locator'] && yjtdhw4(this['locator'], s9l78c), yzvr(this, s9l78c);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (rex0yz, mtudw, fo4j) {
    var jhfo = this['doc']['implementation'];if (jhfo && jhfo['createDocumentType']) {
      var v6m = jhfo['createDocumentType'](rex0yz, mtudw, fo4j);this['locator'] && yjtdhw4(this['locator'], v6m), yzvr(this, v6m);
    }
  }, 'warning': function (u14dtw) {
    console['warn']('[xmldom warning]\t' + u14dtw, yy3av5(this['locator']));
  }, 'error': function (v5am36) {
    console['error']('[xmldom error]\t' + v5am36, yy3av5(this['locator']));
  }, 'fatalError': function (d41tuw) {
    throw console['error']('[xmldom fatalError]\t' + d41tuw, yy3av5(this['locator'])), d41tuw;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (cs8_l) {
  yck8l['prototype'][cs8_l] = function () {
    return null;
  };
});var yrzy3v0 = require('./yycyy')['XMLReader'],
    yol_78f = exports['DOMImplementation'] = require('./yyDOyy')['DOMImplementation'];exports['XMLSerializer'] = require('./yyDOyy')['XMLSerializer'], exports['DOMParser'] = yojhw4t;