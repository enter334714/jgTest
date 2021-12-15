var Y = wx.$M;
function M_mn7jh(m_4h) {
  this['options'] = m_4h || { 'locator': {} };
}function M_aeg8(bf, wb0$df, g8oac6) {
  function lnhmi5(ga82ec) {
    var r1vwf = bf[ga82ec];!r1vwf && yx9u1 && (r1vwf = 0x2 == bf['length'] ? function (x1qyuk) {
      bf(ga82ec, x1qyuk);
    } : bf), yuk91x[ga82ec] = r1vwf && function (l0w$bd) {
      r1vwf('[xmldom ' + ga82ec + ']\t' + l0w$bd + M_vbwr(g8oac6));
    } || function () {};
  }if (!bf) {
    if (wb0$df instanceof M_$fwbv) return wb0$df;bf = wb0$df;
  }var yuk91x = {},
      yx9u1 = bf instanceof Function;return g8oac6 = g8oac6 || {}, lnhmi5('warning'), lnhmi5('error'), lnhmi5('fatalError'), yuk91x;
}function M_$fwbv() {
  this['cdata'] = !0x1;
}function M_hni7(f9kvr, l$b0) {
  l$b0['lineNumber'] = f9kvr['lineNumber'], l$b0['columnNumber'] = f9kvr['columnNumber'];
}function M_vbwr(i0$5d) {
  return i0$5d ? '\x0a@' + (i0$5d['systemId'] || '') + '#[line:' + i0$5d['lineNumber'] + ',col:' + i0$5d['columnNumber'] + ']' : void 0x0;
}function M_rvkf1(y9kx, et8c2a, yqkux1) {
  return 'string' == typeof y9kx ? y9kx['substr'](et8c2a, yqkux1) : y9kx['length'] >= et8c2a + yqkux1 || et8c2a ? new java['lang']['String'](y9kx, et8c2a, yqkux1) + '' : y9kx;
}function M_kyu3xq(m4sj, mlhin) {
  m4sj['currentElement'] ? m4sj['currentElement']['appendChild'](mlhin) : m4sj['doc']['appendChild'](mlhin);
}M_mn7jh['prototype']['parseFromString'] = function (s6cgo, g4_so6) {
  var vwf$bd = this['options'],
      f19vr = new M__4g6o(),
      _s74m = vwf$bd['domBuilder'] || new M_$fwbv(),
      j7mnh_ = vwf$bd['errorHandler'],
      yxuk = vwf$bd['locator'],
      ykx1 = vwf$bd['xmlns'] || {},
      oa8ceg = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return yxuk && _s74m['setDocumentLocator'](yxuk), f19vr['errorHandler'] = M_aeg8(j7mnh_, _s74m, yxuk), f19vr['domBuilder'] = vwf$bd['domBuilder'] || _s74m, /\/x?html?$/['test'](g4_so6) && (oa8ceg['nbsp'] = '\u00a0', oa8ceg['copy'] = '©', ykx1[''] = 'http://www.w3.org/1999/xhtml'), ykx1['xml'] = ykx1['xml'] || 'http://www.w3.org/XML/1998/namespace', s6cgo ? f19vr['parse'](s6cgo, ykx1, oa8ceg) : f19vr['errorHandler']['error']('invalid doc source'), _s74m['doc'];
}, M_$fwbv['prototype'] = { 'startDocument': function () {
    this['doc'] = new M_rv19k()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (xuyq, h5ml, uq1yx, db0lw$) {
    var rx9ku = this['doc'],
        wd$vf = rx9ku['createElementNS'](xuyq, uq1yx || h5ml),
        nh_j7m = db0lw$['length'];M_kyu3xq(this, wd$vf), this['currentElement'] = wd$vf, this['locator'] && M_hni7(this['locator'], wd$vf);for (var bf0dw$ = 0x0; nh_j7m > bf0dw$; bf0dw$++) {
      var xuyq = db0lw$['getURI'](bf0dw$),
          aoec = db0lw$['getValue'](bf0dw$),
          uq1yx = db0lw$['getQName'](bf0dw$),
          db5$l0 = rx9ku['createAttributeNS'](xuyq, uq1yx);this['locator'] && M_hni7(db0lw$['getLocator'](bf0dw$), db5$l0), db5$l0['value'] = db5$l0['nodeValue'] = aoec, wd$vf['setAttributeNode'](db5$l0);
    }
  }, 'endElement': function () {
    {
      var tezc = this['currentElement'];tezc['tagName'];
    }this['currentElement'] = tezc['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (_s4m7j, hm7jin) {
    var j6_s7 = this['doc']['createProcessingInstruction'](_s4m7j, hm7jin);this['locator'] && M_hni7(this['locator'], j6_s7), M_kyu3xq(this, j6_s7);
  }, 'ignorableWhitespace': function () {}, 'characters': function (pez2t) {
    if (pez2t = M_rvkf1['apply'](this, arguments)) {
      if (this['cdata']) var sgoac = this['doc']['createCDATASection'](pez2t);else var sgoac = this['doc']['createTextNode'](pez2t);this['currentElement'] ? this['currentElement']['appendChild'](sgoac) : /^\s*$/['test'](pez2t) && this['doc']['appendChild'](sgoac), this['locator'] && M_hni7(this['locator'], sgoac);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (y3kqux) {
    (this['locator'] = y3kqux) && (y3kqux['lineNumber'] = 0x0);
  }, 'comment': function (_sg64) {
    _sg64 = M_rvkf1['apply'](this, arguments);var dl$50i = this['doc']['createComment'](_sg64);this['locator'] && M_hni7(this['locator'], dl$50i), M_kyu3xq(this, dl$50i);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (h7_jn, jm7_hn, g8oce) {
    var a6os4 = this['doc']['implementation'];if (a6os4 && a6os4['createDocumentType']) {
      var ect28z = a6os4['createDocumentType'](h7_jn, jm7_hn, g8oce);this['locator'] && M_hni7(this['locator'], ect28z), M_kyu3xq(this, ect28z);
    }
  }, 'warning': function (os_76) {
    console['warn']('[xmldom warning]\t' + os_76, M_vbwr(this['locator']));
  }, 'error': function (te8c2a) {
    console['error']('[xmldom error]\t' + te8c2a, M_vbwr(this['locator']));
  }, 'fatalError': function (w$db) {
    throw console['error']('[xmldom fatalError]\t' + w$db, M_vbwr(this['locator'])), w$db;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (pez82t) {
  M_$fwbv['prototype'][pez82t] = function () {
    return null;
  };
});var M__4g6o = require('./mmmSAX')['XMLReader'],
    M_rv19k = exports['DOMImplementation'] = require('./mmmDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./mmmDOM')['XMLSerializer'], exports['DOMParser'] = M_mn7jh;