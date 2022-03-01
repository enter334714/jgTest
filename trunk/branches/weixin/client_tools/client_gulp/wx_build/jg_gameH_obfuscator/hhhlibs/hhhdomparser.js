var O = wx.$C;
function h_oktl5m(fvngs_) {
  this['options'] = fvngs_ || { 'locator': {} };
}function h_n2s6a(w9jh0, jzwh9, u8zr9) {
  function jdzw9h(y_sav) {
    var wq07 = w9jh0[y_sav];!wq07 && is26ya && (wq07 = 0x2 == w9jh0['length'] ? function (b6ai2y) {
      w9jh0(y_sav, b6ai2y);
    } : w9jh0), ol[y_sav] = wq07 ? function (mto5c) {
      wq07('[xmldom ' + y_sav + ']\t' + mto5c + h_ybi6(u8zr9));
    } : function () {};
  }if (!w9jh0) {
    if (jzwh9 instanceof h_jr$9) return jzwh9;w9jh0 = jzwh9;
  }var ol = {},
      is26ya = w9jh0 instanceof Function;return u8zr9 = u8zr9 || {}, jdzw9h('warning'), jdzw9h('error'), jdzw9h('fatalError'), ol;
}function h_jr$9() {
  this['cdata'] = !0x1;
}function h_vngsf_(iy62ab, hd0w9) {
  hd0w9['lineNumber'] = iy62ab['lineNumber'], hd0w9['columnNumber'] = iy62ab['columnNumber'];
}function h_ybi6(sai2y6) {
  return sai2y6 ? '\x0a@' + (sai2y6['systemId'] || '') + '#[line:' + sai2y6['lineNumber'] + ',col:' + sai2y6['columnNumber'] + ']' : void 0x0;
}function h_f431g(x01w7q, tml, ru8p) {
  return 'string' == typeof x01w7q ? x01w7q['substr'](tml, ru8p) : x01w7q['length'] >= tml + ru8p || tml ? new java['lang']['String'](x01w7q, tml, ru8p) + '' : x01w7q;
}function h_dwh0xq(hd0xjw, cul5p$) {
  (hd0xjw['currentElement'] || hd0xjw['doc'])['appendChild'](cul5p$);
}h_oktl5m['prototype']['parseFromString'] = function (molc, fq317) {
  var dxwh0j = this['options'],
      om5l = new h_eia2b(),
      pl8cu = dxwh0j['domBuilder'] || new h_jr$9(),
      djh9r = dxwh0j['errorHandler'],
      q41f = dxwh0j['locator'],
      ltko5m = dxwh0j['xmlns'] || {},
      vyn_a = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return q41f && pl8cu['setDocumentLocator'](q41f), om5l['errorHandler'] = h_n2s6a(djh9r, pl8cu, q41f), om5l['domBuilder'] = dxwh0j['domBuilder'] || pl8cu, /\/x?html?$/['test'](fq317) && (vyn_a['nbsp'] = '\u00a0', vyn_a['copy'] = '©', ltko5m[''] = 'http://www.w3.org/1999/xhtml'), ltko5m['xml'] = ltko5m['xml'] || 'http://www.w3.org/XML/1998/namespace', molc ? om5l['parse'](molc, ltko5m, vyn_a) : om5l['errorHandler']['error']('invalid doc source'), pl8cu['doc'];
}, h_jr$9['prototype'] = { 'startDocument': function () {
    this['doc'] = new h_q43()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (mlko5t, qxh07w, dz9wjh, vgf_n4) {
    var yns_v = this['doc'],
        rj8z9d = yns_v['createElementNS'](mlko5t, dz9wjh || qxh07w),
        s2na6 = vgf_n4['length'];h_dwh0xq(this, rj8z9d), this['currentElement'] = rj8z9d, this['locator'] && h_vngsf_(this['locator'], rj8z9d);for (var m5cot = 0x0; m5cot < s2na6; m5cot++) {
      var mlko5t = vgf_n4['getURI'](m5cot),
          iabe2 = vgf_n4['getValue'](m5cot),
          dz9wjh = vgf_n4['getQName'](m5cot),
          upcl$8 = yns_v['createAttributeNS'](mlko5t, dz9wjh);this['locator'] && h_vngsf_(vgf_n4['getLocator'](m5cot), upcl$8), upcl$8['value'] = upcl$8['nodeValue'] = iabe2, rj8z9d['setAttributeNode'](upcl$8);
    }
  }, 'endElement': function () {
    var u$pcl5 = this['currentElement'];u$pcl5['tagName'], this['currentElement'] = u$pcl5['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (m5ktol, mk5otl) {
    m5ktol = this['doc']['createProcessingInstruction'](m5ktol, mk5otl), (this['locator'] && h_vngsf_(this['locator'], m5ktol), h_dwh0xq(this, m5ktol));
  }, 'ignorableWhitespace': function () {}, 'characters': function (ocpt) {
    var rpuz8;(ocpt = h_f431g['apply'](this, arguments)) && (rpuz8 = this['cdata'] ? this['doc']['createCDATASection'](ocpt) : this['doc']['createTextNode'](ocpt), this['currentElement'] ? this['currentElement']['appendChild'](rpuz8) : /^\s*$/['test'](ocpt) && this['doc']['appendChild'](rpuz8), this['locator'] && h_vngsf_(this['locator'], rpuz8));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (pzur8) {
    (this['locator'] = pzur8) && (pzur8['lineNumber'] = 0x0);
  }, 'comment': function (j8z$r9) {
    j8z$r9 = h_f431g['apply'](this, arguments);var gf431 = this['doc']['createComment'](j8z$r9);this['locator'] && h_vngsf_(this['locator'], gf431), h_dwh0xq(this, gf431);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ulc5, $9rjz8, n_sa6y) {
    var jrzd = this['doc']['implementation'];jrzd && jrzd['createDocumentType'] && (jrzd = jrzd['createDocumentType'](ulc5, $9rjz8, n_sa6y), this['locator'] && h_vngsf_(this['locator'], jrzd), h_dwh0xq(this, jrzd));
  }, 'warning': function (dhrjz) {
    console['warn']('[xmldom warning]\t' + dhrjz, h_ybi6(this['locator']));
  }, 'error': function (i6as) {
    console['error']('[xmldom error]\t' + i6as, h_ybi6(this['locator']));
  }, 'fatalError': function (r8$9j) {
    throw console['error']('[xmldom fatalError]\t' + r8$9j, h_ybi6(this['locator'])), r8$9j;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (clo5pt) {
  h_jr$9['prototype'][clo5pt] = function () {
    return null;
  };
});var h_eia2b = require('./hhhsax')['XMLReader'],
    h_q43 = exports['DOMImplementation'] = require('./hhhdom')['DOMImplementation'];exports['XMLSerializer'] = require('./hhhdom')['XMLSerializer'], exports['DOMParser'] = h_oktl5m;