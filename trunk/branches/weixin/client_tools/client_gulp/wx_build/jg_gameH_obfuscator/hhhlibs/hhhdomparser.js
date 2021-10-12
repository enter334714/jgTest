var O = wx.$C;
function h_c6pnhz(if20e) {
  this['options'] = if20e || { 'locator': {} };
}function h_$ix0(dvw5u_, yvgmt, ngymtp) {
  function dw74(x0f2qb) {
    var xbqf0k = dvw5u_[x0f2qb];!xbqf0k && mvdug && (xbqf0k = 0x2 == dvw5u_['length'] ? function (pygm) {
      dvw5u_(x0f2qb, pygm);
    } : dvw5u_), r4jo_[x0f2qb] = xbqf0k ? function (ugdmvy) {
      xbqf0k('[xmldom ' + x0f2qb + ']\t' + ugdmvy + h_w54ud_(ngymtp));
    } : function () {};
  }if (!dvw5u_) {
    if (yvgmt instanceof h_dwvu5y) return yvgmt;dvw5u_ = yvgmt;
  }var r4jo_ = {},
      mvdug = dvw5u_ instanceof Function;return ngymtp = ngymtp || {}, dw74('warning'), dw74('error'), dw74('fatalError'), r4jo_;
}function h_dwvu5y() {
  this['cdata'] = !0x1;
}function h_k9qcs(m6pnh, tvpmyg) {
  tvpmyg['lineNumber'] = m6pnh['lineNumber'], tvpmyg['columnNumber'] = m6pnh['columnNumber'];
}function h_w54ud_(n9z6hc) {
  return n9z6hc ? '\x0a@' + (n9z6hc['systemId'] || '') + '#[line:' + n9z6hc['lineNumber'] + ',col:' + n9z6hc['columnNumber'] + ']' : void 0x0;
}function h_ptvyg(ojl8, mvgpyt, $ei2a) {
  return 'string' == typeof ojl8 ? ojl8['substr'](mvgpyt, $ei2a) : ojl8['length'] >= mvgpyt + $ei2a || mvgpyt ? new java['lang']['String'](ojl8, mvgpyt, $ei2a) + '' : ojl8;
}function h_k0sfbq(gptnym, xi0ef) {
  (gptnym['currentElement'] || gptnym['doc'])['appendChild'](xi0ef);
}h_c6pnhz['prototype']['parseFromString'] = function (vuytm, j47o_r) {
  var vu5 = this['options'],
      zc196 = new h__u5d(),
      n6phmt = vu5['domBuilder'] || new h_dwvu5y(),
      mg = vu5['errorHandler'],
      bsqf1k = vu5['locator'],
      sf1kq = vu5['xmlns'] || {},
      qfs1 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return bsqf1k && n6phmt['setDocumentLocator'](bsqf1k), zc196['errorHandler'] = h_$ix0(mg, n6phmt, bsqf1k), zc196['domBuilder'] = vu5['domBuilder'] || n6phmt, /\/x?html?$/['test'](j47o_r) && (qfs1['nbsp'] = '\u00a0', qfs1['copy'] = '©', sf1kq[''] = 'http://www.w3.org/1999/xhtml'), sf1kq['xml'] = sf1kq['xml'] || 'http://www.w3.org/XML/1998/namespace', vuytm ? zc196['parse'](vuytm, sf1kq, qfs1) : zc196['errorHandler']['error']('invalid doc source'), n6phmt['doc'];
}, h_dwvu5y['prototype'] = { 'startDocument': function () {
    this['doc'] = new h_r4_o7()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (z9hsc, z6npth, vywu, iae$) {
    var ixe02f = this['doc'],
        iex20f = ixe02f['createElementNS'](z9hsc, vywu || z6npth),
        w5_vd = iae$['length'];h_k0sfbq(this, iex20f), this['currentElement'] = iex20f, this['locator'] && h_k9qcs(this['locator'], iex20f);for (var gmvudy = 0x0; gmvudy < w5_vd; gmvudy++) {
      var z9hsc = iae$['getURI'](gmvudy),
          tnyg = iae$['getValue'](gmvudy),
          vywu = iae$['getQName'](gmvudy),
          vud_5 = ixe02f['createAttributeNS'](z9hsc, vywu);this['locator'] && h_k9qcs(iae$['getLocator'](gmvudy), vud_5), vud_5['value'] = vud_5['nodeValue'] = tnyg, iex20f['setAttributeNode'](vud_5);
    }
  }, 'endElement': function () {
    var ymuvd = this['currentElement'];ymuvd['tagName'], this['currentElement'] = ymuvd['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ix0$, mytng) {
    mytng = this['doc']['createProcessingInstruction'](ix0$, mytng), (this['locator'] && h_k9qcs(this['locator'], mytng), h_k0sfbq(this, mytng));
  }, 'ignorableWhitespace': function () {}, 'characters': function (z1hc6) {
    var i$0e2;(z1hc6 = h_ptvyg['apply'](this, arguments)) && (i$0e2 = this['cdata'] ? this['doc']['createCDATASection'](z1hc6) : this['doc']['createTextNode'](z1hc6), this['currentElement'] ? this['currentElement']['appendChild'](i$0e2) : /^\s*$/['test'](z1hc6) && this['doc']['appendChild'](i$0e2), this['locator'] && h_k9qcs(this['locator'], i$0e2));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (c9sh) {
    (this['locator'] = c9sh) && (c9sh['lineNumber'] = 0x0);
  }, 'comment': function (npygt) {
    npygt = h_ptvyg['apply'](this, arguments);var vdgmyu = this['doc']['createComment'](npygt);this['locator'] && h_k9qcs(this['locator'], vdgmyu), h_k0sfbq(this, vdgmyu);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (i2e0$x, vdmug, cs9z1) {
    var b0if2x = this['doc']['implementation'];b0if2x && b0if2x['createDocumentType'] && (cs9z1 = b0if2x['createDocumentType'](i2e0$x, vdmug, cs9z1), this['locator'] && h_k9qcs(this['locator'], cs9z1), h_k0sfbq(this, cs9z1));
  }, 'warning': function (dw7_5) {
    console['warn']('[xmldom warning]\t' + dw7_5, h_w54ud_(this['locator']));
  }, 'error': function (r7jlo) {
    console['error']('[xmldom error]\t' + r7jlo, h_w54ud_(this['locator']));
  }, 'fatalError': function ($2ia) {
    throw console['error']('[xmldom fatalError]\t' + $2ia, h_w54ud_(this['locator'])), $2ia;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ypmg) {
  h_dwvu5y['prototype'][ypmg] = function () {
    return null;
  };
});var h__u5d = require('./hhhsax')['XMLReader'],
    h_r4_o7 = exports['DOMImplementation'] = require('./hhhdom')['DOMImplementation'];exports['XMLSerializer'] = require('./hhhdom')['XMLSerializer'], exports['DOMParser'] = h_c6pnhz;