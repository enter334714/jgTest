var W = wx.$l;
function L9n48_yx(sbd$a2) {
  this['options'] = sbd$a2 || { 'locator': {} };
}function L9sn4(abk2hj, $84ds2, qzt5h) {
  function a2hbj(qz5f) {
    var n$8s_4 = abk2hj[qz5f];!n$8s_4 && ztlqh5 && (n$8s_4 = 0x2 == abk2hj['length'] ? function (ri3cm0) {
      abk2hj(qz5f, ri3cm0);
    } : abk2hj), dak2[qz5f] = n$8s_4 ? function (xy4) {
      n$8s_4('[xmldom ' + qz5f + ']\t' + xy4 + L9_xs84(qzt5h));
    } : function () {};
  }if (!abk2hj) {
    if ($84ds2 instanceof L9jqazh) return $84ds2;abk2hj = $84ds2;
  }var dak2 = {},
      ztlqh5 = abk2hj instanceof Function;return qzt5h = qzt5h || {}, a2hbj('warning'), a2hbj('error'), a2hbj('fatalError'), dak2;
}function L9jqazh() {
  this['cdata'] = !0x1;
}function L9cmyr(e6ug1p, yxn_) {
  yxn_['lineNumber'] = e6ug1p['lineNumber'], yxn_['columnNumber'] = e6ug1p['columnNumber'];
}function L9_xs84(d2ba$s) {
  return d2ba$s ? '\x0a@' + (d2ba$s['systemId'] || '') + '#[line:' + d2ba$s['lineNumber'] + ',col:' + d2ba$s['columnNumber'] + ']' : void 0x0;
}function L9fl5o9(hzjkab, uep1g, ljqth) {
  return 'string' == typeof hzjkab ? hzjkab['substr'](uep1g, ljqth) : hzjkab['length'] >= uep1g + ljqth || uep1g ? new java['lang']['String'](hzjkab, uep1g, ljqth) + '' : hzjkab;
}function L9$bd2s(s_8$, o7g1e) {
  (s_8$['currentElement'] || s_8$['doc'])['appendChild'](o7g1e);
}L9n48_yx['prototype']['parseFromString'] = function (yx84n_, jahkz) {
  var dsab$ = this['options'],
      d4$s8_ = new L9o7v59(),
      x03cry = dsab$['domBuilder'] || new L9jqazh(),
      l9q5ft = dsab$['errorHandler'],
      ve791o = dsab$['locator'],
      s_d4$ = dsab$['xmlns'] || {},
      khaqz = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ve791o && x03cry['setDocumentLocator'](ve791o), d4$s8_['errorHandler'] = L9sn4(l9q5ft, x03cry, ve791o), d4$s8_['domBuilder'] = dsab$['domBuilder'] || x03cry, /\/x?html?$/['test'](jahkz) && (khaqz['nbsp'] = '\u00a0', khaqz['copy'] = '©', s_d4$[''] = 'http://www.w3.org/1999/xhtml'), s_d4$['xml'] = s_d4$['xml'] || 'http://www.w3.org/XML/1998/namespace', yx84n_ ? d4$s8_['parse'](yx84n_, s_d4$, khaqz) : d4$s8_['errorHandler']['error']('invalid doc source'), x03cry['doc'];
}, L9jqazh['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9lfo9t()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (jtzql, mic3r0, a2hjb, _s) {
    var e7vu1g = this['doc'],
        ab$2sd = e7vu1g['createElementNS'](jtzql, a2hjb || mic3r0),
        rwcmi = _s['length'];L9$bd2s(this, ab$2sd), this['currentElement'] = ab$2sd, this['locator'] && L9cmyr(this['locator'], ab$2sd);for (var _4y8nx = 0x0; _4y8nx < rwcmi; _4y8nx++) {
      var jtzql = _s['getURI'](_4y8nx),
          f95t = _s['getValue'](_4y8nx),
          a2hjb = _s['getQName'](_4y8nx),
          bs8d2$ = e7vu1g['createAttributeNS'](jtzql, a2hjb);this['locator'] && L9cmyr(_s['getLocator'](_4y8nx), bs8d2$), bs8d2$['value'] = bs8d2$['nodeValue'] = f95t, ab$2sd['setAttributeNode'](bs8d2$);
    }
  }, 'endElement': function () {
    var to79f5 = this['currentElement'];to79f5['tagName'], this['currentElement'] = to79f5['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (bs2$8d, $28s4d) {
    bs2$8d = this['doc']['createProcessingInstruction'](bs2$8d, $28s4d), (this['locator'] && L9cmyr(this['locator'], bs2$8d), L9$bd2s(this, bs2$8d));
  }, 'ignorableWhitespace': function () {}, 'characters': function (bjazkh) {
    var e1vu6g;(bjazkh = L9fl5o9['apply'](this, arguments)) && (e1vu6g = this['cdata'] ? this['doc']['createCDATASection'](bjazkh) : this['doc']['createTextNode'](bjazkh), this['currentElement'] ? this['currentElement']['appendChild'](e1vu6g) : /^\s*$/['test'](bjazkh) && this['doc']['appendChild'](e1vu6g), this['locator'] && L9cmyr(this['locator'], e1vu6g));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (tfzq) {
    (this['locator'] = tfzq) && (tfzq['lineNumber'] = 0x0);
  }, 'comment': function (m0y) {
    m0y = L9fl5o9['apply'](this, arguments);var hkjb = this['doc']['createComment'](m0y);this['locator'] && L9cmyr(this['locator'], hkjb), L9$bd2s(this, hkjb);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ry30mc, ftol, b2k$d) {
    var $82ds4 = this['doc']['implementation'];$82ds4 && $82ds4['createDocumentType'] && ($82ds4 = $82ds4['createDocumentType'](ry30mc, ftol, b2k$d), this['locator'] && L9cmyr(this['locator'], $82ds4), L9$bd2s(this, $82ds4));
  }, 'warning': function (g1v7) {
    console['warn']('[xmldom warning]\t' + g1v7, L9_xs84(this['locator']));
  }, 'error': function (qjhlz) {
    console['error']('[xmldom error]\t' + qjhlz, L9_xs84(this['locator']));
  }, 'fatalError': function (peg6) {
    throw console['error']('[xmldom fatalError]\t' + peg6, L9_xs84(this['locator'])), peg6;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (i3wm) {
  L9jqazh['prototype'][i3wm] = function () {
    return null;
  };
});var L9o7v59 = require('./lllSAX')['XMLReader'],
    L9lfo9t = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9n48_yx;