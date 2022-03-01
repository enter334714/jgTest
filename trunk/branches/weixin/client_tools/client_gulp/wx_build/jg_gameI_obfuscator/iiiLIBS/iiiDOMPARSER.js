var Q = wx.$I;
function i_ksuqbe(s7u3e) {
  this['options'] = s7u3e || { 'locator': {} };
}function i_qn5k2w(_86afj, jfa8, se2q) {
  function ivt9m(vrt$9) {
    var s2qeuk = _86afj[vrt$9];!s2qeuk && q4w52 && (s2qeuk = 0x2 == _86afj['length'] ? function (v9i$rt) {
      _86afj(vrt$9, v9i$rt);
    } : _86afj), mtv9ir[vrt$9] = s2qeuk && function (u2k5nq) {
      s2qeuk('[xmldom ' + vrt$9 + ']\t' + u2k5nq + i_zgoy0(se2q));
    } || function () {};
  }if (!_86afj) {
    if (jfa8 instanceof i_r9tvi) return jfa8;_86afj = jfa8;
  }var mtv9ir = {},
      q4w52 = _86afj instanceof Function;return se2q = se2q || {}, ivt9m('warning'), ivt9m('error'), ivt9m('fatalError'), mtv9ir;
}function i_r9tvi() {
  this['cdata'] = !0x1;
}function i_ygol0(m91vc, i9ltr$) {
  i9ltr$['lineNumber'] = m91vc['lineNumber'], i9ltr$['columnNumber'] = m91vc['columnNumber'];
}function i_zgoy0(gdo0yz) {
  return gdo0yz ? '\x0a@' + (gdo0yz['systemId'] || '') + '#[line:' + gdo0yz['lineNumber'] + ',col:' + gdo0yz['columnNumber'] + ']' : void 0x0;
}function i_ltz$($r0zl, ja6_f8, yz0g) {
  return 'string' == typeof $r0zl ? $r0zl['substr'](ja6_f8, yz0g) : $r0zl['length'] >= ja6_f8 + yz0g || ja6_f8 ? new java['lang']['String']($r0zl, ja6_f8, yz0g) + '' : $r0zl;
}function i_eqs2k(riz, knq5w2) {
  riz['currentElement'] ? riz['currentElement']['appendChild'](knq5w2) : riz['doc']['appendChild'](knq5w2);
}i_ksuqbe['prototype']['parseFromString'] = function (z0l$g, h24nw) {
  var xh5n4w = this['options'],
      nqku2 = new i_cp91m(),
      b76es = xh5n4w['domBuilder'] || new i_r9tvi(),
      litz = xh5n4w['errorHandler'],
      gliz = xh5n4w['locator'],
      cj8_p = xh5n4w['xmlns'] || {},
      lir9 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return gliz && b76es['setDocumentLocator'](gliz), nqku2['errorHandler'] = i_qn5k2w(litz, b76es, gliz), nqku2['domBuilder'] = xh5n4w['domBuilder'] || b76es, /\/x?html?$/['test'](h24nw) && (lir9['nbsp'] = '\u00a0', lir9['copy'] = '©', cj8_p[''] = 'http://www.w3.org/1999/xhtml'), cj8_p['xml'] = cj8_p['xml'] || 'http://www.w3.org/XML/1998/namespace', z0l$g ? nqku2['parse'](z0l$g, cj8_p, lir9) : nqku2['errorHandler']['error']('invalid doc source'), b76es['doc'];
}, i_r9tvi['prototype'] = { 'startDocument': function () {
    this['doc'] = new i_cf_j()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ig$z0, ukq25, a637, dgy0o) {
    var ukeqs2 = this['doc'],
        u2q = ukeqs2['createElementNS'](ig$z0, a637 || ukq25),
        nqu5 = dgy0o['length'];i_eqs2k(this, u2q), this['currentElement'] = u2q, this['locator'] && i_ygol0(this['locator'], u2q);for (var kqun2 = 0x0; nqu5 > kqun2; kqun2++) {
      var ig$z0 = dgy0o['getURI'](kqun2),
          z0gy = dgy0o['getValue'](kqun2),
          a637 = dgy0o['getQName'](kqun2),
          u7esb3 = ukeqs2['createAttributeNS'](ig$z0, a637);this['locator'] && i_ygol0(dgy0o['getLocator'](kqun2), u7esb3), u7esb3['value'] = u7esb3['nodeValue'] = z0gy, u2q['setAttributeNode'](u7esb3);
    }
  }, 'endElement': function () {
    {
      var cj_p8 = this['currentElement'];cj_p8['tagName'];
    }this['currentElement'] = cj_p8['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (se2kq, e7usbk) {
    var _f68 = this['doc']['createProcessingInstruction'](se2kq, e7usbk);this['locator'] && i_ygol0(this['locator'], _f68), i_eqs2k(this, _f68);
  }, 'ignorableWhitespace': function () {}, 'characters': function (tvm1r9) {
    if (tvm1r9 = i_ltz$['apply'](this, arguments)) {
      if (this['cdata']) var _1c8pf = this['doc']['createCDATASection'](tvm1r9);else var _1c8pf = this['doc']['createTextNode'](tvm1r9);this['currentElement'] ? this['currentElement']['appendChild'](_1c8pf) : /^\s*$/['test'](tvm1r9) && this['doc']['appendChild'](_1c8pf), this['locator'] && i_ygol0(this['locator'], _1c8pf);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (w45xn) {
    (this['locator'] = w45xn) && (w45xn['lineNumber'] = 0x0);
  }, 'comment': function (zr$itl) {
    zr$itl = i_ltz$['apply'](this, arguments);var skqbeu = this['doc']['createComment'](zr$itl);this['locator'] && i_ygol0(this['locator'], skqbeu), i_eqs2k(this, skqbeu);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (c9mt, _fp8aj, s2equk) {
    var n4x5wh = this['doc']['implementation'];if (n4x5wh && n4x5wh['createDocumentType']) {
      var t$9ri = n4x5wh['createDocumentType'](c9mt, _fp8aj, s2equk);this['locator'] && i_ygol0(this['locator'], t$9ri), i_eqs2k(this, t$9ri);
    }
  }, 'warning': function (i0lzr$) {
    console['warn']('[xmldom warning]\t' + i0lzr$, i_zgoy0(this['locator']));
  }, 'error': function (mvtc1) {
    console['error']('[xmldom error]\t' + mvtc1, i_zgoy0(this['locator']));
  }, 'fatalError': function (lzo0g) {
    throw console['error']('[xmldom fatalError]\t' + lzo0g, i_zgoy0(this['locator'])), lzo0g;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (a3j8) {
  i_r9tvi['prototype'][a3j8] = function () {
    return null;
  };
});var i_cp91m = require('./iiiSAX')['XMLReader'],
    i_cf_j = exports['DOMImplementation'] = require('./iiiDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./iiiDOM')['XMLSerializer'], exports['DOMParser'] = i_ksuqbe;