var O = wx.$C;
function h_mlotc5(xdwhj) {
  this['options'] = xdwhj || { 'locator': {} };
}function h__vg4f3(m5lotc, b62i, $p5) {
  function i2sa6y(e62bai) {
    var _nv4 = m5lotc[e62bai];!_nv4 && p5tolc && (_nv4 = 0x2 == m5lotc['length'] ? function (gf3v_4) {
      m5lotc(e62bai, gf3v_4);
    } : m5lotc), svgnf_[e62bai] = _nv4 && function (dhw0xj) {
      _nv4('[xmldom ' + e62bai + ']\t' + dhw0xj + h_hwdq($p5));
    } || function () {};
  }if (!m5lotc) {
    if (b62i instanceof h_c$8rpu) return b62i;m5lotc = b62i;
  }var svgnf_ = {},
      p5tolc = m5lotc instanceof Function;return $p5 = $p5 || {}, i2sa6y('warning'), i2sa6y('error'), i2sa6y('fatalError'), svgnf_;
}function h_c$8rpu() {
  this['cdata'] = !0x1;
}function h_a_synv(ysi62a, anyv_) {
  anyv_['lineNumber'] = ysi62a['lineNumber'], anyv_['columnNumber'] = ysi62a['columnNumber'];
}function h_hwdq(z9jdr8) {
  return z9jdr8 ? '\x0a@' + (z9jdr8['systemId'] || '') + '#[line:' + z9jdr8['lineNumber'] + ',col:' + z9jdr8['columnNumber'] + ']' : void 0x0;
}function h_$jr89z(g134f7, _vngy, a6ybi) {
  return 'string' == typeof g134f7 ? g134f7['substr'](_vngy, a6ybi) : g134f7['length'] >= _vngy + a6ybi || _vngy ? new java['lang']['String'](g134f7, _vngy, a6ybi) + '' : g134f7;
}function h_ysn_v(y6asn_, tmc5lo) {
  y6asn_['currentElement'] ? y6asn_['currentElement']['appendChild'](tmc5lo) : y6asn_['doc']['appendChild'](tmc5lo);
}h_mlotc5['prototype']['parseFromString'] = function (l5mtok, b2ya) {
  var $jz89 = this['options'],
      plu$c8 = new h_u8p$(),
      y_n6sa = $jz89['domBuilder'] || new h_c$8rpu(),
      xqw7h = $jz89['errorHandler'],
      vynas_ = $jz89['locator'],
      _svngf = $jz89['xmlns'] || {},
      i2yba6 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return vynas_ && y_n6sa['setDocumentLocator'](vynas_), plu$c8['errorHandler'] = h__vg4f3(xqw7h, y_n6sa, vynas_), plu$c8['domBuilder'] = $jz89['domBuilder'] || y_n6sa, /\/x?html?$/['test'](b2ya) && (i2yba6['nbsp'] = '\u00a0', i2yba6['copy'] = '©', _svngf[''] = 'http://www.w3.org/1999/xhtml'), _svngf['xml'] = _svngf['xml'] || 'http://www.w3.org/XML/1998/namespace', l5mtok ? plu$c8['parse'](l5mtok, _svngf, i2yba6) : plu$c8['errorHandler']['error']('invalid doc source'), y_n6sa['doc'];
}, h_c$8rpu['prototype'] = { 'startDocument': function () {
    this['doc'] = new h_zj9$()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (y6_san, y2as6i, jdw9zh, gv143f) {
    var lcu$p5 = this['doc'],
        f4q37 = lcu$p5['createElementNS'](y6_san, jdw9zh || y2as6i),
        jz9$8 = gv143f['length'];h_ysn_v(this, f4q37), this['currentElement'] = f4q37, this['locator'] && h_a_synv(this['locator'], f4q37);for (var v_gsfn = 0x0; jz9$8 > v_gsfn; v_gsfn++) {
      var y6_san = gv143f['getURI'](v_gsfn),
          u$z = gv143f['getValue'](v_gsfn),
          jdw9zh = gv143f['getQName'](v_gsfn),
          cp$r8 = lcu$p5['createAttributeNS'](y6_san, jdw9zh);this['locator'] && h_a_synv(gv143f['getLocator'](v_gsfn), cp$r8), cp$r8['value'] = cp$r8['nodeValue'] = u$z, f4q37['setAttributeNode'](cp$r8);
    }
  }, 'endElement': function () {
    {
      var w07x1 = this['currentElement'];w07x1['tagName'];
    }this['currentElement'] = w07x1['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (whjdx0, a6yib2) {
    var i6y2s = this['doc']['createProcessingInstruction'](whjdx0, a6yib2);this['locator'] && h_a_synv(this['locator'], i6y2s), h_ysn_v(this, i6y2s);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ltpc5) {
    if (ltpc5 = h_$jr89z['apply'](this, arguments)) {
      if (this['cdata']) var n2s6 = this['doc']['createCDATASection'](ltpc5);else var n2s6 = this['doc']['createTextNode'](ltpc5);this['currentElement'] ? this['currentElement']['appendChild'](n2s6) : /^\s*$/['test'](ltpc5) && this['doc']['appendChild'](n2s6), this['locator'] && h_a_synv(this['locator'], n2s6);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (olm5kt) {
    (this['locator'] = olm5kt) && (olm5kt['lineNumber'] = 0x0);
  }, 'comment': function (_vsngy) {
    _vsngy = h_$jr89z['apply'](this, arguments);var rzhd9j = this['doc']['createComment'](_vsngy);this['locator'] && h_a_synv(this['locator'], rzhd9j), h_ysn_v(this, rzhd9j);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (t5o, $zrp8, zr9u$) {
    var uz98$ = this['doc']['implementation'];if (uz98$ && uz98$['createDocumentType']) {
      var vnfs = uz98$['createDocumentType'](t5o, $zrp8, zr9u$);this['locator'] && h_a_synv(this['locator'], vnfs), h_ysn_v(this, vnfs);
    }
  }, 'warning': function (g4vf31) {
    console['warn']('[xmldom warning]\t' + g4vf31, h_hwdq(this['locator']));
  }, 'error': function (ay2ns) {
    console['error']('[xmldom error]\t' + ay2ns, h_hwdq(this['locator']));
  }, 'fatalError': function (q41f37) {
    throw console['error']('[xmldom fatalError]\t' + q41f37, h_hwdq(this['locator'])), q41f37;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (syn_a6) {
  h_c$8rpu['prototype'][syn_a6] = function () {
    return null;
  };
});var h_u8p$ = require('./hhhsax')['XMLReader'],
    h_zj9$ = exports['DOMImplementation'] = require('./hhhdom')['DOMImplementation'];exports['XMLSerializer'] = require('./hhhdom')['XMLSerializer'], exports['DOMParser'] = h_mlotc5;